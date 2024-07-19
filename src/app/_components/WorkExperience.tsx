"use client";
// components/WorkExperience.js
// components/WorkExperience.tsx

import React from 'react';
import { Experience} from '../experience/experienceData';

type WorkExperienceProps = {
  experience: Experience[];
};

0
const WorkExperience: React.FC<WorkExperienceProps> = ({ experience }) => {
  return (
    <div className='flex flex-col items-center'>
      {experience.map((job, index) => (
        <div key={index} className="job text-white w-2/3 my-5">
          <h2 className="job-title text-2xl font-bold my-2">{job.title}</h2>
          <h3 className="company text-xl font-bold my-2">{job.company}</h3>
          <p className="date-employed text-xl my-2">{job.dateEmployed}</p>
          <ul className="responsibilities list-disc mx-5 text-lg my-2">
            {job.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;