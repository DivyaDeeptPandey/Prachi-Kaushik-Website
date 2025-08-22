import React from 'react'
import advocatePic from '../../assets/advocate.jpg'
const AsAdvocate = () => {
    return (
        <div>
            <h1 className="text-3xl lg:text-4xl lora-italic-medium text-center mx-2 lg:mx-0 mt-10">
                As Menstrual Hygiene Advocate
            </h1>
            <div className='flex flex-col lg:flex-row justify-center mt-8'>
                <div className='lg:w-1/2 flex justify-center mx-4 lg:mx-0'>
                    <img src={advocatePic} alt="Advocate" className="w-auto h-72 lg:h-80 rounded-lg mb-2" />
                </div>
                <div className='text-base lora-regular text-center lg:w-1/2 mt-4 lg:mt-0 mx-4 lg:mx-2'>
                    <p>Ms. Kaushik’s menstrual health work is one of her most impactful areas, combining health awareness, environmental consciousness, and economic empowerment. She has organized 15,000+ awareness sessions across India—spanning slums, schools, community centers, and panchayats—educating over 25 lakh women and girls. Her 3A framework (Awareness, Accessibility, Affordability) underpins all her menstrual health campaigns. She addresses myths like impurity during periods, promotes the use of biodegradable pads, and educates on hygienic disposal methods. She introduced low-cost pads (₹1.5–₹2 per piece) and reusable 3-year pads (₹50) made by women in rural communities, providing both health protection and income-generation opportunities. Beyond product access, she ensures psychological and social support by involving families and community leaders, thus fostering a cultural shift in how menstruation is perceived. Her programs also intersect with public health, reducing risks of UTIs and reproductive tract infections caused by lack of hygiene awareness.</p>
                </div>
            </div>
        </div>
    )
}

export default AsAdvocate