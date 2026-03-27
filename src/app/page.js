"use client";

import Image from "next/image";
import Link from "next/link"; 
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Pastikan sudah install: npm install framer-motion

export default function Home() {
  // --- LOGIKA SLIDER GAMBAR HERO ---
  const heroImages = [
    "/hero6.jpeg",
    "/hero4.jpeg", 
    "/hero7.jpeg",
    "/hero5.jpeg"  
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
    { id: 1, tag: "THE ICON", name: "Rendang Sapi", desc: "Dimasak perlahan selama 8 jam dalam kuali dengan 12 bumbu rahasia.", price: "Rp 17.000", image: "/rendang2.jpeg" },
    { id: 2, tag: "CHEF'S SPECIAL", name: "Gulai Kepala Baung", desc: "Olahan kepala ikan Baung segar dengan kuah kuning kental yang kaya rempah dan aroma yang memikat.", price: "Rp 30.000", image: "/makanan-hero-2.jpeg" },
    { id: 3, tag: "CLASSIC FAVORITE", name: "Ayam Goreng Kremes", desc: "Ayam ungkep bumbu kuning yang digoreng garing dengan taburan kremesan gurih nan renyah.", price: "Rp 17.000", image: "/ayam.jpeg" }
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
          href="https://wa.me/6282181477791?text=Halo%20Warung%20Nasi%20Harapan%20Jaya,%20saya%20ingin%20pesan%20nasi." 
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
            <p className="text-padang-gold text-xs md:text-sm tracking-[0.2em] font-bold uppercase">SEJAK 2016 • PALEMBANG</p>
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
            Menghadirkan keajaiban rempah pilihan dalam setiap hidangan. Perpaduan sempurna antara pengalaman puluhan tahun dan dedikasi tinggi dalam menjaga kualitas rasa yang legendaris.
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
  <Link 
    href="/katalog-menu" 
    className="text-xs md:text-sm font-bold tracking-[0.15em] text-padang-maroon border-2 border-padang-maroon px-8 py-3 hover:border-padang-gold hover:text-padang-gold transition-all duration-300 inline-flex items-center gap-3"
  >
    EXPLORE FULL MENU CATALOG <span>→</span>
  </Link>
</motion.div>
      </section>

      {/* ================= HERITAGE / TENTANG KAMI (WITH WAVES) ================= */}
      <section id="kisah-kami" className="relative py-32 px-8 md:px-16 bg-padang-maroon text-padang-cream flex flex-col lg:flex-row gap-16 items-center scroll-mt-20 overflow-hidden">
        
        {/* --- GELOMBANG ATAS --- */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 320" className="relative block w-full h-[60px] md:h-[100px]" preserveAspectRatio="none">
            {/* Fill pakai warna cream agar memotong maroon dari atas */}
            <path fill="#FFF7ED" d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-8 relative z-10"
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
          className="lg:w-1/2 flex gap-3 md:gap-8 justify-center relative w-full mt-12 lg:mt-0 z-10"
        >
          <div className="w-1/2 max-w-[200px] aspect-[3/4] relative mt-8 md:mt-12 rounded-lg overflow-hidden border border-padang-gold/20">
            <Image src="/about1.jpeg" alt="Suasana" fill className="object-cover" />
          </div>
          <div className="w-1/2 max-w-[200px] aspect-[3/4] relative rounded-lg overflow-hidden border border-padang-gold/20">
            <Image src="/hero6.jpeg" alt="Interior" fill className="object-cover" />
          </div>
        </motion.div>

        {/* --- GELOMBANG BAWAH --- */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 320" className="relative block w-full h-[60px] md:h-[100px]" preserveAspectRatio="none">
             {/* Fill pakai warna cream agar memotong maroon dari bawah */}
            <path fill="#FFF7ED" d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

{/* ================= CATERING & SERVICES (NEW SECTION) ================= */}
      <section id="katering" className="py-24 px-8 md:px-16 bg-padang-cream scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="md:w-1/2 relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/menupesanan.jpeg" alt="Catering Harapan Jaya" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="md:w-1/2 space-y-8">
            <p className="text-padang-gold text-xs tracking-[0.2em] font-bold uppercase">PREMIUM SERVICES</p>
            <h2 className="font-serif text-4xl md:text-5xl text-padang-maroon leading-tight">Terima Pesanan <br /><span className="italic font-light">& Katering.</span></h2>
            <p className="text-gray-600 leading-relaxed">
              Kami melayani berbagai kebutuhan acara Anda, mulai dari Nasi Box untuk rapat kantor, acara keluarga, hingga prasmanan premium. Nikmati kemudahan memesan menu legendaris kami dalam jumlah besar dengan jaminan rasa dan ketepatan waktu.
            </p>
            <ul className="space-y-4 text-sm font-semibold text-padang-maroon">
              <li className="flex items-center gap-3">✓ Nasi Kotak / Box Premium</li>
              <li className="flex items-center gap-3">✓ Catering Acara Kantor & Syukuran</li>
              <li className="flex items-center gap-3">✓ Pengantaran Area Palembang</li>
            </ul>
            <a href="https://wa.me/6282181477791" target="_blank" className="inline-block bg-padang-maroon text-white px-8 py-4 font-bold tracking-widest text-xs hover:bg-padang-gold hover:text-padang-dark transition shadow-xl">
              TANYA HARGA KATERING
            </a>
          </motion.div>
        </div>
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
            <h3 className="font-bold text-2xl tracking-wider">HARAPAN JAYA</h3>
            <p className="text-padang-gold text-[10px] tracking-[0.2em] font-bold uppercase">THE GOLDEN HOPE OF TASTE</p>
            <p className="text-gray-400 text-xs pr-10">Destinasi kuliner premium di jantung Kota Palembang. Mengutamakan kemewahan rasa dalam balutan tradisi Minangkabau.</p>
            
            {/* TOMBOL ICON SOSIAL MEDIA */}
            <div className="flex gap-4 pt-2">
              {/* WHATSAPP */}
              <a href="https://wa.me/6282181477791" target="_blank" rel="noopener noreferrer" className="group border border-gray-700 p-2 rounded-full hover:border-padang-gold transition">
                <svg width="20" height="20" fill="currentColor" className="text-gray-500 group-hover:text-padang-gold transition" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.879 1.02 3.981 1.56 6.125 1.56h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* INSTAGRAM */}
              <a href="https://www.instagram.com/warnas_harapanjaya?igsh=MWdjY2lyc3Z0NGh1cA==" target="_blank" rel="noopener noreferrer" className="group border border-gray-700 p-2 rounded-full hover:border-padang-gold transition">
                <svg width="20" height="20" fill="currentColor" className="text-gray-500 group-hover:text-padang-gold transition" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
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
        <div className="border-t border-padang-gold pt-8 text-center text-[10px] text-white uppercase">
          <p>© 2026 WARUNG NASI HARAPAN JAYA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

    </main>
  );
}