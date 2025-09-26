import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Flatten all photos for navigation
  const allPhotos = photoCategories.flatMap(category => category.photos);

  const openModal = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % allPhotos.length;
    setSelectedPhoto(allPhotos[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    setSelectedPhoto(allPhotos[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrev();
  };

  // Add event listener for keyboard navigation
  React.useEffect(() => {
    if (selectedPhoto) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto, currentIndex]);

  return (
    <>
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
              {category.photos.map((photo, photoIndex) => {
                const globalIndex = photoCategories
                  .slice(0, categoryIndex)
                  .reduce((acc, cat) => acc + cat.photos.length, 0) + photoIndex;
                
                return (
                  <motion.div
                    key={photo.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + photoIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openModal(photo, globalIndex)}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={closeModal}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 z-10 text-white hover:text-gray-300 transition-colors duration-200 p-2"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200 p-2"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-4xl max-h-[90vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.caption}
                className="w-full h-full object-contain max-h-[80vh] rounded-lg"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white satoshi-medium text-lg text-center">
                  {selectedPhoto.caption}
                </p>
                <p className="text-white/80 satoshi-regular text-sm text-center mt-1">
                  {currentIndex + 1} of {allPhotos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;