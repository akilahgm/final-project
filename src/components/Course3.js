import React from 'react';
import { useSelector } from 'react-redux';
import { styleSheet } from '../styles/style';
import Course from './Course'

const Course3 = () => {
  const course3 = useSelector((state) => state.course3);
  return (
    <div>
      <div style={styleSheet.mainStyle}>
        <Course course={course3}/>
      </div>
    </div>
  );
};

export default Course3;
