import React from 'react'
import tvPic from '../../assets/tvp.png'
const AsWEC = () => {
    return (
        <div>
            <h1 className="text-3xl lg:text-4xl lora-italic-medium text-center mt-10">
                As Women Empowerment Champion
            </h1>
            <div className='flex flex-col lg:flex-row justify-center mt-8'>
                <div className='lg:w-1/2 flex justify-center mx-4 lg:mx-0'>
                    <img src={tvPic} alt="Women Empowerment Champion" className="w-auto h-72 lg:h-80 rounded-lg mb-2" />
                </div>
                <div className='text-base lora-regular text-center lg:w-1/2 mt-4 lg:mt-0 mx-4 lg:mx-2'>
                    <p>Empowering women is at the core of Ms. Kaushik’s mission. Through Vyomini, she has trained over 10,000 women in income-generating skills like sanitary napkin production, jute and paper product creation, packaging, and recycling. Over 5,500 women have become full-time entrepreneurs, setting up micro-units in their villages. She supports them through a complete ecosystem—training, raw material procurement, branding, marketing, and access to finance via CSR funds or small loans. Many of these women are survivors of domestic abuse, economic marginalization, or caste-based oppression. Prachi's work includes setting up Vyomini Facilitation Centres, which offer legal aid, health check-ups, psychological counseling, and business mentoring. She ensures that empowerment is not just economic, but holistic and sustainable, allowing women to become change-makers in their own communities. Her efforts have enabled women to send their children to school, access healthcare, and earn respect within traditionally patriarchal households.</p>
                </div>
            </div>
        </div >
    )
}

export default AsWEC