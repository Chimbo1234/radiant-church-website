import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Our Story</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
            >
              Created for <br/><span className="text-muted-foreground italic">Connection</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-8"
            >
             About Us

The Apostolic Faith Mission (AFM) Church in India was established nearly two years ago with a clear mission: to proclaim the Gospel of salvation to all people and lead them into a life-changing relationship with Jesus Christ.

We are committed to sharing the message of hope, grace, and eternal life through both our words and our deeds. In obedience to the Great Commission, we baptize believers in water in the name of the Father, the Son, and the Holy Spirit, and we prayerfully prepare converts to receive the baptism of the Holy Spirit with the evidence of speaking in tongues.

As a Spirit-filled church, we believe in the healing power of Jesus Christ and faithfully pray for the sick. We are dedicated to making disciples, equipping believers for ministry, and raising men and women who will serve God with passion, integrity, and purpose.

Our mission is to prepare God's people for the Second Coming of our Lord Jesus Christ through sound biblical teaching, fervent prayer, fasting, Christian education, fellowship, counseling, and practical acts of compassion. We strive to serve our communities by assisting those in need and demonstrating the love of Christ through various works of faith.

At AFM Church India, everyone is welcome to grow in faith, experience the presence of God, and become part of a vibrant family of believers committed to advancing the Kingdom of God.
.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg font-light leading-relaxed"
            >
             
            </motion.p>
          </div>
          <div className="relative aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1571946805638-3cc11f7ea1bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBvc3RvbGljJTIwZmFpdGglMjBtaXNzaW9ufGVufDB8fDB8fHww" 
              alt="Church Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-border/20 pointer-events-none"></div>
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-border bg-card">
              <h3 className="font-serif text-2xl mb-4 text-primary">Reverence</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Approaching the divine with awe, intention, and quiet respect in a noisy world.</p>
            </div>
            <div className="p-8 border border-border bg-card">
              <h3 className="font-serif text-2xl mb-4 text-primary">Community</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Living life together, sharing burdens, and celebrating victories in authentic relationship.</p>
            </div>
            <div className="p-8 border border-border bg-card">
              <h3 className="font-serif text-2xl mb-4 text-primary">Excellence</h3>
              <p className="text-muted-foreground font-light leading-relaxed">Honoring God through the careful craft of everything we create, from music to architecture.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] max-w-md mx-auto w-full">
            <img 
              src="https://scontent.fluh1-3.fna.fbcdn.net/v/t39.30808-6/493277842_1234162372050970_4443113290874824005_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EP-pjYpS6awQ7kNvwHDI3XA&_nc_oc=AdoB6B5cCoFBVQERnVgUODWkz-O0aU47AdZk_tv0buWqTEljSOA1E7JvRKR7gO0K7EewtWcBLB5NBEdMrWFHnhEP&_nc_zt=23&_nc_ht=scontent.fluh1-3.fna&_nc_gid=nxEycbdKmrilUAKuRI4faA&_nc_ss=7b2a8&oh=00_Af_BYuLDtxQjO7DzIQzJANjyuxZufqbL2CAshFxka_b7Og&oe=6A25C8B1" 
              alt="Lead Pastor" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Leadership</span>
            <h2 className="font-serif text-5xl mb-6">Pastor B. Makunda</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
  Pastor Makunda and his wife have faithfully served the Lord by establishing and leading the Apostolic Faith Mission (AFM) Church ministry in India. With a deep passion for evangelism, discipleship, and Spirit-filled ministry, they are committed to seeing lives transformed through the power of the Gospel of Jesus Christ.

Through their leadership, the church continues to grow as a community of faith dedicated to worship, prayer, biblical teaching, and outreach. Their vision is to equip believers for ministry, strengthen families, raise future leaders, and prepare God's people for the return of our Lord Jesus Christ.

Together, they continue to serve with humility and dedication, building a Christ-centered church that impacts lives, communities, and future generations for the glory of God.
.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
