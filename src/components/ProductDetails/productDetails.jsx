// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import './productDetails.css'

const ProductDetails = () => {
    // const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const prdct = {
            id: 1,
            name: 'Intel i3-8100',
            Category: 'processors',
            Cores: 4,
            Threads: 4,
            Base_Clock_Speed: '3.6 GHz',
            Cache: '6 MB',
            TDP: '65 W',
            Description: 'Entry-level processor for basic multitasking and office use.',
            image: '/ComponentsImages/Processors/IntelProcessor.jpg',
            price: '$109.99',
        }
        setProduct(prdct)
    }, [])
    return (
        <>
            <div className="product-details-main-container">
                <div className="product-details-container">
                    <div className="product-details-image-container">
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: product.name,
                                    width: 400,
                                    height: 400,
                                    src: product.image,
                                },
                                largeImage: {
                                    src: product.image,
                                    width: 1800,
                                    height: 1800,
                                },
                                enlargedImageContainerDimensions: {
                                    width: '100%',
                                    height: '100%',
                                },
                                isHintEnabled: true,
                                shouldHideHintAfterFirstActivation: false,
                            }}
                        />
                    </div>
                    <div className="product-details-info-container">
                        <h2 className='product-details-name'>{product.name}</h2>
                        <p className='product-details-description'>{product.Description}</p>
                        <p className='product-details-price'>Price: {product.price}</p>
                        <div className="product-details-btn-container">
                            <button className="buy-now-btn">Buy Now</button>
                            <button className="add-to-cart-btn">Add To Cart</button>
                        </div>
                        <table>
                            <tbody>
                                {Object.entries(product).map(([key, value]) => (
                                    key !== 'id' && key !== 'image' && key !== 'name' && key !== 'Description' && key !== 'price' && (
                                        <tr key={key}>
                                            <td className='property'>{key.replaceAll('_', ' ')}:&nbsp;</td>
                                            <td>{value}</td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails