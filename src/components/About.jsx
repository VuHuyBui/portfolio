import '../style/base.scss';
import '../style/About.scss'
import profileImg from '../img/Profile-2.JPG'
import {  forwardRef } from 'react'
function About (props, ref) {
    let profile = {
        img: profileImg,
        age: 17,
        name: 'Vu Huy Bui',
        school: 'VNU-HCM High school for the gifted',
        hobbies: 'Playing the piano, chess'
    }

    return (
        <div  className="about" >
            <div ref={ref} className="reveal">
                <div className="profile">
                    <div className="cover-img"></div>
                    <img className="profile-img" src={profile.img} alt="Profile"/> 
                    <span className="description__head">Basic Information</span>
                    <div className="description">
                        <p>
                            <span className="category">Full Name: </span>
                            {profile.name}
                        <br></br>
                            <span className="category">Age: </span>
                            {profile.age}
                        
                        <br></br>
                            <span className="category">School: </span>
                            {profile.school}
                        <br></br>
                            <span className="category">Hobbies: </span>
                            {profile.hobbies}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(About)