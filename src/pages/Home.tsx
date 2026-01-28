import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import logo from "../images/logo.png";
import images12 from "../images/images12.png";
import {
  Github,
  Linkedin,
  Mail,
  Brain,
  Database,
  LineChart as ChartLine,
  Code2,
  Settings,
  ShieldCheck,
  Network,
  Layers,
  Terminal,
} from "lucide-react";

/* ===================== SKILLS ===================== */

const skills = [
  {
    title: "Machine Learning",
    desc: "Production-grade ML systems",
    icon: <Brain />,
  },
  {
    title: "Big Data Engineering",
    desc: "Scalable data pipelines",
    icon: <Database />,
  },
  {
    title: "Advanced Analytics",
    desc: "Predictive & prescriptive insights",
    icon: <ChartLine />,
  },
  {
    title: "AI Application Development",
    desc: "End-to-end AI solutions",
    icon: <Code2 />,
  },
  {
    title: "LLMOps",
    desc: "Lifecycle management for LLMs",
    icon: <Settings />,
  },
  {
    title: "Advanced RAG Techniques",
    desc: "Hybrid retrieval & reranking",
    icon: <Layers />,
  },
  {
    title: "AI Security Governance",
    desc: "Model risk & compliance",
    icon: <ShieldCheck />,
  },
  {
    title: "MCP Agentic AI Flow",
    desc: "Multi-agent orchestration",
    icon: <Network />,
  },
  {
    title: "Python Engineering",
    desc: "High-performance systems",
    icon: <Terminal />,
  },
  { title: "Kubeflow", desc: "ML pipeline orchestration", icon: <Settings /> },
  {
    title: "Cloud AI Platforms",
    desc: "AWS, Azure, GCP,VCluster ",
    icon: <Database />,
  },
  {
    title: "Enterprise AI Strategy",
    desc: "Scalable AI adoption",
    icon: <Brain />,
  },
];

/* ===================== PAGE ===================== */

export default function Home() {
  return (
    <>
      {/* ===================== SEO ===================== */}
      <Helmet>
        <title>Aksamatrix | Enterprise AI & Secure ML Platforms</title>
        <meta
          name="description"
          content="Aksamatrix builds secure, scalable AI platforms specializing in LLMOps, AI security governance, advanced RAG, and Kubernetes-native ML pipelines."
        />
        <meta
          name="keywords"
          content="AI, LLMOps, RAG, AI Security, Kubeflow, Agentic AI"
        />
      </Helmet>

      {/* ===================== HERO ===================== */}
      <header className="relative min-h-[85vh] flex items-center justify-center bg-gray-950 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2"
            alt="AI background"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <img
            src={logo}
            alt="Aksamatrix"
            className="mx-auto w-64 mb-6"
            loading="lazy"
          />

          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/mdaksamvk" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://linkedin.com/in/mdaksamvk" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="mailto:mdaksamvk@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </motion.div>
      </header>

      {/* ===================== ABOUT ===================== */}
      <main className="container mx-auto px-6 py-20">
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8"
          >
            About Aksamatrix
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <p className="text-gray-300 leading-relaxed">
                Aksamatrix is an AI engineering company specializing in secure,
                scalable, production-ready AI platforms using the PARK Stack
                (PyTorch, AI Frontier Models, Ray, Kubernetes). We architect
                end-to-end systems spanning distributed training, automated
                MLOps pipelines, and Kubernetes-native deployment. <br></br> Our expertise
                includes agentic AI systems, multimodal LLM serving with
                intelligent GPU/CPU routing, and graph-augmented reasoning for
                complex domains like cybersecurity. We combine modern AI design
                patterns with enterprise-grade engineering to deliver robust,
                governable solutions for regulated environments. <br></br>Core
                Technologies: Ray, PySpark, Kubeflow, Hugging Face Accelerate,
                DeepSpeed, TensorFlow, PyTorch, XGBoost, LightGBM, Horovod
              </p>
            </motion.div>

            {/* ===================== INTERACTIVE PIPELINE ===================== */}
            <motion.div whileHover={{ scale: 1.03 }} className="relative group">
              <img
                src={images12}
                alt="AI Pipeline on Kubernetes"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-6">
                <p className="text-sm text-gray-200">
                  Ingestion → Feature Store → Training → Model Registry → Canary
                  Deployment → Secure Inference → Monitoring
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================== SKILLS ===================== */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10">Core Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-5 rounded-lg text-center"
              >
                <div className="flex justify-center mb-3 text-blue-400">
                  {React.cloneElement(s.icon, { size: 32 })}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-6">
              Looking to deploy secure, scalable AI systems? Let’s build
              something impactful together.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="mailto:mdaksamvk@gmail.com"
                className="bg-blue-600 px-6 py-3 rounded-lg text-center hover:bg-blue-700"
              >
                Email Us
              </a>
              <a
                href="https://github.com/mdaksamvk"
                className="bg-gray-700 px-6 py-3 rounded-lg text-center hover:bg-gray-600"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mdaksamvk"
                className="bg-gray-700 px-6 py-3 rounded-lg text-center hover:bg-blue-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
