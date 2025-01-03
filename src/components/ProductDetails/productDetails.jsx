// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { useParams } from 'react-router-dom'
import { Atom } from 'react-loading-indicators'
import './productDetails.css'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [productExtraSpecs, setExtraProductSpecs] = useState({})
    const [specs, setSpecs] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8080/api/products/get?id=${id}`)
            const data = await response.json()
            setProduct(data.records[0])
        }
        getProduct()
    }, [id])

    useEffect(() => {
        if (product.DreamPCProductSpecs__c) {
            setSpecs(product.DreamPCProductSpecs__c);
            setLoading(false);
        }
    }, [product]);


    useEffect(() => {
        const decodeObject = (text) => {
            let decodedString = text.replace(/&quot;/g, '"');
            let jsonObject = JSON.parse(decodedString);
            setExtraProductSpecs(jsonObject)
        }
        if (specs) {
            decodeObject(specs);
        }
    }, [specs])

    return (
        <>
            {loading && <div className='loading'><Atom color="#32cd32" size="medium" text="" textColor="" /></div>}
            {!loading && product && <div className="product-details-main-container">
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
                                {Object.entries(productExtraSpecs).map(([key, value]) => {
                                    if (
                                        typeof value === 'object' || // Exclude objects
                                        key === 'attributes' || // Exclude specific keys if necessary
                                        ['DreamPCProductID__c', 'DreamPCProductImage__c', 'DreamPCProductName__c', 'DreamPCProductDescription__c', 'DreamPCProductPrice__c'].includes(key) // Exclude specific keys
                                    ) {
                                        return null;
                                    }
                                    return (
                                        <tr key={key}>
                                            <td className='property'>{key.replaceAll('__c', ' ').replaceAll('DreamPCProduct', '').replaceAll('_', ' ')}:&nbsp;</td>
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