import React, { useState, useEffect } from 'react';
import './count.css'
const Count = () => {
  const [courseCount, setCourseCount] = useState(0);
  const [authorCount, setAuthorCount] = useState(0);
  const [subjectCount, setSubjectCount] = useState(0);
  const [studentCount, setstudentcount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (courseCount < 200) {
        setCourseCount(courseCount + 1);
      }
      if (authorCount < 100) {
        setAuthorCount(authorCount + 1);
      }
      if (subjectCount < 30) {
        setSubjectCount(subjectCount + 1);
      }
      if(studentCount<200)
      {
        setstudentcount(studentCount+1)
      }
    }, 5); // Adjust the interval as needed for the desired animation speed

    return () => clearInterval(interval);
  }, [courseCount, authorCount, subjectCount,studentCount]);

  return (
    <div className='count'>
        <div className='courses'>
            <p>{courseCount}+</p>
            <h1>Courses</h1>
        </div>
      <div className='author'> <p>{authorCount}+
      </p>
      <h1>Trainers</h1>
      </div>
      <div className='subject'> <p>{subjectCount}+
      </p>
      <h1>Experience</h1>
      </div>
     
      <div className='student'> <p>{studentCount}+
      </p>
      <h1>Students</h1>
      </div>
    
      
    </div>
  );
};

export default Count;
