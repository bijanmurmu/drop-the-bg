import { useState } from "react";

const UploadCard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:8000/remove-bg", {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob();
    setOutputUrl(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-md text-center">
      <h1 className="text-2xl font-bold mb-4">Drop The BG 🪄</h1>
      <input
        type="file"
        accept="image/*"
        className="mb-4 w-full"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        {loading ? "Removing..." : "Remove Background"}
      </button>

      {outputUrl && (
        <div className="mt-6">
          <img
            src={outputUrl}
            alt="Output"
            className="max-w-full h-auto rounded-lg shadow"
          />
          <a
            href={outputUrl}
            download="no-bg.png"
            className="mt-3 block text-blue-600 hover:underline"
          >
            Download Image
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadCard;