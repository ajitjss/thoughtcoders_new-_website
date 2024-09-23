const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');     
const bcrypt = require('bcryptjs');  // For hashing passwords
const jwt = require('jsonwebtoken'); // For JWT token generation
const Razorpay = require('razorpay');

// Configure environment variables
dotenv.config();
 
// Rest object    
const app = express();

// Middleware
app.use(cors());

app.use(express.json({ limit: '10mb' })); //Here I have increased payload limit to 10MB for JSON
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // For URL-encoded payloads



// MongoDB Connection 
const connectDB = async () => {
    try { 
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB Database ${con.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Failed to connect MongoDB Database ${error}`.bgRed.white);
    }
};
connectDB();

// Multer Configuration for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// const upload = multer({ storage });

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 } // Here I have increased the limit of file size to 10MB
  });

// User Schema for authentication
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Blog Schema
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

// Register API
app.post('/api/auth/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

// Login API
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d' // Token valid for 1 hour
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
});

// Logout User
app.post('/api/auth/logout', (req, res) => {
    // Logout by clearing the token on client-side or not sending the token
    res.status(200).json({ message: 'User logged out successfully' });
});

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

    if (token == null) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};


// Protected Route Example (Creating a blog requires authentication)
app.post('/api/blogs',authenticateToken, async (req, res) => {
    try {
        const { title, content } = req.body;
        const newBlog = new Blog({ title, content });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog', error });
    }
});

// GET endpoint to retrieve all blogs
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find(); // Fetch all blog posts from MongoDB
        res.status(200).json(blogs); // Send the retrieved blogs as JSON
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    }
});

// GET endpoint to retrieve a single blog by ID
app.get('/api/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params; // Get the blog ID from the request parameters
        const blog = await Blog.findById(id); // Find the blog by its ID in MongoDB

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' }); // If blog not found, send a 404 response
        }

        res.status(200).json(blog); // Send the retrieved blog as JSON
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ message: 'Error fetching blog', error: error.message });
    }
});

// PUT endpoint to update a blog by ID
app.put('/api/blogs/:id',authenticateToken, async (req, res) => {
    try {
        const { id } = req.params; // Get the blog ID from the request parameters
        const { title, content } = req.body; // Get the updated title and content from the request body

        const updatedBlog = await Blog.findByIdAndUpdate(
            id, 
            { title, content }, 
            { new: true, runValidators: true }
        ); // Find the blog by its ID and update it with new data

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' }); // If blog not found, send a 404 response
        }

        res.status(200).json(updatedBlog); // Send the updated blog as JSON
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Error updating blog', error: error.message });
    }
});

// DELETE endpoint to delete a blog by ID
app.delete('/api/blogs/:id',authenticateToken, async (req, res) => {
    try {
        const { id } = req.params; // Get the blog ID from the request parameters
        const deletedBlog = await Blog.findByIdAndDelete(id); // Find the blog by its ID and delete it

        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' }); // If blog not found, send a 404 response
        }

        res.status(200).json({ message: 'Blog deleted successfully' }); // Send a success message as JSON
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
      res.status(500).send(error);
    }
  });
  
  // Payment Verification Route
  app.post('/verify-payment', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
    const crypto = require('crypto');
  
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');
  
    if (generated_signature === razorpay_signature) {
      res.json({ status: 'success' });
    } else {
      res.status(400).json({ status: 'failed' });
    }
  });


{/*Razorpay implementation end */}











// Static Files
app.use('/uploads', express.static('uploads'));

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`.bgCyan.white));
