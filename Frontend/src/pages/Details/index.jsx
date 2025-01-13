import React, { useContext } from 'react'
import { ProductContext } from '../../Context/ProductsContext'
import { useParams } from 'react-router'

function Detail() {

  let { products, setProducts } = useContext(ProductContext)

  let { id } = useParams()
  let prod = products.find(item => item.id == id)

  if (!prod) {
    return <h2 style={{ textAlign: "center", color: "red" }}>Product not found</h2>
  }
  return (

    <div>
      <h1 style={{ textAlign: "center" }}>Detail</h1>
      {
        <Card className='card-hvr' >
          <CardActionArea>
            <CardMedia className='card-image'
              component="img"
              height="140"
              image={prod.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <button className='country-btn'>{prod.country}</button>
              </Typography>
              <Typography variant="body2" style={{ color: "black", fontSize: "19px" }}>
                {prod.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {prod.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton onClick={()=>handleDeleteFav(prod.id)}><FavoriteBorderIcon className='heart' /></IconButton>
          </CardActions>
        </Card>
      }
    </div>
  )
}

export default Detail 
