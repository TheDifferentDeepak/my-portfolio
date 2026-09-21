import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="text-center py-10 text-gray-400 text-sm border-t bg-white">
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4">
        <a 
          href="https://github.com/TheDifferentDeepak" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-600 transition text-xl"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/thedifferentdeepak/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-600 transition text-xl"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://x.com/dk20071993" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-600 transition text-xl"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Copyright text */}
      <p>© 2026 The Different Deepak. All rights reserved.</p>
      
    </footer>
  )
}

export default Footer;