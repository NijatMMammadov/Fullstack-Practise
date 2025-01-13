import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import { IconButton, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Navbarr() {

    const navigate = useNavigate()

    function handleNavigateWishlist() {
        navigate("/wishlist")
    }

    function handleNavigateHome() {
        navigate("/")
    }

    return (
        <>
            <div className='navbar'>
                <div className='nvb-top contain'>
                    <div className='line nvb-top-left'>
                        <p>
                            We believe we helps people
                            for happier lives
                        </p>
                    </div>
                    <div className='line nvb-top-center'>
                        <img src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp" alt="" />
                    </div>
                    <div className='line nvb-top-right'>
                        <p>
                            +994 77 717 43 00
                        </p>
                        <CallIcon className='icon-call'></CallIcon>
                    </div>
                </div>
                <hr />
                <div className='nvb-end'>
                    <Link onClick={()=>handleNavigateHome()} style={{ color: "#f6214b", textDecoration: "none",cursor:"pointer" }}>HOME</Link>
                    <Link style={{ color: "black", textDecoration: "none" }} >ABOUT</Link>
                    <Link style={{ color: "black", textDecoration: "none" }} >IMMIGRATION</Link>
                    <Link style={{ color: "black", textDecoration: "none" }} >COURSE</Link>
                    <Link style={{ color: "black", textDecoration: "none" }} >COUNTRY</Link>
                    <Link style={{ color: "black", textDecoration: "none" }} >BLOG</Link>
                    <Link style={{ color: "black", textDecoration: "none" }} >CONTACT</Link>
                    <Link style={{ color: "black", textDecoration: "none" }} >ELEMENTS</Link>   
                    <IconButton onClick={()=>handleNavigateWishlist()}><FavoriteBorderIcon/></IconButton>

                </div>
            </div>
        </>
    )
}

export default Navbarr
