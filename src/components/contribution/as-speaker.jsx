import React from 'react'
import speakerPic from '../../assets/solo-pic.png'
const AsSpeaker = () => {
    return (
        <div className=''>
            <h1 className="text-3xl lg:text-4xl lora-italic-medium text-center mt-10">
                As Speaker
            </h1>
            <div className='flex flex-col lg:flex-row justify-center mt-8'>
                <div className='lg:w-1/2 flex justify-center'>
                    <img src={speakerPic} alt="Speaker" className="w-auto h-72 lg:h-80 rounded-lg mb-2" />
                </div>
                <div className='text-base lora-regular text-center lg:w-1/2 mt-4 lg:mt-0 mx-4 lg:mx-2'>
                    <p>Ms. Prachi Kaushik has established herself as a powerful and persuasive speaker, addressing diverse audiences from grassroots communities to premier institutions like IIT Delhi, where she was a distinguished panelist at BioEnviroCon 2025. She speaks with authority on subjects such as rural development, menstrual health, women's entrepreneurship, and environmental sustainability. Her community engagements involve speaking directly to women and girls in underserved areas, where she dismantles menstrual myths, educates on hygiene, and promotes self-reliance. She also interacts with school and college students, conducting sessions on body positivity, mental health, and emotional support. Even during the COVID-19 pandemic, she seamlessly transitioned to digital mediums like Zoom and YouTube Lives to continue reaching thousands with her message. In every forum, her communication style is rooted in empathy, simplicity, and action-oriented solutions, making her a relatable and trusted voice for change.</p>
                </div>
            </div>
        </div>
    )
}

export default AsSpeaker