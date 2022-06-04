import '../style/Header.scss'; 
import '../style/base.scss';
import { useEffect } from 'react'
export default function Header(props) {

    useEffect(() => {

    })

    const handleClick = (label) => {
        props.clickFunction(label)
    }
    return (
        <div className="header">
            <span className='header__logo'>Vu Huy Bui</span>
            <div className='header__wrap'>
                <div className='header__navbar'>
                    <span onClick={() => {
                        handleClick('home')
                    }} 
                    className='header__nav'>
                        Home
                    </span>
                    <span onClick={() => {
                        handleClick('about')
                    }} 
                    className='header__nav'>
                        About
                    </span>
                    <span
                    onClick={() => {
                        handleClick('projects')
                    }}  
                    className='header__nav'>
                        Projects
                    </span>
                    <span className='header__nav'>Off-topic</span>
                    <span
                    onClick={() => {
                        handleClick('contact')
                    }}  
                    className='header__nav contact-btn btn'>
                        Contact me

                    </span>
                </div>
            </div>
        </div>
    )
}