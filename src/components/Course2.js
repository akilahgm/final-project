import React from 'react';
import { useSelector } from 'react-redux';
import { styleSheet } from '../styles/style';
import Course from './Course'

const Course2 = () => {
  const course2 = useSelector((state) => state.course2);
  return (
    <div>
      <div style={styleSheet.mainStyle}>
        <Course course={course2}/>
      </div>
    </div>
  );
};

export default Course2;
