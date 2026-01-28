import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

function Research() {
  const publications = [
    {
      title: "Cancer drug target identification and node‑level analysis of the network of MAPK pathways",
      journal: "Journal of Bioinformatics and Computational Biology",
      year: "2018",
      link: "https://www.researchgate.net/publication/323966740_Cancer_drug_target_identification_and_node-level_analysis_of_the_network_of_MAPK_pathways"
    },
    {
      title: "A novel topological alternate centrality measure capturing drug targets in the network of MAPK pathways",
      journal: "Network Biology",
      year: "2017",
      link: "https://www.researchgate.net/publication/324857887_A_novel_topological_alternate_centrality_measure_capturing_drug_targets_in_the_network_of_MAPK_pathways"
    },
    {
      title: "Neural network-based prediction of fewer side effect causing cancer drug targets in the network of MAPK pathways",
      journal: "IEEE/ACM Transactions on Computational Biology and Bioinformatics",
      year: "2019",
      link: "https://www.researchgate.net/publication/320977121_Neural_network_based_prediction_of_less_side_effects_causing_nodes_in_the_network_of_MAPK_pathways"
    },
    {
      title: "Protein Domain Level Cancer Drug Targets in the Network of MAPK pathways",
      journal: "Computational Biology and Chemistry",
      year: "2018",
      link: "https://www.researchgate.net/publication/324707485_Protein_Domain_Level_Cancer_Drug_Targets_in_the_Network_of_MAPK_pathways?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ"
    },
    {
      title: "Hub nodes in the network of human Mitogen-Activated Protein Kinase pathways: Characteristics and potential as drug targets",
      journal: "Journal of Complex Networks",
      year: "2017",
      link: "https://www.researchgate.net/publication/319460808_Hub_nodes_in_the_network_of_human_Mitogen-Activated_Protein_Kinase_MAPK_pathways_Characteristics_and_potential_as_drug_targets"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Scientific Publications</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6">Scientific Journals</h2>
        <p className="text-gray-300 mb-6">
          My research focuses on computational approaches to identify and analyze potential cancer drug targets, 
          particularly within the Mitogen-Activated Protein Kinase (MAPK) pathways. I employ network analysis, 
          machine learning, and other computational techniques to understand the complex interactions within 
          biological systems and identify promising therapeutic targets.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Network Biology</h3>
            <p className="text-sm text-gray-400">Analysis of biological networks to identify key nodes and interactions</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Drug Target Identification</h3>
            <p className="text-sm text-gray-400">Computational methods to identify potential therapeutic targets</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Machine Learning in Biology</h3>
            <p className="text-sm text-gray-400">Application of ML techniques to biological problems</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Scientific Journals Links</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-start">
                <FileText className="w-5 h-5 mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
                  <p className="text-gray-400 mb-1">{pub.journal}</p>
                  <p className="text-gray-500 text-sm mb-3">{pub.year}</p>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="mr-1">View Publication</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Research;