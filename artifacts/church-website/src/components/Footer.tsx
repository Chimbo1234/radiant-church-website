import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/">
            <span className="font-serif text-3xl tracking-widest font-light cursor-pointer">
              Apostolic Faith Mission in India
            </span>
          </Link>
          <p className="mt-6 text-background/60 font-light text-sm max-w-sm leading-relaxed">
  Filled with Holy Spirit, we evangelize, heal the sick and prepare our members for our Lord Jesus Christ’s second coming.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs tracking-widest uppercase font-medium mb-6 text-background/40">Connect</h4>
          <ul className="space-y-4 font-light text-sm text-background/80">
            <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">Our Story</span></Link></li>
            <li><Link href="/sermons"><span className="hover:text-primary transition-colors cursor-pointer">Sermons</span></Link></li>
            <li><Link href="/events"><span className="hover:text-primary transition-colors cursor-pointer">Events</span></Link></li>
            <li><Link href="/live"><span className="hover:text-primary transition-colors cursor-pointer">Watch Live</span></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase font-medium mb-6 text-background/40">Resources</h4>
          <ul className="space-y-4 font-light text-sm text-background/80">
            <li><Link href="/giving"><span className="hover:text-primary transition-colors cursor-pointer">Give</span></Link></li>
            <li><Link href="/prayer"><span className="hover:text-primary transition-colors cursor-pointer">Prayer Requests</span></Link></li>
            <li><Link href="/blog"><span className="hover:text-primary transition-colors cursor-pointer">Journal</span></Link></li>
            <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-widest uppercase text-background/40">
        <p>© {new Date().getFullYear()} AFM In India. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/afm_in_india/" className="hover:text-primary transition-colors">Instagram</a>
          <a href="https://chat.whatsapp.com/Il9Fj0qOx8VDDq4xpNopQZ" className="hover:text-primary transition-colors">Whatsapp</a>
          <a href="https://www.facebook.com/profile.php?id=61586109035850" className="hover:text-primary transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
