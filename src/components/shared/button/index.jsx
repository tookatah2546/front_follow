"use client";
import React from "react";



const Button = ({color="secondary",onClick})=>{

    return(
        <>
        <button  type="submit" onClick={onClick}
        className={`border rounded-xl bg-${color} h-12 text-white disabled:bg-light-grey`}>ตกลง</button>

        </>
        

    )
}

export default Button;
