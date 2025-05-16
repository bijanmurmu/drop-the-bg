import React, { useState } from 'react';
import axios from 'axios';

const BgRemover = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setOutputUrl(null); // reset previous output
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append('file', image);
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/remove-bg', formData, {
        responseType: 'blob',
      });
      const url = URL.createObjectURL(res.data);
      setOutputUrl(url);
    } catch (err) {
      alert('Error processing image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl shadow-xl max-w-md mx-auto">
      <input
        type="file"
        onChange={handleChange}
        accept="image/*"
        className="mb-4"
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mb-4 rounded-lg shadow-lg w-full"
        />
      )}
      <button
        onClick={handleUpload}
        disabled={!image || loading}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full"
      >
        {loading ? 'Processing...' : 'Remove Background'}
      </button>

      {outputUrl && (
        <div className="mt-6">
          <h3 className="text-white font-semibold mb-2">Result:</h3>
          <img
            src={outputUrl}
            alt="Output"
            className="rounded-lg shadow-lg w-full"
          />
          <a
            href={outputUrl}
            download="no-bg.png"
            className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full"
          >
            Download Image
          </a>
        </div>
      )}
    </div>
  );
};

export default BgRemover;
