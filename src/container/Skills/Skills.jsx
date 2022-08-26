import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";




const Skills = () => {
  const [trainings, setTrainings] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "trainings"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      console.log(data)
      setTrainings(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
    <h2 className="head-text">Skills & Trainings</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="app__skills-exp">
        {trainings.map((training) => (
          <motion.div
            className="app__skills-exp-item"
            key={training.year}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{training.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {trainings.map((training) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={training.name}
                    key={training.name}
                  >
                    <h4 className="bold-text">{training.name}</h4>
                    <p className="p-text">{training.company}</p>
                  </motion.div>
                 
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);
};



export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
  );

