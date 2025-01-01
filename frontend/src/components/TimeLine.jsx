import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DiApple } from "react-icons/di";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import experiences from "../constants/index";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#1D1836",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            transition: "all 0.3s ease-in-out",
            transform: "translateY(0px)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(255, 255, 255, 0.2)",
            marginTop: "5px",
          }}
          date={experience.date}
          iconStyle={{
            background: "#292a2c",
            color: "#fff",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            borderRadius: "50%",
            padding: "12px",
            transition: "all 0.3s ease",
          }}
          icon={<DiApple size={28} />}
        >
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-white">
              {experience.title}
            </h2>
            <p className="text-gray-400">{experience.company_name}</p>
            <ul>
              {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 transition-all flex items-center gap-2"
              >
                Learn more <FaArrowRight />
              </a>
            </div>
          </motion.div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
