import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => { 
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_ijshj5y',
                'template_eheivjd',
                refForm.current,
                'KGevFonI9iDvRV2ru'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                }, 
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass }
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}    
                        />
                    </h1>
                    <p>
                        I am interested in front-end development opportunities - especially 
                        ambitious or large projects. However, if you have any other request 
                        or question, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type='text' 
                                        name='name' 
                                        placeholder='Name' 
                                        required />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email' 
                                        name='email_id' 
                                        placeholder='Email' 
                                        required />
                                </li>
                                <li>
                                    <input 
                                        type='text' 
                                        placeholder='Subject' 
                                        name='subject' 
                                        required />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder='Message' 
                                        name='message' 
                                        required>
                                    </textarea>
                                </li>
                                <li>
                                    <input 
                                        type='submit' 
                                        className='flat-button' 
                                        value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Shreyash Dhanawade
                    <br />
                    Shiv Shakti complex,
                    <br />
                    Baner road,
                    <br />
                    Near Bata showroom,
                    <br />
                    Baner - 411045
                    <br />
                    India
                    <span>shreyashdhanawade@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[18.557587657740264, 73.79371226755374]} zoom={13}>
                        <TileLayer url='https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[18.557587657740264, 73.79371226755374]}>
                            <Popup>Shreyash lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact