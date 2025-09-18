import React from 'react'
import './Project.css'
import bag from '../assets/Screenshot 2025-07-02 200332.png'
import plant from '../assets/Screenshot 2025-07-02 200511.png'
import sty from '../assets/Screenshot 2025-07-02 200614.png'
import wedd from '../assets/Screenshot 2025-07-02 200655.png'
import clone from '../assets/Screenshot 2025-07-02 201007.png'

function Project() {
  return (
    <div className='Project-page'>
    <div className="over-project-box">
        <h1>My  personal  projects</h1>
        <div className="Project-box"><img src={bag} alt="" style={{width:220}}/><p>Designed and built a feature-rich e-commerce website specializing in high-quality bags. The platform provides a seamless shopping experience for customers seeking both curated selections and the ability to personalize their bags with custom designs.</p></div>
        <div className="Project-box"><img src={plant} alt="" style={{width:220}}/><p>Discover a wide range of high-quality plants, carefully selected to brighten your space. Explore, compare, and purchase the perfect plant — all in one place. Shop with confidence and bring nature home!</p></div>
        <div className="Project-box"><img src={sty} alt="" style={{width:220}}/><p>Struggling with studies? We’ve got you covered! Watch clear, subject-wise study videos wherever you are, and if you get stuck, simply connect with personal teachers for quick help. Learning has never been this easy!</p></div>
        <div className="Project-box"><img src={wedd} alt="" style={{width:220}}/><p>Celebrate love with ease! Track your wedding countdown, download your wedding photos, and book your special date — all in one simple platform.</p></div>
        <div className="Project-box"><img src={clone} alt="" style={{width:220}}/><p>A front-end clone of the Goibibo website, built to demonstrate my skills in responsive web design and user interface development using HTML, CSS.</p></div>
    </div>
    <h1>I'm currently looking to join a coss-function team ✨</h1>
    </div>
  )
}

export default Project