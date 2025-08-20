export interface AudioTrack {
  id: number;
  title: string;
  url: string;
  duration?: string;
  category: 'satsang' | 'kabir';
}

// Satsang Tracks - Spiritual Talks
export const satsangTracks: AudioTrack[] = [
 { "id": 1, "title": "1) क्यों कुछ स्वयम्भू आतम ज्ञानी कबीर साहेब की वाणी", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828802658-0_0.mp3" ,"category": 'satsang'},
  { "id": 2, "title": "2) आत्म ज्ञानी कभी किसी लोक में नहीं जाता", "url": "https://d1voyzlrdxkjko.cloudfront.net/1749828804128-0_0.mp3" ,"category": 'satsang'},

  
];

// Yahan aap aur Satsang tracks add kar sakte hain:
// {
//   id: 5,
//   title: 'New Satsang Title',
//   url: 'https://infoogy.s3.ap-south-1.amazonaws.com/testing/satsang/FILE_ID-0_0.mp3',
//   category: 'satsang',
// },
