import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Eye, ExternalLink } from 'lucide-react'
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Meteo_App_Image from "./projects_images/meteo_app_main.png";
import Meteo_App_Weakly_Image from "./projects_images/meteo_app_weaklyforecast.png";
import Meteo_App_InteractiveMap_Image from './projects_images/meteo_app_interactiveMap.png'
import Post_Ui_Image from "./projects_images/post_ui.png";
import Socialize_Login_Image from "./projects_images/login_page.png";
import Socialize_Chat_Image from "./projects_images/discussions_page.png";
import Socialize_Feed_Image from "./projects_images/home_page.png";

interface Project {
  title: string;
  description: string;
  details: string;
  technologies: string[];
  images: { url: string; caption: string }[];
  github?: string;
  demo?: string;
  status: "Live" | "Work in Progress" | "Not Live Yet";
  features?: string[];
  role?: string;
  challenges?: string;
  futurePlans?: string;
  overview?: string;
  progress?: number;
  [key: string]: any; // Allow for additional properties
}

const projects: Project[] = [
  {
    title: "MétéoNow - Interactive Weather Forecast App",
    description: "A sleek, interactive weather forecast app with real-time data and an intuitive map-based search, built using React and Tailwind CSS.",
    details:
      "MétéoNow allows users to search for current weather conditions globally, either by typing a city name or interacting directly with a live map. It leverages OpenWeather API for accurate data and includes smooth animations, dynamic weather visuals, and responsive design. The interactive map, powered by Leaflet.js, adds a fun and practical dimension for exploring weather by location.",
    technologies: [
      "React",
      "Tailwind CSS",
      "OpenWeather API",
    ],
    images: [
      {
        url: Meteo_App_Image, // your imported local image
        caption: "Main interface with current weather"
      },
      {
        url: Meteo_App_Weakly_Image, // your imported local image
        caption: "Detailed weather view with icons and data"
      },
      {
        url: Meteo_App_InteractiveMap_Image,
        caption: "Interactive map to select location"
      }
    ],
    github: "https://github.com/yourusername/meteonow",
    demo: "https://meteo-weld.vercel.app/",
    status: "Live",
    features: [
      "Search by city or location on map",
      "Real-time weather updates via OpenWeather API",
      "Interactive map with location picker (Leaflet.js)",
      "Dynamic weather visuals and icons",
      "Responsive design with Tailwind CSS",
      "Smooth transitions with Framer Motion"
    ],
    role: "Frontend Developer",
    challenges:
      "Integrating map-based search with API requests and ensuring the UI remained responsive and user-friendly on all devices.",
    futurePlans: "Enhance data details with additional weather insights, and implement location detection to provide weather based on user's current position."
  }
,  
  {
  "title": "Socialize - Real-Time Social Chat Platform",
  "description": "A full-stack social networking app with real-time chat, friend system, and live notifications.",
  "details": "Socialize enables users to connect, chat in real-time, manage friends, and share posts. Built with React and Socket.IO, it features instant messaging, typing indicators, friend requests, and a responsive UI. Authentication is handled securely, and all user actions update live across the platform.",
  "technologies": [
    "React",
    "Redux",
    "Socket.IO",
    "Express",
    "MongoDB",
    "Tailwind CSS"
  ],
  "images": [
     {
      "url": Socialize_Feed_Image,
      "caption": 'Home Page: User Feed '
    },
    {
      "url": Socialize_Login_Image,
      "caption": "Login Page"
    },
    {
      "url": Socialize_Chat_Image,
      "caption": "Chat and Friend Suggestions"
    },
   
   

  ],
  "demo": "",
  "status": "Not Live Yet",
  "features": [
    "Real-time chat with typing indicators",
    "User authentication and registration",
    "Friend request and management system",
    "Live online/offline status",
    "Post creation and feed",
    "Responsive design",
    "Notifications"
  ],
  "role": "Full Stack Developer",
  "challenges": "Implementing seamless real-time updates and managing socket connections for concurrent users.",
  "futurePlans": "Add user profile customization, advanced notifications, and group chat functionality."

  },
  {
    title: "Project Three",
    description: "A full-stack real-time chat application with authentication.",
    details: "Built with Socket.IO, this chat app ensures real-time messaging with secure authentication. Users can send messages instantly and see live updates.",
    technologies: ["React", "Socket.IO", "MongoDB"],
    images: [
      {
        url: "https://picsum.photos/id/1012/600/400",
        caption: "Login Page"
      },
      {
        url: "https://picsum.photos/id/1011/600/400",
        caption: "Message board"
      },
      {
        url: "https://picsum.photos/id/1013/600/400",
        caption: "Mobile responsive view"
      }
    ],
    demo: "https://example.com/demo-three",
    status: "Not Live Yet",
    features: ["Live chat", "User authentication", "Friend system"],
    role: "Full Stack Developer",
    challenges: "Managing concurrent users and data syncing.",
    futurePlans: "Add user profiles and implement notifications."
  },
  {
    title: "Project Four",
    description: "A fitness tracking web application built with Vue.js.",
    details: "This project allows users to track their daily workouts and monitor their progress over time.",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    images: [
      {
        url: "https://picsum.photos/id/1015/600/400",
        caption: "Dashboard showing workout stats"
      }
    ],
    github: "https://github.com/example/project-four",
    status: "Work in Progress",
    features: ["Workout tracking", "Progress graphs", "Personalized goals"],
    role: "Frontend Developer",
    challenges: "Integrating third-party fitness APIs.",
    progress : 60,
  },
  {
    title: "Project Five",
    description: "An e-commerce platform using React and Firebase.",
    details: "This is an e-commerce site that allows users to browse products, add them to a cart, and proceed to checkout.",
    technologies: ["React", "Firebase", "Stripe API"],
    images: [
      {
        url: "https://picsum.photos/id/1018/600/400",
        caption: "Product listing page"
      },
      {
        url: "https://picsum.photos/id/1020/600/400",
        caption: "Product details page"
      }
    ],
    github: "https://github.com/example/project-five",
    demo: "https://example.com/demo-five",
    status: "Live",
    features: ["Product browsing", "Shopping cart", "Secure checkout with Stripe"],
    role: "Full Stack Developer",
    challenges: "Handling user authentication and payment gateway integration.",
    futurePlans: "Add user reviews and recommendations."
  }
];


export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [showImageViewer, setShowImageViewer] = useState<boolean>(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const handleClose = () => {
    setSelectedProject(null);
    setShowImageViewer(false);
    setSelectedImageIndex(0);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageViewer(true);
  };

  const nextImage = () => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (showImageViewer) {
        setShowImageViewer(false);
      } else {
        handleClose();
      }
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showImageViewer) {
          setShowImageViewer(false);
        } else {
          handleClose();
        }
      } else if (selectedProject && !showImageViewer) {
        // Slideshow navigation in modal
        if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "ArrowRight") {
          nextImage();
        }
      } else if (showImageViewer) {
        // Full-screen viewer navigation
        if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "ArrowRight") {
          nextImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, showImageViewer]);

  
  
  

  return (
    <section className="py-16 px-6 text-white relative flex flex-col items-center">
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <p className="text-white mb-10 max-w-xl mx-auto">
          A showcase of the projects I have built, demonstrating my skills and expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl relative group border border-gray-700 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Image Section - Fixed Height */}
            <div className="relative overflow-hidden h-56">
              <img 
                src={project.images[0].url} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 flex gap-2">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  project.status === "Live"
                    ? "bg-green-500/90 text-white"
                    : project.status === "Work in Progress"
                    ? "bg-yellow-500/90 text-white"
                    : "bg-red-500/90 text-white"
                }`}>{project.status}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{project.images.length} images</p>
              </div>
            </div>

            {/* Content Section - Flexible Height with Fixed Bottom */}
            <div className="p-6 flex flex-col flex-1">
              {/* Title - Fixed Height */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors h-14 line-clamp-2">
                {project.title}
              </h3>
              
              {/* Description - Fixed Height */}
              <p className="text-gray-400 mb-4 text-sm leading-relaxed h-20 line-clamp-4">
                {project.description}
              </p>
              
              {/* Technologies - Fixed Height */}
              <div className="flex flex-wrap gap-2 mb-6 h-16 overflow-hidden">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 text-xs rounded-full h-fit">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-gray-400 text-xs px-3 py-1 h-fit">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              {/* Buttons - Always at Bottom */}
              <div className="flex gap-3 mt-auto">
                <button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={16} />
                  View Details
                </button>
                <div className="w-12">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center opacity-50">
                      <ExternalLink size={16} className="text-gray-600" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>


      <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm pt-8 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleOutsideClick}
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 max-w-6xl w-full mx-4 shadow-2xl overflow-y-auto max-h-[90vh] rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-red-400 transition-colors duration-200 bg-gray-800/50 hover:bg-red-500/10 rounded-full p-2"
              >
                <X size={24} />
              </button>

              {/* Project Header */}
              <div className="mb-8">
                <h3 className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="mb-8">
                <h4 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <Eye size={20} />
                  Project Gallery
                </h4>
                
                {/* Main Image Display */}
                <div className="relative mb-4">
                  <div className="relative rounded-xl overflow-hidden bg-gray-800 border border-gray-700">
                    <motion.img
                      key={selectedImageIndex}
                      src={selectedProject.images[selectedImageIndex]?.url}
                      alt={selectedProject.images[selectedImageIndex]?.caption}
                      className="w-full h-96 object-cover cursor-pointer transition-all duration-300"
                      onClick={() => setShowImageViewer(true)}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                         onClick={() => setShowImageViewer(true)}>
                      <div className="bg-blue-600/90 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
                        <Eye size={18} />
                        View Full Size
                      </div>
                    </div>
                    
                    {/* Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-all duration-200 bg-black/60 hover:bg-blue-500/30 rounded-full p-3 backdrop-blur-sm"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-all duration-200 bg-black/60 hover:bg-blue-500/30 rounded-full p-3 backdrop-blur-sm"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}

                    {/* Image Caption */}
                    {selectedProject.images[selectedImageIndex]?.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-6">
                        <div className="bg-black/50 backdrop-blur-md rounded-lg px-4 py-3 border border-white/10">
                          <p className="text-white text-sm font-medium leading-relaxed text-center">
                            {selectedProject.images[selectedImageIndex].caption}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {selectedImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                {selectedProject.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          idx === selectedImageIndex 
                            ? 'border-blue-500 ring-2 ring-blue-500/50' 
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {idx !== selectedImageIndex && (
                          <div className="absolute inset-0 bg-black/40" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-white font-semibold text-xl mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development Progress */}
              {selectedProject.status === 'Work in Progress' && (
                <div className="mb-8">
                  <h4 className="text-white font-semibold text-xl mb-4">Development Progress</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Status: {selectedProject.status}</span>
                      <span className="text-blue-400 font-medium">{selectedProject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${selectedProject.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              {selectedProject.features && (
                <div className="mb-8">
                  <h4 className="text-white font-semibold text-xl mb-4">Key Features</h4>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.1 } },
                    }}
                  >
                    {selectedProject.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {selectedProject.challenges && (
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Challenges Faced</h4>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <p className="text-gray-300">{selectedProject.challenges}</p>
                    </div>
                  </div>
                )}

                {selectedProject.futurePlans && (
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3">Future Plans</h4>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <p className="text-gray-300">{selectedProject.futurePlans}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-gray-800/30 rounded-lg p-6">
                <div>
                  <h5 className="text-white font-medium mb-2">Role</h5>
                  <p className="text-blue-400">{selectedProject.role}</p>
                </div>
                <div>
                  <h5 className="text-white font-medium mb-2">Status</h5>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProject.status === "Live"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : selectedProject.status === "Work in Progress"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-red-500/20 text-red-400 border border-red-500/30"
                  }`}>
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View on GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Image Viewer Modal */}
      {showImageViewer && selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowImageViewer(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={() => setShowImageViewer(false)}
              className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors duration-200 bg-black/60 hover:bg-red-500/30 rounded-full p-3 z-20 backdrop-blur-sm"
            >
              <X size={28} />
            </button>
            
            {/* Navigation Arrows */}
            

            {/* Main Image Container */}
            <div className="relative max-w-6xl max-h-[85vh] w-full">
              <motion.img
                key={selectedImageIndex}
                src={selectedProject.images[selectedImageIndex]?.url}
                alt={selectedProject.images[selectedImageIndex]?.caption}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Image Info Bar */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-8 py-5 rounded-2xl backdrop-blur-lg border border-white/20 max-w-3xl w-full mx-4 shadow-2xl z-30">
              <div className="text-center">
                {selectedProject.images[selectedImageIndex]?.caption && (
                  <div className="mb-4">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl px-6 py-3 border border-blue-500/30">
                      <p className="text-lg font-semibold text-white leading-relaxed">
                        {selectedProject.images[selectedImageIndex].caption}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">
                      {selectedImageIndex + 1} of {selectedProject.images.length}
                    </span>
                  </div>
                  {selectedProject.images.length > 1 && (
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-xs">Use</span>
                      <div className="flex gap-1">
                        <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">←</kbd>
                        <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">→</kbd>
                      </div>
                      <span className="text-xs">to navigate</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
}
