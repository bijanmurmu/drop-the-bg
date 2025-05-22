import UploadCard from "./components/UploadCard";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-900 text-white">
      {/* Heading at the very top */}
      <header className="py-8">
        <h1 className="text-4xl font-extrabold text-center mb-2 text-green-400 drop-shadow-lg tracking-tight">
          Drop The BG 🪄
        </h1>
      </header>
      <main className="flex-grow flex justify-center items-center px-4 py-10">
        <UploadCard />
      </main>
      <Footer />
    </div>
  );
};

export default App;