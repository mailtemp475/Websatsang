export interface AudioTrack {
  id: number;
  title: string;
  url: string;
  duration?: string;
  category: 'satsang' | 'kabir';
}

// Kabir Bhajan Tracks - Archive.org se high quality audio
export const kabirTracks: AudioTrack[] = [
  {
    id: 501,
    title: 'भला हुआ मेरी मटकी टूट गई - अबीदा परवीन',
    url: 'https://ia600607.us.archive.org/10/items/HindiBhajansOfKabirByJagjitSinghOtherMp3/Abida%20sings%20Kabir%20-%20Bhala%20Hua%20Meri%20Mutki%20Toot%20Gayee.mp3',
    category: 'kabir',
  },
  {
    id: 502,
    title: 'झीनी झीनी बीनी चदरिया - जगजीत सिंह',
    url: 'https://ia800607.us.archive.org/10/items/HindiBhajansOfKabirByJagjitSinghOtherMp3/Robert%20Bly%20reads%20Kabir.mp3',
    category: 'kabir',
  },
  {
    id: 503,
    title: 'मन लागो मेरो यार फकीरी में - जगजीत सिंह',
    url: 'https://ia800607.us.archive.org/10/items/HindiBhajansOfKabirByJagjitSinghOtherMp3/robert%20Bly%20reads%20Rumi-2-%28We%20should%20ask%20god....%29.mp3',
    category: 'kabir',
  },
  {
    id: 504,
    title: 'निर्गुण आग लगाई - जगजीत सिंह',
    url: 'https://ia600607.us.archive.org/10/items/HindiBhajansOfKabirByJagjitSinghOtherMp3/Jagjit%20Singh%20-%20Nirgun%20Aag%20Lagayee.mp3',
    category: 'kabir',
  },
  {
    id: 505,
    title: 'साधो ये मुर्दन का गांव - जगजीत सिंह',
    url: 'https://ia600607.us.archive.org/10/items/HindiBhajansOfKabirByJagjitSinghOtherMp3/Abida%20sings%20Kabir%20-%20Bhala%20Hua%20Meri%20Mutki%20Toot%20Gayee.mp3',
    category: 'kabir',
  },
];

// Yahan aap aur Kabir Bhajan tracks add kar sakte hain:
// {
//   id: 6,
//   title: 'New Kabir Bhajan Title',
//   url: 'https://archive.org/path/to/audio.mp3',
//   category: 'kabir',
// },