import '../style/Home.scss';
import '../style/base.scss';
import homePic from '../img/Home.JPG'
import { forwardRef } from 'react'
function Home (props, ref) {
    
    return (
        <div className="home " >
            <div ref={ref} className="reveal active">
                <span className="title">
                    Hi, my <br></br>
                    name is Vu
                </span>
                <div className="get-to-know-me btn" onClick={() => props.clickFunction('about')}> Get to know me</div>
                <img className="home-img" src={homePic} alt="Hello"/>
            </div>
        </div>
    )
}

export default forwardRef(Home)