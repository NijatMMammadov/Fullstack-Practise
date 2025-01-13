import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishlistContext'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Wishlist() {

    function handleDeleteWishlist(id) {
        let deleteWishlist = wishlist.filter(list => wishlist.id != id)
        setWishlist(deleteWishlist)
    }

    let { wishlist, setWishlist } = useContext(WishlistContext)

    if (!wishlist.length>0) {
        return <h2 style={{ textAlign: "center", color: "red",margin:"200px",fontSize:"32px" }}>Product not found</h2>
    }
    return (
        <>
            <div className="products contain">
                {
                    wishlist.map(item => (
                        <div key={item.id} className="product-card">
                            <Card className='card-hvr' >
                                <CardActionArea>
                                    <CardMedia className='card-image'
                                        component="img"
                                        height="140"
                                        image={item.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <button className='country-btn'>{item.country}</button>
                                        </Typography>
                                        <Typography variant="body2" style={{ color: "black", fontSize: "19px" }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <IconButton onClick={() => handleDeleteWishlist(wishlist.id)}><FavoriteBorderIcon className='heart' /></IconButton>
                                </CardActions>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Wishlist
