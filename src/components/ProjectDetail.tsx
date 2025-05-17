import React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from './Navigation';

interface ProjectDetailProps {
  id: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id }) => {
  const projectDetails = {
    "ecommerce-dashboard": {
      title: "E-commerce Dashboard",
      client: "Retail Corp",
      year: 2023,
      role: "Lead Designer & Frontend Developer",
      description: "A comprehensive admin dashboard for an e-commerce platform that provides real-time analytics, inventory management, and order processing capabilities.",
      challenge: "The client needed a way to streamline their e-commerce operations and gain better insights into their sales data. The existing system was fragmented and difficult to use, leading to inefficiencies.",
      solution: "I designed and developed a unified dashboard that centralizes all e-commerce operations. The solution includes real-time analytics, inventory tracking, and order management, all in a user-friendly interface.",
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      additionalImages: [
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js", "Express", "MongoDB"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    },
    "travel-blog": {
      title: "Travel Blog Platform",
      client: "Wanderlust Media",
      year: 2022,
      role: "UX Designer & Frontend Developer",
      description: "A responsive blog platform designed for travel enthusiasts to share their adventures and connect with like-minded individuals.",
      challenge: "The client wanted to create a community for travel bloggers but needed a platform that was both visually engaging and easy to use for content creation.",
      solution: "I created a responsive platform with a focus on visual storytelling. The design emphasizes large imagery and readable typography, while the content management system makes publishing seamless.",
      imageUrl: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      additionalImages: [
        "https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "Firebase", "Cloudinary"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    },
    "fitness-app": {
      title: "Fitness Tracking App",
      client: "HealthFirst",
      year: 2022,
      role: "UI Designer & React Native Developer",
      description: "A mobile application that helps users track their workouts, monitor progress, and achieve their fitness goals.",
      challenge: "The client needed an intuitive fitness tracking solution that would motivate users to maintain their exercise routines and see their progress over time.",
      solution: "I designed a clean, motivating interface with progress visualizations and achievement badges. The app includes workout tracking, progress charts, and social sharing features.",
      imageUrl: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      additionalImages: [
        "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Expo"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    },
    "portfolio-site": {
      title: "Photography Portfolio",
      client: "Jane Smith Photography",
      year: 2021,
      role: "Designer & Developer",
      description: "A minimalist portfolio website for a professional photographer to showcase their work and attract new clients.",
      challenge: "The photographer needed a portfolio that would showcase their work without distracting from the imagery, while also providing information about their services.",
      solution: "I created a clean, gallery-focused design that puts the photography front and center. The site includes a masonry gallery, service information, and a contact form.",
      imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      additionalImages: [
        "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Lightbox.js", "PHP"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    },
    "recipe-app": {
      title: "Recipe Finder",
      client: "Foodie Network",
      year: 2021,
      role: "Full Stack Developer",
      description: "An application that allows users to search for recipes based on ingredients they have, dietary restrictions, and cooking time.",
      challenge: "The client wanted to create a user-friendly recipe search engine that would help people find recipes based on what they already have in their kitchen.",
      solution: "I developed a search algorithm that matches user ingredients with recipe databases. The app includes filters for dietary restrictions, preparation time, and cuisine type.",
      imageUrl: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      additionalImages: [
        "https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3184191/pexels-photo-3184191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Spoonacular API"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    }
  };

  const project = projectDetails[id as keyof typeof projectDetails];
  
  if (!project) {
    return (
      <div className="pt-24 pb-16 px-4 md:px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/projects" 
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-md inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 md:px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Project Navigation */}
        <div className="flex justify-between mb-8">
          <Link 
            to="/projects" 
            className="text-gray-800 hover:text-black flex items-center transition-colors"
          >
            <ArrowLeft size={18} className="mr-1" />
            All Projects
          </Link>
          
          <div className="flex space-x-4">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black flex items-center transition-colors"
            >
              View Live
              <ExternalLink size={16} className="ml-1" />
            </a>
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black flex items-center transition-colors"
            >
              Source Code
              <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
        
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-6">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm text-gray-500">Client</h3>
              <p className="font-medium">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Year</h3>
              <p className="font-medium">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Role</h3>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Technologies</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Project Image */}
        <div className="mb-12">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
        
        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-700 leading-relaxed">{project.solution}</p>
          </div>
        </div>
        
        {/* Additional Images */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.additionalImages.map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={img} 
                  alt={`${project.title} - Image ${index + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Technologies Used */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-gray-100 px-4 py-2 rounded-full text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Next/Previous Navigation */}
        <div className="border-t border-gray-200 pt-10 flex justify-between">
          <Link 
            to={`/projects/${id === "ecommerce-dashboard" ? "recipe-app" : "ecommerce-dashboard"}`}
            className="group"
          >
            <div className="text-sm text-gray-500 mb-1 flex items-center">
              <ArrowLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" />
              Previous Project
            </div>
            <div className="font-medium">{id === "ecommerce-dashboard" ? "Recipe Finder" : "E-commerce Dashboard"}</div>
          </Link>
          
          <Link 
            to={`/projects/${id === "recipe-app" ? "ecommerce-dashboard" : "travel-blog"}`}
            className="text-right group"
          >
            <div className="text-sm text-gray-500 mb-1 flex items-center justify-end">
              Next Project
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="font-medium">{id === "recipe-app" ? "E-commerce Dashboard" : "Travel Blog Platform"}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;