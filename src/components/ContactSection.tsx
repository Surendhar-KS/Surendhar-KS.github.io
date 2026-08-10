'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingInput = ({ 
  label, 
  name, 
  type = 'text', 
  textarea = false, 
  required = false,
  value,
  onChange
}: { 
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const active = isFocused || value !== '';

  return (
    <div className="relative w-full mb-5">
      <motion.label
        initial={false}
        animate={{
          y: active ? -24 : 0,
          scale: active ? 0.85 : 1,
          color: active ? '#ffffff' : '#9ca3af'
        }}
        className="absolute left-4 top-4 origin-left pointer-events-none transition-colors z-20"
      >
        {label}
      </motion.label>
      
      {textarea ? (
        <textarea
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative z-10 w-full bg-[#1a1a1a]/40 backdrop-blur-md border border-white/10 rounded-xl px-4 pt-7 pb-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all min-h-[130px] resize-y text-sm md:text-base"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative z-10 w-full bg-[#1a1a1a]/40 backdrop-blur-md border border-white/10 rounded-xl px-4 pt-7 pb-3 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-sm md:text-base"
        />
      )}
    </div>
  );
};

const MagneticSocial = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center size-12 rounded-full bg-[#111] text-white border border-white/10 hover:border-white/30 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const submitData = new FormData();
    submitData.append("access_key", "b6e73366-5802-4e45-a217-30aa5a7338b8");
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="w-full flex justify-center pt-24 md:pt-32 pb-24 md:pb-32 px-6 relative overflow-hidden" data-name="Contact Section">
      <div className="w-full max-w-[1180px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Side: Title and Socials */}
        <div className="flex flex-col items-start gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-['Archivo',sans-serif] font-extrabold text-[68px] md:text-[88px] tracking-[-0.04em] text-[#111] leading-[0.9] mb-6">
              Let's <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#111] to-[#666]">talk.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#111]/70 max-w-[400px] leading-relaxed">
              Ready to bring your ideas to life? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div 
            className="flex gap-4 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <MagneticSocial href="https://www.linkedin.com/in/surendhar-ks/">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </MagneticSocial>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <MagneticSocial href="https://github.com/SURENDHAR-725">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </MagneticSocial>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <MagneticSocial href="mailto:ksurendhar725@gmail.com">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </MagneticSocial>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[560px] justify-self-center lg:justify-self-end relative z-10"
        >
          {/* Glassmorphic Form Card */}
          <div className="w-full bg-[#111] p-8 md:p-10 rounded-[24px] md:rounded-[32px] shadow-2xl shadow-black/20 border border-white/10 relative overflow-hidden group">
            {/* Animated subtle glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none transition-transform duration-1000 group-hover:scale-150 group-hover:translate-x-10 group-hover:-translate-y-10" />

            <form className="relative z-10 flex flex-col w-full" onSubmit={onSubmit}>
              <FloatingInput 
                label="Name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
              <FloatingInput 
                label="Email" 
                name="email" 
                type="email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
              <FloatingInput 
                label="Message" 
                name="message" 
                textarea 
                required 
                value={formData.message}
                onChange={handleChange}
              />

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
                whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                className={`w-full mt-4 bg-white text-[#111] font-semibold text-lg py-4 rounded-xl border border-transparent transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === "submitting" ? "opacity-70 cursor-not-allowed" : "hover:bg-transparent hover:border-white hover:text-white"
                }`}
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </>
                )}
              </motion.button>
              
              {status === "success" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center mt-4"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center mt-4"
                >
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

