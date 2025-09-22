import { useInView } from "../hooks/useInView";
import { ProjectType } from "../types";
import {  Github,ExternalLink } from "lucide-react";
import Home from "/screenshots/Home.png";
import FeaturedShow from "/screenshots/FeaturedShow.png";
import StayUpdated from "/screenshots/StayUpdated.png";
import BrowseShow from "/screenshots/BrowseShow.png";
import MyBooking from "/screenshots/MyBooking.png";
import BookTicket from "/screenshots/BookTicket.png";
import paste1 from "/screenshots/paste1.png";
import paste2 from "/screenshots/paste2.png";
import Currency from "/screenshots/Currency.png";
import mernstack from "/screenshots/mernstack.png"
import mern1 from "/screenshots/mern1.png"
import mern2 from "/screenshots/mern2.png"
const projects: ProjectType[] = [
  {
    id: "project1",
    title: "Theatre Booking System",
    description:
      "A modern and responsive frontend for an online theatre booking platform, designed to provide a seamless user experience for browsing shows, booking seats, making payments, and managing profile.",
    image: Home,
    technologies: ["React", "Node.js", "PostgreSQL"],
    links: {
      github: "https://github.com/rajanshah23/frontend-Theatre-booking-system",
    },
    screenshots: [
      Home,
      FeaturedShow,
      StayUpdated,
      BrowseShow,
      MyBooking,
      BookTicket,
    ],
    features: [
      "Real-time seat availability tracking",
      "Secure payment integration with Khalti",
      "User authentication and profile management",
      "Booking history and reviews",
      "Admin dashboard for show and user management",
    ],
    technicalDetails: [
      "Frontend: React, Redux, Tailwind CSS",
      "Backend: Node.js, Express, Sequelize",
      "Database: PostgreSQL (Supabase)",
      "Authentication: JWT + Supabase Auth",
      "Payment: Khalti API",
    ],
  },
  {
    id: "project2",
    title: "Online shopping center",
    description:
      "Online Shopping Center is a full-stack e-commerce web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The platform provides a seamless online shopping experience with features like product browsing, search and filter, cart management, order processing, and secure user authentication. .",
    image:mernstack,
    technologies: ["MERN"],
    links: {
      github: "https://github.com/rajanshah23/MERN-Stack",
    },
     screenshots: [
       mernstack,mern1,mern2
    ],
  },
  {
    id: "project3",
    title: "PasteApp",
    description:
      "A simple yet powerful Paste App built with React, Redux, and LocalStorage that lets you effortlessly create, edit, copy, and manage your text snippets in one place! .",
    image:  paste1,
    technologies: ["React", "Redux", "Localstorage"],
    links: {
      github: "https://github.com/rajanshah23/PasteApp",
    },
     screenshots: [
       paste1,paste2
    ],
  },
  {
    id: "project3",
    title: "Currency C0nverter",
    description:
      "A Currency Converter web application that allows users to convert amounts from one currency to another using real-time exchange rates. This project fetches up-to-date currency exchange rates from a reliable API and provides an easy-to-use interface for quick currency conversions. ",
    image:  Currency,
    technologies: ["Html", "CSS", "Javascript"],
    links: {
      github: "https://github.com/rajanshah23/Currency-Converter",
    },
     screenshots: [
      Currency
    ],
  },
];

type ProjectsProps = {
  onProjectSelect: (project: ProjectType) => void;
};

const Projects = ({ onProjectSelect }: ProjectsProps) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl lg:text-4xl font-bold text-center mb-16 ${
            inView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transform hover:-translate-y-2 transition-all duration-300 ${
                inView ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="relative overflow-hidden group cursor-pointer"
                onClick={() => onProjectSelect(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="text-blue-600 hover:text-blue-700 transition-colors flex items-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="text-green-600 hover:text-green-700 transition-colors flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      className="text-green-600 hover:text-green-700 transition-colors flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
