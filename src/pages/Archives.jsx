import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Award, Newspaper, Image, Video, Download, Users, Calendar, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WallmartImg from '../assets/archives/archivesWallmart.jpg';
import InvitationImg from '../assets/archives/ArchivesInvitation.jpg';
import Svavlambiimg from '../assets/archives/ArchivesSvavlambi.jpg';
import SanitaryPadArchive1 from '../assets/archives/SanitaryPadArchive1.jpg';
import SanitaryPadArchive2 from '../assets/archives/SanitaryPadArchive2.jpg';
import SanitaryPadArchive3 from '../assets/archives/SanitaryPadArchive3.jpg';
import SanitaryPadArchive4 from '../assets/archives/SanitaryPadArchive4.jpg';
import CovidReliefImg from '../assets/archives/CovidRelief.jpg';
import PadmanTrainingImg from '../assets/archives/PadmanTraining.jpg';
import FinancialDaughtersImg from '../assets/archives/FinancialDaughters.png';
import StartupCoverageImg from '../assets/archives/StartupCoverage.png';
import HygieneRegimeImg from '../assets/archives/HygieneRegime.jpeg';
import GirlsTrainingAwardImg from '../assets/archives/GirlsTrainingAward.jpeg';
const Archives = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Updated data based on the photos shared
  const archiveItems = [
    {
      id: 1,
      type: 'media',
      title: 'Walmart India - Boldly Courageous #IWD2020',
      description: 'Featured as a courageous woman entrepreneur for International Women\'s Day 2020',
      image: WallmartImg,
      date: '2020',
      category: 'media',
      content: 'My social enterprise Vyomini Enterprises works on a complete menstrual health solution for women deprived of awareness and access. Active in 10 states across India, we have engaged 500 women in manufacturing, 1000 health trainers and have reached 10 lakh women through reproductive health awareness workshops.'
    },
    {
      id: 2,
      type: 'event',
      title: 'SWAVIambi DESIRE Lecture',
      description: 'Keynote speaker on Women Entrepreneurship organized by Meity, Govt. of India',
      image: Svavlambiimg,
      date: 'Nov 18, 2022',
      category: 'events',
      details: {
        time: '03:00 - 04:00 PM',
        organizer: 'Meity, Govt. of India Project (IGNTU- Central University)',
        location: 'Amarkantak (M.P.)'
      }
    },
    {
      id: 3,
      type: 'recognition',
      title: 'Government of Haryana Invitation',
      description: 'Invited by Additional Chief Secretary for interaction with Hon\'ble Chief Minister',
      image: InvitationImg,
      date: 'Jun 19, 2019',
      category: 'recognition',
      content: 'Invitation to interact with Hon\'ble Chief Minister of Haryana at Apparel House, Sector 44, Gurugram for industry partnership in skill development initiatives.'
    },
    {
    id: 4,
    type: 'media',
    title: 'महिला कॉलेज में सेनेटरी पैड वेंडिंग मशीन',
    description: 'हरियाणा के हिसार जिले के राजकीय महिला महाविद्यालय में छात्राओं के लिए सेनेटरी पैड वेंडिंग मशीन लगाई गई, जिससे छात्राएं मात्र 5 रुपये में पैड निकाल सकती हैं।',
    image: SanitaryPadArchive4,
    date: 'May 2018',
    category: 'media',
    content:
      'स्वच्छता और स्वास्थ्य के प्रति जागरूकता बढ़ाने के लिए कॉलेज प्रशासन ने पहली बार सेनेटरी पैड वेंडिंग मशीन स्थापित की। इस मशीन में 5 रुपये का सिक्का डालते ही सेनेटरी पैड मिल जाता है। मशीन की क्षमता 50 पैड की है और इसका संचालन कॉलेज कर्मचारी करेगा। महिला एवं बाल विकास विभाग व स्वास्थ्य संस्थाएं भी इस पहल में सहयोगी हैं।[attached_image:1]'
  },
  {
    id: 5,
    type: 'media',
    title: 'मशीन में 5 का सिक्का डालो, सेनेटरी पैड पाओ',
    description: 'छात्राओं व महिलाओं के लिए सेनेटरी पैड वेंडिंग मशीन की शुरुआत की गई, जिससे आर्थिक रूप से कमज़ोर वर्ग भी लाभ ले सके।',
    image: SanitaryPadArchive3,
    date: '12 May 2018',
    category: 'media',
    content:
      'प्रशासन ने दिल्ली बाईपास स्थित राजकीय महिला महाविद्यालय में सेनेटरी पैड वेंडिंग मशीन का उद्घाटन किया। शुरुआत में 50 पैड वाली मशीन कॉलेज में लगाई गई, जिसे कर्मचारी ऑपरेट करेगा। 5 रुपये का सिक्का डालते ही पैड स्वतः बाहर आ जाता है। इस पहल का उद्देश्य ग्रामीण इलाकों की छात्राओं तक स्वच्छता सुविधाएँ पहुँचाना है।[attached_image:2]'
  },
  {
    id: 6,
    type: 'event',
    title: 'महाविद्यालय वर्कशॉप: माहवारी में कपड़े का इस्तेमाल सुरक्षित नहीं',
    description: 'माहवारी स्वच्छता पर आयोजित कार्यशाला में महिलाओं को बताया गया कि कपड़े का इस्तेमाल संक्रमित व अस्वास्थ्यकर है, सेनेटरी पैड का प्रयोग बेहतर है।',
    image: SanitaryPadArchive2,
    date: 'May 2018',
    category: 'events',
    details: {
      location: 'हिसार, हरियाणा',
      time: '2018',
      organizer: 'महिला एवं बाल विकास विभाग'
    },
    content:
      'स्वास्थ्य जागरूकता कार्यक्रम में बताया गया कि ग्रामीण महिला अभी भी माहवारी के समय कपड़े का प्रयोग करती हैं, जो स्वास्थ्य के लिए सुरक्षित नहीं है। प्रोत्साहित किया गया कि महिलाएं सेनेटरी पैड का ही इस्तेमाल करें और वेंडिंग मशीनों की मदद से सस्ता पैड प्राप्त करें। कॉलेजों और आंगनबाड़ी में वेंडिंग मशीन लगाने की योजना पर काम शुरू हो गया है।[attached_image:3]'
  },
  {
    id: 7,
    type: 'media',
    title: 'वुमन कॉलेज में वेंडिंग मशीन से ₹5 में सेनेटरी पैड',
    description: 'प्रशासन एवं सामाजिक संस्थाओं के सहयोग से सस्ती दर पर सेनेटरी पैड उपलब्ध कराने हेतु वूमन कॉलेज में वेंडिंग मशीन शुरू की गई।',
    image: SanitaryPadArchive1,
    date: 'May 2018',
    category: 'media',
    content:
      'दिल्ली बाईपास स्थित वुमन कॉलेज में पहली सेनेटरी पैड वेंडिंग मशीन स्थापित की गई है। छात्राओं को स्वच्छता की जानकारी दी गई और मशीन के संचालन संबंधी ट्रेनिंग दी गई। महाविद्यालय के कर्मचारी द्वारा मशीन ऑपरेट की जाएगी और छात्राएं खुद 5 रुपये डालकर पैड निकाल पाएंगी। इस पहल के तहत ग्रामीण इलाकों एवं स्कूलों में भी मशीन लगाई जाएगी।[attached_image:4]'
  },
  {
    id: 8,
    type: 'media',
    title: 'COVID-19 Crisis Response by Vyomini Social Foundation',
    description: 'Coverage on steps taken by Vyomini Social Foundation during the COVID-19 global crisis including essential supplies and awareness.',
    image: CovidReliefImg,
    date: 'April 2020',
    category: 'media',
    content:
      'During the COVID-19 pandemic, Vyomini Social Foundation took multiple initiatives — distribution of ration kits, masks, sanitizers, PPE kits, and spreading awareness on COVID safety through community networks. Women leaders played a vital role in supporting their communities during the crisis.'
  },
  {
    id: 9,
    type: 'event',
    title: 'Village-Level Training: Padman & Padwoman',
    description: 'Awareness drive on menstrual health and training at village level to prepare community leaders as Padman-Padwoman.',
    image: PadmanTrainingImg,
    date: 'Feb 22, 2020',
    category: 'events',
    details: {
      time: 'Training started on March 7',
      organizer: 'Local Administration with Vyomini Foundation',
      location: 'Haryana'
    },
    content:
      'To break taboos around menstrual hygiene, master trainers were prepared under this initiative. Community-level awareness sessions were organized to empower women and men as local champions of menstrual health.'
  },
  {
    id: 10,
    type: 'media',
    title: 'Raising Financially Savvy Daughters',
    description: 'Article in The Daily Guardian on empowering daughters with financial literacy for a secure future.',
    image: FinancialDaughtersImg,
    date: 'Nov 23, 2024',
    category: 'media',
    content:
      'The Daily Guardian featured a full-page article discussing how financial independence is key for girls today. It highlights lessons on credit, saving, taxation, and work-life balance for women entrepreneurs.'
  },
  {
    id: 11,
    type: 'media',
    title: 'Startups: Finding Solutions to Pressing Problems',
    description: 'Times coverage on how startups like Vyomini are solving social and economic challenges in India.',
    image: StartupCoverageImg,
    date: '2023',
    category: 'media',
    content:
      'Prachi Kaushik, founder of Vyomini, shared how social enterprises play a vital role in addressing healthcare, menstrual health, and rural entrepreneurship. The article emphasizes the role of startups in nation-building and social development.'
  },
  {
  id: 12,
  type: 'media',
  title: 'Your Hygiene Regime Can Impact Your Periods',
  description: 'Article by Prachi Kaushik on menstrual hygiene and its impact on women’s health, published in Times of India.',
  image: HygieneRegimeImg,
  date: '2023',
  category: 'media',
  content:
    'Prachi Kaushik shared insights on menstrual hygiene, emphasizing its importance in preventing infections, reducing stigma, and improving overall well-being of women.'
},
{
  id: 13,
  type: 'recognition',
  title: 'प्रशिक्षण प्राप्त बालिकाओं को मिला सम्मान',
  description: 'Vyomini Social Enterprise organized a certificate and recognition event for rural girls trained under skill development programs.',
  image: GirlsTrainingAwardImg,
  date: '2023',
  category: 'recognition',
  content:
    'More than 2000 rural girls successfully completed training in digital literacy, sewing, design, cyber safety, and communication skills. They were awarded certificates and honored for their achievements, many now pursuing entrepreneurship or jobs.'
}
    
  ];

  const categories = [
    { id: 'all', label: 'All Archives', icon: Newspaper },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'media', label: 'Media Coverage', icon: Newspaper },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Users }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'award': return <Award className="w-5 h-5" />;
      case 'media': return <Newspaper className="w-5 h-5" />;
      case 'event': return <Calendar className="w-5 h-5" />;
      case 'achievement': return <Users className="w-5 h-5" />;
      case 'recognition': return <Award className="w-5 h-5" />;
      case 'impact': return <Users className="w-5 h-5" />;
      default: return <Newspaper className="w-5 h-5" />;
    }
  };

  const renderLightboxContent = (item) => {
    switch (item.type) {
      case 'event':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="satoshi-medium">Date: {item.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="satoshi-medium">Time: {item.details.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="satoshi-medium">Location: {item.details.location}</span>
              </div>
            </div>
            <p className="satoshi-regular text-gray-600">{item.content}</p>
          </div>
        );
      
      case 'impact':
        return (
          <div className="space-y-6">
            <h4 className="satoshi-bold text-lg text-gray-900">Impact Statistics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="satoshi-bold text-2xl text-primary">{item.stats.womenReached}</div>
                <div className="satoshi-regular text-sm">Women Reached</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="satoshi-bold text-2xl text-primary">{item.stats.statesCovered}</div>
                <div className="satoshi-regular text-sm">States Covered</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="satoshi-bold text-2xl text-primary">{item.stats.womenTrained}</div>
                <div className="satoshi-regular text-sm">Health Trainers</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="satoshi-bold text-2xl text-primary">{item.stats.manufacturers}</div>
                <div className="satoshi-regular text-sm">Women in Manufacturing</div>
              </div>
            </div>
          </div>
        );
      
      case 'media':
        return (
          <div className="space-y-4">
            {item.socialHandle && (
              <div className="flex items-center gap-2">
                <span className="satoshi-medium text-primary">Social Handle:</span>
                <span className="satoshi-regular">{item.socialHandle}</span>
              </div>
            )}
            <p className="satoshi-regular text-gray-600 leading-relaxed">
              {item.content}
            </p>
          </div>
        );
      
      default:
        return (
          <p className="satoshi-regular text-gray-600 leading-relaxed">
            {item.content || item.description}
          </p>
        );
    }
  };

  return (
    <section className="bg-secondary py-16">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="satoshi-bold text-3xl md:text-4xl lg:text-5xl text-primary drop-shadow-md mb-4 mt-10">
            Archives
          </h2>
          <p className="satoshi-regular text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Prachi Kaushik's journey through awards, media features, speaking engagements, 
            and milestones in women empowerment and social entrepreneurship.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full satoshi-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-secondary shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Archive Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-full">
                  {getIconForType(item.type)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-secondary text-sm satoshi-bold">{item.date}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="satoshi-bold text-xl text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="satoshi-regular text-gray-600 line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-sm satoshi-medium rounded-full">
                    {item.type.toUpperCase()}
                  </span>
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {lightboxOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-primary text-white p-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white p-3 rounded-full hover:bg-white transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative h-64 md:h-96">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-sm satoshi-medium rounded-full">
                      {selectedItem.type.toUpperCase()}
                    </span>
                    <span className="text-gray-500 satoshi-regular">{selectedItem.date}</span>
                  </div>
                  
                  <h3 className="satoshi-bold text-2xl text-gray-900 mb-4">
                    {selectedItem.title}
                  </h3>
                  
                  {renderLightboxContent(selectedItem)}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Archives;