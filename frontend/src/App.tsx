import React from 'react';
import BgRemover from './components/BgRemover';

const App = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
        🧙 Drop The BG
      </h1>
      <BgRemover />
    </div>
  );
};

export default App;
