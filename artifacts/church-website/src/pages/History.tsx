import { motion } from "framer-motion";
import { Link } from "wouter";

const timeline = [
  {
    year: "1906",
    title: "The Azusa Street Revival",
    location: "Los Angeles, USA",
    body: "God answered the prayers of hungry believers through the Azusa Street Revival, led by William J. Seymour. People spoke in tongues, received the baptism of the Holy Spirit, experienced healing, and encountered God in extraordinary ways. This became the birthplace of modern Pentecostal Christianity — and the spark that would travel the world.",
  },
  {
    year: "1908",
    title: "The Fire Reaches Africa",
    location: "Johannesburg, South Africa",
    body: "Touched by the Pentecostal revival, John G. Lake and Thomas Hezmalhalch arrived in Johannesburg. They preached salvation, holiness, healing, and the baptism of the Holy Spirit. The sick were healed, lives were transformed, and revival meetings spread rapidly. This marked the founding of the Apostolic Faith Mission of South Africa — remarkable for bringing believers of all races together in an era of deep division.",
  },
  {
    year: "1915–1918",
    title: "The Gospel Enters Zimbabwe",
    location: "Southern Rhodesia (Zimbabwe)",
    body: "African laborers who encountered the Pentecostal message in South Africa's mines and cities carried the gospel fire home with them. Pentecostal believers began preaching across what was then Southern Rhodesia. Pioneer missionary Zacharias Manamela was among the first to bring the message formally. The movement spread not through buildings, but through transformed people — prayer meetings, village evangelism, and revival gatherings.",
  },
  {
    year: "Early 1900s",
    title: "Organisation & Growth",
    location: "Zimbabwe",
    body: "As churches multiplied, the South African AFM sent Loudeweck L. Kruger to organize and strengthen the growing movement. His influence became so significant that AFM became known in many communities as \"Church yekwa Kruger.\" Despite resistance from colonial authorities and criticism from other denominations, the revival fire could not be contained.",
  },
  {
    year: "20th Century",
    title: "A Nation Transformed",
    location: "Zimbabwe & Southern Africa",
    body: "AFM Zimbabwe expanded rapidly — churches planted in Harare, Bulawayo, Kadoma, Mutare, Gweru, Masvingo, and across rural communities. The church became known for prayer, fasting, healing services, and the power of the Holy Spirit. From AFM's heritage emerged influential leaders including Ezekiel Guti, Emmanuel Makandiwa, and Langton Kupara.",
  },
  {
    year: "Today",
    title: "A Global Movement",
    location: "Africa · Europe · Americas · Asia · Australia",
    body: "The Apostolic Faith Mission International has spread across continents. Millions of believers around the world have been impacted by this Pentecostal movement. The history of AFM is not just the history of one denomination — it is the history of a revival movement that God used to shape Pentecostal Christianity across Zimbabwe, across Africa, and across the nations of the world.",
  },
];

export default function History() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium"
          >
            Our Heritage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-serif text-5xl md:text-7xl mb-6 leading-tight"
          >
            The History of<br />AFM International
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg font-light max-w-2xl leading-relaxed"
          >
            From a humble revival on Azusa Street to a global Pentecostal movement — 
            the story of how the fire of God travelled from Los Angeles to South Africa, 
            Zimbabwe, and the nations of the world.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[90px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="md:grid md:grid-cols-[120px_1fr] gap-10 group"
              >
                {/* Year */}
                <div className="relative flex md:flex-col items-start md:items-end gap-3 md:gap-1 mb-4 md:mb-0">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest md:text-right leading-relaxed">
                    {item.year}
                  </span>
                  {/* Dot on the line */}
                  <div className="hidden md:block absolute right-[-21px] top-1 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                </div>

                {/* Content */}
                <div className="border border-border bg-card p-8 hover:border-primary transition-colors">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-2">
                    {item.location}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 border-t border-border pt-16 text-center"
        >
          <p className="font-serif text-2xl md:text-3xl text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
            "When God starts something, no opposition can stop it."
          </p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mt-6 font-medium">
            AFM Heritage
          </p>
        </motion.div>

        {/* Back link */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest font-medium border border-border px-8 py-3 hover:bg-foreground hover:text-background transition-colors inline-block"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}