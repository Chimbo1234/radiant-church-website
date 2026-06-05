import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const amounts = [50, 100, 250, 500, 1000];

export default function Giving() {
  const [amount, setAmount] = useState<number | "custom">(100);
  const [type, setType] = useState<"one-time" | "monthly">("one-time");
  const [method, setMethod] = useState<"card" | "upi">("card");
  const [copied, setCopied] = useState(false);

  const upiId = "harrychimbota@oksbi";

  function handleCopy() {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="pt-32 pb-32 min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Generosity</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-4 leading-tight"
          >
            Partner with the <br /><span className="italic text-muted-foreground">Vision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg font-light leading-relaxed max-w-lg mx-auto"
          >
            Your generosity fuels our mission to bring hope and transformation to our city and beyond.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">

          {/* Left — Amount Selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border-b lg:border-b-0 lg:border-r border-border"
          >
            {/* Give Once / Monthly toggle */}
            <div className="flex border-b border-border">
              <button
                className={`flex-1 py-4 text-xs font-medium tracking-widest uppercase transition-colors ${type === "one-time" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                onClick={() => setType("one-time")}
              >
                Give Once
              </button>
              <button
                className={`flex-1 py-4 text-xs font-medium tracking-widest uppercase transition-colors ${type === "monthly" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                onClick={() => setType("monthly")}
              >
                Give Monthly
              </button>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-xs uppercase tracking-widest font-medium mb-6 text-muted-foreground">Select Amount</h3>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {amounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => setAmount(a)}
                    className={`py-4 border transition-all font-serif text-2xl ${
                      amount === a
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-foreground hover:border-primary/50"
                    }`}
                  >
                    ₹{a}
                  </button>
                ))}
                <button
                  onClick={() => setAmount("custom")}
                  className={`py-4 border transition-all text-xs tracking-widest uppercase font-medium ${
                    amount === "custom"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  Custom
                </button>
              </div>

              {amount === "custom" && (
                <div className="mt-6 mb-2 relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 font-serif text-2xl text-muted-foreground">₹</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full h-16 bg-background border border-border pl-12 pr-6 font-serif text-2xl focus:outline-none focus:border-primary"
                  />
                </div>
              )}

              {/* Payment method selector */}
              <div className="mt-10">
                <h3 className="text-xs uppercase tracking-widest font-medium mb-4 text-muted-foreground">Payment Method</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => setMethod("card")}
                    className={`flex-1 py-3 border text-xs tracking-widest uppercase font-medium transition-all ${
                      method === "card"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    Card / Bank
                  </button>
                  <button
                    onClick={() => setMethod("upi")}
                    className={`flex-1 py-3 border text-xs tracking-widest uppercase font-medium transition-all ${
                      method === "upi"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    UPI
                  </button>
                </div>
              </div>

              {method === "card" && (
                <div className="mt-8 space-y-4">
                  <Button className="w-full h-14 rounded-none text-sm tracking-widest uppercase font-medium">
                    Continue to Payment
                  </Button>
                  <p className="text-center text-xs text-muted-foreground font-light">
                    🔒 Secure and encrypted transaction
                  </p>
                </div>
              )}

              {method === "upi" && (
                <div className="mt-8 p-4 border border-primary/20 bg-primary/5">
                  <p className="text-xs text-primary font-medium tracking-widest uppercase text-center">
                    ← Scan the QR code to give instantly
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card flex flex-col"
          >
            {method === "upi" ? (
              /* UPI QR Panel */
              <div className="flex flex-col items-center justify-center flex-1 p-10 text-center h-full gap-6">
                <div>
                  <span className="text-primary text-xs font-medium tracking-widest uppercase block mb-1">Scan & Give</span>
                  <h3 className="font-serif text-3xl">Give via UPI</h3>
                </div>

                {/* QR Code with corner accents */}
                <div className="relative p-1">
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary"></div>

                  <div className="w-60 h-60 bg-white p-3">
                    <img
                      src="/upi-qr.jpeg"
                      alt="UPI QR Code — harrychimbota@oksbi"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <p className="text-muted-foreground text-sm font-light max-w-xs leading-relaxed">
                  Open GPay, PhonePe, Paytm, or any UPI app and scan to give instantly.
                </p>

                {/* UPI ID row */}
                <div className="w-full border border-border bg-background px-6 py-4 flex items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">UPI ID</p>
                    <p className="font-mono text-sm text-foreground">{upiId}</p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`text-xs uppercase tracking-widest border px-4 py-2 transition-all ${
                      copied
                        ? "border-green-500 text-green-500 bg-green-500/10"
                        : "border-primary/30 text-primary hover:bg-primary/10"
                    }`}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                <p className="text-xs text-muted-foreground font-light">
                  All transactions are secure. May God multiply your seed.
                </p>
              </div>
            ) : (
              /* Mission quote panel */
              <div className="relative flex flex-col justify-end h-full min-h-[400px] overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1462151150/photo/hands-growing-a-young-plant.jpg?s=612x612&w=0&k=20&c=bOneAk_eKW0M1D-qdgFEUrnFB-WQAnwwIsmttZuZ0M0="
                  alt="Giving impact"
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative z-10 p-10">
                  <p className="font-serif text-2xl italic text-white leading-relaxed mb-4">
                    "Every gift, no matter the size, is a seed of transformation in someone's life."
                  </p>
                  <p className="text-white/60 text-xs uppercase tracking-widest">AFM Church — Global Missions</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-10 text-muted-foreground"
        >
          {["Secure Payments", "Tax Deductible", "Transparent Finances", "Every Penny Counts"].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-xs uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-primary inline-block"></span>
              {badge}
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}