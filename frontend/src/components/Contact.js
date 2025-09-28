import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ParticlesBg from "particles-bg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16"
    >
      {/* Particle Background */}
      <ParticlesBg type="circle" bg={true} />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-2xl"
      >
        I’m always open to collaborations, new opportunities, or just a friendly
        chat. Reach out through any of the platforms below!
      </motion.p>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 w-full max-w-5xl">
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-md text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-purple-400">
            Email
          </h3>
          <p className="text-gray-300">harshmishra@example.com</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-md text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-pink-400">
            Phone
          </h3>
          <p className="text-gray-300">+91 9876543210</p>
        </motion.div>

        {/* Location */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-md text-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-red-400">
            Location
          </h3>
          <p className="text-gray-300">India</p>
        </motion.div>
      </div>

      {/* Social Links */}
      <div className="flex space-x-8 text-3xl">
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="text-gray-400 hover:text-[#0A66C2] transition-colors"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
        >
          <FaTwitter />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
