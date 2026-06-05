import { motion } from "framer-motion";
import { Link } from "wouter";
import { useListBlogPosts } from "@workspace/api-client-react";

export default function Blog() {
  const { data: postsData } = useListBlogPosts();
  const posts = postsData ?? [
    { id: 1, title: "Walking by Faith in an Age of Uncertainty", category: "Devotional", publishedAt: "June 1, 2026", author: "Reverend N.Jecheche", excerpt: "In a world full of noise and confusion, what does it truly mean to walk by faith and not by sight? A reflection on trusting God in every season.", imageUrl: "rev.jpg" },
    { id: 2, title: "The Power of Corporate Prayer", category: "Teaching", publishedAt: "May 20, 2026", author: "Minister Shekinah", excerpt: "When believers gather together in one accord, something powerful happens. Discover why corporate prayer is essential to the life of the church.", imageUrl: "sheky.jpg" },
    { id: 3, title: "Raising a Generation for God", category: "Youth", publishedAt: "May 10, 2026", author: "Pastor B.Makunda", excerpt: "Our youth are not the church of tomorrow — they are the church of today. Here is how we can invest in the next generation of believers.", imageUrl: "pastor.jpg" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg font-light max-w-2xl leading-relaxed"
          >
            Devotionals, stories, and reflections on faith, culture, and the beauty of the Gospel.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="aspect-[4/5] overflow-hidden relative mb-6">
                  <img
                    src={post.imageUrl || `/images/blog-${(i % 3) + 1}.png`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  <span className="text-primary">{post.category}</span>
                  <span>{post.publishedAt}</span>
                </div>
                <h3 className="font-serif text-3xl mb-4 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-light mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs text-muted-foreground">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-xs uppercase tracking-widest">{post.author}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}