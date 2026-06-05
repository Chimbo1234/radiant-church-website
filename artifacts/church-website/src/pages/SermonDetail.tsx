import { useParams } from "wouter";
import { useGetSermon } from "@workspace/api-client-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

const fallbackSermons: Record<number, any> = {
  1: { id: 1, title: "Word to the Spirit", series: "Holy Spirit", speaker: "Reverend N.Jecheche", date: "May 31, 2026", duration: "45:00", description: "In this message, we explore what it means to be led by the Spirit of God in every area of our lives.", scripture: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness. — Galatians 5:22", thumbnailUrl: "https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/612203361_122098807761203634_4954983585349969328_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=52bb43&_nc_ohc=kHtVxQN_IZAQ7kNvwH76RnE&_nc_oc=AdqxnrGsOk-zcKHE6CqRBywFfkbMCgdHMESKCr2Vn4htTWYkqdlQ3IVEgJy0X62-UqyQUWPbP27HecfsNKUM7i8T&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&oh=00_Af-Wbca_SPi-pQnI8jxRwidWTwUVwajVRzHn6daK47ZT1w&oe=6A269581" },
  2: { id: 2, title: "Identified with Christ", series: "Jesus Christ", speaker: "Minister Shekinah", date: "May 25, 2026", duration: "38:00", description: "Discover what it means to be fully identified with Christ in His death, burial, and resurrection.", scripture: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. — Galatians 2:20", thumbnailUrl: "https://images.unsplash.com/photo-1490127252417-7c393f993ee4?w=800" },
  3: { id: 3, title: "Identified With Christ", series: "Jesus", speaker: "Reverend N.Jecheche", date: "April 05, 2026", duration: "42:00", description: "A deeper look at what it means to walk in the identity that Christ has given us.", scripture: "Therefore, if anyone is in Christ, he is a new creation. — 2 Corinthians 5:17", thumbnailUrl: "https://images.unsplash.com/photo-1438232992991-995b671e4f23?w=800" },
  4: { id: 4, title: "Most Beloved Apostle", series: "Church Planting", speaker: "Reverend N.Jecheche", date: "May 11, 2026", duration: "50:00", description: "An exploration of the apostolic calling and the heart behind planting churches for God's glory.", scripture: "Go therefore and make disciples of all nations. — Matthew 28:19", thumbnailUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800" },
  5: { id: 5, title: "The Great Unveiling", series: "Coming Soon", speaker: "Pastor B.Makunda", date: "June 11, 2026", duration: "44:00", description: "A prophetic message on what God is about to do in this season for His church and people.", scripture: "For I know the plans I have for you, declares the LORD. — Jeremiah 29:11", thumbnailUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800" },
  6: { id: 6, title: "Ichabod", series: "Coming Soon", speaker: "Reverend N.Jecheche", date: "April 12, 2026", duration: "47:00", description: "A sobering message about the presence of God and what happens when we drift from His glory.", scripture: "Where can I go from your Spirit? Where can I flee from your presence? — Psalm 139:7", thumbnailUrl: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=800" },
};

export default function SermonDetail() {
  const { id } = useParams<{ id: string }>();
  const sermonId = parseInt(id || "1", 10);

  const { data: apiSermon } = useGetSermon(sermonId, {
    query: { queryKey: ["sermon", sermonId], enabled: !!sermonId },
  });
  const sermon = apiSermon ?? fallbackSermons[sermonId] ?? fallbackSermons[1];
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase mb-6">
            <span className="text-primary">{sermon.series}</span>
            <span className="text-muted-foreground w-1 h-1 rounded-full bg-muted-foreground"></span>
            <span className="text-muted-foreground">{sermon.date}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          >
            {sermon.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-light"
          >
            {sermon.speaker}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="aspect-video w-full relative bg-muted mb-16 group"
        >
          <img
            src={sermon.thumbnailUrl || "/images/sermon-1.png"}
            alt={sermon.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/50 text-white hover:bg-white hover:text-black transition-all">
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">Overview</h3>
            <p className="text-lg font-light leading-relaxed text-muted-foreground mb-8">
              {sermon.description}
            </p>

            {sermon.scripture && (
              <div className="p-8 border-l-2 border-primary bg-card/50 italic font-serif text-2xl text-muted-foreground leading-relaxed">
                "{sermon.scripture}"
              </div>
            )}
          </div>

          <div>
            <div className="p-8 border border-border bg-card mb-8">
              <h3 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Listen Audio</h3>
              <div className="flex items-center gap-4 mb-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full w-12 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground shrink-0"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                </Button>
                <div className="flex-1">
                  <div className="h-1 bg-muted rounded-full w-full mb-2">
                    <div className="h-full bg-primary rounded-full w-1/3"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                    <span>12:45</span>
                    <span>{sermon.duration || "45:00"}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="w-full text-xs uppercase tracking-widest rounded-none border border-border">Download MP3</Button>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">Share</h3>
              <div className="flex gap-4">
                <span className="text-sm uppercase font-medium hover:text-primary cursor-pointer transition-colors">Twitter</span>
                <span className="text-sm uppercase font-medium hover:text-primary cursor-pointer transition-colors">Facebook</span>
                <span className="text-sm uppercase font-medium hover:text-primary cursor-pointer transition-colors">Copy Link</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}