import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import FlightIcon from '@mui/icons-material/Flight';
import DiamondIcon from '@mui/icons-material/Diamond';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Home() {
    return (
        <>
            <main>
                <section id='hero'>
                    <div className='hero'>
                        <div className='hero-content'>
                            <p>
                                PROCESS VISA WITHOUT WITHIN HOURS
                            </p>
                            <h3>
                                IMMIGRATIOSN & VISA CONSULTATION
                            </h3>
                            <button className='hero-btn'>
                                Book Consultansy
                            </button>
                        </div>
                    </div>
                </section>

                <section id='feature'>
                    <div className='feature contain'>
                        <div className='feature-title'>
                            <h3>
                                Our Unique Features that can impress you
                            </h3>
                            <p>
                                Who are in extremely love with eco friendly system.
                            </p>
                        </div>
                        <div className='feature-cards'>
                            <div className='feature-card'>
                                <div className='card-title'>
                                    <PersonOutlineIcon />
                                    <p>
                                        Expert Technicians
                                    </p>
                                </div>
                                <div className='card-content'>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className='feature-card'>
                                <div className='card-title'>
                                    <BadgeIcon />
                                    <p>
                                        Professional Service
                                    </p>
                                </div>
                                <div className='card-content'>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className='feature-card'>
                                <div className='card-title'>
                                    <RingVolumeIcon />
                                    <p>
                                        Great Support
                                    </p>
                                </div>
                                <div className='card-content'>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className='feature-card'>
                                <div className='card-title'>
                                    <FlightIcon />
                                    <p>
                                        Technical Skills
                                    </p>
                                </div>
                                <div className='card-content'>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className='feature-card'>
                                <div className='card-title'>
                                    < DiamondIcon />
                                    <p>
                                        Highly Recomended
                                    </p>
                                </div>
                                <div className='card-content'>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                            <div className='feature-card'>
                                <div className='card-title'>
                                    < ChatBubbleOutlineIcon />
                                    <p>
                                        Positive Reviews
                                    </p>
                                </div>
                                <div className='card-content'>
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement of technology and power.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id='blog'>
                    <div className='blog contain'>
                        <div className='blog-title'>
                            <h3>
                                Latest News from our Blog
                            </h3>
                            <p>
                                Who are in extremely love with eco friendly system.
                            </p>
                        </div>
                        <div className='blog-cards'>
                            <div className='blog-card'>
                                <div className='blog-card-image'>
                                    <img src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
                                </div>
                                <div className='blog-card-content'>
                                    <span className='blog-btns'>
                                        <button className='blog-btn'>
                                            Travel
                                        </button>
                                        <button className='blog-btn'>
                                            Life Style
                                        </button>
                                    </span>
                                    <h4>
                                        Portable latest Fashion for young women
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                    <p style={{color:"black"}}>
                                        31st January, 2018
                                    </p>
                                </div>
                            </div>
                            <div className='blog-card'>
                                <div className='blog-card-image'>
                                    <img src="https://preview.colorlib.com/theme/immigration/img/b2.jpg" alt="" />
                                </div>
                                <div className='blog-card-content'>
                                    <span className='blog-btns'>
                                        <button className='blog-btn'>
                                            Travel
                                        </button>
                                        <button className='blog-btn'>
                                            Life Style
                                        </button>
                                    </span>
                                    <h4>
                                        Portable latest Fashion for young women
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </p>
                                    <p style={{color:"black"}}>
                                        31st January, 2018
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
