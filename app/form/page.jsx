"use client";
import { useState } from "react";

export default function ImageUploadForm() {
    const [image, setImage] = useState(null);
    
    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>
            <form 
                action="https://api.staticforms.xyz/submit" 
                method="post" 
                encType="multipart/form-data"
            >
                {/* StaticForm API Key */}
                <input type="hidden" name="accessKey" value={"006037a4-a0f9-4bb7-9e2f-d433aef27004"} />
                
                <label className="block mb-2 font-medium">Choose an image:</label>
                <input 
                    type="file" 
                    name="$image" 
                    accept="image/*" 
                    required 
                    onChange={handleImageChange} 
                    className="block w-full p-2 border rounded"
                />
                
                {/* Success & Error Redirect URLs (Optional) */}
                <input type="hidden" name="redirectTo" value="cricbuzz.com" />
                
                <button 
                    type="submit" 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Upload
                </button>
            </form>
        </div>
    );
}
