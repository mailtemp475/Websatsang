import React from 'react';
import { ArrowLeft, Book, ExternalLink, Download, Heart, Home, AArrowDown as Om, Youtube, Facebook, MessageCircle } from 'lucide-react';

interface EBooksSectionProps {
  onBack: () => void;
  language: 'hi' | 'en';
}

const EBooksSection: React.FC<EBooksSectionProps> = ({ onBack, language }) => {
  const content = {
    hi: {
      title: 'आध्यात्मिक ई-बुक्स',
      subtitle: 'दिव्य ज्ञान की पुस्तकों का संग्रह',
      readButton: 'पढ़ें',
      downloadButton: 'डाउनलोड करें',
      backButton: 'वापस जाएं',
      homeButton: 'होम'
    },
    en: {
      title: 'Spiritual E-Books',
      subtitle: 'Collection of Divine Wisdom Books',
      readButton: 'Read',
      downloadButton: 'Download',
      backButton: 'Go Back',
      homeButton: 'Home'
    }
  };

  const currentContent = content[language];

  // E-Books data - आप यहाँ अपनी books add कर सकते हैं
  const ebooks = [
    {
      id: 1,
      title: language === 'hi' ? 'आध्यात्मिक ज्ञान' : 'Spiritual Wisdom',
      author: language === 'hi' ? 'संत कबीर' : 'Sant Kabir',
      description: language === 'hi' 
        ? 'कबीर दास जी की अमृत वाणी और आध्यात्मिक शिक्षाएं' 
        : 'Divine teachings and spiritual wisdom of Kabir Das',
      link: 'https://drive.google.com/file/d/170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50'
    },
    // 👇 यहाँ नई book add करें
    {
      id: 7,
      title: language === 'hi' ? 'आपकी नई बुक का नाम' : 'Your New Book Title',
      author: language === 'hi' ? 'लेखक का नाम' : 'Author Name',
      description: language === 'hi' 
        ? 'बुक का हिंदी में विवरण यहाँ लिखें' 
        : 'Write book description in English here',
      link: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50'
    },
    {
      id: 2,
      title: language === 'hi' ? 'भक्ति मार्ग' : 'Path of Devotion',
      author: language === 'hi' ? 'संत तुलसीदास' : 'Sant Tulsidas',
      description: language === 'hi' 
        ? 'भक्ति और प्रेम के मार्ग पर चलने की दिव्य शिक्षा' 
        : 'Divine guidance on the path of devotion and love',
      link: 'https://drive.google.com/file/d/170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 3,
      title: language === 'hi' ? 'ध्यान और समाधि' : 'Meditation & Samadhi',
      author: language === 'hi' ? 'स्वामी विवेकानंद' : 'Swami Vivekananda',
      description: language === 'hi' 
        ? 'ध्यान की गहराई में जाने और समाधि प्राप्त करने के उपाय' 
        : 'Methods to deepen meditation and achieve spiritual enlightenment',
      link: 'https://drive.google.com/file/d/170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 4,
      title: language === 'hi' ? 'गुरु महिमा' : 'Glory of Guru',
      author: language === 'hi' ? 'संत रहीम' : 'Sant Rahim',
      description: language === 'hi' 
        ? 'गुरु की महिमा और शिष्य के कर्तव्यों पर प्रकाश' 
        : 'Understanding the glory of Guru and duties of a disciple',
      link: 'https://drive.google.com/file/d/170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 5,
      title: language === 'hi' ? 'सत्संग माहात्म्य' : 'Importance of Satsang',
      author: language === 'hi' ? 'संत एकनाथ' : 'Sant Eknath',
      description: language === 'hi' 
        ? 'सत्संग की महिमा और आध्यात्मिक उन्नति में इसका योगदान' 
        : 'The glory of Satsang and its role in spiritual progress',
      link: 'https://drive.google.com/file/d/170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 6,
      title: language === 'hi' ? 'आत्म साक्षात्कार' : 'Self Realization',
      author: language === 'hi' ? 'परमहंस योगानंद' : 'Paramhansa Yogananda',
      description: language === 'hi' 
        ? 'आत्मा की खोज और स्वयं को जानने की यात्रा' 
        : 'Journey of self-discovery and knowing the true self',
      link: 'https://drive.google.com/file/d/170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt/view?usp=sharing',
      downloadLink: 'https://drive.google.com/uc?export=download&id=170PV0ULXdckwk3bfsJgeU2Vq-J5as0tt',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors duration-300 bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-full"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">{currentContent.backButton}</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-violet-600 p-2 rounded-full">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-transparent">
                    {currentContent.title}
                  </h1>
                </div>
              </div>
            </div>
            
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              <Home className="h-5 w-5" />
              <span className="font-medium">{currentContent.homeButton}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
            <Book className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">{currentContent.subtitle}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
              {currentContent.title}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {language === 'hi' 
              ? 'आध्यात्मिक ज्ञान से भरपूर पुस्तकों का संग्रह। अपनी आत्मिक यात्रा को समृद्ध बनाने के लिए इन दिव्य ग्रंथों का अध्ययन करें।'
              : 'A collection of books filled with spiritual wisdom. Study these divine texts to enrich your spiritual journey.'
            }
          </p>
        </div>
      </section>

      {/* E-Books Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((book) => (
              <div
                key={book.id}
                className={`${book.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 group`}
              >
                {/* Book Icon */}
                <div className={`bg-gradient-to-r ${book.color} p-4 rounded-2xl mb-6 w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Book className="h-8 w-8 text-white" />
                </div>

                {/* Book Info */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {book.title}
                </h3>
                
                <p className="text-base font-medium text-gray-600 mb-4 flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  {book.author}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {book.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-4">
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${book.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>{currentContent.readButton}</span>
                  </a>
                  
                  <a
                    href={book.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border-2 border-gray-200 hover:border-gray-300"
                  >
                    <Download className="h-5 w-5" />
                    <span>{currentContent.downloadButton}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-white/20 p-3 rounded-full">
              <Om className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">
              {language === 'hi' ? 'सत्संग पोर्टल' : 'Satsang Portal'}
            </h3>
          </div>
          
          {/* Social Media Icons */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-purple-100">
              {language === 'hi' ? 'हमसे जुड़ें' : 'Connect With Us'}
            </h4>
            <div className="flex justify-center space-x-6">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@nitin.dasssatsang"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-white/20 hover:bg-red-500 p-3 rounded-full transition-all duration-300">
                  <Youtube className="h-5 w-5 text-white" />
                </div>
              </a>
              
              {/* Facebook */}
              <a
                href="https://www.facebook.com/KahatKabirNitinDas/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-white/20 hover:bg-blue-500 p-3 rounded-full transition-all duration-300">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
              </a>
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/message/YOUR_WHATSAPP_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-white/20 hover:bg-green-500 p-3 rounded-full transition-all duration-300">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
              </a>
            </div>
          </div>
          
          <p className="text-purple-100 text-lg">
            {language === 'hi' 
              ? '🙏 आध्यात्मिक ज्ञान का प्रसार करें और दूसरों के साथ साझा करें'
              : '🙏 Spread spiritual wisdom and share with others'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EBooksSection;