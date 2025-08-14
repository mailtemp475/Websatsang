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
  { "id": 1, "title": "1) क्यों कुछ स्वयम्भू आतम ज्ञानी कबीर साहेब की वाणी", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828802658-0_0.mp3" },
  { "id": 2, "title": "2) आत्म ज्ञानी कभी किसी लोक में नहीं जाता", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828804128-0_0.mp3" },
  { "id": 3, "title": "3) ऐसा क्यों है कि बिना गुरु के कोई भी आत्म ज्ञान", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828805658-0_0.mp3" },
  { "id": 4, "title": "4) आखिर क्यो हमें जिन्दगी में किसी ना किसी गुरु की जरूरत पडती है ।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828807300-0_0.mp3" },
  { "id": 5, "title": "5) कौन होता है पूरा गुरु और कौन होता है अधूरा गुरु", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828808872-0_0.mp3" },
  { "id": 6, "title": "6) किसी भी बावन अक्षरों वाले नाम से मुक्ति क्यों नही मिल सकती। ।आइये जानें ।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828811039-0_0.mp3" },
  { "id": 7, "title": "7) आखिर वो कौन सी जगह है जहाँ परमात्मा रहता है", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828813257-0_0.mp3" },
  { "id": 8, "title": "8) कुछ लोग गुरु द्रोही क्यों हो जाते हैं ।।आइये जानें", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828814921-0_0.mp3" },
  { "id": 9, "title": "9) ये शब्द आपकी बंद आँखे खोल देगा ।। प्रेम से ध्यान लगा के सुनें", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828819276-0_0.mp3" },
  { "id": 10, "title": "10) कबीर नूरी देह के नहीं वो विदेह हैं ।। Part 1", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828820945-0_0.mp3" },
  { "id": 11, "title": "11) थे विदेह देह धर आये ।। काया कबीर कहाये ।। कबीर नूरी देह नहीं विदेह हैं ।।part", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828822981-0_0.mp3" },
  { "id": 12, "title": "12) ये शब्द समझ लिया तो आपके सब सवाल खत्म हो जाएंगे ।। अंग्रेज तक नहीं समझ पाए अप", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828831012-0_0.mp3" },
  { "id": 13, "title": "13) ध्यान और अध्यान से परे है सहज ध्यान ।। कहत कबीर सुनो भाई साधो ।।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828838161-0_0.mp3" },
  { "id": 14, "title": "14) रामपाल जी के भाई महेंद्र जी अपने मुख से सत्य उजागर करते हुय ।। कहत कबीर सुनो", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828843256-0_0.mp3" },
  { "id": 15, "title": "15) पूरे गुरु की सैन बिना तेरी कैसे छूटे बकवाद ।।सतगुरु कबीर अनमोल भजन ।।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828844123-0_0.mp3" },
  { "id": 16, "title": "16) आखिर वो कौनसी एकमात्र विधि है जिसके द्वारा हम आत्मा की सच्ची पूजा कर सकते हैं", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828846644-0_0.mp3" },
  { "id": 17, "title": "17) अगर किसी असली संत को कोई अज्ञानी बोले या निंदा करे तो क्या होता है ।।आइये जान", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828850548-0_0.mp3" },
  { "id": 18, "title": "18) क्या ये चौरासी की जेल रुपी दुनिया परमात्मा ने बनाई है ।। कदापि नहीं ।। आइये ज", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828854545-0_0.mp3" },
  { "id": 19, "title": "19) चार राम कौन हैं ।।क्यों कुछ पाखण्डी लोग अज्ञानता वश पाँचवा छठा सातवां राम लिख", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828858978-0_0.mp3" },
  { "id": 20, "title": "20) अगर ये समझ लिया तो समझो सब समझ लिया ।।दुविधा ख़तम और आत्म भक्त्ति शुरू ।।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828864026-0_0.mp3" },
  { "id": 21, "title": "21) ॐ और एक औकार मे अंतर", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828870451-0_0.mp3" },
  { "id": 22, "title": "22) इसको सुनकर बताओ आपकी जाती क्या क्या है भाग 1", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828872236-0_0.mp3" },
  { "id": 23, "title": "23) हम सब की 1 ही जाती है वो है इंसान ।।हम सबका एक ही धर्म है वो है इंसानियत ।। p", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828877287-0_0.mp3" },
  { "id": 24, "title": "24) अव्वल अल्लाह नूर उपाया कुदरत के सब बन्दे ।। कहे कबीर सुनो भाई साधो।।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828881552-0_0.mp3" },
  { "id": 25, "title": "25) क्या आत्मा और परमात्मा साकार है ।। आइये जानें ।।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828886117-0_0.mp3" },
  { "id": 26, "title": "26) कैसा होता है आत्म ज्ञान", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828891678-0_0.mp3" },
  { "id": 27, "title": "27) जपो रे मन केवल नाम कबीर", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828898953-0_0.mp3" },
  { "id": 28, "title": "28) कर नैनो दीदार महल (देह) में प्यारा(काल) है ।। part 1 ।।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828908097-0_0.mp3" },
  { "id": 29, "title": "29) आदि नाम हम भाख सुनाया मूरख जीव समझ नहीं पाया ।।आखिर ऐसा क्यों बोला साहेब ने ।", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828912854-0_0.mp3" },
  { "id": 30, "title": "30) सोह और सोहम मे क्या अंतर है", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828917557-0_0.mp3" },
  { "id": 31, "title": "31) कोई नाम न जाने मेरा", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828923395-0_0.mp3" },
  { "id": 32, "title": "32) गीता कहे पुकार के आत्म ज्ञान निज सार", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828931917-0_0.mp3" },
  { "id": 33, "title": "33) ॐ तत सत और ॐ तत असत", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828943125-0_0.mp3" },
  { "id": 34, "title": "34) लोक अलोक शब्द है भाई जीन जाना शंस्य जाई", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828946842-0_0.mp3" },
  { "id": 35, "title": "35) सारी दुनिया के प्रेमी हंसो को मालिक का संदेश", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828953729-0_0.mp3" },
  { "id": 36, "title": "37) मोहे देखत आवे हांसी पानी मे मीन पियासी", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828959791-0_0.mp3" },
  { "id": 37, "title": "38) चेतना और म्रत मे अंतर", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828965975-0_0.mp3" },
  { "id": 38, "title": "39) निज स्वरूप और अहम ब्रहमस्मि मे क्या अंतर है", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828972936-0_0.mp3" },
  { "id": 39, "title": "40) झगड़ा बड़ा एक राजा राम जो निरवारे सो निर्वान", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828980656-0_0.mp3" },
  { "id": 40, "title": "41) क्या जीव की मुक्ति नारियल फोड़ने या पान चबाने से हो सकती है", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828986281-0_0.mp3" },
  { "id": 41, "title": "42) मदन साहब की वाणी सही से छपने की दास की विनती", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828991560-0_0.mp3" },
  { "id": 42, "title": "43) मोको कहा ढूंढे रे बंदे मैं तो तेरे पास मे", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828998721-0_0.mp3" },
  { "id": 43, "title": "44) कबीर मदन के मिलाप को झूठा कहने वाले पाले पंथ", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749829006466-0_0.mp3" },
  { "id": 44, "title": "45) सत्य सारे जगत के लिए एक है", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749829020707-0_0.mp3" },
  { "id": 45, "title": "47) अरी बाई गोविंद नाम न बिसरो", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749829023220-0_0.mp3" },
  { "id": 46, "title": "48) संतों घर मे झगड़ा भारी", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749829033252-0_0.mp3" },
  { "id": 47, "title": "49) संतों वह घर सबसे न्यारा जहाँ पूर्ण पुरुष हमारा", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749829039355-0_0.mp3" },
  { "id": 48, "title": "50) साधो ये मुर्दों का देश एक संतों का देश निराला", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749829045544-0_0.mp3" },
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
    </div>
  );
}

export default App;
