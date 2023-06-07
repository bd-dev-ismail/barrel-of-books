import books from "../../../assets/c15l_mk5i_220223.jpg";

import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const questions = [
    {
      _id: 1,
      question: "Who can benefit from using your learning Apps?",
      answer:
        "Our solutions are best-fit, if you are seeking preparation for competitive English tests—like IELTS, SAT, GRE, GMAT,  University Admission, Professional Job Exams etc.",
    },
    {
      _id: 2,
      question: "I am a beginner in English. Are your Apps suitable for me?",
      answer:
        "Suitable for any and everyone.  Doesn’t matter if you are a beginner, or a pro. If you need to improve your English skills, use the solutions and have a miraculous preparation!",
    },
    {
      _id: 3,
      question: "Can I learn at my own time and pace?",
      answer:
        "Our solutions are self-paced.You can learn during the day, night, weekends—whichever works best FOR YOU. But you get stuck anywhere, our team is already there to help you.",
    },
    {
      _id: 4,
      question: "Is the pricing affordable for me?",
      answer:
        "Super affordable! Currently Readvive and Vocavive annual subscription pricing starts at just USD $6. Investing this small amount for your personal growth should be within reach. ",
    },
    {
      _id: 5,
      question: "How can I get started?",
      answer:
        "Visit the product page and start your subscription as you need. It’s that easy!",
    },
  ];
  const [openSectionId, setOpenSectionId] = useState(null);

  const toggleAccordion = (questionId) => {
    setOpenSectionId((prevId) => (prevId === questionId ? null : questionId));
  };
  return (
    <section className="pt-20 pb-36">
      <div className="w-11/12 gap-8 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center relative">
        <div
          data-aos="fade-right"
          className="w-full md:w-6/12 lg:w-5/12 text-center md:text-left"
        >
          <h3 className="lg:text-3xl text-xl my-3 text-center lg:text-start uppercase font-bold">
            Frequently <span className="text-primary">Asked</span> <br />{" "}
            Questions
          </h3>

          <p className="text-muted mb-8">
            You might be having these questions too. These FaqSections will get
            rid of your confusions.
          </p>
          <hr className="w-[73px] border-b-4 border-primary m-3" />
          <div>
            <img className="mx-auto w-full lg:w-72" src={books} alt="" />
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="w-full md:w-6/12 lg:w-7/12 space-y-3 mt-5"
        >
          {/* {questions?.map((question) => (
            <Accordian key={question._id} question={question} />
          ))} */}
          {questions.map((question) => (
            <Accordian
              key={question._id}
              question={question}
              isOpen={openSectionId === question._id}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="https://www.facebook.com/rodelamart/" target="__blank">
          <button className="btn dropShadow btn-primary text-white">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};
const Accordian = ({ question, isOpen, toggleAccordion }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   // if (question._id === 2) {
  //   //     setIsOpen(true);
  //   // }
  // }, [question]);

  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };
  const handleClick = () => {
    toggleAccordion(question._id);
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        isOpen ? "bg-primary text-white dropShadow" : "bg-base-200"
      } p-5 w-full rounded-lg cursor-pointer duration-150`}
    >
      <div className="flex items-center justify-between mb-4">
        <h5 className="font-bold">{question?.question}</h5>
        <IoIosArrowDown />
      </div>
      {isOpen && <p>{question?.answer}</p>}
    </div>
  );
};

export default FaqSection;
