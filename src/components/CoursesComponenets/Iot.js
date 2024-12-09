import React from 'react';
import style from './Iot.module.css'

const Iot = () => {
    

    
    return (
        <div className={style.IotContainer}>
            {/* Header */}
            <header className={style.IotHeader}>
                <h1 className={style.IotTitle}>Advanced IOT</h1>
                
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
                        <p><a href="https://drive.google.com/drive/folders/1E5pR3fdBSgJ3q3-zAZA6zNJavBQEKbkI">Course 1</a> </p>
                       
                    </div>
                    <div className={style.CourseItem}>
                        <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 2" />
                        <p>Course 2</p>
                    </div>
                    <div className={style.CourseItem}>
                        <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Course 3" />
                        <p>Course 3</p>
                    </div>
                    <div className={style.CourseItem}>
                        <img src="/images/120da7c6a8dbd0bfe923f659a6ab951b.jpg" alt="Evaluation" />
                        <p>Evaluation</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Iot;
