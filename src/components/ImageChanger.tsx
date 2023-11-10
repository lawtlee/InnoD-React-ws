import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface prop {
  startImage: string, // The path to the first image
  endImage: string, // The path to the second image
  startAlt: string,
  endAlt: string,
  trigger: boolean // This is what triggers the animation
}

const ImageChanger: React.FC<prop> = ({ trigger, startImage, endImage, endAlt, startAlt }) => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    setShowImage(!showImage);
  }, [trigger]);

  return (
      <AnimatePresence>
          {showImage && (
              <div className="absolute">
                  <motion.img
                      key="image1"
                      src={startImage}
                      alt={startAlt}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                  />
              </div>
          )}

          {!showImage && (
              <div className=''>
                  <motion.img
                      key="image2"
                      src={endImage}
                      alt={endAlt}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                  />
              </div>
          )}
      </AnimatePresence>
  );
};

export default ImageChanger;
