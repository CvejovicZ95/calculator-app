import { useState } from "react";

import Header from "./Header";
import Home from "./Home";


function App() {

  const [result,setResult]=useState('')

  const handleClick=(value)=>{
    setResult(prevResult=>prevResult + value)
  }

  const calculateResult=()=>{
    try{
      setResult(eval(result))
    }catch(error){
      setResult("Error")
    }
  }

  const clearResult=()=>{
    setResult('')
  }

  return (
    <div className="App">
      <Header/>
      <Home
        result={result}
        handleClick={handleClick}
        calculateResult={calculateResult}
        clearResult={clearResult}
      />
    </div>
  );
}

export default App;
