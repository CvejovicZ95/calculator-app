import { TiDivideOutline } from "react-icons/ti";
import { FaDeleteLeft } from "react-icons/fa6";

const Home=({result,handleClick,calculateResult,clearResult})=>{
  return(
    <div className="calculator">
      <div className="div-result">
        <div className="result">
          {result}
        </div>
      </div>
      <div className="options">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}><TiDivideOutline/></button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>X</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={clearResult}><FaDeleteLeft/></button>
      </div>
    </div>
  )
}

export default Home