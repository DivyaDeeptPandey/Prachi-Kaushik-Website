import React from 'react'
import pic from '../../assets/wec.png'
const AsTV = () => {
  return (
      <div>
          <h1 className="text-3xl lg:text-4xl lora-italic-medium text-center mt-10">
              Through Media Interactions
          </h1>
          <div className='flex flex-col lg:flex-row justify-center mt-8'>
              <div className='lg:w-1/2 flex justify-center mx-4 lg:mx-0'>
                  <img src={pic} alt="TV Panelist" className="h-72 lg:h-80 rounded-lg mb-2" />
              </div>
              <div className='text-base lora-regular text-center lg:w-1/2 mt-4 lg:mt-0 mx-4 lg:mx-2'>
                  <p>While not a regular on mainstream TV debates, Ms. Kaushik actively uses digital and educational media to amplify her voice. She’s been featured in platforms like India Education Diary, where her work on community outreach and entrepreneurship is recognized. She uses social media, online panels, interviews, and webinars to reach broader audiences. For instance, her session at BioEnviroCon 2025 was widely shared in academic and developmental circles. These platforms help her share best practices, collaborate with policymakers, and influence CSR initiatives. She has also engaged in media interactions related to menstrual taboos, eco-friendly hygiene solutions, and women's economic independence. Her media presence adds credibility and visibility to grassroots issues, influencing both public perception and institutional support.</p>
              </div>
          </div>
      </div>
  )
}

export default AsTV