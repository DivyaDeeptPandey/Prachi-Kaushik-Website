import React from 'react'
import { ArrowRight } from 'lucide-react';

const ReadMore = () => {
    return (
        <div className="text-end mt-3 mr-4 sm:mr-8 md:mr-16">
            <a
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium lora-regular-large group text-sm md:text-base lg:text-lg"
                href="/Her-contributions"
            >
                Read More
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
        </div>
    )
}

export default ReadMore