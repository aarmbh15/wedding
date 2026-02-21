import { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Hook for scroll animations
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const packageOptions = ["Elopement", "Classic Wedding", "Signature Film", "Destination", "Not Sure Yet"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", date: "", venue: "", package: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [formRef, formInView] = useInView(0.1);
  const [faqRef, faqInView] = useInView(0.1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClasses = "w-full py-4 bg-transparent border-b border-black/10 text-gray-800 font-light focus:border-[#c9a84c] outline-none transition-all placeholder:text-gray-300";

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#2D2D2D] font-['Jost']">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
  {/* Background Image Container */}
  <div className="absolute inset-0 z-0">
    <LazyLoadImage
      src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=2000&q=80"
      alt="Wedding Hero"
      className="w-full h-full object-cover"
      effect="blur"
      wrapperClassName="w-full h-full"
    />
    {/* Subtle vignette to ensure text pops without making the image dark */}
    <div className="absolute inset-0 bg-black/20 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
  </div>

  {/* Content Layer */}
  <div className="relative z-10 text-center px-6 animate-[fadeIn_1.4s_ease-out]">
    <p className="text-[0.75rem] tracking-[0.5em] uppercase text-[#c9a84c] mb-6 font-semibold drop-shadow-sm">
      Availability for 2025/26
    </p>
    
    <h1 className="font-['Cormorant_Garamond'] text-[clamp(2.8rem,8vw,6rem)] font-light leading-none text-white drop-shadow-md mb-4">
      Let’s Capture <br />
      <span className="italic">The Magic</span>
    </h1>
    
    <div className="w-16 h-[1.5px] bg-[#c9a84c] mx-auto mt-8 shadow-sm" />
  </div>
</section>

      {/* ─── QUICK INFO STRIP ────────────────────────────────────── */}
      <div className="bg-[#F4F1EA] border-y border-black/5 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { l: "Email", v: "hello@knotsbyamp.com" },
            { l: "WhatsApp", v: "+91 98765 43210" },
            { l: "Studio", v: "Bandra, Mumbai" },
            { l: "Response", v: "Within 24 Hours" }
          ].map((item, i) => (
            <div key={i}>
              <p className="text-[0.6rem] uppercase tracking-widest text-[#c9a84c] mb-1">{item.l}</p>
              <p className="text-sm font-medium text-gray-700">{item.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MAIN CONTACT SECTION ────────────────────────────────── */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Form Side */}
          <div ref={formRef} className={`lg:col-span-7 transition-all duration-1000 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-12">Inquiry Form</h2>
            
            {submitted ? (
              <div className="bg-white p-12 text-center border border-[#c9a84c]/20 shadow-sm">
                <span className="text-4xl block mb-4">✨</span>
                <h3 className="font-['Cormorant_Garamond'] text-2xl mb-2">Thank You</h3>
                <p className="text-gray-500 font-light">Your story has reached us. We'll be in touch very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group">
                    <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Your Name</label>
                    <input type="text" required className={inputClasses} placeholder="First & Last Name" />
                  </div>
                  <div className="group">
                    <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Email Address</label>
                    <input type="email" required className={inputClasses} placeholder="email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group">
                    <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Wedding Date</label>
                    <input type="date" className={inputClasses} />
                  </div>
                  <div className="group">
                    <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Venue & City</label>
                    <input type="text" className={inputClasses} placeholder="Where is the magic happening?" />
                  </div>
                </div>

                <div className="group">
                  <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">What are you interested in?</label>
                  <select className={inputClasses + " cursor-pointer"}>
                    <option value="">Select a package</option>
                    {packageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                <div className="group">
                  <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Tell us your story</label>
                  <textarea rows={4} className={inputClasses + " resize-none"} placeholder="The vibe, the details, the moments you care about most..." />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full md:w-auto px-12 py-5 bg-[#c9a84c] text-white text-[0.7rem] uppercase tracking-[0.3em] hover:bg-[#2D2D2D] transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-[#F4F1EA] p-10 md:p-14">
              <h3 className="font-['Cormorant_Garamond'] text-2xl mb-6 italic">Booking Philosophy</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8 text-[0.95rem]">
                We intentionally take on only 24 weddings per year. This allows us to dedicate our full creative energy to every couple, ensuring your film and gallery are treated as art, not just a task.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[0.65rem] uppercase tracking-widest text-gray-400">Limited slots for 2025</span>
              </div>
            </div>

            <div className="px-4">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-6">Connect with us</h3>
              <div className="flex flex-wrap gap-4">
                {['Instagram', 'Pinterest', 'Vimeo'].map(social => (
                  <a key={social} href="#" className="text-[0.7rem] uppercase tracking-widest border border-black/10 px-6 py-3 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FAQ SECTION ─────────────────────────────────────────── */}
      <section ref={faqRef} className="py-20 lg:py-32 bg-[#E5DED0]/30 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c9a84c] mb-4">Support</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How early should we book?", a: "To ensure availability, we recommend 10-12 months in advance for peak season dates." },
              { q: "Do you travel for weddings?", a: "Yes, we have documented love stories across Europe, Asia, and all of India." },
              { q: "When do we get our photos?", a: "A 'Sneak Peek' is sent within 48 hours. The full handcrafted gallery takes 6-8 weeks." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-black/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group"
                >
                  <span className="font-['Cormorant_Garamond'] text-lg group-hover:text-[#c9a84c] transition-colors">{faq.q}</span>
                  <span className={`text-[#c9a84c] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`px-8 transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-400 font-light text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Contact;