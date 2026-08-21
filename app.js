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
    title: "I'm a Believer",
    artist: "The Monkees",
    emotion: "happy",
    language: "english",
    intensity: 2,
    match: 96,
    youtubeId: "XfuBREMXxts",
    duration: 166,
    lyrics: "Then I saw her face, now I'm a believer. Not a trace of doubt in my mind."
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
  {
    id: "h10",
    title: "Don't Stop Me Now",
    artist: "Queen",
    emotion: "happy",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "HgzGwKwLmgM",
    duration: 210, // 3:30
    lyrics: "Don't stop me now, I'm having such a good time, I'm having a ball!"
  },
  {
    id: "h11",
    title: "Lovely Day",
    artist: "Bill Withers",
    emotion: "happy",
    language: "english",
    intensity: 2,
    match: 98,
    youtubeId: "bEeaS6fuUoA",
    duration: 255,
    lyrics: "Then I look at you, and the world's alright with me. Just one look at you, and I know it's gonna be a lovely day."
  },
  {
    id: "h12",
    title: "Three Little Birds",
    artist: "Bob Marley & The Wailers",
    emotion: "happy",
    language: "english",
    intensity: 1,
    match: 99,
    youtubeId: "LanCLS_hIo4",
    duration: 181,
    lyrics: "Don't worry about a thing, 'cause every little thing is gonna be alright."
  },
  {
    id: "h13",
    title: "Here Comes The Sun",
    artist: "The Beatles",
    emotion: "happy",
    language: "english",
    intensity: 1,
    match: 97,
    youtubeId: "GKdl-jfdXQg",
    duration: 185,
    lyrics: "Here comes the sun, doo-doo-doo-doo. Here comes the sun, and I say, it's all right."
  },
  {
    id: "h14",
    title: "Firework",
    artist: "Katy Perry",
    emotion: "happy",
    language: "english",
    intensity: 3,
    match: 96,
    youtubeId: "QGJuMBdaqIw",
    duration: 227,
    lyrics: "Do you ever feel like a plastic bag, drifting through the wind? Firework!"
  },
  {
    id: "h15",
    title: "Dynamite",
    artist: "BTS",
    emotion: "happy",
    language: "english",
    intensity: 3,
    match: 97,
    youtubeId: "JGwWNGJdvx8",
    duration: 199,
    lyrics: "I'm in the stars tonight, so watch me bring the fire and set the night alight."
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
    title: "I'm Not The Only One",
    artist: "Sam Smith",
    emotion: "sad",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "nCkpzqqrGkQ",
    duration: 243,
    lyrics: "You say I'm crazy 'cause you don't think I know what you've done. But when you call me baby, I know I'm not the only one."
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
  {
    id: "s10",
    title: "Everybody Hurts",
    artist: "R.E.M.",
    emotion: "sad",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "5rOiW_xY-kc",
    duration: 317, // 5:17
    lyrics: "Everybody hurts sometimes, everybody cries. And everybody hurts sometimes."
  },
  {
    id: "s11",
    title: "when the party's over",
    artist: "Billie Eilish",
    emotion: "sad",
    language: "english",
    intensity: 2,
    match: 98,
    youtubeId: "pbMwTeeMdfY",
    duration: 199,
    lyrics: "Don't you know I'm no good for you? I've learned to lose you, can't afford to."
  },
  {
    id: "s12",
    title: "Say Something",
    artist: "A Great Big World, Christina Aguilera",
    emotion: "sad",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "-2U0Ivkn2Ds",
    duration: 229,
    lyrics: "Say something, I'm giving up on you. I'll be the one, if you want me to."
  },
  {
    id: "s13",
    title: "Let Her Go",
    artist: "Passenger",
    emotion: "sad",
    language: "english",
    intensity: 2,
    match: 97,
    youtubeId: "RBumgq5yVrA",
    duration: 252,
    lyrics: "Only know you love her when you let her go. And you let her go."
  },
  {
    id: "s14",
    title: "The Night We Met",
    artist: "Lord Huron",
    emotion: "sad",
    language: "english",
    intensity: 2,
    match: 97,
    youtubeId: "nQ-oE3Z0YbI",
    duration: 209,
    lyrics: "I had all and then most of you, some and now none of you."
  },
  {
    id: "s15",
    title: "My Heart Will Go On",
    artist: "Celine Dion",
    emotion: "sad",
    language: "english",
    intensity: 2,
    match: 96,
    youtubeId: "zgQ1I5RzY3o",
    duration: 280,
    lyrics: "Every night in my dreams, I see you, I feel you. That is how I know you go on."
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
    title: "Stronger",
    artist: "Kanye West",
    emotion: "energetic",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "PsO6ZnUZI0g",
    duration: 311,
    lyrics: "N-n-now that that don't kill me, can only make me stronger. I need you to hurry up now, 'cause I can't wait much longer."
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
    id: "e9",
    title: "Thunderstruck",
    artist: "AC/DC",
    emotion: "energetic",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "v2AC41dglnM",
    duration: 272, // 4:32
    lyrics: "I was caught in the middle of a railroad track. Thunderstruck!"
  },
  {
    id: "e10",
    title: "Can't Hold Us",
    artist: "Macklemore & Ryan Lewis",
    emotion: "energetic",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "2zNSgSzhBfM",
    duration: 258,
    lyrics: "Can we go back, this is the moment. Tonight is the night, we'll fight 'til it's over. So we put our hands up like the ceiling can't hold us."
  },
  {
    id: "e11",
    title: "Lose Yourself",
    artist: "Eminem",
    emotion: "energetic",
    language: "english",
    intensity: 3,
    match: 100,
    youtubeId: "_Yhyp-_hX2s",
    duration: 326,
    lyrics: "You only get one shot, do not miss your chance to blow. This opportunity comes once in a lifetime."
  },
  {
    id: "e12",
    title: "Uprising",
    artist: "Muse",
    emotion: "energetic",
    language: "english",
    intensity: 3,
    match: 97,
    youtubeId: "w8KQmps-Sog",
    duration: 304,
    lyrics: "They will not force us, they will stop degrading us, they will not control us. We will be victorious!"
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
    title: "Sunday Morning",
    artist: "Maroon 5",
    emotion: "calm",
    language: "english",
    intensity: 1,
    match: 97,
    youtubeId: "S2Cti12XBw4",
    duration: 245,
    lyrics: "Sunday morning, rain is falling. Steal some covers, share some skin. Clouds are shrouding us in moments unforgettable."
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
  {
    id: "c8",
    title: "Adagio for Strings",
    artist: "Samuel Barber",
    emotion: "calm",
    language: "instrumental",
    intensity: 1,
    match: 97,
    youtubeId: "RBMY4i2b-2E",
    duration: 420, // 7:00
    lyrics: "🎻 A timeless classical piece for profound calm and introspection."
  },
  {
    id: "c9",
    title: "Better Together",
    artist: "Jack Johnson",
    emotion: "calm",
    language: "english",
    intensity: 1,
    match: 98,
    youtubeId: "u57d4_b_YgI",
    duration: 207,
    lyrics: "It's not always easy and sometimes life can be deceiving. I'll tell you one thing, it's always better when we're together."
  },
  {
    id: "c10",
    title: "Ho Hey",
    artist: "The Lumineers",
    emotion: "calm",
    language: "english",
    intensity: 2,
    match: 96,
    youtubeId: "zvCBSSwgtg4",
    duration: 163,
    lyrics: "I belong with you, you belong with me, you're my sweetheart. (Ho!) (Hey!)"
  },
  {
    id: "c11",
    title: "Fast Car",
    artist: "Tracy Chapman",
    emotion: "calm",
    language: "english",
    intensity: 2,
    match: 97,
    youtubeId: "DwrHwZyJuUo",
    duration: 297,
    lyrics: "You got a fast car, I want a ticket to anywhere. Maybe we make a deal, maybe together we can get somewhere."
  },
  {
    id: "c12",
    title: "A Sky Full of Stars",
    artist: "Coldplay",
    emotion: "calm",
    language: "english",
    intensity: 1,
    match: 98,
    youtubeId: "VPRjCeoBqrI",
    duration: 268,
    lyrics: "Cause you're a sky, 'cause you're a sky full of stars. I'm aiming at you."
  },
  {
    id: "c13",
    title: "Dreams",
    artist: "Fleetwood Mac",
    emotion: "calm",
    language: "english",
    intensity: 2,
    match: 95,
    youtubeId: "Y3s0H3t3_08",
    duration: 250,
    lyrics: "Thunder only happens when it's raining. Players only love you when they're playing."
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
    title: "Just the Way You Are",
    artist: "Bruno Mars",
    emotion: "romantic",
    language: "english",
    intensity: 2,
    match: 99,
    youtubeId: "LjhCEhWiKXk",
    duration: 220,
    lyrics: "When I see your face, there's not a thing that I would change. 'Cause you're amazing, just the way you are."
  },
  {
    id: "r7",
    title: "Romantic Acoustic Strings",
    artist: "Acoustic Sunsets",
    emotion: "romantic",
    language: "instrumental",
    intensity: 1,
    match: 95,
    youtubeId: "x1fF2eCb2wQ",
    duration: 230,
    lyrics: "💖 Sweet nylon string acoustic guitar expressing timeless devotion and love."
  },
  {
    id: "r9",
    title: "All of Me",
    artist: "John Legend",
    emotion: "romantic",
    language: "english",
    intensity: 2,
    match: 100,
    youtubeId: "450p7goxZgQ",
    duration: 269, // 4:29
    lyrics: "'Cause all of me loves all of you. Love your curves and all your edges."
  },
  {
    id: "r10",
    title: "A Thousand Years",
    artist: "Christina Perri",
    emotion: "romantic",
    language: "english",
    intensity: 2,
    match: 99,
    youtubeId: "rtOvBOTyX00",
    duration: 287,
    lyrics: "I have died every day waiting for you. Darling, don't be afraid, I have loved you for a thousand years."
  },
  {
    id: "r11",
    title: "I Will Always Love You",
    artist: "Whitney Houston",
    emotion: "romantic",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "3JWTaaS7LdU",
    duration: 271,
    lyrics: "And I will always love you. I will always love you. You, my darling, you."
  },
  {
    id: "r12",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    emotion: "romantic",
    language: "english",
    intensity: 1,
    match: 99,
    youtubeId: "vGJTaP6anOU",
    duration: 181,
    lyrics: "Wise men say only fools rush in. But I can't help falling in love with you."
  },
  {
    id: "r13",
    title: "Marry You",
    artist: "Bruno Mars",
    emotion: "romantic",
    language: "english",
    intensity: 2,
    match: 98,
    youtubeId: "ekzHIouo8Q4",
    duration: 229,
    lyrics: "It's a beautiful night, we're looking for something dumb to do."
  },
  {
    id: "r14",
    title: "At Last",
    artist: "Etta James",
    emotion: "romantic",
    language: "english",
    intensity: 1,
    match: 96,
    youtubeId: "H2dGk_1M4Yc",
    duration: 182,
    lyrics: "At last, my love has come along. My lonely days are over."
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
  {
    id: "f6",
    title: "Gymnopédie No.1",
    artist: "Erik Satie",
    emotion: "focus",
    language: "instrumental",
    intensity: 1,
    match: 97,
    youtubeId: "S-Xm7s9eGxU",
    duration: 180, // 3:00
    lyrics: "🎹 Simple, elegant piano melody for quiet concentration and creative work."
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
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    emotion: "nostalgic",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "hTWKbfoikeg",
    duration: 278,
    lyrics: "With the lights out, it's less dangerous. Here we are now, entertain us. A mulatto, an albino, a mosquito, my libido."
  },
  {
    id: "n6",
    title: "Wonderwall",
    artist: "Oasis",
    emotion: "nostalgic",
    language: "english",
    intensity: 2,
    match: 98,
    youtubeId: "bx1Bh8ZvH84",
    duration: 259, // 4:19
    lyrics: "Because maybe, you're gonna be the one that saves me. And after all, you're my wonderwall."
  },
  {
    id: "n7",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    emotion: "nostalgic",
    language: "english",
    intensity: 3,
    match: 100,
    youtubeId: "fJ9rUzIMcZQ",
    duration: 354,
    lyrics: "Is this the real life? Is this just fantasy? Caught in a landslide, no escape from reality."
  },
  {
    id: "n8",
    title: "Don't Stop Believin'",
    artist: "Journey",
    emotion: "nostalgic",
    language: "english",
    intensity: 2,
    match: 99,
    youtubeId: "1k8craCGpgs",
    duration: 250,
    lyrics: "Just a small town girl, livin' in a lonely world. She took the midnight train goin' anywhere."
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
    title: "Break Stuff",
    artist: "Limp Bizkit",
    emotion: "angry",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "ZpUYjpKg9KY",
    duration: 167,
    lyrics: "It's just one of those days when you don't wanna wake up. Everything is f*cked, everybody sucks."
  },
  {
    id: "a5",
    title: "Killing in the Name",
    artist: "Rage Against the Machine",
    emotion: "angry",
    language: "english",
    intensity: 3,
    match: 100,
    youtubeId: "bWXazVhlyxQ",
    duration: 314, // 5:14
    lyrics: "Fuck you, I won't do what you tell me!"
  },
  {
    id: "a6",
    title: "Bulls on Parade",
    artist: "Rage Against the Machine",
    emotion: "angry",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "3vyrHjoV1po",
    duration: 231,
    lyrics: "They rally 'round the family with a pocket full of shells."
  },
  {
    id: "a7",
    title: "Chop Suey!",
    artist: "System Of A Down",
    emotion: "angry",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "CSvFpBOe8eY",
    duration: 208,
    lyrics: "Wake up! Grab a brush and put a little make-up! Hide the scars to fade away the shake-up!"
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
    title: "Party Rock Anthem",
    artist: "LMFAO ft. Lauren Bennett, GoonRock",
    emotion: "party",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "KQ6zr6kCPj8",
    duration: 262,
    lyrics: "Party rock is in the house tonight. Everybody just have a good time. And we gon' make you lose your mind."
  },
  {
    id: "p3",
    title: "Don't Start Now",
    artist: "Dua Lipa",
    emotion: "party",
    language: "english",
    intensity: 3,
    match: 97,
    youtubeId: "oygrmJFKYZY",
    duration: 183,
    lyrics: "If you don't wanna see me dancing with somebody... Don't show up, don't come out."
  },
  {
    id: "p4",
    title: "Get Lucky",
    artist: "Daft Punk ft. Pharrell Williams",
    emotion: "party",
    language: "english",
    intensity: 3,
    match: 99,
    youtubeId: "5K6x2E_H44c",
    duration: 247, // 4:07
    lyrics: "We're up all night to get lucky. We're up all night to get some."
  },
  {
    id: "p5",
    title: "I Gotta Feeling",
    artist: "The Black Eyed Peas",
    emotion: "party",
    language: "english",
    intensity: 3,
    match: 100,
    youtubeId: "uSD4vsh1zDA",
    duration: 247,
    lyrics: "I gotta feeling that tonight's gonna be a good night. That tonight's gonna be a good, good night."
  },
  {
    id: "p6",
    title: "Shake It Off",
    artist: "Taylor Swift",
    emotion: "party",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "nfWlot6h_JM",
    duration: 233,
    lyrics: "'Cause the players gonna play, play, play, play, play. And the haters gonna hate, hate, hate, hate, hate. Baby, I'm just gonna shake, shake, shake, shake, shake. I shake it off, I shake it off."
  },
  {
    id: "p7",
    title: "On the Floor",
    artist: "Jennifer Lopez ft. Pitbull",
    emotion: "party",
    language: "english",
    intensity: 3,
    match: 98,
    youtubeId: "t4H_Zoh7G5A",
    duration: 256,
    lyrics: "If you go down, down, down, down, down, down, I got you, you know."
  },
  {
    id: "p8",
    title: "Can't Feel My Face",
    artist: "The Weeknd",
    emotion: "party",
    language: "english",
    intensity: 3,
    match: 97,
    youtubeId: "KEI4qSrkPAs",
    duration: 213,
    lyrics: "And I know she'll be the death of me, at least we'll both be numb."
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
    title: "Deep Sleep Ambient Music",
    artist: "DreamScapes",
    emotion: "sleep",
    language: "instrumental",
    intensity: 1,
    match: 99,
    youtubeId: "g3__e6jV02A",
    duration: 3600,
    lyrics: "💤 Continuous ambient soundscape for deep, uninterrupted sleep."
  },
  {
    id: "sl4",
    title: "Clair de Lune",
    artist: "Claude Debussy",
    emotion: "sleep",
    language: "instrumental",
    intensity: 1,
    match: 97,
    youtubeId: "CvFh_y-q-B0",
    duration: 300, // 5:00
    lyrics: "🌙 A serene and dreamy piano piece, perfect for winding down and peaceful sleep."
  },
  {
    id: "sl5",
    title: "Orinoco Flow",
    artist: "Enya",
    emotion: "sleep",
    language: "english",
    intensity: 1,
    match: 96,
    youtubeId: "LTrk4X9ACtw",
    duration: 226,
    lyrics: "Sail away, sail away, sail away. From Bissau to Palau, in the shade of Avalon."
  },
  {
    id: "sl6",
    title: "Only Time",
    artist: "Enya",
    emotion: "sleep",
    language: "english",
    intensity: 1,
    match: 95,
    youtubeId: "7wfYIMyS_dI",
    duration: 217,
    lyrics: "Who can say where the road goes, where the day flows? Only time. And who can say if your love grows, as your heart chose? Only time."
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
  feelYourMusicBadge: document.getElementById("feelYourMusicBadge"),
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

  // Favorites Drawer
  favoritesToggleBtn: document.getElementById("favoritesToggleBtn"),
  favoritesDrawer: document.getElementById("favoritesDrawer"),
  closeFavDrawerBtn: document.getElementById("closeFavDrawerBtn"),
  favSongsList: document.getElementById("favSongsList"),
  clearAllFavsBtn: document.getElementById("clearAllFavsBtn"),
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

  EMOTIONS_DATA.forEach((emotion, index) => {
    const card = document.createElement("div");
    card.className = `emotion-card ${emotion.id === AppState.currentEmotion ? 'active' : ''}`;
    card.dataset.emotionId = emotion.id;
    card.style.setProperty("--card-gradient", emotion.gradient);
    card.style.setProperty("--card-accent", emotion.accent);
    card.style.setProperty("--card-glow", emotion.glow);

    // Staggered animation for loading
    card.style.animationDelay = `${index * 50}ms`;

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

function getSongThumbnail(song) {
  return `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`;
}

function getFallbackThumbnail(song) {
  const emotion = EMOTIONS_DATA.find(item => item.id === song.emotion);
  const accent = emotion ? emotion.accent : '#ef4444';
  const escapeSvgText = value => value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  })[character]);
  const title = escapeSvgText(song.title.length > 28 ? `${song.title.slice(0, 26)}...` : song.title);
  const artist = escapeSvgText(song.artist.length > 28 ? `${song.artist.slice(0, 26)}...` : song.artist);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#111827" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#bg)" />
      <circle cx="520" cy="80" r="120" fill="white" opacity=".12" />
      <circle cx="520" cy="80" r="62" fill="none" stroke="white" stroke-width="3" opacity=".35" />
      <path d="M510 52v82a28 28 0 1 1-14-24V78l72-20v64a28 28 0 1 1-14-24V40z" fill="white" opacity=".9" />
      <text x="40" y="250" fill="white" font-family="Arial, sans-serif" font-size="30" font-weight="700">${title}</text>
      <text x="40" y="292" fill="white" opacity=".72" font-family="Arial, sans-serif" font-size="20">${artist}</text>
      <text x="40" y="326" fill="white" opacity=".5" font-family="Arial, sans-serif" font-size="14" letter-spacing="2">MOODIFY</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function useThumbnailFallback(image, song) {
  image.addEventListener('error', () => {
    if (image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = 'true';
    image.src = getFallbackThumbnail(song);
  });
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
    const thumbnail = getSongThumbnail(song);

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

    useThumbnailFallback(card.querySelector('.song-card-artwork img'), song);

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
/**
 * Orchestrates playing a new song by updating state, UI, and handling playback.
 * @param {object} song - The song object to play.
 * @param {number} [index=-1] - The index of the song in the current playlist.
 * @param {boolean} [autoOpenYouTube=false] - Whether to automatically open the song on YouTube.
 */
function playSong(song, index = -1, autoOpenYouTube = false) {
  updateCurrentTrackState(song, index);
  updateAllSongUI(song);
  handlePlaybackActions(song, autoOpenYouTube);
}

/**
 * Updates the global AppState for the currently playing track.
 * @param {object} song - The new song object.
 * @param {number} index - The playlist index of the new song.
 */
function updateCurrentTrackState(song, index) {
  AppState.currentTrack = song;
  AppState.playlistIndex = index !== -1 ? index : AppState.playlist.findIndex(s => s.id === song.id);
  AppState.isPlaying = true;
  AppState.currentTimeSec = 0;
}

/**
 * Updates all relevant UI components to reflect the new playing song.
 * @param {object} song - The song object to display.
 */
function updateAllSongUI(song) {
  const thumbnail = getSongThumbnail(song);
  const ytEmbedUrl = `https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&enablejsapi=1&rel=0`;

  // Update artwork and cinema player
  DOM.playerThumbImg.src = thumbnail;
  DOM.modalThumbImg.src = thumbnail;
  DOM.playerThumbImg.onerror = () => {
    DOM.playerThumbImg.onerror = null;
    DOM.playerThumbImg.src = getFallbackThumbnail(song);
  };
  DOM.modalThumbImg.onerror = () => {
    DOM.modalThumbImg.onerror = null;
    DOM.modalThumbImg.src = getFallbackThumbnail(song);
  };
  DOM.playerThumbBox.classList.add("playing");
  if (DOM.cinemaYtIframe) DOM.cinemaYtIframe.src = ytEmbedUrl;

  // Update specific UI sections
  updatePlayerBarUI(song);
  updateModalUI(song);
  updatePlayPauseButtons(true);
  highlightActiveCard(song.id);
}

/**
 * Handles side effects of playing a song, like opening YouTube and starting timers.
 * @param {object} song - The song object.
 * @param {boolean} autoOpenYouTube - Flag to open in a new tab.
 */
function handlePlaybackActions(song, autoOpenYouTube) {
  if (autoOpenYouTube) {
    showYouTubeToast(song.title);
    window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, "_blank");
  }
  startProgressTracker(song.duration);
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
  DOM.durationLabel.textContent = formatDuration(duration);

  const percent = Math.min((current / duration) * 100, 100);
  DOM.timelineFill.style.width = `${percent}%`;
  DOM.timelineHandle.style.left = `${percent}%`;
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

function clearAllFavorites() {
  if (AppState.favorites.length === 0) return;

  const confirmed = confirm("Are you sure you want to clear all liked songs? This action cannot be undone.");
  if (confirmed) {
    AppState.favorites = [];
    localStorage.setItem("moodify_favorites", JSON.stringify(AppState.favorites));
    
    updateFavoritesCount();
    renderFavoritesList();
    filterAndRenderSongs(); // Re-renders song cards to update heart icons

    // Update player bar if a song is playing
    if (AppState.currentTrack) updatePlayerBarUI(AppState.currentTrack);
  }
}

function updateFavoritesCount() {
  DOM.favCountBadge.textContent = AppState.favorites.length;
}

function renderFavoritesList() {
  DOM.favSongsList.innerHTML = "";

  // Hide/show the clear all button based on whether there are favorites
  if (DOM.clearAllFavsBtn) {
    DOM.clearAllFavsBtn.style.display = AppState.favorites.length > 0 ? 'flex' : 'none';
  }

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
        <img src="${getSongThumbnail(song)}" alt="${song.title}">
        <div class="fav-item-text">
          <div class="fav-item-title">${song.title}</div>
          <div class="fav-item-artist">${song.artist}</div>
        </div>
      </div>
      <button class="song-fav-btn liked" title="Remove from favorites"><i class="fa-solid fa-heart"></i></button>
    `;

    useThumbnailFallback(item.querySelector('.fav-item-info img'), song);

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
// 9. EVENT LISTENERS SETUP & KEYBOARD SHORTCUTS
// ==========================================================================
function setupEventListeners() {
  DOM.brandLogo.addEventListener("click", () => setEmotion("happy", true));

  DOM.feelYourMusicBadge.addEventListener("click", () => {
    DOM.emotionsGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // Play / Pause Buttons (Launch directly on YouTube)
  DOM.playPauseBtn.addEventListener("click", togglePlayPause);

  // Prev / Next Buttons
  DOM.prevBtn.addEventListener("click", () => playPrevTrack(true));
  DOM.nextBtn.addEventListener("click", () => playNextTrack(true));

  // Skip 10 Seconds Buttons (-10s / +10s)
  if (DOM.skipBack10Btn) DOM.skipBack10Btn.addEventListener("click", () => skipSeconds(-10));
  if (DOM.skipFwd10Btn) DOM.skipFwd10Btn.addEventListener("click", () => skipSeconds(10));

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

  // Clear all favorites button
  if (DOM.clearAllFavsBtn) {
    DOM.clearAllFavsBtn.addEventListener("click", clearAllFavorites);
  }

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
