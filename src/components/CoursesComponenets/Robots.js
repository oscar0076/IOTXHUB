import React, { useState, useEffect } from 'react';
import style from './Robots.module.css'

const Iot = () => {
    

    
    return (
        <div className={style.IotContainer}>
            {/* Header */}
            <header className={style.IotHeader}>
                <h1 className={style.IotTitle}>Autonomous Robotics</h1>
                
            </header>

            {/* Suggested Courses */}
            <section className={style.IotSuggestions}>
                <h2>
                    <span className={style.Highlight}>Suggested Courses</span> <br />
                    and <span className={style.Highlight}>Trainers</span>
                </h2>
            </section>

            {/* Online Courses */}
            <section className={style.IotCourses}>
                <h2>Online Courses</h2>
                <div className={style.CoursesGrid}>
                    <div className={style.CourseItem}>
                        <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 1" />
                        <p><a href="http://localhost:5000/cours/robotchap1.pdf" target="_blank" rel="noopener noreferrer">Course 1</a> </p>
                       
                    </div>
                    <div className={style.CourseItem}>
                        <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 2" />
                        <p><a href="http://localhost:5000/cours/robotchap2.pdf" target="_blank" rel="noopener noreferrer">Course 2</a></p>
                    </div>
                    <div className={style.CourseItem}>
                        <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 3" />
                        <p><a href="http://localhost:5000/cours/robotchap3.pdf" target="_blank" rel="noopener noreferrer">Course 3</a></p>
                    </div>
                    <div className={style.CourseItem}>
                        <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 4" />
                        <p><a href="http://localhost:5000/cours/robotcourse2.pdf" target="_blank" rel="noopener noreferrer">Course 4</a></p>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Iot;