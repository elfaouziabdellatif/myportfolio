import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-800 via-purple-900 to-transparent text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Work Together?</h2>
        <p className="text-lg mb-6">
          I'm always open to new opportunities and collaborations. Let's build something awesome!
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Get in Touch
        </a>

        <div className="flex justify-center mt-10 space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaGithub size={26} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
            <FaLinkedin size={26} />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter size={26} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-blue-400 transition">
            <FaEnvelope size={26} />
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Abdellatif El Faouzi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
