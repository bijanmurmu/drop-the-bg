import UploadCard from "./components/UploadCard";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <main className="flex-grow flex justify-center items-center px-4 py-10">
        <UploadCard />
      </main>
      <Footer />
    </div>
  );
};

export default App;