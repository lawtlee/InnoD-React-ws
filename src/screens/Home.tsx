// Package Imports
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// Component Imports
import { fadeInVariants, fadeOutVariants, colorChangeVariants } from "../motions/utilities";

const boxedText = "rounded-[60px] text-center w-[50vw] pt-2 pb-2 font-semibold"

const Home: React.FC = () => {
    const [clicked, setClick] = useState(false);
	const [logo, setLogo] = useState(false);
	const [shadow, setShadow] = useState(false);

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
                                src="src/assets/InnoD_Beige.svg"
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
                            src="src/assets/InnoD_Red.svg"
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
                        className="text-RED text-[48px] font-semibold"
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
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-5 text-[100px]">
                        <motion.div
                            className={`${boxedText} bg-BEIGE text-RED`}
                            initial={{ x: -300, y: 20 }}
                            animate={{ x: -60, y: 20 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Innovative</p>
                        </motion.div>
                        <motion.div
                            className={`${boxedText} text-BEIGE border-[5px] border-BEIGE`}
                            initial={{ x: -300, y: 20 }}
                            animate={{ x: -150, y: 20 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Design</p>
                        </motion.div>
                    </div>
                    <div className="">
                        <motion.img
                            src={"src/assets/Laptop.svg"}
                            alt="Laptop"
                            initial={{ y: 20, x: -20, opacity: 0, scale: 1 }}
                            animate={{ y: 20, x: -20, opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}
            {logo ? (
                <motion.div
                    className="absolute right-0 bottom-0 text-[100px] text-BEIGE text-right font-semibold"
                    initial={{ x: -70, y: -20, opacity: 0 }}
                    animate={{ x: -70, y: -20, opacity: 1 }}
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
