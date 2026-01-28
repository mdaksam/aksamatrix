import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Brain, Network } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      title: "AI-Driven Cyber Risk Prioritization",
      desc: "LLM-powered risk scoring engine analyzing CVEs, exploitability, and asset exposure in real time.",
      icon: <ShieldCheck />,
    },
    {
      title: "Agentic AI for Security Operations",
      desc: "Multi-agent MCP flow automating triage, enrichment, and response decisions.",
      icon: <Network />,
    },
    {
      title: "Advanced RAG for Threat Intelligence",
      desc: "Hybrid vector + graph RAG improving threat context accuracy by 38%.",
      icon: <Brain />,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Case Studies</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <div className="text-blue-400 mb-4">
              {React.cloneElement(c.icon, { size: 36 })}
            </div>
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="text-gray-400">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}