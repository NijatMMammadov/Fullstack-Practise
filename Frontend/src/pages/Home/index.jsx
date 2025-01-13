import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import FlightIcon from '@mui/icons-material/Flight';
import DiamondIcon from '@mui/icons-material/Diamond';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ProductContext } from '../../Context/ProductsContext';
import { useContext } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import Helmet from "react-helmet"
import axios from 'axios';
import { useNavigate } from 'react-router';
import { WishlistContext } from '../../Context/WishlistContext';



function Home() {

    let { products, setProducts } = useContext(ProductContext)
    let { wishlist, setWishlist } = useContext(WishlistContext)

    const navigate = useNavigate()

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3000/products/${id}`)
            .then(res => {
                let filtered = products.fillter(product => product.id !== id)
                setProducts(filtered)
            })
    }

    function handleDetail(id) {
        navigate(`/detail/:${id}`)
    }


    function handleAddWishlist(product) {
        let findWishlist = wishlist.find(item => item.id === product.id)
        if (findWishlist) {
            alert("Wishlist`ə əlavə olunub")
        } else {
            setWishlist([...wishlist, product])
        }
    }

    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="This is the home page." />
            </Helmet>
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

                <section id='products'>
                    <div className='product-content contain'>
                        <h3>
                            Requirements to be Immigrants
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="products contain">
                        {
                            products.map(product => (
                                <div key={product.id} className="product-card">
                                    <Card className='card-hvr' >
                                        <CardActionArea>
                                            <CardMedia className='card-image'
                                                component="img"
                                                height="140"
                                                image={product.image}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <button className='country-btn'>{product.country}</button>
                                                </Typography>
                                                <Typography variant="body2" style={{ color: "black", fontSize: "19px" }}>
                                                    {product.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {product.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <button onClick={() => handleDetail(product.id)} className='card-btn-detail'>
                                                Detail
                                            </button>
                                            <button onClick={() => handleDelete(product.id)} className='card-btn-delete'>
                                                Delete
                                            </button>
                                            <IconButton onClick={() => handleAddWishlist(product)}><FavoriteBorderIcon className='heart' /></IconButton>
                                        </CardActions>
                                    </Card>
                                </div>
                            ))
                        }

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
                                    <p style={{ color: "black" }}>
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
                                    <p style={{ color: "black" }}>
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
