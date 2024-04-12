
import "./VectorIcon.css";
import { useState ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const VectorIcon = () => {
  const [count, setCount] = useState(false);

 const toggleElement = () => {
  setCount(!count); // Toggle the isOpen state
  };

  return (
    <>
   
 
  <button style={{background:"none",color:"white",border:"none",fontSize:"30px"}} onClick={toggleElement}>+</button>
  {count && (
        <div className="hidden-element">
          This is a hidden element that will be toggled.
        </div>
      )}

 
  </>
  )
};

export default VectorIcon;
