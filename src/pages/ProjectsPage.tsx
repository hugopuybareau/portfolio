import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../components/Navigation';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: number;
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: "ecommerce-dashboard",
      title: "E-commerce Dashboard",
      description: "A comprehensive admin dashboard with intuitive analytics and inventory management.",
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Web Application",
      year: 2023
    },
    {
      id: "travel-blog",
      title: "Travel Blog Platform",
      description: "A responsive website for travel enthusiasts to share their adventures and connect.",
      imageUrl: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Web Application",
      year: 2022
    },
    {
      id: "fitness-app",
      title: "Fitness Tracking App",
      description: "A mobile app that helps users track workouts and monitor their fitness progress.",
      imageUrl: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Mobile App",
      year: 2022
    },
    {
      id: "portfolio-site",
      title: "Photography Portfolio",
      description: "A minimalist portfolio site for a professional photographer to showcase their work.",
      imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Website",
      year: 2021
    },
    {
      id: "recipe-app",
      title: "Recipe Finder",
      description: "An application that allows users to search for recipes based on ingredients they have.",
      imageUrl: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Web Application",
      year: 2021
    }
  ];

  // Filter options
  const categories = Array.from(new Set(projects.map(project => project.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filtered projects
  const filteredProjects = selectedCategory 
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  return (
    <div className="pt-24 pb-16 px-4 md:px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A selection of my recent work, including web applications, mobile apps, and design projects.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          <button 
            className={`px-4 py-2 rounded-md text-sm ${selectedCategory === null ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-md text-sm ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">{project.category}</span>
                  <Link 
                    to={`/projects/${project.id}`}
                    className="text-black font-medium inline-flex items-center group"
                  >
                    View details
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;