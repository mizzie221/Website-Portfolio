import React, { useState } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';  // Assuming your main content component is named Header

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleStart = () => {
    setIsLoading(false);  // Switch to the main content after loading is done
  };

  return (
    <div className="App">
      {isLoading ? (
        <Loading onStart={handleStart} />
      ) : (
        <Header />  // This is your main content component
      )}
    </div>
  );
};

export default App;