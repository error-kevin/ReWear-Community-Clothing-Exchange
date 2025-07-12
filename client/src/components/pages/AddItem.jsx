import React, { useState } from 'react';
import '../styles/AddItem.css'; // आपकी CSS फ़ाइल का नाम AddItem.css है

const AddItem = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [condition, setCondition] = useState('');
    const [tags, setTags] = useState(''); // Comma-separated tags
    const [images, setImages] = useState([]); // Array of File objects for images
    const [previewImages, setPreviewImages] = useState([]); // Array of URLs for image previews
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);

        // Create image previews
        const newPreviewImages = files.map(file => URL.createObjectURL(file));
        setPreviewImages(newPreviewImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setMessageType('');

        // Basic validation: सुनिश्चित करें कि सभी आवश्यक फ़ील्ड भरे हों और कम से कम एक इमेज अपलोड की गई हो
        if (!title || !description || !category || !type || !size || !condition || images.length === 0) {
            setMessage('Please fill in all required fields and upload at least one image.');
            setMessageType('error');
            setLoading(false);
            return;
        }

        // Prepare data for submission (यह एक वास्तविक API कॉल के लिए डेटा तैयार करता है)
        const itemData = {
            title,
            description,
            category,
            type,
            size,
            condition,
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
            // वास्तविक एप्लीकेशन में, आप यहां 'images' array को FormData में जोड़कर सर्वर पर अपलोड करेंगे।
            // अभी के लिए, हम केवल प्रीव्यू URLs का उपयोग कर रहे हैं।
            imageUrls: previewImages, 
            status: 'Pending Approval', // आइटम की प्रारंभिक स्थिति
            uploadedBy: 'currentUser.id', // वास्तविक ऐप में AuthContext से मिलेगा
            uploadDate: new Date().toISOString(),
        };

        console.log('Submitting item:', itemData);

        // --- आइटम जोड़ने के लिए API कॉल का सिमुलेशन ---
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); // 2 सेकंड की नकली देरी

            setMessage('Item listed successfully and is pending admin approval!');
            setMessageType('success');

            // फ़ॉर्म क्लियर करें
            setTitle('');
            setDescription('');
            setCategory('');
            setType('');
            setSize('');
            setCondition('');
            setTags('');
            setImages([]);
            setPreviewImages([]);

        } catch (error) {
            console.error('Error adding item:', error);
            setMessage('Failed to list item. Please try again.');
            setMessageType('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-item-container">
            <h1 className="add-item-title">List a New Item</h1>

            <form onSubmit={handleSubmit} className="add-item-form">
                {message && (
                    <div className={`form-message ${messageType}`}>
                        {message}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="title">Title <span className="required-star">*</span></label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="e.g., Blue Denim Jacket"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description <span className="required-star">*</span></label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows="5"
                        placeholder="Provide a detailed description of the item, its condition, and any unique features."
                    ></textarea>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="category">Category <span className="required-star">*</span></label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Outerwear">Outerwear</option>
                            <option value="Tops">Tops</option>
                            <option value="Bottoms">Bottoms</option>
                            <option value="Dresses">Dresses</option>
                            <option value="Footwear">Footwear</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type <span className="required-star">*</span></label>
                        <input
                            type="text"
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                            placeholder="e.g., Jacket, T-Shirt, Jeans"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="size">Size <span className="required-star">*</span></label>
                        <input
                            type="text"
                            id="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            required
                            placeholder="e.g., M, L, 32, US 8"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="condition">Condition <span className="required-star">*</span></label>
                        <select
                            id="condition"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                            required
                        >
                            <option value="">Select Condition</option>
                            <option value="New with tags">New with tags</option>
                            <option value="Like New">Like New</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="tags">Tags (comma-separated)</label>
                    <input
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="e.g., casual, summer, vintage, cotton"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="images">Upload Images <span className="required-star">*</span></label>
                    <input
                        type="file"
                        id="images"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <div className="image-previews">
                        {previewImages.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Preview ${index}`}
                                className="image-preview"
                            />
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="submit-button"
                >
                    {loading ? 'Submitting...' : 'List Item'}
                </button>
            </form>
        </div>
    );
};

export default AddItem;