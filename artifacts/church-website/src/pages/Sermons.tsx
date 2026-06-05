import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { useListSermons } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fallbackSermons = [
  { id: 1, title: "Word to the Spirit", series: "Comming Soon", speaker: "Reverend N.Jecheche", date: "May 31, 2026", thumbnailUrl: "https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/612203361_122098807761203634_4954983585349969328_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=52bb43&_nc_ohc=kHtVxQN_IZAQ7kNvwH76RnE&_nc_oc=AdqxnrGsOk-zcKHE6CqRBywFfkbMCgdHMESKCr2Vn4htTWYkqdlQ3IVEgJy0X62-UqyQUWPbP27HecfsNKUM7i8T&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&_nc_gid=-_APKnf7ve1ZRKSWe5_7-g&_nc_ss=7b2a8&oh=00_Af-Wbca_SPi-pQnI8jxRwidWTwUVwajVRzHn6daK47ZT1w&oe=6A269581" },
  { id: 2, title: "Identified with Christ", series: "Comming Soon", speaker: "Minister Shekinah", date: "May 25, 2026", thumbnailUrl: "https://scontent.fluh1-1.fna.fbcdn.net/v/t51.82787-15/656779236_17866099866607362_2325475590831083519_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pReBkrf0Gy8Q7kNvwGnTAhA&_nc_oc=AdquGWODnRJna3Ny9Ua1QQgEssDWmZjbyrnbWXu490fVJUa0_zxoZKBb4l2W1nYaR8FOrpZjsNuyiwrN1c7SDqvD&_nc_zt=23&_nc_ht=scontent.fluh1-1.fna&_nc_gid=i-qpTSPHzTtYSv2R60ZUPg&_nc_ss=7b2a8&oh=00_Af98CfHTpdmJ7oqpnHjWC6VoEDRCzMFc2qXd1HKoAJN_vg&oe=6A269C6E" },
  { id: 3, title: "Identified With Christ", series: "Comming Soon", speaker: "Reverend N.Jecheche", date: "April 05, 2026", thumbnailUrl: "https://scontent.fluh1-3.fna.fbcdn.net/v/t51.82787-15/657373959_17866099203607362_5888512906531429642_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VWZ7P5nAs-sQ7kNvwHwV0Ry&_nc_oc=AdqhQnVmQpB7GQ7zcJqgWscZSn4ncxb_-75PrjcuiCQtxY5TKgqvo2ci05OtXo5j6OHM69hGH-TqD6Jmdd39zK50&_nc_zt=23&_nc_ht=scontent.fluh1-3.fna&_nc_gid=a6EWwCFdFPynOOpqtvNw5w&_nc_ss=7b2a8&oh=00_Af8OizGAgzsHIaBMkxqFCzuAWucCBGf97RmRYMz7NuOSwg&oe=6A269383" },
  { id: 4, title: "Most Beloved Apostle", series: "Comming Soon", speaker: "Reverend N.Jecheche", date: "May 11, 2026", thumbnailUrl: "https://scontent.fluh1-3.fna.fbcdn.net/v/t51.82787-15/618860412_17854284387607362_5174077223560985084_n.webp?stp=dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XeAFLMh_f-4Q7kNvwE2y8IJ&_nc_oc=AdoyUgD-HFxRofncHtgbx8RLKrabbbTozRU_VfVHLrNguBfEaoUIAXpVm4b2H_oyxESjwyApr1VQXZ9M_-t9szDO&_nc_zt=23&_nc_ht=scontent.fluh1-3.fna&_nc_gid=uL42UQ8G5tZ9iXeR8h6P2g&_nc_ss=7b2a8&oh=00_Af8_kMk0cksvsozBQcigHx167xGq0PFvnc2WY13mezReTA&oe=6A2691D2" },
  { id: 5, title: "The Great Unveiling", series: "Coming Soon", speaker: "Pastor B.Makunda", date: "June 11, 2026", thumbnailUrl: "https://scontent.fluh1-2.fna.fbcdn.net/v/t51.82787-15/671074983_17869827549607362_5068186855750322060_n.webp?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hZjBSxTe2GkQ7kNvwEOyqDp&_nc_oc=Adp3B63k6DH-zwwivdtO0N1CD9AVmGeW-sfSWkgI5gko0QwZoGG58t84aKxs1m-Cui0aJvCX1f6xasjktQR3UsGY&_nc_zt=23&_nc_ht=scontent.fluh1-2.fna&_nc_gid=GI9wMZpM2OLaKSn13EUvjA&_nc_ss=7b2a8&oh=00_Af-D47-a-JdBzwkj-9EV2RSSCWbfdP9ii4dwyaafh9n0iw&oe=6A267769" },
  { id: 6, title: "Ichabod", series: "Coming Soon", speaker: "Reverend N.Jecheche", date: "April 12, 2026", thumbnailUrl: "https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/669586507_945191004771448_3312843118599380311_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7KEN6pUbAxcQ7kNvwFnvrFD&_nc_oc=AdoiQopO_TAT_gr_tMiGqz5Nfgthi_SULp0oNxKJQF1Ew1rsHjGGinMMFKaVTQqv1akRLYp4lw0A0HuJqU_1IRSC&_nc_zt=23&_nc_ht=scontent.fluh1-1.fna&_nc_gid=N3RutQvmjEE10O-YsnMPGQ&_nc_ss=7b2a8&oh=00_Af8GtNg13NRrsoXV9LUOM5mBkBJH4nuJ1y6rA4WP_c7Vkg&oe=6A267B67" },
];

export default function Sermons() {
  const { data: sermonsData } = useListSermons({ limit: 12 });
  const sermons = sermonsData ?? fallbackSermons;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [filterValue, setFilterValue] = useState("");

  const speakers = [...new Set(sermons.map((s) => s.speaker))];
  const series = [...new Set(sermons.map((s) => s.series))];

  const filtered = sermons.filter((sermon) => {
    const matchesSearch =
      sermon.title.toLowerCase().includes(search.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(search.toLowerCase()) ||
      sermon.series.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "speaker" && (filterValue === "" || sermon.speaker === filterValue)) ||
      (filter === "series" && (filterValue === "" || sermon.series === filterValue));
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Sermon Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            Messages of hope, faith, and transformation. Browse our recent teachings.
          </motion.p>
        </div>

        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-between items-start">
          <div className="flex w-full sm:max-w-sm space-x-2">
            <Input
              type="text"
              placeholder="Search sermons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-none border-border focus-visible:ring-primary bg-transparent"
            />
            <Button variant="outline" className="rounded-none" onClick={() => setSearch(search)}>Search</Button>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <div className="flex gap-4 uppercase tracking-widest text-xs font-medium">
              <button onClick={() => { setFilter("all"); setFilterValue(""); }} className={`pb-1 transition-colors ${filter === "all" ? "text-primary border-b border-primary" : "text-muted-foreground hover:text-foreground"}`}>All</button>
              <button onClick={() => { setFilter("series"); setFilterValue(""); }} className={`pb-1 transition-colors ${filter === "series" ? "text-primary border-b border-primary" : "text-muted-foreground hover:text-foreground"}`}>By Series</button>
              <button onClick={() => { setFilter("speaker"); setFilterValue(""); }} className={`pb-1 transition-colors ${filter === "speaker" ? "text-primary border-b border-primary" : "text-muted-foreground hover:text-foreground"}`}>By Preacher</button>
            </div>

            {filter === "speaker" && (
              <div className="flex flex-wrap gap-2">
                {speakers.map((s) => (
                  <button key={s} onClick={() => setFilterValue(filterValue === s ? "" : s)} className={`text-xs px-3 py-1 border transition-colors ${filterValue === s ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {filter === "series" && (
              <div className="flex flex-wrap gap-2">
                {series.map((s) => (
                  <button key={s} onClick={() => setFilterValue(filterValue === s ? "" : s)} className={`text-xs px-3 py-1 border transition-colors ${filterValue === s ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-muted-foreground font-light text-lg">
            No sermons found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {filtered.map((sermon, i) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/sermons/${sermon.id}`}>
                  <div className="aspect-video overflow-hidden relative mb-6">
                    <img
                      src={sermon.thumbnailUrl || `/images/sermon-${(i % 3) + 1}.png`}
                      alt={sermon.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center text-white backdrop-blur-sm">
                        ▶
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-primary text-xs uppercase tracking-widest">{sermon.series}</span>
                    <span className="text-muted-foreground text-xs font-mono">{sermon.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light">
                    {sermon.speaker}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}