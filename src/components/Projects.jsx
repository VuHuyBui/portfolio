import '../style/base.scss';
import '../style/Projects.scss'
import packageImg from '../img/package.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useMemo, createRef, useState, forwardRef } from 'react'

function Projects (props, ref) {

    let state = 0
    let [currentId, setCurrentId] = useState(1)

    let leftButtonRef = useRef()
    let rightButtonRef = useRef()

    let projectsList = props.projectsList
    


    const projectRefs = useMemo(() => {
        const refs = {}
        projectsList.forEach((project) => {
            refs[project.id] = createRef(null)
        })
        return refs
    }, [projectsList])


    
    const handleLeftClick = (e) => {
        setCurrentId(currentId === 1 ? currentId : currentId - 1)
        
    }

    const handleRightClick = () => {
        setCurrentId(currentId => currentId === projectsList.length ? currentId : currentId + 1)
    }

    if (projectsList.length) {
        state = 1
    }

    
    useEffect(() => {
        projectRefs[currentId].current.classList.remove('before-active', 'after-active');
        projectRefs[currentId].current.classList.add('active')
        if (currentId !== projectsList.length) {
            projectRefs[currentId + 1].current.classList.remove('before-active', 'active');
            projectRefs[currentId + 1].current.classList.add('after-active')
        }

        if (currentId !== 1 ) {
            projectRefs[currentId - 1].current.classList.remove('after-active', 'active');
            projectRefs[currentId - 1].current.classList.add('before-active')
        }
        
    }, [currentId, projectRefs, projectsList])
    

    const renderedProjects = []

    for (var project of projectsList) {
        renderedProjects.push(
            <div key={project.id} className={`project ${project.state}`} ref={projectRefs[project.id]}>
                <img className="project-img" src={project.img} alt={project.name}/>                    
                <div className="project-body">
                    <span className="project-heading">{project.name}</span>
                    <span className="project-description">{project.description}</span>
                    <button className="btn project-btn">Get Source Code</button>
                </div>
            </div>
        )
    }


    

    return (
        <div className='projects' ref={ref}>
            {state ? 
            <div>
                <h1 className="projects-header">Portfolio</h1>
                <span className="projects-body">Here are some of my favorite projects</span>
                <div onClick={
                    ()=> {
                        handleLeftClick()
                    }
                    } 
                    className={currentId === 1 ? 'left-button fade' : 'left-button'} 
                    ref={leftButtonRef}
                >
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </div>
                <div onClick={
                    () => {
                        handleRightClick()
                    }
                    } 
                    className={currentId === projectsList.length ? 'right-button fade' : 'right-button'} 
                    ref={rightButtonRef}
                >
                    <FontAwesomeIcon icon={faAngleRight}/>
                </div>
                <div className='projects-wrap'>
                    {renderedProjects}
                </div>
            </div> : 
                <div className='img-wrap--empty'>
                    <img className='projects-img-empty' src={packageImg} alt='empty'></img>
                    <span className='projects-img-header'>No projects yet</span>
                    <span className='projects-img-body'>But there will be, soon :{')'}</span>
                </div>}
        </div>
    )
}

export default forwardRef(Projects)