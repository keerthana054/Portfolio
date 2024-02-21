import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon'></i>

                <h3 className="about__title">Internships</h3>
                <span className="about__subtitle">Done 2 Internships</span>
            </div>

            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">3+ Projects</span>
            </div>
        </div>
    )
}

export default Info