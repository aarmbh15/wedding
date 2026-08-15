import { useState, useRef, useEffect, useCallback } from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import HeroImage from "../assets/hero1.webp";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/tiltshift_pictures?igsh=Mm9zeXQ2bHQxaWk0&utm_source=qr" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@tiltshiftpictures1623" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/tiltshiftpicture" },
];

const faqData = [
  {
    q: "How is your work different from others?",
    a: [
      "At Tilt Shift Pictures, we believe every wedding has its own story and our job is to document it as naturally as it unfolds. Rather than focusing only on posed photographs, we specialise in candid wedding photography that captures genuine emotions, meaningful traditions, candid interactions and the moments that often go unnoticed. Our approach allows you to relive your wedding exactly as it felt.",
      "What sets our work apart is our attention to storytelling, natural colour tones and clean timeless editing. As experienced wedding photographers in Pune and across India, we use light creatively to ensure every frame looks elegant, whether it's a bright outdoor ceremony or a dimly lit evening celebration. Our wedding photographs are crafted to feel authentic today and remain beautiful for years to come.",
      "We also understand that a wedding is about more than just the couple. Parents, grandparents, siblings, relatives and friends all play an important role in your celebration and we make sure their emotions and moments become part of your wedding story too. This thoughtful approach is what makes our wedding photography truly personal.",
      "Our cinematic wedding films and traditional wedding films are created with the same philosophy. Instead of simply documenting events, we weave together emotions, conversations, music and meaningful moments into a film that reflects your journey. Whether it's a celebration in Pune or a destination wedding anywhere in India, every edit is carefully crafted so that your wedding film feels personal, emotional and timeless, something you will enjoy watching even decades later.",
    ],
  },
  {
    q: "Do you cover destination weddings?",
    a: [
      "Yes, absolutely! We specialise in destination wedding photography and cinematic wedding films across India. Whether you are planning a beach wedding in Goa, a royal wedding in Rajasthan or a celebration anywhere in the country, our team is ready to capture every moment. Just let us know the location and we will pack our bags (and cameras) to capture your story beautifully.",
    ],
  },
  {
    q: "How many people will come for my wedding?",
    a: [
      "The size of our wedding photography and videography team depends on the scale of your wedding, the number of functions and your coverage requirements. For intimate weddings, we typically assign a smaller team, while larger celebrations and destination weddings require a bigger crew to ensure every moment is captured seamlessly. We will recommend the ideal team based on your wedding plans.",
    ],
  },
  {
    q: "How are your services priced?",
    a: [
      "Our wedding photography and videography packages are customised based on your wedding plans, including the number of functions, event locations, coverage requirements and the team size needed. Since every wedding is unique, we create a package that best suits your celebration. Share your wedding details with us and we will be happy to provide a personalised quote.",
    ],
  },
  {
    q: "Do you meet clients before they book?",
    a: [
      "Yes, absolutely. We always recommend meeting our couples before the booking, either in person or through a video call. It gives us an opportunity to understand your wedding plans, expectations, and photography preferences while answering any questions you may have. More importantly, it helps us build a comfortable connection, so you feel relaxed and confident with our team on your wedding day.",
    ],
  },
  {
    q: "What are your delivery timelines?",
    a: [
      "We deliver a curated preview of 30–100 professionally edited wedding photographs during or shortly after your wedding, depending on the event schedule and available editing time. Within 10 working days, you will receive our Editor's Choice collection, a handpicked selection of the best moments from all your wedding celebrations. Your complete wedding photography gallery is professionally edited and delivered within 35 working days.",
      "Our cinematic wedding films and traditional wedding films are crafted with great attention to detail. From selecting the best footage and refining every scene to colour grading and storytelling, each film goes through a meticulous editing process. Your cinematic highlight film is delivered first, followed by your traditional wedding film. During the wedding season, the complete film delivery typically takes 2–3 months, ensuring every memory is beautifully preserved.",
    ],
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [formRef, formInView] = useInView(0.1);
  const [faqRef] = useInView(0.1);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  }, []);

  const inputClasses = "w-full py-4 bg-transparent border-b border-black/10 text-gray-800 font-light focus:border-[#c9a84c] outline-none transition-all placeholder:text-gray-300";

  return (
    <div className="min-h-screen bg-white text-[#2D2D2D] font-['Jost']">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen bg-[#F4F1EA] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-[kenburns_20s_ease_infinite]">
          <img
            src={HeroImage}
            alt="Contact Hero"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-60 brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

        <div className="relative z-10 text-center px-6 animate-[fadeIn_1.4s_ease-out]">
          <h1 className="font-['Cormorant_Garamond'] text-[clamp(2.8rem,8vw,6rem)] font-light leading-none text-white drop-shadow-md mb-4">
            Let’s Capture <br />
            <span className="italic">The Magic</span>
          </h1>
          <div className="w-16 h-[1.5px] bg-[#c9a84c] mx-auto mt-8 shadow-sm" />
        </div>
      </section>

      {/* ─── QUICK INFO STRIP ─────────────────────────────────────── */}
      <div className="bg-[#F4F1EA] border-y border-black/5 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { l: "Email", v: "hello@tiltshiftpictures.com" },
            { l: "Phone", v: "+91 95793 28262" },
            { l: "Studio", v: "Baner, Pune" },
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
      <section className="py-20 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div ref={formRef} className={`lg:col-span-7 transition-all duration-1000 ${formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light mb-12">Inquiry Form</h2>
            
            {submitted ? (
              <div className="bg-[#FDFCF9] p-12 text-center border border-[#c9a84c]/20 shadow-sm">
                <span className="text-4xl block mb-4">✨</span>
                <h3 className="font-['Cormorant_Garamond'] text-2xl mb-2">Thank You</h3>
                <p className="text-gray-500 font-light">Your inquiry has reached us. We'll be in touch very soon.</p>
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
                    <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Phone Number</label>
                    <input type="tel" required className={inputClasses} placeholder="+91" />
                  </div>
                  <div className="group">
                    <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Event Date</label>
                    <input type="date" className={inputClasses} />
                  </div>
                </div>

                <div className="group">
                  <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Venue & City</label>
                  <input type="text" className={inputClasses} placeholder="Baner, Pune..." />
                </div>

                <div className="group">
                  <label className="text-[0.65rem] uppercase tracking-widest text-[#c9a84c]">Event Details</label>
                  <textarea className={inputClasses + " resize-none"} placeholder="Functions, Timings and approx guest count..." />
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

          <div className="lg:col-span-5 space-y-12">
            <div className="bg-[#F4F1EA] p-10 md:p-14 rounded-2xl">
              <h3 className="font-['Cormorant_Garamond'] text-2xl mb-6 italic">Visit our Studio</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8 text-[0.95rem]">
                Bunglow no 6, Periwinkle Society,<br />
                Near Yogi park Baner, Pune 411045
              </p>
            </div>

            <div className="px-4">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-6">Social Portfolios</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="group w-12 h-12 flex items-center justify-center rounded-full border border-black/10 text-[#2D2D2D] hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─────────────────────────────────────────── */}
      <section ref={faqRef} className="pt-6 pb-20 lg:pt-8 lg:pb-32 bg-white px-6 mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c9a84c] mb-2">Support</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light">Frequently Asked</h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-[#F4F1EA] border border-black/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group"
                >
                  <span className="font-['Cormorant_Garamond'] text-lg group-hover:text-[#c9a84c] transition-colors">{faq.q}</span>
                  <span className={`text-[#c9a84c] transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`px-8 transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[2000px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-4">
                    {faq.a.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-gray-500 font-light text-sm leading-[1.9]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
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