// Package Imports
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// Component Imports
import { fadeInVariants, fadeOutVariants, colorChangeVariants, fadeIn } from "../motions/utilities";

const boxedText = "rounded-[60px] text-center md:w-[50vw] pt-2 pb-2 font-semibold w-[75vw]"

const Home: React.FC = () => {
    const [clicked, setClick] = useState(false);
	const [logo, setLogo] = useState(false);
	const [shadow, setShadow] = useState(false);
    const [laptopScale, setLaptop] = useState(1);
    const [changeSize, setSize] = useState(false);
    const [gap, setGap] = useState("gap-5")
    const [[x_I, y_I], setI] = useState([-60, 20])
    const [[x_D, y_D], setD] = useState([-150, 20])
    const [[x_L, y_L], setL] = useState([-20, 20])
    const [[x_R, y_R], setR] = useState([-70, -20])
    const [windowDimensions, setDim] = useState({width: window.innerWidth})

    const detectSize = () => {
        setDim({width: window.innerWidth})
        useEffect(()=>{
            window.addEventListener('resize', detectSize)
            setSize(!changeSize)
            return () => {
                window.removeEventListener('resize', detectSize)
            }
        },[windowDimensions])
    }

    useEffect(() => {
        if (windowDimensions.width >= 1440) {
            setLaptop(1)
        }
        else if (windowDimensions.width >= 1024) {
            setLaptop(0.7);
            setD([-115, y_D])
            setL([20, y_L])
            setR([-70, -50])
        }
        else if (windowDimensions.width >= 768) {
            setLaptop(0.6)
            setD([-100, y_D])
            setL([20, y_L])
            setR([-40, -40])
        }
        else if (windowDimensions.width <= 375){
            setGap("")
            setI([0, 0])
            setD([0, 0])
        }
        else {
            setI([0, y_L])
            setD([0, y_D])
            setR([-40, -40])
        }
    },[setSize])

	const delayTimer = async ( time: number ) => {
		await new Promise(() => {
		  setTimeout(() => {
			setLogo(true);
		  }, time); 
		});
	  };

    return (
        // Background Div
        <motion.div
            className="min-w-[100vw] min-h-[100vh] flex flex-col overflow-hidden z-[-1]"
            onClick={() => {
                setClick(true);
                if (!clicked) delayTimer(500);
            }}
            initial="initial"
            animate={logo ? "target" : "initial"}
            variants={colorChangeVariants}
            transition={{ duration: 0.5 }}
        >
            {/* LOGO DIV */}
            <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
                {logo ? (
                    <Link to="/html">
                        <div className="cursor-pointer">
                            <motion.img
                                src="./assets/InnoD_Beige.svg"
                                alt="InnoD Beige Logo"
                                initial="hidden"
                                animate="visible"
                                variants={fadeInVariants}
                                transition={{ duration: 0.5 }}
                                onMouseEnter={()=>setShadow(true)}
                                onMouseLeave={()=>setShadow(false)}
                            />
                        </div>
                        <motion.div
                            className={`w-[175px] h-[175px] rounded-[50%] absolute top-1/2 left-1/2 
                                transform -translate-x-1/2 -translate-y-1/2 ${shadow ? "shadow-blue" : ""}`}
                            initial={{ x: -94, y: -158, scale: 1 }}
                            animate={{ x: -94, y: -158, scale: 1.05 }}
                            onMouseEnter={()=>setShadow(true)}
                            onMouseLeave={()=>setShadow(false)}
                        />
                        <motion.div
                            className={`w-[140px] h-[140px] rounded-[50%] absolute top-1/2 left-1/2 
                                transform -translate-x-1/2 -translate-y-1/2 ${shadow ? "shadow-blue" : ""}`}
                            initial={{ x: -40, y: -24.5 }}
                            animate={{ x: -40, y: -24.5 }}
                            onMouseEnter={()=>setShadow(true)}
                            onMouseLeave={()=>setShadow(false)}
                        />
                        <motion.div
                            className={`w-[110px] h-[110px] rounded-[50%] absolute top-1/2 left-1/2 
                                transform -translate-x-1/2 -translate-y-1/2 ${shadow ? "shadow-blue" : ""}`}
                            initial={{ x: -85.5, y: 53.5 }}
                            animate={{ x: -85.5, y: 53.5 }}
                            onMouseEnter={()=>setShadow(true)}
                            onMouseLeave={()=>setShadow(false)}
                        />
                    </Link>
                ) : (
                    <div className="opacity-50 ">
                        <motion.img
                            src="./assets/InnoD_Red.svg"
                            alt="InnoD Red Logo"
                            initial={{ opacity: 0.5 }}
                            animate={logo ? "hidden" : `{{opacity: 0}}`}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                )}
            </div>

            {/* TEXT DIV */}
            {logo ? (
                <></>
            ) : (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <motion.p
                        className="text-RED text-[48px] font-semibold text-center"
                        initial="visible"
                        animate={clicked ? "hidden" : "visible"}
                        variants={fadeOutVariants}
                        transition={{ duration: 0.5 }}
                    >
                        Click Anywhere to Start
                    </motion.p>
                </motion.div>
            )}

            {/* AFTER BACKGORUND SWITCH DIV */}
            {logo ? (
                <div className="flex md:justify-between items-center justify-center">
                    <div className={`flex flex-col ${gap} xl:text-[100px] lg:text-[64px] md:text-[48px] text-[40px]`}>
                        <motion.div
                            className={`${boxedText} bg-BEIGE text-RED`}
                            initial={{ x: -300, y: y_I }}
                            animate={{ x: x_I, y: y_I }}
                            transition={{ duration: 1 }}
                        >
                            <p>Innovative</p>
                        </motion.div>
                        <motion.div
                            className={`${boxedText} text-BEIGE border-[5px] border-BEIGE`}
                            initial={{ x: -300, y: y_D }}
                            animate={{ x: x_D, y: y_D }}
                            transition={{ duration: 1 }}
                        >
                            <p>Design</p>
                        </motion.div>
                    </div>
                    <div className="hidden w-0 md:block md:w-fit">
                        <motion.img
                            src={"./assets/Laptop.svg"}
                            alt="Laptop"
                            initial="hidden"
                            animate="show"
                            transition={{
                                duration: 1,
                                type: "spring",
                            }}
                            variants={fadeIn(x_L, y_L, laptopScale)}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
            {logo ? (
                <motion.div
                    className="absolute right-0 bottom-0 xl:text-[100px] lg:text-[64px] md:text-[48px] text-[40px]
                     text-BEIGE text-right font-semibold"
                    initial={{ x: x_R, y: y_R, opacity: 0 }}
                    animate={{ x: x_R, y: y_R, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p>
                        React <br /> Workshop
                    </p>
                </motion.div>
            ) : (
                <></>
            )}
        </motion.div>
    );
};

export default Home;
