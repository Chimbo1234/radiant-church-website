import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, ArrowRight, Users, Church, Heart, Globe } from "lucide-react";
import { assemblies } from "./assemblies-data";

const stats = [
  { label: "Assemblies", value: "5", icon: Church },
  { label: "Members", value: "500+", icon: Users },
  { label: "Ministries", value: "20+", icon: Heart },
  { label: "Cities Reached", value: "5+", icon: Globe },
];

export default function Assemblies() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium"
          >
            AFM India
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-serif text-5xl md:text-7xl mb-6 leading-tight"
          >
            Our Assemblies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg font-light max-w-2xl leading-relaxed"
          >
            Five communities, one mission — proclaiming the Gospel of Jesus Christ
            across Punjab and beyond. Find the assembly nearest to you.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-24"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-background p-8 text-center">
                <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-serif text-4xl mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Assembly Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {assemblies.map((assembly, i) => (
            <motion.div
              key={assembly.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border border-border bg-card hover:border-primary transition-all duration-300 flex flex-col"
            >
              <Link href={`/assemblies/${assembly.slug}`}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={assembly.cardImage}
                    alt={assembly.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-serif text-xl">{assembly.name}</p>
                    <p className="text-white/70 text-xs font-light italic">{assembly.tagline}</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    <span>{assembly.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1 mb-6">
                    {assembly.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium border-t border-border pt-4 group-hover:text-primary transition-colors">
                    Explore Assembly <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Overview Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border border-border"
        >
          <div className="p-8 border-b border-border">
            <h2 className="font-serif text-3xl">Quick Overview</h2>
            <p className="text-muted-foreground text-sm font-light mt-1">Find your nearest assembly at a glance</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">Assembly</th>
                  <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">Location</th>
                  <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">Established</th>
                  <th className="text-left p-4 text-xs uppercase tracking-widest text-muted-foreground font-medium">Sunday Service</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {assemblies.map((assembly, i) => (
                  <tr key={assembly.id} className={`border-b border-border hover:bg-accent/5 transition-colors ${i === assemblies.length - 1 ? "border-b-0" : ""}`}>
                    <td className="p-4 font-serif text-base">{assembly.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{assembly.location}</td>
                    <td className="p-4 text-sm text-muted-foreground font-mono">{assembly.established}</td>
                    <td className="p-4 text-sm text-muted-foreground font-mono">{assembly.serviceTimes[0].time}</td>
                    <td className="p-4">
                      <Link href={`/assemblies/${assembly.slug}`}>
                        <span className="text-xs uppercase tracking-widest font-medium hover:text-primary transition-colors">
                          Visit →
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}