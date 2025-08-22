// import React from 'react';
// import { motion as Motion } from 'framer-motion';

// const HeaderText = () => {
//     return (
//         <div className='flex flex-col items-center justify-center h-80 overflow-hidden'>
//             <Motion.h1
//                 className='text-7xl lora-italic font-semibold text-center text-transparent h-44'
//                 animate={{ backgroundPosition: ['100% 50%', '0% 50%'] }}
//                 transition={{
//                     duration: 7,
//                     ease: 'easeInOut',
//                     repeat: Infinity,
//                     repeatDelay: 1,
//                 }}
//                 style={{
//                     backgroundImage: 'linear-gradient(to right, black 50%, #fffbeb 50%)', // amber-50
//                     backgroundSize: '200% 100%',
//                     backgroundPosition: '100% 50%',
//                     backgroundClip: 'text',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                 }}
//             >
//                 Empowering Millions<br />The Story of a Changemaker
//             </Motion.h1>
//         </div>
//     );
// };

// export default HeaderText;



import React from 'react';
import { motion as Motion } from 'framer-motion';

const HeaderText = () => {
    return (
        <div className="flex flex-col items-center justify-center h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] overflow-hidden px-4 bg-secondary">
            <Motion.h1
                className="satoshi-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-tight text-primary drop-shadow-md"
                animate={{ opacity: [0, 1], y: [20, 0] }}
                transition={{
                    duration: 1,
                    ease: 'easeOut',
                }}
            >
                Empowering Millions
            </Motion.h1>

            <Motion.h2
                className="satoshi-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mt-4 text-text"
                animate={{ opacity: [0, 1], y: [20, 0] }}
                transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: 0.2,
                }}
            >
                The Story of a Changemaker
            </Motion.h2>
        </div>
    );
};

export default HeaderText;
