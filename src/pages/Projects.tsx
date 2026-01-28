import React from 'react';
import { Github, ExternalLink, Database, Brain, LineChart } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Financial Modeling",
      description: "Public companies release financial reports to communicate their financial performance, position, and activities to stakeholders. These reports are rich in data, often structured across multiple tables, each serving a distinct purpose",
      technologies: ["Python"],
      github: "https://github.com/mdaksamvk/Project-A/blob/main/Financial%20Modeling/Clustering.ipynb",
      document: "https://github.com/mdaksamvk/Project-A/blob/main/Financial%20Modeling/Financial%20Modelling.docx"
    },
    {
      title: "Knowledge Graph",
      description: "Simplifying Insights Through Visual Representation - Knowledge Graph",
      technologies: ["Python"],
      github: "https://github.com/mdaksamvk/Project-A/blob/main/Knowledge%20Graph/KG_Steps.ipynb",
      document: "https://github.com/mdaksamvk/Project-A/blob/main/Knowledge%20Graph/Knowledge%20Graph%20(3).docx"
    },
    {
      title: "OR",
      description: "Travelling SalesMan Problem",
      technologies: ["Python"],
      github: "https://github.com/mdaksamvk/Project-A/blob/main/OR/Optimization.ipynb",
      document: "https://github.com/mdaksamvk/Project-A/blob/main/OR/TSP.docx"
    },
    {
      title: "Scoring",
      description: " pyAHP ",
      technologies: ["python"],
      github: "https://github.com/mdaksamvk/Project-A/blob/main/Scoring/wpm.py",
      demo: "https://github.com/mdaksamvk/Project-A/blob/main/Scoring/Scoring.docx"
    }
  ];

  const featuredProject = {
    title: "MAPK Pathway Analysis",
    description: "Comprehensive computational framework for analyzing Mitogen-Activated Protein Kinase (MAPK) pathways to identify potential cancer drug targets. This project combines network analysis, machine learning, and biological insights to prioritize proteins that could serve as effective therapeutic targets with minimal side effects.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["Python", "R", "NetworkX", "TensorFlow", "Bioinformatics"],
    demo: "https://www.researchgate.net/publication/350133702_Neural_network_based_prediction_of_less_side_effect_causing_cancer_drug_targets_in_the_network_of_MAPK_pathways",
    features: [
      "Network centrality analysis",
      "Machine learning-based target prediction",
      "Side effect prediction algorithms",
      "Interactive visualization of pathway interactions",
      "Protein domain-level analysis"
    ]
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Featured Projects</h1>
      
      {/* Featured Project */}
      <div className="bg-gray-800 p-8 rounded-lg mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{featuredProject.title}</h2>
            <p className="text-gray-300 mb-6">{featuredProject.description}</p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-2">
                {featuredProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {featuredProject.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a 
                href={featuredProject.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
          <div>
            <img 
              src={featuredProject.image} 
              alt={featuredProject.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Project Categories */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <Brain className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
          <p className="text-gray-400">Projects focused on advanced ML algorithms and applications</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <Database className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
          <p className="text-gray-400">Solutions for data processing, storage, and management</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <LineChart className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Analytics</h3>
          <p className="text-gray-400">Data visualization and business intelligence tools</p>
        </div>
      </div>
      
      {/* Project Grid */}
      <h2 className="text-2xl font-bold mb-8">All Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <ExternalLink className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-gray-900 rounded-full text-sm">{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/mdaksamvk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Github className="w-5 h-5 mr-2" />
          View All Projects on GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;