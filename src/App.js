import { useState } from "react";
import NavBar from "./Components/navBar";
import NewsBorder from "./Components/newsBorder";
import './App.css';

function App() {

  const[category,setCategory]=useState("general");

  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBorder category={category} />


     
    </div>
  );
}

export default App;
