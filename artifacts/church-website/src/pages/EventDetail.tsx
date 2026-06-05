import { useParams } from "wouter";
import { useGetEvent } from "@workspace/api-client-react";
import { getGetEventQueryKey } from "@workspace/api-client-react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const eventId = parseInt(id || "1", 10);
  
  const { data: event, isLoading } = useGetEvent(eventId, { 
    query: { 
      enabled: !!eventId, 
      queryKey: getGetEventQueryKey(eventId) 
    } 
  });

  if (isLoading) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-background px-6 max-w-5xl mx-auto">
        <Skeleton className="w-32 h-4 mb-8" />
        <Skeleton className="w-full h-16 mb-4" />
        <Skeleton className="w-full aspect-[21/9] mb-12" />
      </div>
    );
  }

  if (!event) return <div className="pt-32 text-center">Event not found</div>;

  return (
    <div className="pt-32 pb-32 min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase mb-6">
            <span className="text-primary">{event.category}</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl mb-12 leading-tight"
          >
            {event.title}
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="aspect-[21/9] w-full relative bg-muted mb-16 overflow-hidden"
        >
          <img 
            src={event.imageUrl || "/images/event-1.png"} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">About This Event</h3>
            <p className="text-lg font-light leading-relaxed text-muted-foreground mb-8">
              {event.description || "Join us for a special gathering. This event is designed to foster connection, spiritual growth, and community. We look forward to seeing you there."}
            </p>
          </div>
          
          <div>
            <div className="p-8 border border-border bg-card mb-8">
              <h3 className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase mb-1">Date</p>
                  <p className="font-light">{event.date}</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase mb-1">Time</p>
                  <p className="font-light">{event.time}</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase mb-1">Location</p>
                  <p className="font-light">{event.location}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <Button className="w-full rounded-none tracking-widest uppercase text-xs">
                  Register Now
                </Button>
              </div>
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
