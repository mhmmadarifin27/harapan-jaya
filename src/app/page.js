"use client";

import Image from "next/image";
import Link from "next/link"; 
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Pastikan sudah install: npm install framer-motion

export default function Home() {
  // --- LOGIKA SLIDER GAMBAR HERO ---
  const heroImages = [
    "/makanan-hero.jpg",
    "/makanan-hero-2.jpeg", 
    "/makanan-hero-3.jpg"  
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // --- LOGIKA SCROLL SLIDER ULASAN ---
  const scrollRef = useRef(null);
  
  const scrollTestimonial = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // --- DATA MENU & ULASAN ---
  const menuItems = [
    { id: 1, tag: "THE ICON", name: "Rendang Sapi", desc: "Dimasak perlahan selama 8 jam dalam kuali tembaga dengan 12 bumbu rahasia.", price: "Rp 25.000", image: "/menu-2.jpg" },
    { id: 2, tag: "CHEF'S SPECIAL", name: "Gulai Kepala Baung", desc: "Olahan kepala ikan sungai segar dengan kuah kuning kental yang kaya rempah dan aroma yang memikat.", price: "Rp 28.000", image: "/baung.jpeg" },
    { id: 3, tag: "CLASSIC FAVORITE", name: "Ayam Goreng Kremes", desc: "Ayam ungkep bumbu kuning yang digoreng garing dengan taburan kremesan gurih nan renyah.", price: "Rp 22.000", image: "/ayam goreng kremes.jpg" }
  ];

  const testimonials = [
    { id: 1, text: '"Rendang paling juara di Palembang! Bumbunya medok dan meresap banget sampai ke serat dagingnya. Gak pernah kecewa."', name: "Andi Pratama", role: "Local Guide", image: "/testi-1.jpg" },
    { id: 2, text: '"Tempatnya bersih dan premium. Pelayanannya sangat ramah. Ayam Pop-nya beneran otentik, persis seperti di Bukittinggi."', name: "Siska Amelia", role: "Food Enthusiast", image: "/testi-2.jpg" },
    { id: 3, text: '"Sering pesan nasi box untuk acara kantor di sini. Packagingnya sangat rapi, porsinya pas, dan rasanya konsisten."', name: "Budi Santoso", role: "Corporate Client", image: "/testi-3.jpg" },
    { id: 4, text: '"Suasana restorannya sangat nyaman untuk makan keluarga. Cita rasa otentik Minang yang susah dicari tandingannya di Palembang."', name: "Reza Mahendra", role: "Wiraswasta", image: "/testi-1.jpg" }
  ];

  return (
    <main className="bg-padang-cream min-h-screen text-gray-800 font-sans scroll-smooth overflow-x-hidden">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16 bg-padang-cream relative z-50 sticky top-0 shadow-sm">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <Image src="/logo1.png" alt="Logo Warung Nasi Harapan Jaya" width={180} height={70} className="object-contain h-14 w-auto" priority />
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-padang-maroon">
          {["MENU", "KISAH KAMI", "ULASAN", "LOKASI"].map((item, i) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-padang-gold transition"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="https://wa.me/6282181477791?text=Halo%20Warung%20Nasi%20Harapan%20Jaya,%20saya%20ingin%20pesan%20meja." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-padang-maroon text-padang-cream px-6 py-2.5 text-sm font-semibold hover:bg-padang-dark transition text-center inline-block"
        >
          Hubungi Kami
        </motion.a>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[85vh] flex items-center px-8 md:px-16 overflow-hidden bg-padang-dark">
        {heroImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image src={src} alt={`Hero ${index}`} fill className="object-cover object-center" priority={index === 0} />
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-2xl space-y-6 text-padang-cream">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-[1px] bg-padang-gold"></div>
            <p className="text-padang-gold text-xs md:text-sm tracking-[0.2em] font-bold uppercase">SEJAK 1999 • PALEMBANG</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl leading-tight"
          >
            Cita Rasa <br /><span className="italic font-light">Legendaries.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-md text-gray-200 text-sm md:text-base leading-relaxed"
          >
            Menghadirkan keajaiban rempah Minangkabau dalam setiap hidangan. Masakan Padang otentik dengan resep warisan yang dijaga kemurniannya.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
            <a href="#menu" className="bg-padang-gold text-padang-dark px-8 py-3 text-sm font-bold hover:bg-padang-cream transition inline-flex items-center gap-3">
              JELAJAHI MENU <span>→</span>
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 md:right-16 z-20 flex gap-3">
  {heroImages.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentImage(index)}
      className={`h-1.5 transition-all duration-300 rounded-full ${
        index === currentImage 
        ? "bg-padang-gold w-8" 
        : "bg-white/30 w-4 hover:bg-white/60"
      }`}
    />
  ))}
</div>
      </section>

      {/* ================= MENU SECTION ================= */}
      <section id="menu" className="py-24 px-8 md:px-16 bg-padang-cream text-center scroll-mt-20">
        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-padang-gold text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-4"
        >
          SIGNATURE SELECTION
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl text-padang-maroon mb-16"
        >
          Mahakarya Menu Kami
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {menuItems.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-[4/5] rounded-t-full overflow-hidden relative mb-8 border-b-4 border-transparent group-hover:border-padang-gold transition duration-500">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <p className="text-gray-400 text-[10px] md:text-xs tracking-widest uppercase mb-3">{item.tag}</p>
              <h3 className="font-serif text-2xl md:text-3xl text-padang-maroon mb-4">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-6 max-w-[85%] leading-relaxed">{item.desc}</p>
              <p className="font-bold text-lg md:text-xl text-padang-maroon mb-6">{item.price}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-20">
          <Link href="/katalog-menu" className="text-xs md:text-sm font-bold tracking-[0.15em] text-padang-maroon hover:text-padang-gold transition inline-flex items-center gap-3">
            EXPLORE FULL MENU CATALOG <span>→</span>
          </Link>
        </motion.div>
      </section>

      {/* ================= HERITAGE / TENTANG KAMI ================= */}
      <section id="kisah-kami" className="py-24 px-8 md:px-16 bg-padang-maroon text-padang-cream flex flex-col lg:flex-row gap-16 items-center scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-8"
        >
          <p className="text-padang-gold text-xs md:text-sm tracking-[0.2em] font-bold uppercase">HERITAGE & VALUES</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Kematangan <br /><span className="italic font-light">Dalam Setiap Rasa.</span></h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
            Lahir dari filosofi <span className="italic">"Rasa yang Diutamakan"</span>, Harapan Jaya terus menjaga konsistensi resep legendaris untuk menghadirkan hidangan yang lebih dari sekadar rasa, namun sebuah penghormatan pada tradisi kuliner terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 pt-4">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full border border-padang-gold flex items-center justify-center shrink-0 mt-1"><span className="text-padang-gold text-xs">✓</span></div>
              <div>
                <h4 className="font-bold text-sm tracking-wide mb-1">100% REMPAH MURNI</h4>
                <p className="text-xs text-gray-400">Tanpa penyedap buatan dan pengawet, murni dari alam.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full border border-padang-gold flex items-center justify-center shrink-0 mt-1"><span className="text-padang-gold text-xs">✓</span></div>
              <div>
                <h4 className="font-bold text-sm tracking-wide mb-1">MASAKAN TUNGKU</h4>
                <p className="text-xs text-gray-400">Teknik masak lambat yang mempertahankan sari nutrisi.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex gap-3 md:gap-8 justify-center relative w-full mt-12 lg:mt-0"
        >
          <div className="w-1/2 max-w-[200px] aspect-[3/4] relative mt-8 md:mt-12 rounded-lg overflow-hidden border border-padang-gold/20">
            <Image src="/about-1.jpeg" alt="Suasana" fill className="object-cover" />
          </div>
          <div className="w-1/2 max-w-[200px] aspect-[3/4] relative rounded-lg overflow-hidden border border-padang-gold/20">
            <Image src="/about-2.jpeg" alt="Interior" fill className="object-cover" />
          </div>
        </motion.div>
      </section>

     {/* ================= TESTIMONIALS (COMPACT & CLEAN) ================= */}
      <section id="ulasan" className="py-24 px-8 md:px-16 bg-padang-cream scroll-mt-20 overflow-hidden">
        
        {/* Judul & Navigasi */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="w-full md:w-auto text-center md:text-left">
            <p className="text-padang-gold text-xs tracking-[0.2em] font-bold uppercase mb-4">GUEST EXPERIENCES</p>
            <h2 className="font-serif text-4xl md:text-5xl text-padang-maroon">Kesaksian Pelanggan</h2>
          </motion.div>
          
          <div className="flex gap-4 mt-8 md:mt-0 mx-auto md:mx-0">
            <button onClick={() => scrollTestimonial('left')} className="w-10 h-10 rounded-full border border-padang-maroon flex items-center justify-center text-padang-maroon active:scale-90">←</button>
            <button onClick={() => scrollTestimonial('right')} className="w-10 h-10 rounded-full bg-padang-maroon flex items-center justify-center text-padang-cream active:scale-90 shadow-md">→</button>
          </div>
        </div>

        {/* Container Ulasan */}
        <div className="max-w-6xl mx-auto">
          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testi, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                /* FIX: max-w-[350px] agar kotak tidak terlalu lebar ke samping */
                className="min-w-[280px] max-w-[320px] md:min-w-[350px] snap-center bg-padang-dark p-8 md:p-10 shadow-xl rounded-2xl shrink-0 flex flex-col justify-between border border-white/5"
              >
                <div>
                  {/* Bintang Warna Biru/Gold sesuai UI kamu */}
                  <div className="text-blue-400 text-xs mb-6 flex gap-1">
                    ★★★★★
                  </div>
                  <p className="text-gray-300 text-sm md:text-base italic leading-relaxed mb-8">
                    "{testi.text}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-bold text-xs md:text-sm text-padang-cream tracking-wider uppercase">
                    — {testi.name}
                  </h4>
                  <p className="text-[10px] text-padang-gold/60 mt-1 uppercase tracking-widest">{testi.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="lokasi" className="relative bg-padang-dark text-padang-cream pt-16 pb-8 px-8 md:px-16 mt-16 md:mt-24 scroll-mt-20">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
          <svg viewBox="0 0 1440 320" className="w-full h-[60px] md:h-[120px] block" preserveAspectRatio="none">
            <path fill="#2B080D" fillOpacity="1" d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-wider">HARAPAN JAYA</h3>
            <p className="text-padang-gold text-[10px] tracking-[0.2em] font-bold uppercase">THE GOLDEN HOPE OF TASTE</p>
            <p className="text-gray-400 text-xs pr-10">Destinasi kuliner premium di jantung Kota Palembang. Mengutamakan kemewahan rasa dalam balutan tradisi Minangkabau.</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.15em] font-bold uppercase text-padang-gold">LOKASI</h4>
            <p className="text-xs text-gray-300 leading-relaxed">Jl. Parameswara, Bukit Baru, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30138</p>
            <div className="w-full h-40 bg-gray-800 rounded-lg overflow-hidden border border-padang-gold/30 grayscale hover:grayscale-0 transition duration-500">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7968.795047891394!2d104.70890164376257!3d-2.9870452502051656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b758fc9cc62c7%3A0x7d11128d9f1ba1e!2sWarung%20Nasi%20Harapan%20Jaya!5e0!3m2!1sid!2sid!4v1773738105089!5m2!1sid!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
          <div className="space-y-8 md:pl-10">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">SCHEDULE</p>
              <p className="text-sm font-bold text-padang-cream">SETIAP HARI</p>
              <p className="text-sm text-gray-400 mt-1">08.30 - 20.00 WIB</p>
              </div>

              <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">CALL CENTER</p>
              <p className="text-lg font-bold">0821 8147 7791</p>
            </div>
            <a href="https://wa.me/6282181477791" target="_blank" className="block w-full py-3 bg-padang-gold text-padang-dark text-xs font-bold tracking-widest uppercase hover:bg-white transition text-center">Hubungi via WhatsApp</a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-[10px] text-gray-500 uppercase">
          <p>© 2026 WARUNG NASI HARAPAN JAYA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

    </main>
  );
}