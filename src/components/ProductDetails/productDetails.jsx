// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { useParams } from 'react-router-dom'
import './productDetails.css'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8080/api/products/get?id=${id}`)
            const data = await response.json()
            console.log(data.records[0]);
            setProduct(data.records[0])
        }
        getProduct()
    }, [id])

    // const decodeObject = (text) => {
    //     let decodedString = text.replace(/&quot;/g, '"');
    //     let jsonObject = JSON.parse(decodedString);
    //     console.log(jsonObject);
    // }

    return (
        <>
            {product && <div className="product-details-main-container">
                <div className="product-details-container">
                    <div className="product-details-image-container">
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: product.DreamPCProductName__c,
                                    width: 400,
                                    height: 400,
                                    src: product.DreamPCProductImage__c,
                                },
                                largeImage: {
                                    src: product.DreamPCProductImage__c,
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
                        <h2 className='product-details-name'>{product.DreamPCProductName__c}</h2>
                        <p className='product-details-description'>{product.DreamPCProductDescription__c}</p>
                        <p className='product-details-price'>Price: {product.DreamPCProductPrice__c}</p>
                        <div className="product-details-btn-container">
                            <button className="buy-now-btn">Buy Now</button>
                            <button className="add-to-cart-btn">Add To Cart</button>
                        </div>
                        <table>
                            <tbody>
                                {Object.entries(product).map(([key, value]) => {
                                    if (
                                        typeof value === 'object' || // Exclude objects
                                        key === 'attributes' || // Exclude specific keys if necessary
                                        ['DreamPCProductID__c', 'DreamPCProductImage__c', 'DreamPCProductName__c', 'DreamPCProductDescription__c', 'DreamPCProductPrice__c'].includes(key) // Exclude specific keys
                                    ) {
                                        return null;
                                    }
                                    return (
                                        <tr key={key}>
                                            <td className='property'>{key.replaceAll('__c', ' ').replaceAll('DreamPCProduct', '')}:&nbsp;</td>
                                            <td>{value}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>}
        </>
    )
}

export default ProductDetails