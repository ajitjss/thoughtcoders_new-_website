// Import required modules
const express = require('express');   // Express framework for building the API
const mongoose = require('mongoose'); // MongoDB ORM to connect and manage MongoDB
const cors = require('cors');         // Middleware for enabling Cross-Origin Resource Sharing
const multer = require('multer');     // Middleware for handling multipart/form-data (file uploads)
const path = require('path');         // Node.js utility for handling file and directory paths
const dotenv = require('dotenv');     // Loads environment variables from a .env file
const colors = require('colors');     // Colors module for coloring console output
const bcrypt = require('bcryptjs');   // For hashing passwords securely
const jwt = require('jsonwebtoken');  // For creating and verifying JWT tokens
const slugify = require('slugify'); // Import slugify
const Razorpay = require('razorpay');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Use CORS middleware to allow requests from different origins
app.use(cors({
    origin: ['http://localhost:3000', 'https://thoughtcoders-new-website-yxzv.onrender.com'],
    credentials: true, // If using cookies or authentication
}));

// Middleware to parse incoming JSON requests with a size limit of 10MB
app.use(express.json({ limit: '10mb' }));

// Middleware to parse URL-encoded data with an extended limit of 10MB
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB Connection Setup
const connectDB = async () => {
    try {
        // Connect to MongoDB and log the connected host
        const con = await mongoose.connect('mongodb://127.0.0.1:27017/BlogTestContext');
        console.log(`Connected to MongoDB Database ${con.connection.host}`.bgMagenta.white);
    } catch (error) {
        // Log error if connection fails
        console.log(`Failed to connect MongoDB Database ${error}`.bgRed.white);
    }
};
// Call the function to connect to MongoDB
connectDB();

// Multer Configuration for Image Uploads
const storage = multer.diskStorage({
    // Define the folder where files should be saved
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    // Define the naming convention for uploaded files
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Use current timestamp and preserve file extension
    }
});

// Multer middleware with file size limit of 10MB
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

// User Schema for MongoDB with user attributes including hashed password and admin role
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },         // User name (required)
    email: { type: String, required: true, unique: true }, // Unique email (required)
    password: { type: String, required: true },     // Hashed password (required)
    isAdmin: { type: Boolean, default: false }      // Admin role, default is false
}, { timestamps: true });                          // Add timestamps (createdAt, updatedAt)

// Create a model for the User schema
const User = mongoose.model('User', userSchema);

// Blog Schema for MongoDB with relationships to user (author)
// Blog Schema for MongoDB with relationships to user (author)
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },  // Blog title
    slug: { type: String, unique: true },      // Unique slug for the blog
    content: { type: String, required: true }, // Blog content
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user (author)
    createdAt: { type: Date, default: Date.now }  // Timestamp of blog creation
});

// Create a pre-save hook to generate slug before saving
blogSchema.pre('save', function (next) {
    if (!this.slug) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
    next();
});

// Create a model for the Blog schema
const Blog = mongoose.model('Blog', blogSchema);

// Register API for creating new users
app.post('/api/auth/register', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Validate input data
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Check if user with this email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the user's password before saving
        const salt = await bcrypt.genSalt(10);  // Generate salt for hashing
        const hashedPassword = await bcrypt.hash(password, salt);  // Hash password

        // Create a new user instance with the hashed password
        const userDetails = new User({ name, email, password: hashedPassword });
        await userDetails.save();  // Save user to the database

        res.status(201).json({ 
            success: true,
            message: 'User registered successfully',
            userDetails 
        });
    } catch (error) {
        // Handle and log errors
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

// Login API for authenticating users
app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate input data
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare input password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token with user information
        const token = jwt.sign(
            { userId: user._id, email: user.email, isAdmin: user.isAdmin }, 
            process.env.JWT_SECRET, 
            { expiresIn: '7d' } // Token valid for 7 days
        );

        // Return user details along with the JWT token
        res.status(200).json({ 
            success: true,
            message: "User logged-in successfully",
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token
        });
    } catch (error) {
        // Handle and log errors
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
});

// Logout API (simple client-side token invalidation)
app.post('/api/auth/logout', (req, res) => {
    res.status(200).json({ message: 'User logged out successfully' });
});

// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization'); // Get the Authorization header
    const token = authHeader && authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"

    if (token == null) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify JWT token
        req.user = decoded.userId; // Store the decoded userId in request object
        next(); // Proceed to the next middleware
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
// Middleware to get the current user's information
app.get('/api/auth/me', authenticateToken, async (req, res) => {
    try {
        // Find the user by their ID stored in the token
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user's information, excluding the password
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } catch (error) {
        console.error('Error fetching user info:', error);
        res.status(500).json({ message: 'Error fetching user info' });
    }
});


// Middleware to check if the user has admin privileges
const checkAdmin = async (req, res, next) => {
    try {
        // Find the user by their ID from the request object
        const user = await User.findById(req.user);
        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }
        next(); // Proceed to the next middleware
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Protected Route for Creating Blogs (Admin access required)
app.post('/api/create-blog', authenticateToken, checkAdmin, async (req, res) => {
    const { title, content } = req.body;

    // Validate input data
    if (!title || !content) return res.status(400).json({ message: 'All fields are required' });

    try {
        // Find the user creating the blog
        const user = await User.findById(req.user);
        if (!user) return res.status(400).json({ message: 'User not found' });

        // Create a new blog post
        const newBlog = new Blog({
            title,
            content,
            author: user._id
        });
        await newBlog.save(); // Save blog to the database

        res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog', error });
    }
});

// Public route to get all blogs
app.get('/api/all-blogs', async (req, res) => {
    try {
        // Fetch all blogs from MongoDB and populate author details
        const blogs = await Blog.find().populate('author', 'name email');
        res.status(200).json(blogs); // Send the blogs as response
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    }
});

// Public route to get a single blog by slug
app.get('/api/single-blog/:slug', async (req, res) => {
    try {
        const { slug } = req.params; // Get the blog slug from the route params
        const blog = await Blog.findOne({ slug }).populate('author', 'name email'); // Find blog by slug and populate author

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json(blog); // Send the blog as response
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ message: 'Error fetching blog', error: error.message });
    }
});



// Protected route for updating a blog by slug (Admin access required)
app.put('/api/blogs/:slug', authenticateToken, checkAdmin, async (req, res) => {
    const { title, content } = req.body; // Get the new title and content from the request body

    try {
        const { slug } = req.params; // Get the blog slug from the route params
        const updatedBlog = await Blog.findOneAndUpdate(
            { slug },
            {
                $set: { title, content, slug: slugify(title, { lower: true, strict: true }) } // Update title, content and regenerate slug
            },
            { new: true, runValidators: true } // Return updated document and run validation checks
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Error updating blog', error: error.message });
    }
});


// Protected route for deleting a blog by ID (Admin access required)
// Protected route for deleting a blog by slug (Admin access required)
app.delete('/api/delete-blogs/:slug', authenticateToken, checkAdmin, async (req, res) => {
    try {
        const { slug } = req.params; // Get the blog slug from the route params
        const deletedBlog = await Blog.findOneAndDelete({ slug }); // Find and delete the blog

        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).json({ message: 'Error deleting blog', error: error.message });
    }
});



{/*Razorpay implementation start */}

// Razorpay Instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Order Route
app.post('/create-order', async (req, res) => {
    const { amount, currency, receipt } = req.body;
    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency,
        receipt,
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
});

{/*Razorpay implementation end */}


// Serve static files from the 'uploads' directory (for image uploads)
app.use('/uploads', express.static('uploads'));

// Start the server on the specified port (default is 8000)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`.bgCyan.white));
