import React from 'react'

const Inspiration = () => {
  return (
      <div className="flex flex-col md:flex-row px-2 pt-6 md:px-0 md:pt-12 md:pb-6">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lora-italic-medium text-center">
                  Her Inspiration
              </h1>
          </div>
          <div className="w-full md:w-2/3 text-justify text-base sm:text-lg lora-regular md:mx-6">
              <p>
                  Survival has been her only inspiration. Looking for ways to move forward, she started working in an NGOs. This is when she encountered a domestic violence case that deeply disturbed her. This situation changed her goal from survival to transformation not just her life but of others like her who become prey of societal misdeeds. She began to see the systemic issues that trapped women in cycles of vulnerability. She observed that when a woman has no financial support, when she’s denied education and exposure, she becomes more vulnerable to exploitation and abuse. That experience shaped her mission. She chose to focus on two critical areas: women’s health and economic empowerment.
              </p>
          </div>
      </div>
  )
}

export default Inspiration