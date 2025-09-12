import React from 'react';
import { motion } from 'framer-motion';

// Import the images from the Archives component
import WallmartImg from '../../../assets/archives/archivesWallmart.jpg';
import InvitationImg from '../../../assets/archives/ArchivesInvitation.jpg';
import Svavlambiimg from '../../../assets/archives/ArchivesSvavlambi.jpg';
import SanitaryPadArchive1 from '../../../assets/archives/SanitaryPadArchive1.jpg';
import SanitaryPadArchive2 from '../../../assets/archives/SanitaryPadArchive2.jpg';
import SanitaryPadArchive3 from '../../../assets/archives/SanitaryPadArchive3.jpg';
import SanitaryPadArchive4 from '../../../assets/archives/SanitaryPadArchive4.jpg';
import CovidReliefImg from '../../../assets/archives/CovidRelief.jpg';
import PadmanTrainingImg from '../../../assets/archives/PadmanTraining.jpg';
import FinancialDaughtersImg from '../../../assets/archives/FinancialDaughters.png';
import StartupCoverageImg from '../../../assets/archives/StartupCoverage.png';
import HygieneRegimeImg from '../../../assets/archives/HygieneRegime.jpeg';
import GirlsTrainingAwardImg from '../../../assets/archives/GirlsTrainingAward.jpeg';

const PhotoGallery = () => {
  const photoCategories = [
    {
      category: 'Media Coverage & Recognition',
      photos: [
        { id: 1, image: WallmartImg, caption: 'Walmart India - Boldly Courageous #IWD2020' },
        { id: 2, image: FinancialDaughtersImg, caption: 'Raising Financially Savvy Daughters - The Daily Guardian' },
        { id: 3, image: StartupCoverageImg, caption: 'Startups: Finding Solutions to Pressing Problems - Times Coverage' },
        { id: 4, image: HygieneRegimeImg, caption: 'Your Hygiene Regime Can Impact Your Periods - Times of India' }
      ]
    },
    {
      category: 'Events & Workshops',
      photos: [
        { id: 5, image: Svavlambiimg, caption: 'SWAVIambi DESIRE Lecture - Meity, Govt. of India' },
        { id: 6, image: PadmanTrainingImg, caption: 'Village-Level Training: Padman & Padwoman' },
        { id: 7, image: SanitaryPadArchive2, caption: 'महाविद्यालय वर्कशॉप: माहवारी में कपड़े का इस्तेमाल सुरक्षित नहीं' },
        { id: 8, image: GirlsTrainingAwardImg, caption: 'प्रशिक्षण प्राप्त बालिकाओं को मिला सम्मान' }
      ]
    },
    {
      category: 'Community Initiatives & Impact',
      photos: [
        { id: 9, image: SanitaryPadArchive1, caption: 'वुमन कॉलेज में वेंडिंग मशीन से ₹5 में सेनेटरी पैड' },
        { id: 10, image: SanitaryPadArchive3, caption: 'मशीन में 5 का सिक्का डालो, सेनेटरी पैड पाओ' },
        { id: 11, image: SanitaryPadArchive4, caption: 'महिला कॉलेज में सेनेटरी पैड वेंडिंग मशीन' },
        { id: 12, image: CovidReliefImg, caption: 'COVID-19 Crisis Response by Vyomini Social Foundation' },
        { id: 13, image: InvitationImg, caption: 'Government of Haryana Invitation' }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {photoCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
        >
          <h3 className="satoshi-bold text-2xl text-primary mb-6">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.photos.map((photo, photoIndex) => (
              <motion.div
                key={photo.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.2 + photoIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="satoshi-medium text-gray-700 text-sm">{photo.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGallery;