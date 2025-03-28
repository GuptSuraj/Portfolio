import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import logo from '../assets/logo-svg.svg';

const experiences = [
  {
    title: "Internship",
    company_name: "Rubikkube: Software Developer Intern",
    icon: logo,
    iconBg: "#e2e1e8",
    date: "Dec 2023 - May 2024",
    points: [
      "Worked as a frontend developer on the PhiTeK Portal, a hospital and patient management system.",
      "Developed and enhanced the admin dashboard using React.js, improving usability and performance.",
      "Collaborated with the backend team using Node.js and MongoDB to integrate APIs seamlessly.",
      "Designed interactive UI components, ensuring a responsive and user-friendly interface.",
      "Tech stack leanred: React.js, Node.js, MongoDB, Firebase."
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 '>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience3 = () => {
  return (


    <div className='flex w-full justify-center' >
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div >

  )
}

export default Experience3