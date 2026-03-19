"use client";

import Image from "next/image";
import Link from "next/link";

export default function KatalogMenu() {
  const menuCategories = [
    {
      title: "Menu Lengkap",
      items: [
        { name: "Rendang Sapi", desc: "Dimasak 8 jam dengan bumbu rahasia", price: "Rp 25.000" },
        { name: "Gulai Tunjang", desc: "Kikil sapi dengan kuah gulai kental", price: "Rp 28.000" },
        { name: "Ayam Pop", desc: "Ayam kampung rebus air kelapa, digoreng kilat", price: "Rp 22.000" },
        { name: "Ayam Bakar", desc: "Bumbu kecap meresap dengan aroma asap", price: "Rp 22.000" },
        { name: "Ayam Gulai", desc: "Ayam kampung berbalut kuah gulai gurih", price: "Rp 22.000" },
        { name: "Dendeng Batokok", desc: "Daging sapi tipis dipukul dan disiram cabai merah", price: "Rp 26.000" },
        { name: "Dendeng Lambok", desc: "Dendeng basah dengan sambal lado mudo", price: "Rp 26.000" },
        { name: "Gulai Cincang", desc: "Potongan daging berlemak dengan bumbu rempah kuat", price: "Rp 28.000" },
        { name: "Ikan Kembung Bakar", desc: "Ikan segar dibakar dengan bumbu kuning", price: "Rp 20.000" },
        { name: "Gulai Kepala Kakap", desc: "Menu legendaris untuk porsi tengah", price: "Rp 75.000" },
      ]
    },
    {
      title: "Sayur & Pelengkap",
      items: [
        { name: "Telur Dadar Barendo", desc: "Telur dadar tebal, krispi, dan berongga", price: "Rp 12.000" },
        { name: "Gulai Tambusu", desc: "Usus sapi isi tahu telur bumbu gulai", price: "Rp 20.000" },
        { name: "Sayur Nangka & Daun Singkong", desc: "Rebusan sayur pendamping wajib", price: "Rp 8.000" },
        { name: "Sambal Ijo / Merah", desc: "Cabai segar giling kasar", price: "Gratis" },
        { name: "Kerupuk Kulit (Jangek)", desc: "Kerupuk kulit sapi asli disiram kuah gulai", price: "Rp 15.000" },
        { name: "Perkedel Kentang", desc: "Kentang lumat goreng telur", price: "Rp 6.000" },
      ]
    },
    {
      title: "Penyegar Dahaga",
      items: [
        { name: "Teh Talua", desc: "Teh telur khas Minang, penambah stamina", price: "Rp 15.000" },
        { name: "Es Timun Serut", desc: "Kesegaran timun dengan sirup dan selasih", price: "Rp 12.000" },
        { name: "Es Jeruk Peras", desc: "Jeruk peras murni tanpa pemanis buatan", price: "Rp 10.000" },
        { name: "Es Teh Manis", desc: "Teh seduh dengan aroma melati", price: "Rp 6.000" },
        { name: "Jus Alpukat", desc: "Alpukat mentega dengan kental manis cokelat", price: "Rp 18.000" },
      ]
    }
  ];

  return (
    <main className="bg-padang-cream min-h-screen text-gray-800 font-sans">
      
      {/* ================= HEADER / NAVBAR ================= */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16 bg-padang-cream relative z-50 sticky top-0 shadow-sm">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo1.png" alt="Logo Warung Nasi Harapan Jaya" width={180} height={70} className="object-contain h-14 w-auto cursor-pointer" priority />
          </Link>
        </div>
        
        {/* Menu Tengah (Muncul di Desktop saja) */}
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-padang-maroon">
          <Link href="/" className="hover:text-padang-gold transition">BERANDA</Link>
          <Link href="/#menu" className="hover:text-padang-gold transition">MENU</Link>
          <Link href="/#kisah-kami" className="hover:text-padang-gold transition">KISAH KAMI</Link>
          <Link href="/#ulasan" className="hover:text-padang-gold transition">ULASAN</Link>
          <Link href="/#lokasi" className="hover:text-padang-gold transition">LOKASI</Link>
        </div>

        <a 
          href="https://wa.me/6282181477791?text=Halo%20Warung%20Nasi%20Harapan%20Jaya,%20saya%20ingin%20pesan%20meja." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-padang-maroon text-padang-cream px-6 py-2.5 text-sm font-semibold hover:bg-padang-dark transition text-center inline-block"
        >
          Hubungi Kami
        </a>
      </nav>

      {/* ================= HERO HALAMAN DENGAN TOMBOL KEMBALI ================= */}
      <header className="bg-padang-dark py-16 md:py-24 text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="relative z-10">
          
          {/* TOMBOL KEMBALI (Muncul di HP dan Desktop) */}
          <div className="flex justify-center items-center gap-4 mb-4">
            <Link href="/" className="text-white hover:text-padang-gold transition-all flex items-center gap-1 text-[10px] md:text-xs font-bold border border-padang-gold/30 px-3 py-1 rounded-full uppercase tracking-widest">
              ← BERANDA
            </Link>
            <span className="w-1 h-1 bg-padang-gold rounded-full opacity-50"></span>
            <p className="text-padang-gold text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase">KATALOG LENGKAP</p>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-padang-cream leading-tight">
            Menu <span className="italic font-light">Lengkap Kami</span>
          </h1>
        </div>
      </header>

      {/* ================= DAFTAR MENU ================= */}
      <section className="py-20 px-8 md:px-16 max-w-5xl mx-auto">
        {menuCategories.map((category, index) => (
          <div key={index} className="mb-20 last:mb-0">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-padang-maroon shrink-0">
                {category.title}
              </h2>
              <div className="w-full h-[1px] bg-padang-gold/30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start group">
                  <div className="pr-4">
                    <h3 className="font-bold text-lg md:text-xl text-padang-maroon mb-1 group-hover:text-padang-gold transition">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-light italic leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="font-semibold text-base md:text-lg text-padang-dark shrink-0 pt-1">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ================= CTA & FOOTER ================= */}
      <section className="bg-padang-cream pb-24 text-center px-8">
        <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto italic">
          *Harga dan ketersediaan menu dapat berubah sewaktu-waktu.
        </p>
        <a 
          href="https://wa.me/6282181477791?text=Halo,%20saya%20ingin%20pesan%20nasi%20kotak." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-padang-gold text-padang-dark px-10 py-4 text-sm font-bold tracking-widest hover:bg-padang-maroon hover:text-padang-cream transition uppercase inline-block shadow-lg"
        >
          Hubungi Kami
        </a>
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