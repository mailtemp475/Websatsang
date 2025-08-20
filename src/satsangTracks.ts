export interface AudioTrack {
  id: number;
  title: string;
  url: string;
  duration?: string;
  category: 'satsang' | 'kabir';
}

// Satsang Tracks - Spiritual Talks
export const satsangTracks: AudioTrack[] = [
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
];

// Yahan aap aur Satsang tracks add kar sakte hain:
// {
//   id: 5,
//   title: 'New Satsang Title',
//   url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/FILE_ID-0_0.mp3',
//   category: 'satsang',
// },
