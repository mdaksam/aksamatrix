import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Calendar,
  FileText,
  ExternalLink,
} from "lucide-react";

/* ============================
   ABOUT FOUNDER PAGE
============================ */
const certifications = [
  {
    title: "Industrial IoT on Google Cloud Platform",
    provider: "Google Cloud",
    link: "https://www.coursera.org/account/accomplishments/verify/E6CKFB4AVR74",
  },
  {
    title: "Mastering API Management for Generative AI in Azure",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-f6b7a1c8-af7b-43e5-af00-52e582a8b454/",
  },
  {
    title: "Machine Learning",
    provider: "Stanford University – Andrew Ng",
    link: "https://www.coursera.org/account/accomplishments/verify/MVB6FBQFJX9H",
  },
  {
    title: "Advanced R Programming",
    provider: "Johns Hopkins University",
    link: "https://www.coursera.org/account/accomplishments/verify/G5Z3XXPJ7AAS",
  },
  {
    title: "Advanced Kubernetes/AKS Network & Infrastructure",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-21cba41f-aafc-4b29-8c7e-7dfa9ebe7a7e/",
  },
];
function AboutUs() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-6xl">
      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Aksamatrix
        </h1>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Aksamatrix is an AI-first technology company specializing in secure,
          scalable, and governance-ready artificial intelligence systems for
          enterprises, research organizations, and next-generation digital
          platforms.
        </p>
      </motion.section>

      {/* ================= COMPANY & FOUNDER SUMMARY ================= */}
      <section className="grid md:grid-cols-2 gap-10 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4">Company Vision</h2>

          <p className="text-gray-300 leading-relaxed">
            <strong>Aksamatrix</strong> was founded to address one of the most
            critical challenges of modern AI adoption — building intelligent
            systems that are not only powerful, but also secure, explainable,
            and compliant by design.
          </p>

          <p className="text-gray-300 mt-4">
            We design end-to-end AI architectures spanning data pipelines,
            advanced retrieval systems, agentic workflows, and Kubernetes-based
            deployments, with a strong emphasis on AI security governance and
            operational maturity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Founder & Technical Leadership
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Aksamatrix is led by <strong>Dr. Md Aksam VK</strong>, a
            cybersecurity-focused AI researcher and data scientist with a Ph.D.
            background in applied mathematics. His work bridges advanced
            academic research with production-grade AI systems deployed in
            real-world environments.
          </p>

          <p className="text-gray-300 mt-4">
            The company’s technical direction is driven by deep expertise in
            Large Language Models (LLMs), AI risk modeling, secure AI system
            design, and enterprise-scale AI operations.
          </p>
        </motion.div>
      </section>

      {/* ================= TIMELINE ================= */}
      <Timeline />

      {/* ================= RESEARCH ================= */}
      <Research />

      {/* ================= CERTIFICATIONS ================= */}
      <section className="mt-28">
        <h2 className="text-3xl font-bold text-center mb-12">
          Certifications & Professional Learning
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-5 rounded-lg flex justify-between items-center hover:bg-gray-700 transition"
            >
              <div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  {cert.title}
                </a>
                <p className="text-gray-400 text-sm mt-1">{cert.provider}</p>
              </div>

              <ExternalLink className="w-5 h-5 text-gray-400" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ============================
   TIMELINE COMPONENT
============================ */

function Timeline() {
  const timelineData = [
    {
      title: "AI Architect",
      company: "Aksamatrix",
      date: "June 2024 – Present ",
      description:
        "Founder and high-level strategic professional who designs, builds, and deploys comprehensive Artificial Intelligence systems to solve complex business problems",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    {
      title: "Principal Data Scientist",
      company: "Securin",
      date: "June 2024 – December 2024",
      description:
        "LLM and ML-driven Attack Surface Management, customized risk modeling, and predictive exploitation analytics.",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    {
      title: "Senior Data Scientist",
      company: "Securin",
      date: "May 2021 – June 2024",
      description:
        "LLMOps, NLP, Kubeflow pipelines, and large-scale decision science platforms.",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    {
      title: "Data Scientist",
      company: "Securin",
      date: "June 2020 - April 2021",
      description:
        "Chennai, Tamil Nadu, India. Worked on data-driven cybersecurity solutions.",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    {
      title: "Data Scientist",
      company: "ZettaLabs",
      date: "April 2019 - April 2020",
      description:
        "Bangalore. Responsibilities included: Attribute identification using Tensorflow, NFL gaming schedule using Gurobi solver, Risk analysis for an online payment app.",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    {
      title: "Data Scientist",
      company: "GrayMatter Software Services Pvt Ltd",
      date: "May 2018 - April 2019",
      description:
        "Worked on Car Park Revenue Management (CPRM) integration, NLP for Airport customers, Data Quality Analysis.",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    {
      title: "Ph.D. – Mathematics",
      company: "VIT University",
      date: "2013 – 2018",
      description:
        "Network biology, graph theory, and computational cancer drug target discovery.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Professional Timeline
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-blue-500" />

        <div className="space-y-14">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={`flex w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-5/12 bg-gray-800 p-6 rounded-lg">
                <div className="flex justify-between mb-3">
                  <h3 className="font-bold">{item.title}</h3>
                  <div className="flex items-center text-blue-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <p className="text-gray-400">{item.company}</p>
                <p className="text-gray-300 text-sm mt-2">{item.description}</p>
              </div>

              <div className="w-10 h-10 bg-blue-600 rounded-full absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================
   RESEARCH COMPONENT
============================ */

function Research() {
  const publications = [
    {
      title:
        "Cancer drug target identification and node‑level analysis of the network of MAPK pathways",
      journal: "Journal of Bioinformatics and Computational Biology",
      year: "2018",
      link: "https://www.researchgate.net/publication/323966740_Cancer_drug_target_identification_and_node-level_analysis_of_the_network_of_MAPK_pathways",
    },
    {
      title:
        "A novel topological alternate centrality measure capturing drug targets in the network of MAPK pathways",
      journal: "Network Biology",
      year: "2017",
      link: "https://www.researchgate.net/publication/324857887_A_novel_topological_alternate_centrality_measure_capturing_drug_targets_in_the_network_of_MAPK_pathways",
    },
    {
      title:
        "Neural network-based prediction of fewer side effect causing cancer drug targets in the network of MAPK pathways",
      journal:
        "IEEE/ACM Transactions on Computational Biology and Bioinformatics",
      year: "2019",
      link: "https://www.researchgate.net/publication/320977121_Neural_network_based_prediction_of_less_side_effects_causing_nodes_in_the_network_of_MAPK_pathways",
    },
    {
      title:
        "Protein Domain Level Cancer Drug Targets in the Network of MAPK pathways",
      journal: "Computational Biology and Chemistry",
      year: "2018",
      link: "https://www.researchgate.net/publication/324707485_Protein_Domain_Level_Cancer_Drug_Targets_in_the_Network_of_MAPK_pathways?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
    },
    {
      title:
        "Hub nodes in the network of human Mitogen-Activated Protein Kinase pathways: Characteristics and potential as drug targets",
      journal: "Journal of Complex Networks",
      year: "2017",
      link: "https://www.researchgate.net/publication/319460808_Hub_nodes_in_the_network_of_human_Mitogen-Activated_Protein_Kinase_MAPK_pathways_Characteristics_and_potential_as_drug_targets",
    },
  ];

  return (
    <section className="mt-28">
      <h2 className="text-3xl font-bold text-center mb-12">
        Research & Publications
      </h2>

      <div className="space-y-6">
        {publications.map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-400 text-sm">
                  {p.journal} · {p.year}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 text-sm mt-2"
                >
                  View Publication <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
