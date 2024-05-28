import { motion } from 'framer-motion'
import React from 'react'
import avatar from '../../assets/devlopper-avatar.png';
import reactjs from '../../assets/react.png';
import laravel from '../../assets/php.png';
import python from '../../assets/python (1).png';
import mysql from '../../assets/mysql.png';
export default function Avatarhero() {
  return (
    <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="m-auto  lg:mb-0 relative z-0">
            <div className='gooey'>
              <img
                src={reactjs}
                className="w-20 absolute animate-slideLeftReactIcon drop-shadow-[5px_5px_4px_rgba(0,0,0,0.45)] opacity-100 z-0"
                alt="ReactJS"
              />
              <img
                src={laravel}
                className="w-20 absolute animate-slideRightReactIcon drop-shadow-[5px_5px_4px_rgba(0,0,0,0.45)] z-0"
                alt="ReactJS"
              />
              <img
                src={python}
                className="w-20 absolute animate-slideRightDownReactIcon drop-shadow-[5px_5px_4px_rgba(0,0,0,0.45)]"
                alt="ReactJS"
              />
              <img
                src={mysql}
                className="w-20 absolute animate-slideLeftDownReactIcon drop-shadow-[5px_5px_4px_rgba(0,0,0,0.45)]"
                alt="ReactJS"
              />
              <motion.div
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{
                  duration: 2.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <img
                  src={avatar}
                  className="w-full m-auto drop-shadow-[5px_5px_4px_rgba(0,0,0,0.45)] opacity-100"
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
  )
}
