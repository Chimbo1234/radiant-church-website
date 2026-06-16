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
    location: "Ludhiana, Punjab",
    address: "123 Church Road, Ludhiana, Punjab 141001",
    phone: "+91 98765 43210",
    email: "philadelphia@afmindia.org",
    established: "2022",
    heroImage: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1600&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&auto=format&fit=crop&q=80",
    leaders: [
      {
        name: "Pastor James Nkala",
        position: "Resident Pastor",
        bio: "Pastor James has served the Lord faithfully for over a decade, leading with a heart for evangelism and discipleship.",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Elder Samuel Patel",
        position: "Elder",
        bio: "Elder Samuel oversees the pastoral care ministry and mentors young believers in the faith.",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "9:00 AM" },
      { day: "Wednesday", name: "Midweek Service", time: "6:30 PM" },
      { day: "Friday", name: "Bible Study", time: "6:30 PM" },
      { day: "Saturday", name: "Youth Fellowship", time: "4:00 PM" },
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
      "https://images.unsplash.com/photo-1555924640-f37f929c5a98?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485795046599-702122cd1267?w=600&auto=format&fit=crop&q=80",
    ],
  },
  {
    id: "2",
    slug: "shiloh",
    name: "Shiloh Assembly",
    tagline: "Where God's Presence Dwells",
    description: "A house of prayer and worship where believers encounter the tangible presence of God and lives are transformed.",
    location: "Jalandhar, Punjab",
    address: "45 Mission Street, Jalandhar, Punjab 144001",
    phone: "+91 98765 43211",
    email: "shiloh@afmindia.org",
    established: "2022",
    heroImage: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1600&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&auto=format&fit=crop&q=80",
    leaders: [
      {
        name: "Pastor David Masih",
        position: "Resident Pastor",
        bio: "Pastor David carries a deep burden for revival and leads the assembly with prophetic vision and pastoral care.",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "10:00 AM" },
      { day: "Tuesday", name: "Prayer Meeting", time: "5:30 AM" },
      { day: "Friday", name: "Bible Study", time: "6:00 PM" },
      { day: "Saturday", name: "Youth Fellowship", time: "5:00 PM" },
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
    location: "Amritsar, Punjab",
    address: "78 Gospel Lane, Amritsar, Punjab 143001",
    phone: "+91 98765 43212",
    email: "peniel@afmindia.org",
    established: "2023",
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
      { day: "Sunday", name: "Morning Worship", time: "9:30 AM" },
      { day: "Wednesday", name: "Midweek Service", time: "6:00 PM" },
      { day: "Friday", name: "Prayer & Worship", time: "6:30 PM" },
      { day: "Saturday", name: "Youth Fellowship", time: "4:30 PM" },
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
    location: "Patiala, Punjab",
    address: "22 Apostolic Avenue, Patiala, Punjab 147001",
    phone: "+91 98765 43213",
    email: "koinonia@afmindia.org",
    established: "2023",
    heroImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80",
    leaders: [
      {
        name: "Pastor Peter Kumar",
        position: "Resident Pastor",
        bio: "Pastor Peter brings a heart of compassion and a gift for building community wherever he ministers.",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "10:00 AM" },
      { day: "Wednesday", name: "Midweek Service", time: "6:30 PM" },
      { day: "Friday", name: "Bible Study", time: "6:00 PM" },
      { day: "Saturday", name: "Youth Fellowship", time: "4:00 PM" },
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
    established: "2024",
    heroImage: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=1600&auto=format&fit=crop&q=80",
    cardImage: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=800&auto=format&fit=crop&q=80",
    leaders: [
      {
        name: "Pastor Andrew Massey",
        position: "Resident Pastor",
        bio: "Pastor Andrew is a passionate evangelist who believes God wants to pour out His Spirit on all flesh in this generation.",
        photo: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?w=400&auto=format&fit=crop&q=80",
      },
    ],
    serviceTimes: [
      { day: "Sunday", name: "Morning Worship", time: "9:00 AM" },
      { day: "Tuesday", name: "Prayer Meeting", time: "6:00 AM" },
      { day: "Friday", name: "Bible Study", time: "6:30 PM" },
      { day: "Saturday", name: "Youth Fellowship", time: "5:00 PM" },
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