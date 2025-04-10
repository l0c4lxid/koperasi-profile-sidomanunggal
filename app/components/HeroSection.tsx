// components/HeroSection.jsx
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Kata-kata yang akan diketik secara bergantian
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["Koperasi", "Sido", "Manunggal"];

  useEffect(() => {
    const typeSpeed = 150; // Kecepatan mengetik (ms)
    const deleteSpeed = 100; // Kecepatan menghapus (ms)
    const delayBetweenWords = 1000; // Jeda setelah kata selesai diketik (ms)

    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        // Sedang mengetik
        setTypedText(currentWord.substring(0, typedText.length + 1));

        // Jika sudah selesai mengetik kata saat ini
        if (typedText.length === currentWord.length - 1) {
          // Tunggu sebentar sebelum mulai menghapus
          setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenWords);
        }
      } else {
        // Sedang menghapus
        setTypedText(currentWord.substring(0, typedText.length - 1));

        // Jika sudah selesai menghapus
        if (typedText.length === 1) {
          setIsDeleting(false);
          // Pindah ke kata berikutnya
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    // Atur interval dengan kecepatan yang berbeda untuk mengetik dan menghapus
    const typingInterval = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(typingInterval);
  }, [typedText, isDeleting, wordIndex, words]);

  return (
    <div className="relative" id="home">
      <div
        className="absolute inset-0 blur-xl h-screen"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(76, 175, 80, 0) 20.79%, rgba(139, 195, 74, 0.26) 40.92%, rgba(205, 220, 57, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-40 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <div className="text-3xl font-bold text-green-600 h-12 flex items-center">
                {typedText}
                <span className="ml-1 h-8 w-[3px] bg-green-600 animate-pulse"></span>
              </div>
              <h1 className="text-5xl text-gray-800 font-extrabold sm:text-6xl">
                Bergabunglah dengan Koperasi Sidomanunggal
              </h1>
              <p className="text-lg">
                Koperasi Sidomanunggal berkomitmen untuk meningkatkan
                kesejahteraan anggotanya melalui layanan yang berkualitas dan
                akses yang lebih baik terhadap sumber daya.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  href="#join"
                  className="flex items-center justify-center gap-x-1 py-3 px-6 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex text-lg transition-transform transform hover:scale-105"
                >
                  Daftar Sekarang
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-x-1 py-3 px-6 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex text-lg transition-transform transform hover:scale-105"
                >
                  Hubungi Kami
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <Image
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                alt="Ilustrasi Koperasi"
                width={500}
                height={400}
                className="max-w-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
