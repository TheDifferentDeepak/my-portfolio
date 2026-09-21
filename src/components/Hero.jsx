import { useState, useEffect } from 'react';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

function Hero() {
  const images = [hero1, hero2, hero3]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // har 4 second mein image change hogi

    return () => clearInterval(interval) // cleanup jab component unmount ho
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Dark overlay (taaki text saaf dikhe) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-5xl font-bold mb-3">Hi, I'm Deepak</h2>
        <p className="text-lg text-gray-200 mb-6">Web Developer · MERN Stack Learner</p>
        <div className="space-x-4">
          <a href="#projects" className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition">
            View Work
          </a>
          <a href="#contact" className="border border-white text-white px-6 py-2.5 rounded-full font-medium hover:bg-white/10 transition">
            Contact Me
          </a>
        </div>
      </div>

      {/* Slider dots (niche small circles jo current image dikhate hain) */}
      <div className="absolute bottom-6 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          ></button>
        ))}
      </div>

    </section>
  )
}

export default Hero