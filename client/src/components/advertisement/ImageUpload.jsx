import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [textData, setTextData] = useState('');
    const [image, setImage] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('textData', textData);
        formData.append('image', image);

        const response = await fetch('http://localhost:8000/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.status === 200) {
            const data = await response.json();
            setUploadStatus(`File uploaded successfully with ID ${data.id}`);
        } else {
            setUploadStatus('File upload failed');
        }
    };

    return (
        <div>
            <h2>Image Upload Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Text Data"
                    value={textData}
                    onChange={(e) => setTextData(e.target.value)}
                />
                <input type="file" onChange={handleImageChange} />
                <button type="submit">Upload</button>
            </form>
            <p>{uploadStatus}</p>
        </div>
    );
}

export default ImageUpload;