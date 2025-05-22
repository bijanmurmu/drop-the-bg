import { useState, useRef } from "react";

const UploadCard = () => {
  const [file, setFile] = useState<File | null>(null);
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="bg-white/90 text-black p-8 rounded-3xl shadow-2xl w-full max-w-md mx-auto flex flex-col items-center">
        {/* Custom Choose File Button */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          type="button"
          onClick={handleChooseFile}
          className="mb-4 px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {file ? "Change File" : "Choose Image"}
        </button>
        {file && (
          <div className="mb-4 text-sm text-gray-700 font-medium truncate max-w-xs">
            Selected: {file.name}
          </div>
        )}
        {/* Remove BG Button */}
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className={`w-full px-6 py-3 rounded-full font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transition-all duration-150 hover:from-blue-500 hover:to-green-400 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed mb-2`}
        >
          {loading ? "Removing..." : "Remove Background"}
        </button>

        {outputUrl && (
          <div className="mt-8 w-full flex flex-col items-center">
            <img
              src={outputUrl}
              alt="Output"
              className="max-w-full h-auto rounded-xl shadow-lg border border-gray-200 mb-4"
            />
            <a
              href={outputUrl}
              download="no-bg.png"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default UploadCard;