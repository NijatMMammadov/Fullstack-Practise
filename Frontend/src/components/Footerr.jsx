import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footerr() {
    return (
        <>
            <footer id='footer'>
                <div className='footer contain'>
                    <div className='footer-left'>
                        <p>
                            Copyright ©2025 All rights reserved | This template is made with
                        </p>
                        <FavoriteBorderIcon style={{fontSize:"18px"}} />
                        <p>
                            by
                        </p>
                        <p style={{ color: "#F6214B" }}>
                            Colorlib
                        </p>
                    </div>
                    <div className='footer-right'>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon/>
                        <YouTubeIcon />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footerr
