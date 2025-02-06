// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [stars, setStars] = useState([]); // State to manage random stars

  useEffect(() => {
    const generateStars = () => {
      const starsArray = [];
      for (let i = 0; i < 100; i++) {
        starsArray.push({
          id: i,
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          size: Math.random() * 3 + 1 + "px", // Adjust star size
          animationDelay: Math.random() * 5 + "s",
          animationDuration: Math.random() * 3 + 2 + "s", // Random animation speed
        });
      }
      setStars(starsArray);
    };

    generateStars();
  }, []);

  const faqData = [
    {
      question: "What should I do after completing registration?",
      answer:
        "After registering, you will receive a confirmation email. Follow our updates on social media and email to stay informed.",
    },
    {
      question: "Who can participate in Abhisarga 2025?",
      answer:
        "Students from IIIT Sri City and other colleges can participate. Some events may have specific eligibility criteria mentioned on the event pages.",
    },
    {
      question: "Can I register for multiple events?",
      answer:
        "Yes, you can register for multiple events as long as the schedules do not overlap.",
    },
    {
      question: "How will I know if my registration is confirmed?",
      answer:
        "You will receive a confirmation email after successful registration.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Some events may have nominal registration fee. Details can be found on the event-specific pages.",
    },
    {
      question: "What is the theme of Abhisarga 2025?",
      answer:
        "The theme of Abhisarga 2025 is “Mystery of Magic,” focusing on wonder, illusions, and mystical creativity.",
    },
    {
      question: "Will accommodation be provided?",
      answer:
        "Yes, accommodation will be available for outstation participants on a first-come, first-serve basis. Details will be shared after registration.",
    },
    {
      question: "How do I reach IIIT Sri City?",
      answer:
        "IIIT Sri City is well-connected by road and rail. The nearest railway station is Sullurpeta, and the closest airport is in Chennai.",
    },
    {
      question: "Can I bring my friends along?",
      answer:
        "Yes, guests are allowed but may need to register for specific events if they wish to participate.",
    },
    {
      question: "Can I participate in team events?",
      answer:
        "Yes, some events are team-based. Check the event details for team size requirements.",
    },
    {
      question: "How will I submit my entries for online competitions?",
      answer:
        "The submission process will be outlined in the competition rulebook, and you will receive a confirmation upon successful submission.",
    },
    {
      question: "How will the entries be judged?",
      answer:
        "Entries will be judged by experts with outstanding records in their respective fields.",
    },
    {
      question:
        "What is the penalty for exceeding time limits in competitions?",
      answer:
        "Penalty details will be mentioned in the rulebook for each competition.",
    },
    {
      question: "When will the results be announced?",
      answer: "The results will be announced at the end of the fest.",
    },
    {
      question: "What is the schedule of events?",
      answer:
        "The detailed event schedule is present in the fest's website timeline page.",
    },
    {
      question: "Are all events open to everyone?",
      answer:
        "Some events may have specific eligibility criteria. Please refer to the event pages for details.",
    },
    {
      question: "Will there be concerts?",
      answer:
        "Yes, concerts will be part of Abhisarga 2025. Stay tuned for updates on the artist lineup and timings.",
    },
    {
      question: "How can I attend the concerts?",
      answer: "Entry to concerts is free for all registered participants.",
    },
    {
      question: "Whom should I contact for queries?",
      answer:
        "Check the contact page for details on reaching out to the organizing team.",
    },
  ];

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <motion.div
      className="faq-container flex flex-col items-center justify-center min-h-screen py-10 px-5 w-full relative"
      style={{
        background: "radial-gradient(circle at top, #000000, #000000)",
        color: "#F7E290",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stars */}
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
              }}
            ></div>
          ))}
        </div>

        {/* Gradient Orbs */}
        <div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-red-600 to-orange-400 opacity-30 blur-3xl rounded-full"
          style={{
            animation: "orbMove1 8s ease-in-out infinite alternate",
          }}
        ></div>
        <div
          className="absolute bottom-32 right-20 w-60 h-60 bg-gradient-to-r from-pink-500 to-purple-400 opacity-20 blur-3xl rounded-full"
          style={{
            animation: "orbMove2 10s ease-in-out infinite alternate",
          }}
        ></div>
      </div>

      {/* FAQ Content */}
      <div className="flex flex-row justify-center items-center space-x-4">
        <img
          src="/assets/header-flourish.svg"
          alt=""
          className="h-3 transform scale-x-[-1] mb-10"
        />
        <h1 className="text-4xl font-bold text-center text-[#F7E290] mb-10 font-mysticalFont font-[400]">
          Frequently Asked Questions
        </h1>
        <img src="/assets/header-flourish.svg" alt="" className="h-3 mb-10" />
      </div>

      <div className="space-y-8 max-w-4xl w-full">
        {displayedFAQs.map((item, index) => (
          <div
            key={index}
            className="faq-item border border-[#F7E290] bg-gradient-to-r from-[#24222d] to-[#131433] p-5 rounded-lg shadow-lg relative"
            onClick={() => toggleQuestion(index)}
          >
            <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md rounded-lg z-0"></div>
            <div className="relative z-10">
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
                  className="overflow-hidden text-sm mt-3 text-white"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={toggleShowAll}
          className=" button px-6 py-2 bg-[#F7E290] text-black rounded-full font-semibold hover:bg-[#edd472] transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </motion.div>
  );
};

export default FAQ;
