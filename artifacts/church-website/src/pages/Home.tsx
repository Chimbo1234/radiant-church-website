import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  useGetChurchStats, 
  useGetFeaturedSermon, 
  useListTestimonials, 
  useListEvents,
  useSubscribeNewsletter 
} from "@workspace/api-client-react";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Home() {
  const { data: stats } = useGetChurchStats();
  const { data: featuredSermon } = useGetFeaturedSermon();
  const { data: testimonialsData } = useListTestimonials();
  const testimonials = testimonialsData ?? [
    { id: 1, name: "Reverend N.Jecheche", location: "Philadephia, Haryana", quote: "This church changed my life. The community and teaching here is unlike anything I have ever experienced.", avatarUrl: "rev.jpg" },
    { id: 2, name: "Minister Peter", location: "Koinonia, Greater Noida", quote: "I found true fellowship and purpose here. The Word is preached with power and conviction every single week.", avatarUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png" },
    { id: 3, name: "Minister Praise", location: "Rehoboth, Chandigarh", quote: "From the moment I walked in, I felt at home. God is truly moving in this place in remarkable ways.",avatarUrl: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"},
  ];
  const { data: eventsData } = useListEvents({ limit: 3, upcoming: true });
  const events = eventsData ?? [
    { id: 1, title: "Sunday Worship Service", date: "Every Sunday", location: "Join us at your designated assembly location. Services begin at 10:00 AM.", category: "Worship", imageUrl: "https://scontent.fluh1-4.fna.fbcdn.net/v/t51.82787-15/706003212_17875792023607362_4570928334510791557_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xEVkTT1Mo3QQ7kNvwEWOoNj&_nc_oc=AdrTgNN9J3oEz7mjwrGneAQkX0JDUkcirFhtzxRxBRq3sACEpC-ytiALNsWl5s1PKfBfckNrjSMmCBc2wO5bSMQA&_nc_zt=23&_nc_ht=scontent.fluh1-4.fna&_nc_gid=VfOryRHPYOtf-_BXYHlzlA&_nc_ss=7b2a8&oh=00_Af_atQmPAMowqfFBbkIuTPLUGYi9z3-s5i04DpY5SHBj4g&oe=6A26A216" },
    { id: 2, title: "Youth Conference", date: "June 11-14, 2026", location: "Fellowship Hall", category: "Youth", imageUrl: "https://scontent.fluh1-2.fna.fbcdn.net/v/t51.82787-15/671074983_17869827549607362_5068186855750322060_n.webp?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hZjBSxTe2GkQ7kNvwEOyqDp&_nc_oc=Adp3B63k6DH-zwwivdtO0N1CD9AVmGeW-sfSWkgI5gko0QwZoGG58t84aKxs1m-Cui0aJvCX1f6xasjktQR3UsGY&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&_nc_gid=PnNyFl13MTuS7Kxa57r-fw&_nc_ss=7b2a8&oh=00_Af8R996DJJL01CfrScGq-tS87qtWBDxUmleTKbLIVHx6lg&oe=6A26AFA9" },
    { id: 3, title: "Community Outreach", date: "TBA", location: "Jalandar", category: "Missions", imageUrl: "https://i.pinimg.com/736x/96/7f/c2/967fc2a2faf70ef08fc5744831e023cb.jpg" },
  ];
  
  const subscribeNewsletter = useSubscribeNewsletter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  function onSubscribe(values: z.infer<typeof newsletterSchema>) {
    subscribeNewsletter.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Subscribed",
            description: "You have been added to our newsletter.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to subscribe. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  }

  return (
    <main className="min-h-[100dvh] w-full bg-background overflow-hidden font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/700708516_1426973766123852_2211573182973582220_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0zKRw9TKYoAQ7kNvwG9gZON&_nc_oc=Ado1ylTTZSDmOBXxZmda08wnaXTHvnoS-zifdXSwxATPJZdrK1KeB3E0eKEEQxNkaULdNr9TjLsDTMuIUhMftC6R&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&_nc_gid=TK2bfFYkOqE_R3Fvyg8_QA&_nc_ss=7b289&oh=00_Af-KpCwzG4cSd96GVS8rK1E6vUMnErqNWC1IMw0WgUaBVg&oe=6A26B2C2" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-80 dark:opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-none text-foreground"
          >
            AFM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="mt-6 md:mt-10 text-lg md:text-2xl font-light tracking-widest uppercase text-muted-foreground"
          >
            And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers.
          </motion.p>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="rev.jpg" 
                alt="Latest Sermon" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border/20 pointer-events-none"></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start text-left">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Latest Message</span>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight">
              {featuredSermon ? featuredSermon.title : "The Architecture of Faith"}
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
              {featuredSermon?.description || "Discover what it means to build a life of intention, grounded in unshakeable truth. A journey into the sacred spaces of the heart."}
            </p>
            <Link href={`/sermons/${featuredSermon?.id || 1}`} className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors">
              <span className="text-sm tracking-widest uppercase pb-1 border-b border-foreground group-hover:border-primary transition-colors">Watch Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card text-card-foreground border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          <div>
            <h3 className="font-serif text-5xl md:text-6xl text-primary mb-2">{stats?.memberCount || "800+"}</h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Global Members</p>
          </div>
          <div>
            <h3 className="font-serif text-5xl md:text-6xl text-primary mb-2">{stats?.countriesReached || "6"}</h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">States Reached</p>
          </div>
          <div>
            <h3 className="font-serif text-5xl md:text-6xl text-primary mb-2">{stats?.livesTransformed || "100+"}</h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Lives Transformed</p>
          </div>
          <div>
            <h3 className="font-serif text-5xl md:text-6xl text-primary mb-2">{stats?.yearsEstablished || "1.5"}</h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Years Established</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Gatherings</span>
            <h2 className="font-serif text-4xl md:text-6xl">Upcoming Events</h2>
          </div>
          <Link href="/events">
            <span className="text-sm tracking-widest uppercase pb-1 border-b border-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer">
              View All Events
            </span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events?.map((event, i) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <div className="group cursor-pointer border border-border bg-card hover:border-primary transition-colors flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={event.imageUrl || `/images/event-${(i % 3) + 1}.png`} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-foreground text-xs uppercase tracking-widest px-3 py-1 font-medium">
                    {event.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4 text-xs font-mono text-muted-foreground">
                    <span>{event.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light mb-6 flex-1">
                    {event.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

     {/* Global Mission */}
<section className="py-32 bg-foreground text-background">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
    <div>
      <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Global Impact</span>
      <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
        Confession of <br/><span className="text-background/60 italic">Faith</span>
      </h2>
      <p className="text-background/60 text-sm font-light leading-relaxed mb-8">
        The Church makes the following confession of faith upon which all its beliefs, doctrines, teachings, practices, structures, government, discipline, ministries and departments, functions, activities, this Constitution and the Church's rules, regulations, and policies, and its existence shall be founded, based, and established, namely that the Church and its members shall believe and confess faith in:
      </p>

      <div className="space-y-6 mb-10">
        {[
          "The one true Triune God, God the Father, Son, and Holy Spirit, three persons each with peculiar attributes, yet in absolute and perfect unity.",
          "The authority of the Holy Scripture, otherwise referred to as the Canon, comprising 39 books of the Old Testament and 27 books of the New Testament as listed by one of the Church Fathers, Athanasius in 367 AD and as translated into the various languages of every nation, as the divinely inspired Word of God, given to us as the complete rule of faith and practice.",
          "The spoken Word of God as may be given through prophecy, to be believed and obeyed.",
          "The infallible rule of interpretation of Scripture, namely that the Scripture itself is the supreme judge by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and spirits, are to be examined.",
          "The fallen nature and depravity of man by reason of which he is unable of himself to please God.",
          "The elect purpose and grace of God, whereby He, through the sacrificial death, resurrection, and ascension of His Son, Jesus Christ, provided for man a means of Justification, Regeneration, and Sanctification, which blessings are granted upon a person's repentance and faith, with works that beft repentance being a product of man's justification.",
          "The Church being the Body of Christ, and the fellowship of saints, governed by Christ, the Head of His Church, through His Word and the Scriptural Ministries.",
          "The Christian Sacraments (ordinances) of Water Baptism through triune immersion and the Lord's Supper.",
          "The Baptism in the Holy Spirit and the evidence thereof, including the evidence of speaking in tongues, and the manifestations of His Fruit, Gifts, and Graces.",
        ].map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <span className="text-primary font-serif text-lg leading-none mt-1 flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-background/80 text-sm font-light leading-relaxed border-l border-background/20 pl-4">
              {item}
            </p>
          </div>
        ))}
      </div>

      <Link href="/about">
        <Button variant="outline" className="border-background text-background hover:bg-background hover:text-foreground rounded-none uppercase tracking-widest text-xs px-8 h-12">
          Discover Our Mission
        </Button>
      </Link>
    </div>

    <div className="grid grid-cols-2 gap-4 md:sticky md:top-32">
      <div className="aspect-square bg-background/10 overflow-hidden">
        <img src="https://t4.ftcdn.net/jpg/01/44/92/33/240_F_144923319_EZRBfoQiVDqXCBPSuEs7vUPIRRmmoBVs.jpg" alt="Mission" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
      </div>
      <div className="aspect-square bg-background/10 mt-12 overflow-hidden">
        <img src="https://i.pinimg.com/1200x/44/d1/b0/44d1b0503b166277bcb373af77c2655c.jpg" />
      </div>
    </div>
  </div>
</section>
      {/* Testimonials */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Stories</span>
          <h2 className="font-serif text-4xl md:text-6xl">Lives Transformed</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials?.slice(0,3).map((testimonial, i) => (
            <div key={testimonial.id} className="text-center p-8 border border-border bg-card">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-6 border-2 border-primary/20">
                <img src={testimonial.avatarUrl || `/images/avatar-${i + 1}.png`} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
              </div>
              <p className="font-serif text-xl italic mb-6 leading-relaxed text-muted-foreground">
                "{testimonial.quote}"
              </p>
              <h4 className="text-sm font-medium tracking-widest uppercase mb-1">{testimonial.name}</h4>
              <p className="text-xs text-muted-foreground">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Stay Connected</h2>
          <p className="text-muted-foreground font-light mb-10">
            Join our mailing list to receive weekly devotionals, updates on global missions, and upcoming event details.
          </p>
          <form 
            onSubmit={form.handleSubmit(onSubscribe)}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <Input 
              placeholder="Your email address" 
              className="h-14 rounded-none border-border bg-background focus-visible:ring-1 focus-visible:ring-primary flex-1"
              {...form.register("email")}
            />
            <Button 
              type="submit"
              className="h-14 rounded-none uppercase tracking-widest text-xs px-8"
              disabled={subscribeNewsletter.isPending}
            >
              Subscribe
            </Button>
          </form>
          {form.formState.errors.email && (
            <p className="text-destructive text-sm mt-2">{form.formState.errors.email.message}</p>
          )}
        </div>
      </section>
    </main>
  );
}



