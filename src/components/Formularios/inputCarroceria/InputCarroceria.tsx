"use client";
import React, { useState } from "react";
import {CarroseriaUI,} from "./CarroseriaUI"

import autoImage from "@/assets/icons/auto.png";



function RadioButtonExample() {
  const [tieneGolpes, setTieneGolpes] = useState(true);

  const handleTieneGolpesChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.value =="true";
    setTieneGolpes(isChecked);
  };

  return (
   <>
    <div>
      <label>
        <input
          type="radio"
          name="daños"
          value={"true"}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleTieneGolpesChange(e)}}
          checked={tieneGolpes === true}
        />
        Si
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="daños"
          value={"false"}
          onChange={handleTieneGolpesChange}
          checked={tieneGolpes === false}
        />
        No
      </label>
      
    </div>
    {tieneGolpes && 
     <div className=" h-fit">
       <CarroseriaUI autoImage={autoImage}></CarroseriaUI>
     </div>
      }
   </>
  );
}

export default RadioButtonExample;



