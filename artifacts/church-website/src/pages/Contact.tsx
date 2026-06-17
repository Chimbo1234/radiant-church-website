import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      toast({ title: "Message Sent", description: "We'll get back to you as soon as possible." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-32 pb-32 min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Connect</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg font-light leading-relaxed mb-12"
            >
              Whether you have a question about our services, ministries, or simply want to connect, we'd love to hear from you.
            </motion.p>

            <div className="space-y-12">
              <div>
                <h3 className="text-xs font-medium tracking-widest uppercase mb-4 text-primary">Location</h3>
                <p className="font-serif text-2xl mb-2">Shiloh Auditorium</p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Law gate, Maheru<br />
                  Near Pizza Hut Restaurant
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium tracking-widest uppercase mb-4 text-primary">Service Times</h3>
                <div className="space-y-2">
                  <p className="flex justify-between max-w-xs border-b border-border pb-2">
                    <span className="font-light text-muted-foreground">Sunday Morning</span>
                    <span className="font-mono">10:00 AM & 13:30 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs border-b border-border pb-2">
                    <span className="font-light text-muted-foreground">Monday Cell Groups</span>
                    <span className="font-mono">18:30 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs border-b border-border pb-2">
                    <span className="font-light text-muted-foreground">Wednesday Intercession</span>
                    <span className="font-mono">18:30 PM</span>
                  </p>
                  <p className="flex justify-between max-w-xs border-b border-border pb-2">
                    <span className="font-light text-muted-foreground">Thursday Youth Fellowship</span>
                    <span className="font-mono">18:30 PM</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-medium tracking-widest uppercase mb-4 text-primary">Contact Info</h3>
                <p className="text-muted-foreground font-light mb-1">Afminternational@gmail.com</p>
                <p className="text-muted-foreground font-light">+263 78 312 9701</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-12 border border-border bg-card h-fit"
          >
            <h3 className="text-2xl font-serif mb-8">Send a Message</h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label className="text-xs tracking-widest uppercase block mb-2">Name *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary h-12"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-widest uppercase block mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary h-12"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase block mb-2">Phone (Optional)</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary h-12"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase block mb-2">Subject (Optional)</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary h-12"
                />
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase block mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] resize-none rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-none uppercase tracking-widest text-sm font-medium mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}