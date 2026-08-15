/**
 * MOODIFY - Emotion-Based Music Discovery & YouTube Auto-Launcher
 * Automatically Opens and Plays Songs Directly on YouTube
 */

// ==========================================================================
// 1. EMOTIONS DATASET (10 CORE EMOTIONS)
// ==========================================================================
const EMOTIONS_DATA = [
  {
    id: "happy",
    name: "Happy / Joyful",
    tag: "Sunshine & Euphoria",
    icon: "☀️",
    description: "Bright, cheerful & uplifting tunes to fill you with positive energy and smiles.",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%)",
    accent: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.45)",
    theme: "happy"
  },
  {
    id: "sad",
    name: "Sad / Melancholy",
    tag: "Deep & Healing",
    icon: "🌧️",
    description: "Emotional, soulful melodies for reflection, heartache, and peaceful release.",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
    accent: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.45)",
    theme: "sad"
  },
  {
    id: "energetic",
    name: "Energetic / Workout",
    tag: "Adrenaline & Hype",
    icon: "⚡",
    description: "High-tempo beats, motivational anthems, and power-packed gym energy.",
    gradient: "linear-gradient(135deg, #991b1b 0%, #ef4444 50%, #f97316 100%)",
    accent: "#ef4444",
    glow: "rgba(239, 68, 68, 0.5)",
    theme: "energetic"
  },
  {
    id: "calm",
    name: "Calm / Relaxed",
    tag: "Serenity & Chill",
    icon: "🍃",
    description: "Gentle acoustic tones, peaceful ambient sounds, and relaxing lo-fi.",
    gradient: "linear-gradient(135deg, #065f46 0%, #10b981 50%, #06b6d4 100%)",
    accent: "#10b981",
    glow: "rgba(16, 185, 129, 0.45)",
    theme: "calm"
  },
  {
    id: "romantic",
    name: "Romantic / In Love",
    tag: "Warmth & Passion",
    icon: "💖",
    description: "Sweet serenades, heartwarming love songs, and romantic acoustic tracks.",
    gradient: "linear-gradient(135deg, #831843 0%, #ec4899 50%, #f43f5e 100%)",
    accent: "#ec4899",
    glow: "rgba(236, 72, 153, 0.45)",
    theme: "romantic"
  },
  {
    id: "focus",
    name: "Focus / Study",
    tag: "Deep Flow State",
    icon: "🎧",
    description: "Instrumental, neo-classical, and low-distraction rhythms for deep work.",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #8b5cf6 50%, #a855f7 100%)",
    accent: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.45)",
    theme: "focus"
  },
  {
    id: "nostalgic",
    name: "Nostalgic / Retro",
    tag: "Old Memories",
    icon: "📼",
    description: "Timeless 80s/90s classics and retro synth tracks to take you back in time.",
    gradient: "linear-gradient(135deg, #78350f 0%, #d97706 50%, #f59e0b 100%)",
    accent: "#d97706",
    glow: "rgba(217, 119, 6, 0.45)",
    theme: "nostalgic"
  },
  {
    id: "angry",
    name: "Intense / Angry",
    tag: "Pure Catharsis",
    icon: "🔥",
    description: "Hard-hitting rock, intense heavy bass, and fiery tracks to vent your raw emotions.",
    gradient: "linear-gradient(135deg, #4c0519 0%, #e11d48 50%, #9f1239 100%)",
    accent: "#e11d48",
    glow: "rgba(225, 29, 72, 0.5)",
    theme: "angry"
  },
  {
    id: "party",
    name: "Party / Dance",
    tag: "Club & Groove",
    icon: "🪩",
    description: "Electrifying dance tracks, unstoppable baselines, and party bangers.",
    gradient: "linear-gradient(135deg, #155e75 0%, #06b6d4 50%, #3b82f6 100%)",
    accent: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.45)",
    theme: "party"
  },
  {
    id: "sleep",
    name: "Sleep / Midnight",
    tag: "Dreamy Night",
    icon: "🌙",
    description: "Soft ambient lullabies, rain textures, and midnight chill for restful sleep.",
    gradient: "linear-gradient(135deg, #312e81 0%, #6366f1 50%, #818cf8 100%)",
    accent: "#6366f1",
    glow: "rgba(99, 102, 241, 0.45)",
    theme: "sleep"
  }
];

// ==========================================================================
// 2. CURATED 60+ SONGS WITH EXACT DIRECT YOUTUBE IDS
// ==========================================================================
const SONGS_DATA = [
  // --- HAPPY / JOYFUL ---
  {
    id: "h1",
    title: "Happy",
    artist: "Pharrell Williams",
    emotion: "happy",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "ZbZSe6N_BXs",
    duration: 233,
    lyrics: "Because I'm happy, clap along if you feel like a room without a roof!\nBecause I'm happy, clap along if you feel like happiness is the truth."
  },
  {
    id: "h2",
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    emotion: "happy",
    language: "english",
    intensity: 2,
    match: 98,
    youtubeId: "ru0K8uYEZWw",
    duration: 285,
    lyrics: "I got that sunshine in my pocket, got that good soul in my feet!\nI feel that hot blood in my body when it drops."
  },
  {
    id: "h3",
    title: "Good Life",
    artist: "OneRepublic",
    emotion: "happy",
    language: "english",
    intensity: 2,
    match: 95,
    youtubeId: "pLZq4R5q0_E",
    duration: 253,
    lyrics: "Hopelessly, I feel like there might be something that I'll miss...\nOh, this has gotta be the good life!"
  },
  {
    id: "h4",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    emotion: "happy",
    language: "english",
    intensity: 3,
    match: 97,
    youtubeId: "OPf0YbXqDm0",
    duration: 270,
    lyrics: "Don't believe me, just watch! Come on, dance, jump on it!"
  },
  {
    id: "h5",
    title: "Gallan Goodiyaan",
    artist: "Yashita Sharma, Shankar Mahadevan",
    emotion: "happy",
    language: "hindi",
    intensity: 3,
    match: 99,
    youtubeId: "jCEdTq3j-0U",
    duration: 297,
    lyrics: "Main daalun taal pe bhangra, tu bhi jee le zara!\nGallan goodiyaan!"
  },
  {
    id: "h6",
    title: "Dil Dhadakne Do",
    artist: "Priyanka Chopra & Farhan Akhtar",
    emotion: "happy",
    language: "hindi",
    intensity: 2,
    match: 96,
    youtubeId: "eM1vT-A2x4k",
    duration: 220,
    lyrics: "Har lamha hai naya, tu jee le zara!\nDil dhadakne do, dil dhadakne do."
  },
  {
    id: "h7",
    title: "London Thumakda",
    artist: "Labh Janjua, Neha Kakkar (Queen)",
    emotion: "happy",
    language: "hindi",
    intensity: 3,
    match: 98,
    youtubeId: "udra3Mfw2oo",
    duration: 230,
    lyrics: "Oho patang waali dori, London thumakda!"
  },
  {
    id: "h8",
    title: "Sunny Morning Chill Lo-Fi",
    artist: "ChillHop Beats",
    emotion: "happy",
    language: "instrumental",
    intensity: 1,
    match: 94,
    youtubeId: "5qap5aO4i9A",
    duration: 180,
    lyrics: "✨ Gentle acoustic strumming and sunny bird ambience to brighten the morning."
  },
  {
    id: "h9",
    title: "Walking on Sunshine",
    artist: "Katrina & The Waves",
    emotion: "happy",
    language: "english",
    intensity: 3,
    match: 97,
    youtubeId: "iPUmE-tP5Bk",
    duration: 223,
    lyrics: "I'm walking on sunshine, whoa!\nI'm walking on sunshine, whoa!"
  },

  // --- SAD / MELANCHOLY ---
  {
    id: "s1",
    title: "Someone Like You",
    artist: "Adele",
    emotion: "sad",
    language: "english",
    intensity: 3,
    match: 100,
    youtubeId: "hLQl3WQQoQ0",
    duration: 285,
    lyrics: "Never mind, I'll find someone like you...\nI wish nothing but the best for you, too."
  },
  {
    id: "s2",
    title: "Fix You",
    artist: "Coldplay",
    emotion: "sad",
    language: "english",
    intensity: 2,
    match: 97,
    youtubeId: "k4V3Mo61fJM",
    duration: 295,
    lyrics: "Lights will guide you home, and ignite your bones...\nAnd I will try to fix you."
  },
  {
    id: "s3",
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    emotion: "sad",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "zABLecsR5UE",
    duration: 182,
    lyrics: "Now the day bleeds into nightfall, and you're not here to get me through it all..."
  },
  {
    id: "s4",
    title: "Glimpse of Us",
    artist: "Joji",
    emotion: "sad",
    language: "english",
    intensity: 2,
    match: 96,
    youtubeId: "FvOpPeKSf_U",
    duration: 233,
    lyrics: "'Cause sometimes I look in her eyes and that's where I find a glimpse of us..."
  },
  {
    id: "s5",
    title: "Channa Mereya",
    artist: "Arijit Singh, Pritam",
    emotion: "sad",
    language: "hindi",
    intensity: 3,
    match: 100,
    youtubeId: "bzSTpdcs-EI",
    duration: 289,
    lyrics: "Acha chalta hoon, duaon mein yaad rakhna...\nMere zikr ka zubaan pe swaad rakhna."
  },
  {
    id: "s6",
    title: "Agar Tum Saath Ho",
    artist: "Alka Yagnik, Arijit Singh",
    emotion: "sad",
    language: "hindi",
    intensity: 2,
    match: 99,
    youtubeId: "sK7riqg2mr4",
    duration: 341,
    lyrics: "Dil ye sambhal jaaye agar tum saath ho...\nHar gham phisalne lage agar tum saath ho."
  },
  {
    id: "s7",
    title: "Jeena Jeena",
    artist: "Atif Aslam, Sachin-Jigar",
    emotion: "sad",
    language: "hindi",
    intensity: 2,
    match: 95,
    youtubeId: "v8K7dF_fD-o",
    duration: 228,
    lyrics: "Dehleez pe mere dil ki jo rakhe hain tune kadam...\nTere naam pe meri zindagi likh di mere humdum."
  },
  {
    id: "s8",
    title: "Melancholy Piano & Rain Healing",
    artist: "Quiet Melodies",
    emotion: "sad",
    language: "instrumental",
    intensity: 1,
    match: 94,
    youtubeId: "DWcJFNfaw9c",
    duration: 320,
    lyrics: "🌧️ Deep soothing piano keys blending with rainfall to ease emotional burden."
  },
  {
    id: "s9",
    title: "Hurt",
    artist: "Johnny Cash",
    emotion: "sad",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "vt1Pwfnh5pc",
    duration: 237,
    lyrics: "I hurt myself today to see if I still feel.\nI focus on the pain, the only thing that's real."
  },

  // --- ENERGETIC / WORKOUT ---
  {
    id: "e1",
    title: "Believer",
    artist: "Imagine Dragons",
    emotion: "energetic",
    language: "english",
    intensity: 3,
    match: 100,
    youtubeId: "7wtfhZwyrcc",
    duration: 204,
    lyrics: "Pain! You made me a, you made me a believer, believer!\nPain! You break me down, you built me up!"
  },
  {
    id: "e2",
    title: "Eye of the Tiger",
    artist: "Survivor",
    emotion: "energetic",
    language: "english",
    intensity: 2,
    match: 99,
    youtubeId: "btPJPFnesV4",
    duration: 245,
    lyrics: "It's the eye of the tiger, it's the thrill of the fight!\nRisin' up to the challenge of our rival."
  },
  {
    id: "e3",
    title: "Turn Down for What",
    artist: "DJ Snake, Lil Jon",
    emotion: "energetic",
    language: "english",
    intensity: 3,
    match: 96,
    youtubeId: "HMUDVMiITOU",
    duration: 214,
    lyrics: "Fire up that loud, another round of shots!\nTurn down for what?!"
  },
  {
    id: "e4",
    title: "Zinda",
    artist: "Siddharth Mahadevan (Bhaag Milkha Bhaag)",
    emotion: "energetic",
    language: "hindi",
    intensity: 3,
    match: 99,
    youtubeId: "Kevdt1T9DAU",
    duration: 211,
    lyrics: "Zinda hai toh pyala pura bhar le!\nKoshish toh kar maut ko bhi jhatak de!"
  },
  {
    id: "e5",
    title: "Kar Har Maidaan Fateh",
    artist: "Sukhwinder Singh, Shreya Ghoshal",
    emotion: "energetic",
    language: "hindi",
    intensity: 2,
    match: 98,
    youtubeId: "9n4848g5Z10",
    duration: 311,
    lyrics: "Ghayal parinda hai tu, dikhla jahan ko tera zor!\nKar har maidaan fateh re bandeya!"
  },
  {
    id: "e6",
    title: "Dangal Title Track",
    artist: "Daler Mehndi, Pritam",
    emotion: "energetic",
    language: "hindi",
    intensity: 3,
    match: 97,
    youtubeId: "y60chkpbd6s",
    duration: 300,
    lyrics: "Maa ke pet se marghat tak, hai teri kahani pag pag...\nBhed le nishana tu, dangal dangal!"
  },
  {
    id: "e7",
    title: "High Energy Synthwave Pulse",
    artist: "CyberDrive",
    emotion: "energetic",
    language: "instrumental",
    intensity: 3,
    match: 95,
    youtubeId: "N34iUvI6nU0",
    duration: 240,
    lyrics: "⚡ High BPM pumping synthwave bassline driving pure motivation."
  },
  {
    id: "e8",
    title: "Vande Mataram",
    artist: "A.R. Rahman",
    emotion: "energetic",
    language: "hindi",
    intensity: 3,
    match: 98,
    youtubeId: "yJp4k8gJ82Q",
    duration: 340,
    lyrics: "Vande Mataram, Vande Mataram!\nSujalam sufalam, malayaja sheetalam."
  },

  // --- CALM / RELAXED ---
  {
    id: "c1",
    title: "Sunflower",
    artist: "Post Malone, Swae Lee",
    emotion: "calm",
    language: "english",
    intensity: 2,
    match: 99,
    youtubeId: "ApXoWvfEYVU",
    duration: 158,
    lyrics: "Needless to say, I keep in check, she was a bad bad, nevertheless...\nYou're a sunflower."
  },
  {
    id: "c2",
    title: "Death Bed (Coffee for Your Head)",
    artist: "Powfu, Beabadoobee",
    emotion: "calm",
    language: "english",
    intensity: 1,
    match: 96,
    youtubeId: "jJPMnTXl63E",
    duration: 173,
    lyrics: "Don't stay awake for too long, don't go to bed...\nI'll make a cup of coffee for your head."
  },
  {
    id: "c3",
    title: "Kabira",
    artist: "Tochi Raina, Rekha Bhardwaj",
    emotion: "calm",
    language: "hindi",
    intensity: 2,
    match: 100,
    youtubeId: "jHNNMj5bNQw",
    duration: 223,
    lyrics: "Bann ke titli dil uda hai kahin door...\nRe Kabira maan jaa, re Fakeera yun na jaa."
  },
  {
    id: "c4",
    title: "Iktara",
    artist: "Amit Trivedi, Kavita Seth",
    emotion: "calm",
    language: "hindi",
    intensity: 1,
    match: 98,
    youtubeId: "fSS_R91Nimw",
    duration: 254,
    lyrics: "O re Manwa tu toh bawra hai...\nGoonja sa hai koi Iktara iktara."
  },
  {
    id: "c5",
    title: "Baarishein",
    artist: "Anuv Jain",
    emotion: "calm",
    language: "hindi",
    intensity: 1,
    match: 97,
    youtubeId: "dZ0fwJojhrs",
    duration: 215,
    lyrics: "Hawaayein chhu gayi hain tujhko jaise...\nTu muskuraaye aur yeh baarishein behne lagein."
  },
  {
    id: "c6",
    title: "Weightless",
    artist: "Marconi Union",
    emotion: "calm",
    language: "instrumental",
    intensity: 1,
    match: 100,
    youtubeId: "UfcAVejslrU",
    duration: 485,
    lyrics: "🍃 Scientifically proven soundscape designed to lower heart rate and reduce stress."
  },
  {
    id: "c7",
    title: "Nuvole Bianche",
    artist: "Ludovico Einaudi",
    emotion: "calm",
    language: "instrumental",
    intensity: 1,
    match: 99,
    youtubeId: "k_0y_x_m_0Q",
    duration: 380,
    lyrics: "🎹 Delicate and flowing piano melodies for deep relaxation and introspection."
  },

  // --- ROMANTIC / IN LOVE ---
  {
    id: "r1",
    title: "Perfect",
    artist: "Ed Sheeran",
    emotion: "romantic",
    language: "english",
    intensity: 2,
    match: 100,
    youtubeId: "2Vv-BfVoq4g",
    duration: 263,
    lyrics: "'Cause we were just kids when we fell in love, not knowing what it was...\nBaby, I'm dancing in the dark with you between my arms."
  },
  {
    id: "r2",
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    emotion: "romantic",
    language: "english",
    intensity: 2,
    match: 98,
    youtubeId: "GxldQ9eX2fc",
    duration: 177,
    lyrics: "I would never fall in love until I found her...\nI said, 'I would never fall unless it's you I fall into'."
  },
  {
    id: "r3",
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    emotion: "romantic",
    language: "english",
    intensity: 2,
    match: 97,
    youtubeId: "lp-EO5I60KA",
    duration: 280,
    lyrics: "When your legs don't work like they used to before...\nAnd the darling I will be loving you 'til we're 70."
  },
  {
    id: "r4",
    title: "Kesariya",
    artist: "Arijit Singh, Pritam",
    emotion: "romantic",
    language: "hindi",
    intensity: 3,
    match: 100,
    youtubeId: "BddP6PYo2gs",
    duration: 268,
    lyrics: "Kesariya tera ishq hai piya, rang jaaun jo main haath lagaaun...\nDin beete saara teri fikr mein, rain saari teri khair manaun."
  },
  {
    id: "r5",
    title: "Tum Hi Ho",
    artist: "Arijit Singh, Mithoon",
    emotion: "romantic",
    language: "hindi",
    intensity: 2,
    match: 99,
    youtubeId: "IJq0yyWug1k",
    duration: 262,
    lyrics: "Kyunki tum hi ho, ab tum hi ho, zindagi ab tum hi ho...\nChain bhi, mera dard bhi, meri aashiqui ab tum hi ho."
  },
  {
    id: "r6",
    title: "Apna Bana Le",
    artist: "Arijit Singh, Sachin-Jigar (Bhediya)",
    emotion: "romantic",
    language: "hindi",
    intensity: 2,
    match: 98,
    youtubeId: "ElZfdU54Cp8",
    duration: 250,
    lyrics: "Tu mera koi na hoke bhi kuch laage...\nApna bana le piya, apna bana le mujhe."
  },
  {
    id: "r7",
    title: "Romantic Acoustic Strings",
    artist: "Acoustic Sunsets",
    emotion: "romantic",
    language: "instrumental",
    intensity: 1,
    match: 95,
    youtubeId: "7maJOI3QMu0",
    duration: 230,
    lyrics: "💖 Sweet nylon string acoustic guitar expressing timeless devotion and love."
  },
  {
    id: "r8",
    title: "Pehla Nasha",
    artist: "Udit Narayan & Sadhana Sargam",
    emotion: "romantic",
    language: "hindi",
    intensity: 2,
    match: 97,
    youtubeId: "y_xQ-1-yQ_0",
    duration: 290,
    lyrics: "Pehla nasha, pehla khumar, naya pyar hai naya intezaar...\nKar loon main kya apna haal, aye dil-e-bekaraar."
  },

  // --- FOCUS / STUDY ---
  {
    id: "f1",
    title: "Experience",
    artist: "Ludovico Einaudi",
    emotion: "focus",
    language: "instrumental",
    intensity: 2,
    match: 100,
    youtubeId: "hN_q-_nGv4U",
    duration: 315,
    lyrics: "🎧 Powerful piano and string crescendos unlocking deep flow states."
  },
  {
    id: "f2",
    title: "Interstellar Theme",
    artist: "Hans Zimmer",
    emotion: "focus",
    language: "instrumental",
    intensity: 3,
    match: 98,
    youtubeId: "IDsCtDRV21o",
    duration: 247,
    lyrics: "🌌 Atmospheric pipe organ melody invoking infinite space and concentration."
  },
  {
    id: "f3",
    title: "Lo-Fi Beats to Study / Relax To",
    artist: "Lofi Girl",
    emotion: "focus",
    language: "instrumental",
    intensity: 1,
    match: 99,
    youtubeId: "jfKfPfyJRdk",
    duration: 360,
    lyrics: "☕ Cozy vinyl scratches, smooth jazz chords, and gentle ambient study rhythms."
  },
  {
    id: "f4",
    title: "River Flows In You",
    artist: "Yiruma",
    emotion: "focus",
    language: "instrumental",
    intensity: 1,
    match: 96,
    youtubeId: "7maJOI3QMu0",
    duration: 188,
    lyrics: "🎹 Iconic peaceful piano melodies for reading and programming."
  },
  {
    id: "f5",
    title: "Intro",
    artist: "The xx",
    emotion: "focus",
    language: "english",
    intensity: 2,
    match: 95,
    youtubeId: "AZ1pHmWhIuY",
    duration: 128,
    lyrics: "Minimalist hypnotic guitar and drum loop perfect for zero distractions."
  },

  // --- NOSTALGIC / RETRO ---
  {
    id: "n1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    emotion: "nostalgic",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "4NRXx6U8ABQ",
    duration: 200,
    lyrics: "I've been on my own for long enough, maybe you can show me how to love...\nI'm blinded by the lights!"
  },
  {
    id: "n2",
    title: "Take On Me",
    artist: "a-ha",
    emotion: "nostalgic",
    language: "english",
    intensity: 2,
    match: 97,
    youtubeId: "djV11Xbc914",
    duration: 243,
    lyrics: "Take on me (Take on me), take me on (Take on me)...\nI'll be gone in a day or two!"
  },
  {
    id: "n3",
    title: "Pal Pal Dil Ke Paas",
    artist: "Kishore Kumar",
    emotion: "nostalgic",
    language: "hindi",
    intensity: 2,
    match: 100,
    youtubeId: "-3q6fN8n45U",
    duration: 329,
    lyrics: "Pal pal dil ke paas tum rehti ho...\nJeevan meethi pyaas, yeh kehti ho."
  },
  {
    id: "n4",
    title: "Kya Hua Tera Wada",
    artist: "Mohammed Rafi, Sushma Shrestha",
    emotion: "nostalgic",
    language: "hindi",
    intensity: 2,
    match: 96,
    youtubeId: "g4e4o9fGZ24",
    duration: 260,
    lyrics: "Kya hua tera wada, woh kasam woh irada...\nBhoolega dil jis din tumhe, woh din zindagi ka aakhiri din hoga."
  },
  {
    id: "n5",
    title: "O Sanam",
    artist: "Lucky Ali",
    emotion: "nostalgic",
    language: "hindi",
    intensity: 1,
    match: 99,
    youtubeId: "9b_5xHekGq8",
    duration: 225,
    lyrics: "Shaamon ke dhalte hi aati hai teri yaad...\nO sanam, mohabbat ki kasam."
  },

  // --- ANGRY / INTENSE ---
  {
    id: "a1",
    title: "Numb",
    artist: "Linkin Park",
    emotion: "angry",
    language: "english",
    intensity: 3,
    match: 100,
    youtubeId: "kXYiU_JCYtU",
    duration: 187,
    lyrics: "I've become so numb, I can't feel you there...\nBecome so tired, so much more aware!"
  },
  {
    id: "a2",
    title: "In The End",
    artist: "Linkin Park",
    emotion: "angry",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "eVTXPUF4Oz4",
    duration: 218,
    lyrics: "I tried so hard and got so far, but in the end it doesn't even matter!\nI had to fall to lose it all."
  },
  {
    id: "a3",
    title: "Sadda Haq",
    artist: "Mohit Chauhan, A.R. Rahman",
    emotion: "angry",
    language: "hindi",
    intensity: 3,
    match: 100,
    youtubeId: "p9DQINKFj0U",
    duration: 365,
    lyrics: "Sadda haq aithe rakh! Sadda haq aithe rakh!\nNa sahenge hum, na jhookenge hum!"
  },
  {
    id: "a4",
    title: "Apna Time Aayega",
    artist: "Ranveer Singh, DIVINE",
    emotion: "angry",
    language: "hindi",
    intensity: 3,
    match: 97,
    youtubeId: "j6caW0K15f4",
    duration: 130,
    lyrics: "Apna time aayega! Tu nanga hi toh aaya hai, kya ghanta lekar jaayega?\nApna time aayega!"
  },

  // --- PARTY / DANCE ---
  {
    id: "p1",
    title: "Levitating",
    artist: "Dua Lipa",
    emotion: "party",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "TUVcZfQe-Kw",
    duration: 203,
    lyrics: "If you wanna run away with me, I know a galaxy and I can take you for a ride...\nI had a premonition that we fell into a rhythm."
  },
  {
    id: "p2",
    title: "Kar Gayi Chull",
    artist: "Badshah, Fazilpuria, Sukriti Kakar",
    emotion: "party",
    language: "hindi",
    intensity: 3,
    match: 100,
    youtubeId: "NTHz9ephYTw",
    duration: 187,
    lyrics: "Ladki pagal hai pagal hai pagal hai!\nArre daayein baayein kaise kamar hilaaye, arre kar gayi chull!"
  },
  {
    id: "p3",
    title: "High Rated Gabru",
    artist: "Guru Randhawa",
    emotion: "party",
    language: "hindi",
    intensity: 3,
    match: 98,
    youtubeId: "hjWf8A0YNSE",
    duration: 215,
    lyrics: "Haye ni haye nakhra tera ni, high rated gabru nu maare!\nTere karke dil de kone vich ek thaan khali!"
  },

  // --- SLEEP / MIDNIGHT ---
  {
    id: "sl1",
    title: "Sunset Lover",
    artist: "Petit Biscuit",
    emotion: "sleep",
    language: "instrumental",
    intensity: 1,
    match: 100,
    youtubeId: "wuCK-oiE3rA",
    duration: 238,
    lyrics: "🌙 Peaceful gentle vocal chops and melodic sunset ambient texture."
  },
  {
    id: "sl2",
    title: "Midnight Ocean Rain",
    artist: "Sleep Therapy Audio",
    emotion: "sleep",
    language: "instrumental",
    intensity: 1,
    match: 98,
    youtubeId: "M5QY2_8704o",
    duration: 360,
    lyrics: "Soft rain droplets and ocean wave white noise for deep sleep."
  },
  {
    id: "sl3",
    title: "Phir Le Aya Dil (Reprise)",
    artist: "Arijit Singh, Pritam",
    emotion: "sleep",
    language: "hindi",
    intensity: 1,
    match: 96,
    youtubeId: "6MgsHSAcI9k",
    duration: 300,
    lyrics: "Phir le aya dil majboor kya keeje...\nRaas na aya rehna door kya keeje."
  }
];

// ==========================================================================
// 3. STATE MANAGEMENT
// ==========================================================================
const AppState = {
  currentEmotion: "happy",
  currentLangFilter: "all",
  currentIntensity: 2,
  searchQuery: "",
  viewMode: "grid",
  activePlayerMode: "audio",
  currentTrack: null,
  playlist: [],
  playlistIndex: 0,
  isPlaying: false,
  isShuffle: false,
  isRepeat: false,
  volume: 80,
  currentTimeSec: 0,
  progressTimer: null,
  favorites: JSON.parse(localStorage.getItem("moodify_favorites") || "[]")
};

// ==========================================================================
// 4. DOM ELEMENTS
// ==========================================================================
const DOM = {
  body: document.body,
  ytToast: document.getElementById("ytToast"),
  ytToastText: document.getElementById("ytToastText"),
  brandLogo: document.getElementById("brandLogo"),
  ambientGlow: document.getElementById("ambientGlow"),
  emotionsGrid: document.getElementById("emotionsGrid"),
  currentMoodIcon: document.getElementById("currentMoodIcon"),
  currentMoodTitle: document.getElementById("currentMoodTitle"),
  currentMoodDesc: document.getElementById("currentMoodDesc"),
  songsGrid: document.getElementById("songsGrid"),
  songsCount: document.getElementById("songsCount"),
  languageFilters: document.getElementById("languageFilters"),
  intensitySlider: document.getElementById("intensitySlider"),
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  gridViewBtn: document.getElementById("gridViewBtn"),
  listViewBtn: document.getElementById("listViewBtn"),
  
  // Showcase & Thumbnail Elements
  vinylShowcase: document.getElementById("vinylShowcase"),
  vinylCenterImg: document.getElementById("vinylCenterImg"),
  bannerCoverImg: document.getElementById("bannerCoverImg"),
  albumPlayBtn: document.getElementById("albumPlayBtn"),
  albumPlayIcon: document.getElementById("albumPlayIcon"),
  coverBadgeText: document.getElementById("coverBadgeText"),
  bannerVideoContainer: document.getElementById("bannerVideoContainer"),
  mainYtIframe: document.getElementById("mainYtIframe"),
  audioModeTab: document.getElementById("audioModeTab"),
  videoModeTab: document.getElementById("videoModeTab"),
  
  // Showcase Info Elements
  liveDot: document.getElementById("liveDot"),
  bannerStatusText: document.getElementById("bannerStatusText"),
  bannerTrackTitle: document.getElementById("bannerTrackTitle"),
  bannerTrackArtist: document.getElementById("bannerTrackArtist"),
  bannerMoodTag: document.getElementById("bannerMoodTag"),
  bannerLangTag: document.getElementById("bannerLangTag"),
  bannerMatchTag: document.getElementById("bannerMatchTag"),
  bannerPlayPauseBtn: document.getElementById("bannerPlayPauseBtn"),
  bannerPlayIcon: document.getElementById("bannerPlayIcon"),
  bannerPlayText: document.getElementById("bannerPlayText"),
  bannerSkipBackBtn: document.getElementById("bannerSkipBackBtn"),
  bannerSkipFwdBtn: document.getElementById("bannerSkipFwdBtn"),
  bannerDirectYtBtn: document.getElementById("bannerDirectYtBtn"),
  bannerFavBtn: document.getElementById("bannerFavBtn"),
  spectrumCanvas: document.getElementById("spectrumCanvas"),
  bannerCurrentTime: document.getElementById("bannerCurrentTime"),
  bannerDuration: document.getElementById("bannerDuration"),
  bannerTimelineBar: document.getElementById("bannerTimelineBar"),
  bannerTimelineFill: document.getElementById("bannerTimelineFill"),

  // Favorites Drawer
  favoritesToggleBtn: document.getElementById("favoritesToggleBtn"),
  favoritesDrawer: document.getElementById("favoritesDrawer"),
  closeFavDrawerBtn: document.getElementById("closeFavDrawerBtn"),
  favSongsList: document.getElementById("favSongsList"),
  favCountBadge: document.getElementById("favCountBadge"),
  
  // Cinema Modal
  videoModalBackdrop: document.getElementById("videoModalBackdrop"),
  cinemaToggleBtn: document.getElementById("cinemaToggleBtn"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  cinemaYtIframe: document.getElementById("cinemaYtIframe"),
  openExternalYtBtn: document.getElementById("openExternalYtBtn"),
  modalThumbImg: document.getElementById("modalThumbImg"),
  modalSongTitle: document.getElementById("modalSongTitle"),
  modalSongArtist: document.getElementById("modalSongArtist"),
  modalEmotionTag: document.getElementById("modalEmotionTag"),
  modalLangTag: document.getElementById("modalLangTag"),
  modalMatchTag: document.getElementById("modalMatchTag"),
  lyricsBody: document.getElementById("lyricsBody"),
  
  // Bottom Player Bar
  playerBar: document.getElementById("playerBar"),
  playerThumbBox: document.getElementById("playerThumbBox"),
  playerThumbImg: document.getElementById("playerThumbImg"),
  playerTrackTitle: document.getElementById("playerTrackTitle"),
  playerTrackArtist: document.getElementById("playerTrackArtist"),
  playerLikeBtn: document.getElementById("playerLikeBtn"),
  playPauseBtn: document.getElementById("playPauseBtn"),
  playPauseIcon: document.getElementById("playPauseIcon"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  skipBack10Btn: document.getElementById("skipBack10Btn"),
  skipFwd10Btn: document.getElementById("skipFwd10Btn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  repeatBtn: document.getElementById("repeatBtn"),
  currentTimeLabel: document.getElementById("currentTimeLabel"),
  durationLabel: document.getElementById("durationLabel"),
  timelineBar: document.getElementById("timelineBar"),
  timelineFill: document.getElementById("timelineFill"),
  timelineHandle: document.getElementById("timelineHandle"),
  volumeBar: document.getElementById("volumeBar"),
  volumeFill: document.getElementById("volumeFill"),
  volumeIconBtn: document.getElementById("volumeIconBtn"),
  volumeIcon: document.getElementById("volumeIcon"),
  directYtBtn: document.getElementById("directYtBtn")
};

// ==========================================================================
// 5. INITIALIZATION
// ==========================================================================
function initApp() {
  renderEmotionCards();
  setEmotion(AppState.currentEmotion, false);
  setupEventListeners();
  updateFavoritesCount();
  startSpectrumVisualizer();
}

function showYouTubeToast(title) {
  if (!DOM.ytToast) return;
  DOM.ytToastText.textContent = `Opening "${title}" on YouTube... 🚀`;
  DOM.ytToast.classList.add("show");
  setTimeout(() => {
    DOM.ytToast.classList.remove("show");
  }, 2500);
}

function renderEmotionCards() {
  DOM.emotionsGrid.innerHTML = "";

  EMOTIONS_DATA.forEach(emotion => {
    const card = document.createElement("div");
    card.className = `emotion-card ${emotion.id === AppState.currentEmotion ? 'active' : ''}`;
    card.dataset.emotionId = emotion.id;
    card.style.setProperty("--card-gradient", emotion.gradient);
    card.style.setProperty("--card-accent", emotion.accent);
    card.style.setProperty("--card-glow", emotion.glow);

    card.innerHTML = `
      <div class="emotion-visual-box">
        <div class="emotion-visual-mesh"></div>
        <div class="emotion-icon-wrap">${emotion.icon}</div>
        <span class="emotion-vibe-tag">${emotion.tag}</span>
      </div>
      <div class="emotion-card-bottom">
        <div class="emotion-label-title">
          <span>${emotion.name}</span>
          <span class="status-indicator"></span>
        </div>
        <div class="emotion-label-sub">${emotion.description}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      setEmotion(emotion.id, true);
    });

    DOM.emotionsGrid.appendChild(card);
  });
}

function setEmotion(emotionId, shouldScroll = false) {
  const emotion = EMOTIONS_DATA.find(e => e.id === emotionId);
  if (!emotion) return;

  AppState.currentEmotion = emotionId;
  DOM.body.setAttribute("data-theme", emotion.theme);

  DOM.currentMoodIcon.textContent = emotion.icon;
  DOM.currentMoodTitle.textContent = emotion.name;
  DOM.currentMoodDesc.textContent = emotion.description;

  document.querySelectorAll(".emotion-card").forEach(c => {
    c.classList.toggle("active", c.dataset.emotionId === emotionId);
  });

  filterAndRenderSongs();

  if (shouldScroll) {
    DOM.currentMoodTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function filterAndRenderSongs() {
  let songs = SONGS_DATA.filter(song => song.emotion === AppState.currentEmotion);

  if (AppState.currentLangFilter !== "all") {
    songs = songs.filter(song => song.language === AppState.currentLangFilter);
  }

  if (AppState.currentIntensity) {
    songs = songs.filter(song => Math.abs(song.intensity - AppState.currentIntensity) <= 1);
  }

  if (AppState.searchQuery.trim() !== "") {
    const query = AppState.searchQuery.toLowerCase();
    songs = SONGS_DATA.filter(song =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      song.emotion.toLowerCase().includes(query)
    );
  }

  AppState.playlist = songs;
  DOM.songsCount.textContent = songs.length;
  renderSongsGrid(songs);
}

function renderSongsGrid(songs) {
  DOM.songsGrid.innerHTML = "";

  if (songs.length === 0) {
    DOM.songsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-music" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <p>No tracks found for this filter combination. Try selecting "All" languages or searching another term.</p>
      </div>
    `;
    return;
  }

  songs.forEach((song, index) => {
    const isLiked = AppState.favorites.some(f => f.id === song.id);
    const isCurrentPlaying = AppState.currentTrack && AppState.currentTrack.id === song.id;
    const thumbnail = `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`;

    const card = document.createElement("div");
    card.className = `song-card ${isCurrentPlaying ? 'now-playing' : ''}`;
    card.dataset.songId = song.id;

    card.innerHTML = `
      <div class="song-card-artwork">
        <img src="${thumbnail}" alt="${song.title}" loading="lazy">
        <div class="song-yt-badge"><i class="fa-brands fa-youtube"></i> Play on YouTube</div>
        <div class="song-match-badge">${song.match}% Match</div>
        <div class="song-play-overlay">
          <button class="song-play-btn" title="Click to Play Directly on YouTube">
            <i class="fa-brands fa-youtube"></i>
          </button>
        </div>
      </div>
      
      <div class="song-info">
        <div class="song-title-row">
          <div class="song-title" title="${song.title}">${song.title}</div>
          <button class="song-fav-btn ${isLiked ? 'liked' : ''}" title="Favorite" data-id="${song.id}">
            <i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>
        <div class="song-artist" title="${song.artist}">${song.artist}</div>
        
        <div class="song-footer-meta">
          <span class="song-lang-tag">${song.language}</span>
          <span>${formatDuration(song.duration)}</span>
          <a href="https://www.youtube.com/watch?v=${song.youtubeId}" target="_blank" class="song-direct-yt-btn" title="Open directly on YouTube">
            <i class="fa-brands fa-youtube"></i> YouTube
          </a>
        </div>
      </div>
    `;

    // CLICK ANYWHERE ON SONG CARD -> AUTOMATICALLY OPENS & PLAYS ON YOUTUBE!
    card.addEventListener("click", (e) => {
      if (e.target.closest(".song-fav-btn")) {
        return;
      }
      playSong(song, index, true); // true = automatically launch on YouTube!
    });

    const favBtn = card.querySelector(".song-fav-btn");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(song);
    });

    DOM.songsGrid.appendChild(card);
  });
}

// ==========================================================================
// 6. CENTRAL PLAYBACK & YOUTUBE AUTO-LAUNCH ENGINE
// ==========================================================================
function playSong(song, index = -1, autoOpenYouTube = false) {
  AppState.currentTrack = song;
  if (index !== -1) {
    AppState.playlistIndex = index;
  } else {
    AppState.playlistIndex = AppState.playlist.findIndex(s => s.id === song.id);
  }

  const thumbnail = `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`;

  // 1. Update All Artwork Displays
  DOM.bannerCoverImg.src = thumbnail;
  DOM.vinylCenterImg.src = thumbnail;
  DOM.playerThumbImg.src = thumbnail;
  DOM.modalThumbImg.src = thumbnail;

  // 2. Animate Vinyl & Pulse
  DOM.vinylShowcase.classList.add("playing");
  DOM.playerThumbBox.classList.add("playing");
  DOM.liveDot.classList.remove("paused");

  // 3. Update YouTube IFrame Embed in App
  const ytEmbedUrl = `https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1&rel=0`;
  if (DOM.mainYtIframe) DOM.mainYtIframe.src = ytEmbedUrl;
  if (DOM.cinemaYtIframe) DOM.cinemaYtIframe.src = ytEmbedUrl;

  // 4. AUTOMATICALLY GO TO YOUTUBE & PLAY!
  if (autoOpenYouTube) {
    showYouTubeToast(song.title);
    window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, "_blank");
  }

  // 5. Update UI State & Timeline
  updateBannerUI(song);
  updatePlayerBarUI(song);
  updateModalUI(song);

  AppState.isPlaying = true;
  AppState.currentTimeSec = 0;
  startProgressTracker(song.duration);

  updatePlayPauseButtons(true);
  highlightActiveCard(song.id);
}

function updateBannerUI(song) {
  DOM.bannerStatusText.textContent = "Live on YouTube";
  DOM.coverBadgeText.textContent = "YouTube Ready";
  DOM.bannerTrackTitle.textContent = song.title;
  DOM.bannerTrackArtist.textContent = song.artist;
  DOM.bannerMoodTag.innerHTML = `<i class="fa-solid fa-heart"></i> ${song.emotion.toUpperCase()}`;
  DOM.bannerLangTag.innerHTML = `<i class="fa-solid fa-globe"></i> ${song.language.toUpperCase()}`;
  DOM.bannerMatchTag.textContent = `${song.match}% Mood Match`;
  DOM.bannerDuration.textContent = formatDuration(song.duration);

  DOM.bannerPlayPauseBtn.onclick = () => {
    window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, "_blank");
  };

  DOM.albumPlayBtn.onclick = () => {
    window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, "_blank");
  };

  const isLiked = AppState.favorites.some(f => f.id === song.id);
  DOM.bannerFavBtn.className = `banner-btn icon-only-btn ${isLiked ? 'liked' : ''}`;
  DOM.bannerFavBtn.innerHTML = `<i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>`;
  DOM.bannerFavBtn.onclick = () => toggleFavorite(song);
}

function updatePlayerBarUI(song) {
  DOM.playerTrackTitle.textContent = song.title;
  DOM.playerTrackArtist.textContent = song.artist;
  DOM.durationLabel.textContent = formatDuration(song.duration);

  DOM.directYtBtn.onclick = () => {
    window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, "_blank");
  };

  const isLiked = AppState.favorites.some(f => f.id === song.id);
  DOM.playerLikeBtn.className = `heart-btn ${isLiked ? 'liked' : ''}`;
  DOM.playerLikeBtn.innerHTML = `<i class="fa-${isLiked ? 'solid' : 'regular'} fa-heart"></i>`;
}

function updateModalUI(song) {
  DOM.modalSongTitle.textContent = song.title;
  DOM.modalSongArtist.textContent = song.artist;
  DOM.modalEmotionTag.textContent = song.emotion.toUpperCase();
  DOM.modalLangTag.textContent = song.language.toUpperCase();
  DOM.modalMatchTag.textContent = `${song.match}% Mood Match`;
  DOM.lyricsBody.textContent = song.lyrics || "Enjoying the rhythm...";

  DOM.openExternalYtBtn.onclick = () => {
    window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, "_blank");
  };
}

function highlightActiveCard(songId) {
  document.querySelectorAll(".song-card").forEach(c => {
    const isCurrent = c.dataset.songId === songId;
    c.classList.toggle("now-playing", isCurrent);
  });
}

function updatePlayPauseButtons(playing) {
  DOM.playPauseIcon.className = `fa-solid ${playing ? 'fa-pause' : 'fa-play'}`;
  DOM.bannerPlayIcon.className = `fa-brands fa-youtube`;
  DOM.albumPlayIcon.className = `fa-brands fa-youtube`;
  DOM.bannerPlayText.textContent = "Play on YouTube";
  DOM.coverBadgeText.textContent = "YouTube Ready";
}

/**
 * Start / Stop or Launch
 */
function togglePlayPause() {
  if (!AppState.currentTrack) {
    if (AppState.playlist.length > 0) {
      playSong(AppState.playlist[0], 0, true);
    }
    return;
  }

  // Opens directly on YouTube!
  window.open(`https://www.youtube.com/watch?v=${AppState.currentTrack.youtubeId}`, "_blank");
  showYouTubeToast(AppState.currentTrack.title);
}

/**
 * Skip Forward / Backward in Seconds
 */
function skipSeconds(seconds) {
  if (!AppState.currentTrack) return;
  const duration = AppState.currentTrack.duration || 200;

  AppState.currentTimeSec = Math.max(0, Math.min(AppState.currentTimeSec + seconds, duration));
  updateTimelineDisplay(AppState.currentTimeSec, duration);

  if (DOM.mainYtIframe && DOM.mainYtIframe.contentWindow) {
    DOM.mainYtIframe.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${AppState.currentTimeSec}, true]}`, '*');
  }
}

function startProgressTracker(duration) {
  if (AppState.progressTimer) {
    clearInterval(AppState.progressTimer);
  }

  AppState.progressTimer = setInterval(() => {
    if (AppState.isPlaying) {
      AppState.currentTimeSec++;
      if (AppState.currentTimeSec >= duration) {
        if (AppState.isRepeat) {
          AppState.currentTimeSec = 0;
        } else {
          playNextTrack(false);
          return;
        }
      }
      updateTimelineDisplay(AppState.currentTimeSec, duration);
    }
  }, 1000);
}

function updateTimelineDisplay(current, duration) {
  DOM.currentTimeLabel.textContent = formatDuration(current);
  DOM.bannerCurrentTime.textContent = formatDuration(current);
  DOM.bannerDuration.textContent = formatDuration(duration);
  DOM.durationLabel.textContent = formatDuration(duration);

  const percent = Math.min((current / duration) * 100, 100);
  DOM.timelineFill.style.width = `${percent}%`;
  DOM.timelineHandle.style.left = `${percent}%`;
  DOM.bannerTimelineFill.style.width = `${percent}%`;
}

function playNextTrack(autoLaunch = true) {
  if (AppState.playlist.length === 0) return;

  if (AppState.isShuffle) {
    AppState.playlistIndex = Math.floor(Math.random() * AppState.playlist.length);
  } else {
    AppState.playlistIndex = (AppState.playlistIndex + 1) % AppState.playlist.length;
  }

  playSong(AppState.playlist[AppState.playlistIndex], AppState.playlistIndex, autoLaunch);
}

function playPrevTrack(autoLaunch = true) {
  if (AppState.playlist.length === 0) return;

  AppState.playlistIndex = (AppState.playlistIndex - 1 + AppState.playlist.length) % AppState.playlist.length;
  playSong(AppState.playlist[AppState.playlistIndex], AppState.playlistIndex, autoLaunch);
}

// ==========================================================================
// 7. FAVORITES / LIKED TRACKS
// ==========================================================================
function toggleFavorite(song) {
  const index = AppState.favorites.findIndex(f => f.id === song.id);
  if (index >= 0) {
    AppState.favorites.splice(index, 1);
  } else {
    AppState.favorites.push(song);
  }

  localStorage.setItem("moodify_favorites", JSON.stringify(AppState.favorites));
  updateFavoritesCount();
  renderFavoritesList();
  filterAndRenderSongs();

  if (AppState.currentTrack && AppState.currentTrack.id === song.id) {
    updateBannerUI(song);
    updatePlayerBarUI(song);
  }
}

function updateFavoritesCount() {
  DOM.favCountBadge.textContent = AppState.favorites.length;
}

function renderFavoritesList() {
  DOM.favSongsList.innerHTML = "";

  if (AppState.favorites.length === 0) {
    DOM.favSongsList.innerHTML = `
      <p class="empty-fav-msg">No liked songs yet. Click the heart icon on any song to save it here!</p>
    `;
    return;
  }

  AppState.favorites.forEach((song) => {
    const item = document.createElement("div");
    item.className = "fav-item";
    item.innerHTML = `
      <div class="fav-item-info">
        <img src="https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg" alt="${song.title}">
        <div class="fav-item-text">
          <div class="fav-item-title">${song.title}</div>
          <div class="fav-item-artist">${song.artist}</div>
        </div>
      </div>
      <button class="song-fav-btn liked" title="Remove from favorites"><i class="fa-solid fa-heart"></i></button>
    `;

    item.addEventListener("click", () => {
      playSong(song, -1, true);
      DOM.favoritesDrawer.classList.remove("open");
    });

    item.querySelector(".song-fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(song);
    });

    DOM.favSongsList.appendChild(item);
  });
}

// ==========================================================================
// 8. SOUND SPECTRUM VISUALIZER ANIMATION
// ==========================================================================
function startSpectrumVisualizer() {
  const canvas = DOM.spectrumCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const numBars = 40;
  const barWidth = (canvas.width / numBars) - 2;

  function renderFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numBars; i++) {
      let height = 4;
      if (AppState.isPlaying) {
        height = Math.floor(Math.random() * (canvas.height - 8)) + 6;
      }
      const x = i * (barWidth + 2);
      const y = canvas.height - height;

      const gradient = ctx.createLinearGradient(0, y, 0, canvas.height);
      gradient.addColorStop(0, "#ff4e4e");
      gradient.addColorStop(1, "#ff0000");

      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, barWidth, height);
    }

    requestAnimationFrame(renderFrame);
  }

  renderFrame();
}

// ==========================================================================
// 9. EVENT LISTENERS SETUP & KEYBOARD SHORTCUTS
// ==========================================================================
function setupEventListeners() {
  DOM.brandLogo.addEventListener("click", () => setEmotion("happy", true));

  // Play / Pause Buttons (Launch directly on YouTube)
  DOM.playPauseBtn.addEventListener("click", togglePlayPause);
  DOM.bannerPlayPauseBtn.addEventListener("click", togglePlayPause);
  DOM.albumPlayBtn.addEventListener("click", togglePlayPause);

  // Prev / Next Buttons
  DOM.prevBtn.addEventListener("click", () => playPrevTrack(true));
  DOM.nextBtn.addEventListener("click", () => playNextTrack(true));

  // Skip 10 Seconds Buttons (-10s / +10s)
  if (DOM.bannerSkipBackBtn) DOM.bannerSkipBackBtn.addEventListener("click", () => skipSeconds(-10));
  if (DOM.bannerSkipFwdBtn) DOM.bannerSkipFwdBtn.addEventListener("click", () => skipSeconds(10));
  if (DOM.skipBack10Btn) DOM.skipBack10Btn.addEventListener("click", () => skipSeconds(-10));
  if (DOM.skipFwd10Btn) DOM.skipFwd10Btn.addEventListener("click", () => skipSeconds(10));

  // Player Mode Tabs (Direct YouTube vs In-App Embed)
  DOM.audioModeTab.addEventListener("click", () => {
    DOM.audioModeTab.classList.add("active");
    DOM.videoModeTab.classList.remove("active");
    DOM.vinylShowcase.style.display = "flex";
    DOM.bannerVideoContainer.style.display = "none";
    AppState.activePlayerMode = "audio";
  });

  DOM.videoModeTab.addEventListener("click", () => {
    DOM.videoModeTab.classList.add("active");
    DOM.audioModeTab.classList.remove("active");
    DOM.vinylShowcase.style.display = "none";
    DOM.bannerVideoContainer.style.display = "block";
    AppState.activePlayerMode = "video";
  });

  // Shuffle & Repeat
  DOM.shuffleBtn.addEventListener("click", () => {
    AppState.isShuffle = !AppState.isShuffle;
    DOM.shuffleBtn.classList.toggle("active", AppState.isShuffle);
  });

  DOM.repeatBtn.addEventListener("click", () => {
    AppState.isRepeat = !AppState.isRepeat;
    DOM.repeatBtn.classList.toggle("active", AppState.isRepeat);
  });

  // Timeline Seeking (Bottom Player Bar)
  DOM.timelineBar.addEventListener("click", (e) => {
    if (!AppState.currentTrack) return;
    const rect = DOM.timelineBar.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    AppState.currentTimeSec = Math.floor(AppState.currentTrack.duration * fraction);
    updateTimelineDisplay(AppState.currentTimeSec, AppState.currentTrack.duration);
    if (DOM.mainYtIframe && DOM.mainYtIframe.contentWindow) {
      DOM.mainYtIframe.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${AppState.currentTimeSec}, true]}`, '*');
    }
  });

  // Timeline Seeking (Banner Showcase)
  DOM.bannerTimelineBar.addEventListener("click", (e) => {
    if (!AppState.currentTrack) return;
    const rect = DOM.bannerTimelineBar.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    AppState.currentTimeSec = Math.floor(AppState.currentTrack.duration * fraction);
    updateTimelineDisplay(AppState.currentTimeSec, AppState.currentTrack.duration);
    if (DOM.mainYtIframe && DOM.mainYtIframe.contentWindow) {
      DOM.mainYtIframe.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${AppState.currentTimeSec}, true]}`, '*');
    }
  });

  // Volume slider
  DOM.volumeBar.addEventListener("click", (e) => {
    const rect = DOM.volumeBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const volume = Math.round(Math.min(Math.max((clickX / rect.width) * 100, 0), 100));
    AppState.volume = volume;
    DOM.volumeFill.style.width = `${volume}%`;

    if (volume === 0) {
      DOM.volumeIcon.className = "fa-solid fa-volume-xmark";
    } else if (volume < 50) {
      DOM.volumeIcon.className = "fa-solid fa-volume-low";
    } else {
      DOM.volumeIcon.className = "fa-solid fa-volume-high";
    }
  });

  // Language filters
  DOM.languageFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-btn");
    if (!btn) return;

    DOM.languageFilters.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    AppState.currentLangFilter = btn.dataset.lang;
    filterAndRenderSongs();
  });

  // Intensity slider
  DOM.intensitySlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    AppState.currentIntensity = val;

    document.querySelectorAll(".intensity-labels span").forEach(span => {
      span.classList.toggle("active", parseInt(span.dataset.val) === val);
    });

    filterAndRenderSongs();
  });

  // Search Input
  DOM.searchInput.addEventListener("input", (e) => {
    AppState.searchQuery = e.target.value;
    DOM.clearSearchBtn.classList.toggle("show", AppState.searchQuery.length > 0);
    filterAndRenderSongs();
  });

  DOM.clearSearchBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    AppState.searchQuery = "";
    DOM.clearSearchBtn.classList.remove("show");
    filterAndRenderSongs();
  });

  // View modes
  DOM.gridViewBtn.addEventListener("click", () => {
    DOM.gridViewBtn.classList.add("active");
    DOM.listViewBtn.classList.remove("active");
    DOM.songsGrid.classList.remove("list-view");
  });

  DOM.listViewBtn.addEventListener("click", () => {
    DOM.listViewBtn.classList.add("active");
    DOM.gridViewBtn.classList.remove("active");
    DOM.songsGrid.classList.add("list-view");
  });

  // Favorites Drawer
  DOM.favoritesToggleBtn.addEventListener("click", () => {
    renderFavoritesList();
    DOM.favoritesDrawer.classList.add("open");
  });

  DOM.closeFavDrawerBtn.addEventListener("click", () => {
    DOM.favoritesDrawer.classList.remove("open");
  });

  // Cinema Modal
  DOM.cinemaToggleBtn.addEventListener("click", () => {
    DOM.videoModalBackdrop.classList.toggle("open");
  });

  DOM.playerThumbBox.addEventListener("click", () => {
    if (AppState.currentTrack) {
      window.open(`https://www.youtube.com/watch?v=${AppState.currentTrack.youtubeId}`, "_blank");
    }
  });

  DOM.closeModalBtn.addEventListener("click", () => {
    DOM.videoModalBackdrop.classList.remove("open");
  });

  DOM.videoModalBackdrop.addEventListener("click", (e) => {
    if (e.target === DOM.videoModalBackdrop) {
      DOM.videoModalBackdrop.classList.remove("open");
    }
  });

  // Player like button
  DOM.playerLikeBtn.addEventListener("click", () => {
    if (AppState.currentTrack) {
      toggleFavorite(AppState.currentTrack);
    }
  });

  // Global Keyboard Shortcuts (Space: Open/Play on YouTube, Left: -10s, Right: +10s)
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    if (e.code === "Space") {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === "ArrowLeft") {
      e.preventDefault();
      skipSeconds(-10);
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      skipSeconds(10);
    }
  });
}

function formatDuration(seconds) {
  if (isNaN(seconds) || seconds === null) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Start app
document.addEventListener("DOMContentLoaded", initApp);
