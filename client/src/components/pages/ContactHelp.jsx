import React, { useState } from 'react';
import '../styles/ContactHelp.css';

const ContactHelp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [formStatus, setFormStatus] = useState(''); // 'success', 'error', or ''

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('');

        if (!name || !email || !subject || !message) {
            setFormStatus('error');
            return;
        }

        // Simulate API call
        console.log('Contact form submitted:', { name, email, subject, message });
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
            setFormStatus('success');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            setFormStatus('error');
            console.error('Contact form submission failed:', error);
        }
    };

    const faqs = [
        {
            question: "How do I list an item?",
            answer: "To list an item, navigate to the 'Add Item' page from your dashboard. Fill in all the required details, upload clear images, and submit for approval. Once approved by our team, your item will be live on the marketplace."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We currently accept payments via major credit/debit cards (Visa, MasterCard, American Express) and popular digital wallets. All transactions are securely processed through our integrated payment gateway."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive an email with a tracking number and a link to the courier's website. You can use this to track the real-time status of your delivery."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 7-day return policy from the date of delivery. Items must be in their original condition, unworn, and with all tags attached. Please refer to our detailed 'Returns & Refunds' section for more information."
        },
        {
            question: "Is my personal information secure?",
            answer: "Yes, we prioritize the security of your personal information. We use advanced encryption technologies and strict data protection protocols to ensure your data is safe and private. Please read our Privacy Policy for full details."
        }
    ];

    return (
        <div className="contact-help-container">
            <div className="contact-section">
                <h1 className="section-title">Contact Us</h1>
                <p className="section-description">
                    Have questions, feedback, or need assistance? Our team is here to help you.
                    Please fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleContactSubmit} className="contact-form">
                    {formStatus === 'success' && (
                        <div className="form-message success">
                            Thank you for contacting us! We will get back to you shortly.
                        </div>
                    )}
                    {formStatus === 'error' && (
                        <div className="form-message error">
                            Please fill in all fields. Failed to send message.
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="e.g., Order Inquiry, Technical Issue"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="6"
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>

                <div className="contact-info">
                    <h3>Other Ways to Reach Us</h3>
                    <p><strong>Email:</strong> support@yourmarketplace.com</p>
                    <p><strong>Phone:</strong> +91 12345 67890 (Mon-Fri, 9 AM - 6 PM IST)</p>
                    <p><strong>Address:</strong> 123, Marketplace Lane, Digital City, India</p>
                </div>
            </div>

            <div className="help-section">
                <h1 className="section-title">Help & FAQs</h1>
                <p className="section-description">
                    Find quick answers to common questions about our platform, services, and policies.
                </p>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h3 className="faq-question">{faq.question}</h3>
                            <p className="faq-answer">{faq.answer}</p>
                        </div>
                    ))}
                </div>
                <div className="help-cta">
                    <h3>Still Need Help?</h3>
                    <p>If you couldn't find your answer here, feel free to contact us directly using the form above.</p>
                </div>
            </div>
        </div>
    );
};

export default ContactHelp;