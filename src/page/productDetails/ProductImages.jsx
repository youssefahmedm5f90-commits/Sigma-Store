

const ProductImages = ({product}) => {
  return (
                    <div className="item-img">
                        <div className="big-img">
                            <img id="big-img" src={product.images[0]} alt={product.title} />
                        </div>
                        <div className="sm-img">
                            {product.images.map((img, index) => (
                                <div className="img_div_sm" key={img}>
                                    <img  src={img} alt={`${product.title} ${index + 1}`} onClick={()=> document.getElementById('big-img').src = img} />
                                </div>
                            ))}
                        </div>
                    </div>
  )
}

export default ProductImages
