// IMPORT FROM MODULES
import React, { useState, useEffect } from "react";

const HTML: React.FC = () => {
    const [windowDimensions, setDim] = useState({width: window.innerWidth, height: window.innerHeight})

    const detectSize = () => {
        setDim({width: window.innerWidth, height: window.innerHeight})
        useEffect(()=>{
            window.addEventListener('resize', detectSize)
            return()=>{
                window.removeEventListener('resize', detectSize)
            }
        },[windowDimensions])
    }
    return(
        <div className="bg-BEIGE text-[100px]">
            <p>{windowDimensions.width}</p>
        </div>
    )
};

export default HTML;