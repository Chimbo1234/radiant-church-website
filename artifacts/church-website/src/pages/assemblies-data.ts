export interface Leader {
  name: string;
  position: string;
  bio: string;
  photo: string;
}

export interface ServiceTime {
  day: string;
  name: string;
  time: string;
}

export interface Ministry {
  name: string;
  description: string;
  icon: string;
}

export interface Assembly {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  established: string;
  heroImage: string;
  cardImage: string;
  leaders: Leader[];
  serviceTimes: ServiceTime[];
  ministries: Ministry[];
  gallery: string[];
}

export const assemblies: Assembly[] = [
  {
    id: "1",
    slug: "philadelphia",
    name: "Philadelphia Assembly",
    tagline: "The Church of Brotherly Love",
    description: "A vibrant community of believers committed to worship, fellowship, and spreading the love of Christ throughout the region.",
    location: "Dehli, Haryana",
    address: "Philadelphia Auditorium , Annuparna dhaba, palwal",
    phone: "+91 8059846797",
    email: "philadelphia@afmindia.org",
    established: "31 August 2025",
    heroImage: "blob:https://web.whatsapp.com/31e14169-198a-4088-bfaa-d79fa7c8daa8",
    cardImage: "blob:https://web.whatsapp.com/3eff99f3-a725-4c36-965c-b1654a2eabcc",
    leaders: [
      {
        name: "Minister Bertha",
        position: "Preceeding Minister",
        bio: "Minster  has served the Lord faithfully for over a decade, leading with a heart for evangelism and discipleship.",
        photo: "blob:https://web.whatsapp.com/7830d4d9-3d26-45f5-a692-ed76ba61454c",
      },
      {
        name: "Nkosilomusa Jecheche",
        position: "Reverend",
        bio: "Elder Samuel oversees the pastoral care ministry and mentors young believers in the faith.",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "10:00 AM" },
      { day: "Wednesday", name: "Midweek Service", time: "18:30 PM" },
      { day: "Friday", name: "Bible Study", time: "18:30 PM" },
      { day: "Saturday", name: "Praise n Worship", time: "16:00 PM" },
    ],
    ministries: [
      { name: "Youth Ministry", description: "Raising the next generation of Spirit-filled believers.", icon: "Users" },
      { name: "Women's Fellowship", description: "Empowering women to walk boldly in their calling.", icon: "Heart" },
      { name: "Men's Fellowship", description: "Building men of integrity, faith, and purpose.", icon: "Shield" },
      { name: "Children's Ministry", description: "Planting seeds of faith in our youngest members.", icon: "Star" },
      { name: "Choir", description: "Leading the congregation in Spirit-filled worship.", icon: "Music" },
      { name: "Evangelism Team", description: "Taking the Gospel beyond the four walls of the church.", icon: "Globe" },
    ],
    gallery: [
      "blob:https://web.whatsapp.com/8b258bcc-15b8-465b-a0ff-cadc4b2a8ff6",
      "blob:https://web.whatsapp.com/14d9cef1-39f8-4ab3-8206-75ccc27ea1ac",
      "blob:https://web.whatsapp.com/3eff99f3-a725-4c36-965c-b1654a2eabcc",
      "blob:https://web.whatsapp.com/8b258bcc-15b8-465b-a0ff-cadc4b2a8ff6",
    ],
  },
  {
    id: "2",
    slug: "shiloh",
    name: "Shiloh Assembly",
    tagline: "Where God's Presence Dwells",
    description: "A house of prayer and worship where believers encounter the tangible presence of God and lives are transformed.",
    location: "Jalandhar, Punjab",
    address: "Shiloh auditorium near Pizza world basement, Jalandhar, Punjab 144001",
    phone: "+91 98765 43211",
    email: "shiloh@afmindia.org",
    established: "29 December 2024",
    heroImage: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&auto=format&fit=crop&q=80",
    leaders: [
      {
        name: "Minister Chiwara",
        position: "Preceeding Minister",
        bio: "Minister carries a deep burden for revival and leads the assembly with prophetic vision and pastoral care.",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "10:00 AM" },
      { day: "Tuesday", name: "Prayer Meeting", time: "18:30 AM" },
      { day: "Friday", name: "Bible Study", time: "18:30 PM" },
      { day: "Saturday", name: "Praise and worship", time: "15:00 PM" },
    ],
    ministries: [
      { name: "Youth Ministry", description: "Igniting passion for God in the hearts of young people.", icon: "Users" },
      { name: "Women's Fellowship", description: "A sisterhood rooted in prayer and the Word.", icon: "Heart" },
      { name: "Men's Fellowship", description: "Iron sharpening iron for the Kingdom.", icon: "Shield" },
      { name: "Children's Ministry", description: "Nurturing young hearts to love Jesus.", icon: "Star" },
      { name: "Choir", description: "Ministering through song and worship.", icon: "Music" },
      { name: "Evangelism Team", description: "Reaching the lost with the message of salvation.", icon: "Globe" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "3",
    slug: "peniel",
    name: "Peniel Assembly",
    tagline: "Face to Face with God",
    description: "Named after the place where Jacob wrestled with God, Peniel Assembly is a community that pursues God with wholehearted devotion.",
    location: " Punjab , Jalandar Rama Mandi 144001",
    address: "Peneil Auditorium near amarpalace , Punjab 143001",
    phone: "+263 7746 12846",
    email: "peniel@afmindia.org",
    established: "22 November 2025",
    heroImage: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=1600&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&auto=format&fit=crop&q=80",
    leaders: [
      {
        name: "Pastor Emmanuel Singh",
        position: "Resident Pastor",
        bio: "Pastor Emmanuel is an anointed teacher of the Word with a passion for seeing every believer grow to spiritual maturity.",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "10:00 AM" },
      { day: "Wednesday", name: "Midweek Service", time: "18:30 PM" },
      { day: "Friday", name: "Prayer & Worship", time: "18:30 PM" },
      { day: "Saturday", name: "Youth Fellowship", time: "18:00 PM" },
    ],
    ministries: [
      { name: "Youth Ministry", description: "Transforming young lives through the power of the Gospel.", icon: "Users" },
      { name: "Women's Fellowship", description: "Women walking in grace, truth, and purpose.", icon: "Heart" },
      { name: "Men's Fellowship", description: "Men anchored in faith and servant leadership.", icon: "Shield" },
      { name: "Children's Ministry", description: "Building strong foundations of faith from childhood.", icon: "Star" },
      { name: "Choir", description: "Exalting the name of Jesus through anointed music.", icon: "Music" },
      { name: "Evangelism Team", description: "Going into every corner with the Good News.", icon: "Globe" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545128485-c400ce7b23d0?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "4",
    slug: "koinonia",
    name: "Koinonia Assembly",
    tagline: "Fellowship in the Spirit",
    description: "Koinonia means fellowship — and at the heart of this assembly is a deep, authentic community built on love, prayer, and the Word.",
    location: "Delhi, Greater Noida, Uttar Pradesh",
    address: "Supertech Golf Country, Greater Noida, Uttar Pradesh 201308",
    phone: "+263 78099 1610",
    email: "koinonia@afmindia.org",
    established: "1 March 2026",
    heroImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
    leaders: [
      {
        name: "Faith ",
        position: "Preceeding Minister",
        bio: "Minister brings a heart of compassion and a gift for building community wherever he ministers.",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "10:00 AM" },
      { day: "Wednesday", name: "Midweek Service", time: "18:30 PM" },
      { day: "Friday", name: "Bible Study", time: "18:00 PM" },
      { day: "Saturday", name: "Youth Fellowship", time: "16:00 PM" },
    ],
    ministries: [
      { name: "Youth Ministry", description: "A generation on fire for God.", icon: "Users" },
      { name: "Women's Fellowship", description: "Virtuous women growing together in Christ.", icon: "Heart" },
      { name: "Men's Fellowship", description: "Kingdom men standing firm in faith.", icon: "Shield" },
      { name: "Children's Ministry", description: "Shaping the faith of tomorrow's leaders today.", icon: "Star" },
      { name: "Choir", description: "Songs of praise that usher in God's presence.", icon: "Music" },
      { name: "Evangelism Team", description: "Sharing the love of Christ in our communities.", icon: "Globe" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "5",
    slug: "rehoboth",
    name: "Rehoboth Assembly",
    tagline: "God Has Made Room for Us",
    description: "Rehoboth — meaning 'broad places' — is an assembly where God continues to expand His work and make room for every soul to encounter Him.",
    location: "Bathinda, Punjab",
    address: "56 Revival Road, Bathinda, Punjab 151001",
    phone: "+91 98765 43214",
    email: "rehoboth@afmindia.org",
    established: "15 Febrauary 2026",
    heroImage: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=1600&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=800&auto=format&fit=crop&q=80",
    leaders: [
      {
        name: "Nyashadzashe Chibwe ",
        position: "Precceeding Minister",
        bio: "Pastor Andrew is a passionate evangelist who believes God wants to pour out His Spirit on all flesh in this generation.",
        photo: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "10:00 AM" },
      { day: "Tuesday", name: "Prayer Meeting", time: "18:00 AM" },
      { day: "Friday", name: "Bible Study", time: "18:30 PM" },
      { day: "Saturday", name: "Youth Fellowship", time: "17:00 PM" },
    ],
    ministries: [
      { name: "Youth Ministry", description: "Youth ablaze with the fire of the Holy Spirit.", icon: "Users" },
      { name: "Women's Fellowship", description: "Women of faith lifting one another higher.", icon: "Heart" },
      { name: "Men's Fellowship", description: "Men rooted in the Word and active in service.", icon: "Shield" },
      { name: "Children's Ministry", description: "Sowing seeds of faith in the hearts of children.", icon: "Star" },
      { name: "Choir", description: "Music that glorifies God and stirs the Spirit.", icon: "Music" },
      { name: "Evangelism Team", description: "Fulfilling the Great Commission one soul at a time.", icon: "Globe" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555924640-f37f929c5a98?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=600&auto=format&fit=crop&q=80",
    ],
  },
];