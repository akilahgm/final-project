import React from 'react';
import { useSelector } from 'react-redux';
import { styleSheet } from '../styles/style';
import Course from './Course'

const Course1 = () => {
  const course1 = useSelector((state) => state.course1);
  return (
    <div>
      <div style={styleSheet.mainStyle}>
        <Course course={course1}/>
      </div>
    </div>
  );
};

export default Course1;
