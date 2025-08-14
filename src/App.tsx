<<<<<<< HEAD
import React, { useState } from 'react';
import { BookOpen, Youtube, Download, AArrowDown as Om, Heart, Music, Globe, MessageCircleQuestion, Book, Facebook, MessageCircle } from 'lucide-react';
import ContactForm from './components/ContactForm';
import EBooksSection from './components/EBooksSection';

function App() {
  const [language, setLanguage] = useState('hi'); // 'hi' for Hindi, 'en' for English
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'ebooks'

  const content = {
    hi: {
      title: 'सत्संग पोर्टल',
      subtitle: 'दिव्य ज्ञान',
      tagline: 'आध्यात्मिक यात्रा यहाँ से शुरू होती है',
      heroSubtitle: 'सत्संग पोर्टल',
      heroTitle: 'Satsag portl me',
      heroDescription: 'ब्लॉग, वीडियो और डाउनलोड सामग्री के माध्यम से दिव्य ज्ञान की खोज करें। आपकी आध्यात्मिक यात्रा यहाँ से शुरू होती है।',
      ctaTitle: 'आज ही अपनी आध्यात्मिक यात्रा शुरू करें',
      ctaDescription: 'हजारों साधकों के साथ जुड़ें जिन्होंने हमारे प्लेटफॉर्म के माध्यम से शांति, ज्ञान और दिव्य संबंध पाया है।',
      ctaButton: 'खोजना शुरू करें',
      exploreButton: 'अभी देखें',
      footerText: 'अपने दिल की सुनें, अपना रास्ता खोजें',
      madeWithLove: 'प्रेम से बनाया गया',
      copyright: '2025 सत्संग पोर्टल। दिव्य ज्ञान और आध्यात्मिक विकास का प्रसार।',
      features: [
        {
          title: 'ऑडियो सत्संग',
          description: 'हमारे प्रेरणादायक ऑडियो सत्संग और शिक्षाओं के संग्रह के माध्यम से आध्यात्मिक ज्ञान का अन्वेषण करें'
        },
        {
          title: 'ई-बुक्स',
          description: 'आध्यात्मिक ज्ञान से भरपूर पुस्तकों का संग्रह पढ़ें और डाउनलोड करें'
        },
        {
          title: 'यूट्यूब चैनल',
          description: 'लाइव सत्संग सत्र, आध्यात्मिक प्रवचन और दिव्य शिक्षाएं देखें'
        },
        {
          title: 'सत्संग डाउनलोड',
          description: 'ऑफलाइन आध्यात्मिक अभ्यास और ध्यान के लिए यूट्यूब सत्संग वीडियो डाउनलोड करें'
        },
        {
          title: 'सवाल जवाब',
          description: 'आध्यात्मिक प्रश्नों के उत्तर पाएं और अपनी शंकाओं का समाधान करें'
        }
      ]
    },
    en: {
      title: 'Satsang Portal',
      subtitle: 'Divine Wisdom',
      tagline: 'Spiritual Journey Begins Here',
      heroTitle: 'Welcome to',
      heroSubtitle: 'Satsang Portal',
      heroDescription: 'Discover divine wisdom through blogs, videos, and downloadable content. Your spiritual journey towards enlightenment starts here.',
      ctaTitle: 'Begin Your Spiritual Journey Today',
      ctaDescription: 'Join thousands of seekers who have found peace, wisdom, and divine connection through our platform.',
      ctaButton: 'Start Exploring',
      exploreButton: 'Explore Now',
      footerText: 'Follow your heart, find your path',
      madeWithLove: 'Made with love',
      copyright: '2025 Satsang Portal. Spreading divine wisdom and spiritual growth.',
      features: [
        {
          title: 'Satsang Blogs',
          description: 'Explore spiritual wisdom through our collection of inspiring Satsang blogs and teachings'
        },
        {
          title: 'E-Books',
          description: 'Read and download our collection of spiritual wisdom books and sacred texts'
        },
        {
          title: 'YouTube Channel',
          description: 'Watch live Satsang sessions, spiritual discourses, and divine teachings'
        },
        {
          title: 'Download Satsang',
          description: 'Download YouTube Satsang videos for offline spiritual practice and meditation'
        },
        {
          title: 'Q&A Sessions',
          description: 'Get answers to spiritual questions and resolve your doubts through divine guidance'
        }
      ]
    }
  };

  const currentContent = content[language];

  const features = [
    {
      icon: BookOpen,
      title: currentContent.features[0].title,
      description: currentContent.features[0].description,
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      link: 'https://kahatkabirsunobhaisadho.blogspot.com/',
      openInSameTab: false
    },
    {
      icon: Book,
      title: currentContent.features[1].title,
      description: currentContent.features[1].description,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      onClick: () => setCurrentView('ebooks')
    },
    {
      icon: Youtube,
      title: currentContent.features[2].title,
      description: currentContent.features[2].description,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100',
      link: 'https://www.youtube.com/@Nitin_das_satsang/streams',
      openInSameTab: false
    },
    {
      icon: Download,
      title: currentContent.features[3].title,
      description: currentContent.features[3].description,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      link: 'https://easyt.io/',
      openInSameTab: false
    },
    {
      icon: MessageCircleQuestion,
      title: currentContent.features[4].title,
      description: currentContent.features[4].description,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      onClick: () => setIsContactFormOpen(true)
    }
  ];

  // If E-Books view is active, show E-Books page
  if (currentView === 'ebooks') {
    return <EBooksSection language={language} onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-2 rounded-full">
                <Om className="h-6 w-6 text-white" />
              </div>
              <h1 
                className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity duration-300"
                onClick={() => window.location.reload()}
              >
                {currentContent.title}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-orange-500" />
              <span className="text-gray-600 font-medium">{currentContent.subtitle}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <Music className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">{currentContent.tagline}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
  {language === 'hi' ? (
    <>
      <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
        सत्संग पोर्टल
      </span>{' '}
      में आपका स्वागत है
    </>
  ) : (
    <>
      {currentContent.heroTitle}{' '}
      <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
        Satsang Portal
      </span>
    </>
  )}
</h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {currentContent.heroDescription}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              if (feature.onClick) {
                return (
                  <div
                    key={index}
                    onClick={feature.onClick}
                    className={`${feature.bgColor} ${feature.hoverColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group border border-white/50`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      
                      <div className={`bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-200 inline-block`}>
                        {currentContent.exploreButton}
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <a
                  href={feature.link}
                  target={feature.openInSameTab ? '_self' : '_blank'}
                  rel={feature.openInSameTab ? undefined : 'noopener noreferrer'}
                  key={index}
                  className={`${feature.bgColor} ${feature.hoverColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group border border-white/50`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    <div className={`bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-200 inline-block`}>
                      {currentContent.exploreButton}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {currentContent.ctaTitle}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {currentContent.ctaDescription}
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {currentContent.ctaButton}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-2 rounded-full">
                <Om className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">{currentContent.title}</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-orange-100 rounded-full p-1">
              <Globe className="h-4 w-4 text-orange-600 ml-2" />
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'hi'
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-orange-600 hover:bg-orange-200'
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-orange-600 hover:bg-orange-200'
                }`}
              >
                English
              </button>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4 text-orange-300">
              {language === 'hi' ? 'हमसे जुड़ें' : 'Connect With Us'}
            </h3>
            <div className="flex justify-center space-x-6">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@nitin.dasssatsang"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 hover:transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full shadow-lg group-hover:shadow-xl group-hover:from-red-400 group-hover:to-red-500 transition-all duration-300">
                  <Youtube className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  YouTube
                </span>
              </a>
              
              {/* Facebook */}
              <a
                href="https://www.facebook.com/KahatKabirNitinDas/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 hover:transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full shadow-lg group-hover:shadow-xl group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                  <Facebook className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  Facebook
                </span>
              </a>
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/message/YOUR_WHATSAPP_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-2 hover:transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full shadow-lg group-hover:shadow-xl group-hover:from-green-400 group-hover:to-green-500 transition-all duration-300">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              {language === 'hi' 
                ? '🙏 आध्यात्मिक ज्ञान का प्रसार करें और दूसरों के साथ साझा करें'
                : '🙏 Spread spiritual wisdom and share with others'
              }
            </p>
          </div>
        </div>
        
        {/* Contact Form Modal */}
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)} 
          language={language}
        />
      </footer>
=======
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Search, Music, Gauge } from 'lucide-react';

interface AudioTrack {
  id: number;
  title: string;
  url: string;
  duration?: string;
}

// Manual Track List - Aap yahan manually saare tracks add kar sakte hain
const manualTracks: AudioTrack[] = [
  {
    id: 1,
    title: '1)क्यों कुछ स्वयम्भू आतम ज्ञानी कबीर साहेब की वाणी',
    url: 'https://d1voyzlrdxkjko.cloudfront.net/1749828804128-0_0.mp3',
  },
  {
    id: 2,
    title: '2)आत्म ज्ञानी कभी किसी लोक में नहीं जाता',
    url: 'https://d1voyzlrdxkjko.cloudfront.net/1749828802658-0_0.mp3',
  },
  {
    id: 3,
    title: '3)ऐसा क्यों है कि बिना गुरु के कोई भी आत्म ज्ञान',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828805658-0_0.mp3',
  },
  
   {
     id: 4,
     title: '4)आखिर क्यो हमें जिन्दगी में किसी ना किसी गुरु की जरूरत पडती है ।',
     url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828807300-0_0.mp3',
  },
   {
     id: 5,
     title: '5)कौन होता है पूरा गुरु और कौन होता है अधूरा गुरु',
     url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828808872-0_0.mp3',
  },
   {
     id: 6,
     title: '6)किसी भी बावन अक्षरों वाले नाम से मुक्ति क्यों नही मिल सकती। ।आइये जानें ।',
     url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828811039-0_0.mp3',
  },
   {
     id: 7,
     title: '7)आखिर वो कौन सी जगह है जहाँ परमात्मा रहता है',
     url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828813257-0_0.mp3',
  },
   {
     id: 8,
     title: '8)कुछ लोग गुरु द्रोही क्यों हो जाते हैं ।।आइये जानें',
     url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828814921-0_0.mp3',
  },
   {
     id: 9,
     title: '9)ये शब्द आपकी बंद आँखे खोल देगा ।। प्रेम से ध्यान लगा के सुनें',
     url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828819276-0_0.mp3',
  },
   {
     id: 10,
     title: '10)कबीर नूरी देह के नहीं वो विदेह हैं ।। Part 1',
     url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828820945-0_0.mp3',
  },
  {
    id: 11,
    title: '11)थे विदेह देह धर आये ।। काया कबीर कहाये ।। कबीर नूरी देह नहीं विदेह हैं ।।part',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828822981-0_0.mp3',
},
{
    id: 12,
    title: '12)ये शब्द समझ लिया तो आपके सब सवाल खत्म हो जाएंगे ।। अंग्रेज तक नहीं समझ पाए अप',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828831012-0_0.mp3',
},
{
    id: 13,
    title: '13)ध्यान और अध्यान से परे है सहज ध्यान ।। कहत कबीर सुनो भाई साधो ।।',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828838161-0_0.mp3',
},
{
    id: 14,
    title: '14)रामपाल जी के भाई महेंद्र जी अपने मुख से सत्य उजागर करते हुय ।। कहत कबीर सुनो',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828843256-0_0.mp3',
},
{
    id: 15,
    title: '15)पूरे गुरु की सैन बिना तेरी कैसे छूटे बकवाद ।।सतगुरु कबीर अनमोल भजन ।।',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828844123-0_0.mp3',
},
{
    id: 16,
    title: '16)आखिर वो कौनसी एकमात्र विधि है जिसके द्वारा हम आत्मा की सच्ची पूजा कर सकते हैं',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828846644-0_0.mp3',
},
{
    id: 17,
    title: '17)अगर किसी असली संत को कोई अज्ञानी बोले या निंदा करे तो क्या होता है ।।आइये जान',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828850548-0_0.mp3',
},
{
    id: 18,
    title: '18)क्या ये चौरासी की जेल रुपी दुनिया परमात्मा ने बनाई है ।। कदापि नहीं ।। आइये ज',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828854545-0_0.mp3',
},
{
    id: 19,
    title: '19)चार राम कौन हैं ।।क्यों कुछ पाखण्डी लोग अज्ञानता वश पाँचवा छठा सातवां राम लिख',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828858978-0_0.mp3',
},
{
    id: 20,
    title: '20)अगर ये समझ लिया तो समझो सब समझ लिया ।।दुविधा ख़तम और आत्म भक्त्ति शुरू ।।',
    url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/1749828864026-0_0.mp3',
},

  // Yahan aap aur tracks add kar sakte hain:
  // {
  //   id: 5,
  //   title: 'Another Track',
  //   url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/ANOTHER_FILE_ID-0_0.mp3',
  // },
];

function App() {
  const [tracks] = useState<AudioTrack[]>(manualTracks);
  const [trackDurations, setTrackDurations] = useState<{[key: number]: string}>({});
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [wasPlayingBeforeHidden, setWasPlayingBeforeHidden] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // PWA Installation
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // PWA Install Prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowInstallButton(false);
    }
    
    setDeferredPrompt(null);
  };

  // Auto-fetch duration for all tracks
  useEffect(() => {
    const fetchDurations = async () => {
      const durations: {[key: number]: string} = {};
      
      for (const track of tracks) {
        try {
          const audio = new Audio();
          audio.preload = 'metadata';
          
          await new Promise((resolve, reject) => {
            audio.addEventListener('loadedmetadata', () => {
              const duration = audio.duration;
              if (!isNaN(duration)) {
                const minutes = Math.floor(duration / 60);
                const seconds = Math.floor(duration % 60);
                durations[track.id] = `${minutes}:${seconds.toString().padStart(2, '0')}`;
              } else {
                durations[track.id] = 'Loading...';
              }
              resolve(void 0);
            });
            
            audio.addEventListener('error', () => {
              durations[track.id] = 'Error';
              resolve(void 0);
            });
            
            // Set timeout to avoid hanging
            setTimeout(() => {
              durations[track.id] = 'Unknown';
              resolve(void 0);
            }, 10000);
            
            audio.src = track.url;
          });
        } catch (error) {
          durations[track.id] = 'Error';
        }
      }
      
      setTrackDurations(durations);
    };
    
    fetchDurations();
  }, [tracks]);

  const currentTrack = tracks[currentTrackIndex];
  const filteredTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentTrackIndex < tracks.length - 1) {
        setCurrentTrackIndex(currentTrackIndex + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, tracks.length]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Page Visibility API - Pause when user leaves, resume when returns
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        // User left the page/tab
        if (isPlaying) {
          setWasPlayingBeforeHidden(true);
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        // User returned to the page/tab
        if (wasPlayingBeforeHidden) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            setWasPlayingBeforeHidden(false);
          }).catch((error) => {
            console.error('Error resuming audio:', error);
            setWasPlayingBeforeHidden(false);
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, wasPlayingBeforeHidden]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = async (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setTimeout(async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        }
      }
    }, 100);
  };

  const previousTrack = () => {
    if (currentTrackIndex > 0) {
      playTrack(currentTrackIndex - 1);
    }
  };

  const nextTrack = () => {
    if (currentTrackIndex < tracks.length - 1) {
      playTrack(currentTrackIndex + 1);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white safe-area-inset">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Music className="w-12 h-12 text-white mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Spiritual Satsang
            </h1>
          </div>
          
          {/* PWA Install Button */}
          {showInstallButton && (
            <div className="mt-4">
              <button
                onClick={handleInstallClick}
                className="px-6 py-3 bg-gradient-to-r from-white to-gray-200 text-black rounded-xl font-semibold shadow-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105"
              >
                📱 Install App
              </button>
              <p className="text-gray-400 text-sm mt-2">Install for better mobile experience</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Track List */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tracks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
            </div>

            <div className="h-96 overflow-y-auto custom-scrollbar">
              <h2 className="text-xl font-semibold mb-4 text-white">Track List ({filteredTracks.length})</h2>
              <div className="space-y-2">
                {filteredTracks.map((track, index) => {
                  const originalIndex = tracks.findIndex(t => t.id === track.id);
                  return (
                    <div
                      key={track.id}
                      onClick={() => playTrack(originalIndex)}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                        originalIndex === currentTrackIndex
                          ? 'bg-white/20 border border-white/50'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-sm truncate">{track.title}</h3>
                          <p className="text-gray-400 text-xs">Track {track.id}</p>
                        </div>
                        <span className="text-gray-400 text-xs">
                          {trackDurations[track.id] || 'Loading...'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Player */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center shadow-2xl">
                <Music className="w-16 h-16 text-black" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{currentTrack.title}</h2>
              <p className="text-gray-400">Track {currentTrack.id} of {tracks.length}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div
                className="w-full h-2 bg-white/10 rounded-full cursor-pointer"
                onClick={seek}
              >
                <div
                  className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-300"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <button
                onClick={previousTrack}
                disabled={currentTrackIndex === 0}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <SkipBack className="w-6 h-6" />
              </button>

              <button
                onClick={togglePlay}
                className="p-4 rounded-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-black" />
                ) : (
                  <Play className="w-8 h-8 text-black ml-1" />
                )}
              </button>

              <button
                onClick={nextTrack}
                disabled={currentTrackIndex === tracks.length - 1}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <SkipForward className="w-6 h-6" />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Volume2 className="w-5 h-5 text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-32 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #ffffff 0%, #ffffff ${volume * 100}%, rgba(255,255,255,0.1) ${volume * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
              <span className="text-gray-400 text-sm">{Math.round(volume * 100)}%</span>
            </div>

            {/* Playback Speed Control */}
            <div className="flex items-center justify-center space-x-4">
              <Gauge className="w-5 h-5 text-gray-400" />
              <div className="flex space-x-2">
                {[0.75, 1, 1.25, 1.5, 2].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setPlaybackRate(speed)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                      playbackRate === speed
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
              <span className="text-gray-400 text-sm">Speed: {playbackRate}x</span>
            </div>

            {/* Audio Element */}
            <audio
              ref={audioRef}
              src={currentTrack.url}
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>
        </div>

      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid black;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid black;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        /* PWA Safe Area Support */
        .safe-area-inset {
          padding-top: env(safe-area-inset-top);
          padding-bottom: env(safe-area-inset-bottom);
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
        }
        
        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Touch-friendly controls */
          button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Prevent zoom on input focus */
          input[type="range"] {
            font-size: 16px;
          }
        }
        
        /* Hide scrollbar but keep functionality */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.05);
        }
      `}</style>
>>>>>>> cc91286f49c38c944f6491b55fc3892ac2a057a7
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> cc91286f49c38c944f6491b55fc3892ac2a057a7
