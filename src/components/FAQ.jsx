import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqData = [
    {
      question: "What is the purpose of this timeline?",
      answer:
        "The timeline provides a visual journey through historical events with an enchanting theme.",
    },
    {
      question: "Can I customize the timeline?",
      answer:
        "Yes, you can easily customize the events, images, and animations by editing the component's data and styles.",
    },
    {
      question: "What technologies are used?",
      answer:
        "This project uses React, Framer Motion for animations, and CSS for styling.",
    },
    {
      question: "Is this component mobile-friendly?",
      answer:
        "Yes, the component is responsive and adjusts seamlessly to various screen sizes.",
    },
    {
      question: "How do I add more questions?",
      answer:
        "Simply update the `faqData` array with new questions and answers to extend the FAQ section.",
    },
  ];

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="faq-container relative min-h-screen py-10 px-5"
      style={{
        background: " #24222d",
        color: "#F7E290",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 cursor-events-none">
        <div
          className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full"
          style={{ animation: "orbMove 6s ease-in-out infinite alternate" }}
        ></div>
        <div
          className="absolute bottom-32 right-10 w-60 h-60 bg-gradient-to-r from-blue-500 to-teal-500 opacity-30 blur-2xl rounded-full"
          style={{ animation: "orbMove 8s ease-in-out infinite alternate" }}
        ></div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-4">
        <img src="/assets/header-flourish.svg" alt="" className="h-3 transform scale-x-[-1] mb-10" />
        <h1 className="text-4xl font-bold text-center text-[#F7E290] mb-10">
          Frequently Asked Questions
        </h1>
        <img src="/assets/header-flourish.svg" alt="" className="h-3 mb-10" />
      </div>

      <div className="space-y-8 mx-auto max-w-4xl">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item border border-[#F7E290] bg-gradient-to-r from-[#24222d] to-[#131433] p-5 rounded-lg shadow-lg"
            onClick={() => toggleQuestion(index)}
          >
            <button className="w-full text-left text-lg font-semibold flex justify-between items-center text-[#F7E290]">
              {item.question}
              <motion.span
                className="ml-2 text-2xl"
                initial={{ rotate: 0 }}
                animate={{ rotate: selectedQuestion === index ? 45 : 0 }}
              >
                +
              </motion.span>
            </button>
            {selectedQuestion === index && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                className="overflow-hidden text-sm mt-3 text-[#F7E290]"
              >
                {item.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
