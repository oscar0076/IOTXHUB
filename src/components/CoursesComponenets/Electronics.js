import React from 'react';
import style from './Electronics.module.css'
const Electronics = () => {
    return (
        <div className={style.IotContainer}>
        {/* Header */}
        <header className={style.IotHeader}>
            <h1 className={style.IotTitle}>Electronics</h1>
            
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
                    <p><a href="http://localhost:5000/cours/electro1chap1.pdf" target="_blank" rel="noopener noreferrer">Course 1</a> </p>
                   
                </div>
                <div className={style.CourseItem}>
                    <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 2" />
                    <p><a href="http://localhost:5000/cours/electro1chap2.pdf" target="_blank" rel="noopener noreferrer">Course 2</a></p>
                </div>
                <div className={style.CourseItem}>
                    <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 3" />
                    <p><a href="http://localhost:5000/cours/elercto1chap3.pdf" target="_blank" rel="noopener noreferrer">Course 3</a></p>
                </div>
                <div className={style.CourseItem}>
                    <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 4" />
                    <p><a href="http://localhost:5000/cours/electro1chap4.pdf" target="_blank" rel="noopener noreferrer">Course 4</a></p>
                </div>
                <div className={style.CourseItem}>
                    <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 3" />
                    <p><a href="http://localhost:5000/cours/electro2chap1.pdf" target="_blank" rel="noopener noreferrer">Course 5</a></p>
                </div><div className={style.CourseItem}>
                    <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 3" />
                    <p><a href="http://localhost:5000/cours/electro2chap2.pdf" target="_blank" rel="noopener noreferrer">Course 6</a></p>
                </div><div className={style.CourseItem}>
                    <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 3" />
                    <p><a href="http://localhost:5000/cours/electro2chap3.pdf" target="_blank" rel="noopener noreferrer">Course 7</a></p>
                </div>
                <div className={style.CourseItem}>
                    <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 3" />
                    <p><a href="http://localhost:5000/cours/electro2chap4.pdf" target="_blank" rel="noopener noreferrer">Course 8</a></p>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Electronics;