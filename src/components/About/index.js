import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

 const About = () => {
     
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a very ambitious front-end developer looking for a role in 
                    established IT company with the opportunity to work with the latest 
                    technologies on challenging and diverse projects.
                </p>
                <p>
                    I am quietly confident, naturally curious and perpetually working on 
                    improving my chops one design at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a people's 
                    person, living in the moment, exploring new places, always there for 
                    friends and family, love listening to music and watching thriller and sci-fi 
                    movies and web series, tech-obsessed!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon 
                            icon={faAngular} 
                            color='#DD0031'
                        />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon 
                            icon={faHtml5} 
                            color='#F06529'
                        />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon 
                            icon={faCss3} 
                            color='#28A4D9'
                        />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon 
                            icon={faReact} 
                            color='#5ED4F4'
                        />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon 
                            icon={faJsSquare} 
                            color='#EFD81D'
                        />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon 
                            icon={faGitAlt} 
                            color='#EC4D28'
                        />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
 }

 export default About