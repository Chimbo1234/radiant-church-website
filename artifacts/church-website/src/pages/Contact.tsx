import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    submitContact.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Message Sent",
            description: "We'll get back to you as soon as possible.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
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
                <p className="font-serif text-2xl mb-2">Shiloh Auditorium </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Law gate , Maheru<br/>
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase">Name</FormLabel>
                      <FormControl>
                        <Input className="rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-widest uppercase">Email</FormLabel>
                        <FormControl>
                          <Input type="email" className="rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-widest uppercase">Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input className="rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase">Subject (Optional)</FormLabel>
                      <FormControl>
                        <Input className="rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          className="min-h-[120px] resize-none rounded-none border-border bg-transparent focus-visible:ring-1 focus-visible:ring-primary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-none uppercase tracking-widest text-sm font-medium mt-4"
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
