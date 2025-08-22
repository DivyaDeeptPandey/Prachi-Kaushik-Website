import React from 'react'
import leaderPic from '../../assets/impact2-pic.jpg'
const AsLeader = () => {
    return (
        <div>
            <h1 className="text-3xl lg:text-4xl lora-italic-medium text-center mt-10">
                As Leader
            </h1>
            <div className='flex flex-col lg:flex-row justify-center mt-8'>
                <div className='lg:w-1/2 flex justify-center mx-4 lg:mx-0'>
                    <img src={leaderPic} alt="Leader" className="w-auto h-72 lg:h-80 rounded-lg mb-2" />
                </div>
                <div className='text-base lora-regular text-center lg:w-1/2 mt-4 lg:mt-0 mx-4 lg:mx-2'>
                    <p>
                        Ms. Kaushik’s leadership shines through her ability to build systems that empower, rather than simply offer charity. She founded Vyomini Social Foundation in 2017, transforming it into a high-impact social enterprise that operates in more than 10 Indian states. Under her leadership, Vyomini has launched initiatives in menstrual health, skill development, sanitation, and sustainable microenterprises. She leads a volunteer network of 550+ people, engages youth through campus connect programs, and builds partnerships with CSR units, MSME ministries, and NGOs. During the COVID crisis, she demonstrated agile leadership by training rural women to produce masks and sanitary kits and distributing them in vulnerable areas. Her Vyomini Udhyami Consortium provides not just skills training but also access to markets, mentorship, and financial support, allowing rural women to transition into confident business owners. Through her incubation models and franchising approach, she’s helping scale localized, sustainable enterprises led entirely by women.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AsLeader