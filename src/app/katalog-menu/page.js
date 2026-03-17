"use client";

import Image from "next/image";
import Link from "next/link";

export default function KatalogMenu() {
  const menuCategories = [
    {
      title: "Mahakarya Utama",
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
          PESAN MEJA
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
            Eksplorasi <span className="italic font-light">Kelezatan.</span>
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
          Pesan untuk Acara Anda
        </a>
      </section>

      <footer className="bg-padang-dark text-padang-cream py-8 text-center text-xs tracking-wider uppercase border-t border-padang-gold/30">
        <p>© 2026 WARUNG NASI HARAPAN JAYA. ALL RIGHTS RESERVED.</p>
      </footer>

    </main>
  );
}