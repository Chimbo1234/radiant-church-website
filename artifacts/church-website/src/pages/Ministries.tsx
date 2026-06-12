import { motion } from "framer-motion";
import { useListMinistries } from "@workspace/api-client-react";

export default function Ministries() {
  const { data: ministriesData } = useListMinistries();
  const ministries = ministriesData ?? [
    { id: 1, name: "Leader Of AFM in India", category: "President", leader: "Pastor B.Makunda", meetingTime: "INDIA", description: "We lead the congregation into the presence of God through Spirit-filled worship, praise, and intercession every Sunday and at special gatherings.", imageUrl: "https://scontent.fluh1-4.fna.fbcdn.net/v/t39.30808-6/495055100_24030199426585996_4373626760726656886_n.jpg?stp=dst-jpg_tt6&cstp=mx1756x2048&ctp=s1756x2048&_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=cfDwgL5a8twQ7kNvwFpgxmD&_nc_oc=AdrGoqC2IHkpisrGZdA6P_2GF2YW1guG3HHXt8qjnpE_n-DpPmqA5HFaTX3EWRcf5iEqefsihVtW2J5_XC8FZHKT&_nc_zt=23&_nc_ht=scontent.fluh1-4.fna&_nc_gid=QgSjgiher0vMWDPSFuJjlQ&_nc_ss=7b2a8&oh=00_Af803j-UNeWhHvSSPKBUwuP07gGDf2mIixJaVC0ihURYxA&oe=6A316CB2" },
    { id: 2, name: "Overseer Of Youth Ministry", category: "Vice President", leader: "Reverend N.Jecheche", meetingTime: "HARYANA", description: "A vibrant community for young people to grow in faith, build lasting friendships, and discover their God-given purpose and calling.", imageUrl: "rev.jpg" },
    { id: 3, name: "Leader of Peneil Assembly", category: "Minister", leader: "Minister Shekinah", meetingTime: "JALANDAR", description: "We take the gospel beyond the four walls of the church, serving our community and partnering with missionaries around the world.", imageUrl: "sheky.jpg" },
    { id: 4, name: "Leader of Rehoboth Assembly", category: "Minister", leader: "Minister Praise", meetingTime: "CHANDIGARH", description: "Dedicated intercessors who cover the church, its members, and the nations in prayer. All are welcome to join our weekly prayer gatherings.", imageUrl: "praise.jpg" },
    { id: 5, name: "Leader of Koinonia Assembly", category: "Minister", leader: "Minister Peter", meetingTime: "GREATER NOIDA", description: "We take the gospel beyond the four walls of the church, serving our community and partnering with missionaries around the world.", imageUrl: "peter.jpg" },
    { id: 6, name: "Leader of Shiloh Assembly", category: "Minister", leader: "Minister T.Nkala", meetingTime: "PUNJAB", description: "Dedicated intercessors who cover the church, its members, and the nations in prayer. All are welcome to join our weekly prayer gatherings.", imageUrl: "nkala.jpg" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Find Your Place
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            Church is more than a Sunday service. It's a community growing together, serving the city, and shaping the future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ministries.map((ministry, i) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border border-border bg-card hover:border-primary transition-colors p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-start cursor-pointer"
            >
              <div className="w-full sm:w-40 aspect-square overflow-hidden shrink-0 bg-muted">
                <img
                  src={ministry.imageUrl || `/images/ministry-${(i % 3) + 1}.png`}
                  alt={ministry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex-1">
                <div className="text-primary text-xs tracking-widest uppercase font-medium mb-2">
                  {ministry.category}
                </div>
                <h3 className="font-serif text-3xl mb-4 group-hover:text-primary transition-colors">
                  {ministry.name}
                </h3>
                <p className="text-muted-foreground text-sm font-light mb-6 line-clamp-3 leading-relaxed">
                  {ministry.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-muted-foreground mb-6">
                  <div>
                    <span className="block uppercase tracking-widest text-[10px] mb-1 text-foreground/50">Leader</span>
                    {ministry.leader}
                  </div>
                  <div>
                    <span className="block uppercase tracking-widest text-[10px] mb-1 text-foreground/50">Assembly</span>
                    {ministry.meetingTime}
                  </div>
                </div>
                <div className="uppercase tracking-widest text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                  Get Involved →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}