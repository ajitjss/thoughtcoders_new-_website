import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

const TermsConditions = () => {
  return (
    <div className='container'>
      <SEO
          title="Terms and Conditions - An Independent Software Testing Company-Thoughtcoders"
          description="Read the terms and conditions for using My Blog App. Know your rights and obligations."
          keywords="terms, conditions, user agreement"
      />
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img 
          style={{width:'100%',height:'400px',borderRadius:'10px', marginTop:"20px"}} 
          src="/assets/homeimages/terms-conditions.png" 
          alt="" 
        />
        <h2 style={{fontFamily:'georgia,sans-serif',fontWeight:900, marginTop:'20px'}}>ThoughtCoders Privacy Policy</h2>
      </div> 
      <p>
        Welcome to ThoughtCoders Website. Please read these Terms and Conditions carefully below. 
        By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. 
        If you do not agree with these terms, please do not use our website.
      </p> 
      <div className='mt-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>1. Acceptance of Terms:</h6>
        <p>
          By accessing, browsing, or using our Thoughtcoders Website, you acknowledge that you have read, 
          understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.
        </p>
        <p>
          ThoughtCoders services and products, is the Sale Contract between Thoughtcoders and users and apply 
          to all Thoughtcoders user.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>2. User Accounts:</h6>
        <p>
          To make full use of our website’s features and services, you may need to create a user account. 
          You are responsible for maintaining the confidentiality of your account information and for all 
          activities that occur under your account. You must not share your account credentials with others.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>3. Product Listings and Descriptions:</h6>
        <p>
          We strive to provide accurate and detailed product listings and descriptions. However, we do not 
          guarantee the accuracy, completeness, or reliability of the information provided. You should verify 
          critical product details before making a purchase.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>4. Pricing and Payment:</h6>
        <p>
          WAll prices listed on our website are in the specified currency and inclusive of applicable taxes, 
          unless stated otherwise. We reserve the right to change prices, modify or discontinue products, and 
          update payment methods at any time. Payment must be made using the provided payment methods. 
          By providing payment information, you represent and warrant that you are authorized to use the payment 
          method.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>5. Order Acceptance:</h6>
        <p>
          Your order constitutes an offer to purchase products. We reserve the right to accept or decline your 
          order for any reason, including but not limited to product availability, errors in pricing or product 
          descriptions, and suspicion of fraudulent activity.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>6. Shipping and Returns:</h6>
        <p>
          Delivery of Thoughtcoders services and products are completely online. No physical items will be delivered.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>7. Cancellation  and Refund Policy: </h6>
        <p>
          Any services or product or contact can be cancelled any point of time. No refund for ongoing subscription, services or product support.
        </p>
        <ul>
          <li>For any discrepancy or satisfaction we can reimburse after evaluation of evidences.</li>
          <li>Any cancellation will stop next billing iteration and customer will not charged anything in future.</li>
        </ul>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>8. Intellectual Property:</h6>
        <p>
          All content, logos, designs, and images on our website are protected by intellectual property rights 
          and are owned by us or our licensors. You must not use, reproduce, or distribute any content without 
          our explicit permission.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>9. User Conduct:</h6>
        <p>
          You agree not to use our website for any unlawful, harmful, or abusive activities, including but not 
          limited to harassment, copyright infringement, and unauthorized access to our systems.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>10. Limitation of Liability:</h6>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
          arising out of or in connection with the use of our website. Our liability is limited to the extent 
          permitted by applicable law.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>11. Termination:</h6>
        <p>
          We reserve the right to terminate or suspend your access to our website without prior notice if you 
          violate these Terms and Conditions or engage in activities that disrupt the website or harm other users.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>12. Changes to Terms and Conditions:</h6>
        <p>
          We may update or modify these Terms and Conditions from time to time without prior notice. 
          Your continued use of our website after any changes indicates your acceptance of the updated terms.
        </p>
      </div>
      <div className='mb-5'>
        <h6 style={{fontFamily:'georgia', fontWeight:'900'}}>13. Governing Law:</h6>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of the 
          Indian Government Laws, without regard to its conflicts of law principles.
        </p>
      </div>
      <p>If you have any questions or concerns regarding these Terms and Conditions, please contact us at <Link to='mailto:info@thoughtcoders.com' target='_blank'>info@thoughtcoders.com</Link></p>
    </div>
  )
}

export default TermsConditions