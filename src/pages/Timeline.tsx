import { motion } from "framer-motion";
import { Building2, GraduationCap, Calendar } from "lucide-react";

function Timeline() {
  const timelineData = [
    {
      title: "Principal Data Scientist",
      company: "Securin",
      date: "June 2024 - Present",
      description:
        "Securin Attack Surface Management empowers organizations to discover assets and prioritize exposures and misconfigurations that could lead to a breach.",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    {
      title: "Senior Data Scientist",
      company: "Securin",
      date: "May 2021 - June 2024",
      description:
        "Chennai, Tamil Nadu, India. Working on (MAPK) pathways: Characteristics and potential as drug targets scoring algorithms, LLM and Machine Learning in Cybersecurity data-driven decisions. Customized Risk Modeling to its Vulnerability and Predicting the next exploitation.",
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
      title: "Ph.D., Mathematics",
      company: "Vellore Institute of Technology",
      date: "July 2013 - May 2018",
      description:
        "Research focus: Computational Identification and Analysis of Cancer Drug Targets in the Network of Mitogen-Activated Protein Kinase (MAPK) Pathways. Coursework: Graph Theory, Network biology, Cell Signaling.",
      icon: <GraduationCap className="w-5 h-5 text-white" />,
    },
    {
      title: "Project Assistant",
      company: "Indian Institute of Science (IISc)",
      date: "November 2011 - March 2012",
      description:
        "Project on 'Developing efficient and robust numerical scheme for the 3-D free surface and two-phase flow'.",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Professional & Academic Timeline
      </h1>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.9 }}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline Item */}
              <div className="w-5/12">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex items-center text-blue-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-2">{item.company}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;