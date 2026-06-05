export default function Live() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-200px)] min-h-[600px]">
          {/* Main Video Area */}
          <div className="flex-1 bg-black relative flex flex-col border border-border">
            <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white font-medium tracking-widest uppercase text-sm drop-shadow-md">Live Now</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center text-white/50 space-y-4">
                <p className="font-serif text-3xl">Streaming Soon Please be patient  thank you for understanding</p>
                <p className="font-light tracking-widest uppercase text-sm">Sunday Worship Experience</p>
              </div>
            </div>
            
            {/* Controls Placeholder */}
            <div className="h-16 border-t border-white/10 flex items-center justify-between px-6">
              <div className="flex gap-4 text-white/50">
                <span>▶</span>
                <span>Volume</span>
                <span>00:00:00 / Live</span>
              </div>
              <div className="text-white/50">
                <span>Fullscreen</span>
              </div>
            </div>
          </div>

          {/* Sidebar Chat / Schedule */}
          <div className="w-full lg:w-96 flex flex-col border border-border bg-card">
            <div className="p-6 border-b border-border">
              <h3 className="font-medium tracking-widest uppercase text-sm">Live Chat</h3>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              <div className="text-center text-muted-foreground text-sm font-light italic">
                Chat connects 15 minutes before service.
              </div>
              {/* Chat Message Example */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-primary">Moderator</span>
                <p className="text-sm font-light text-foreground">Welcome to AFM Church! Let us know where you're watching from.</p>
              </div>
            </div>
            <div className="p-6 border-t border-border">
              <input 
                type="text" 
                placeholder="Type a message..." 
                disabled
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
