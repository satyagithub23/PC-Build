import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './product.css';

const Product = () => {
  const { slug } = useParams()
  const [matchingProducts, setMatchingProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [itemsPerPage] = useState(10); 
  const [loadedCount, setLoadedCount] = useState(0); 
  // const [products, setProducts] = useState([])



  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch(`http://localhost:8080/api/products/all`);
      const data = await response.json();
      console.log(data);
      // setProducts(data.records);
      setMatchingProducts(data.records);
      setVisibleProducts(data.records.slice(0, itemsPerPage));
      setLoadedCount(itemsPerPage);
    };

    const getProductsByCategory = async () => {
      console.log("Products by category called");
      const response = await fetch(`http://localhost:8080/api/products/${slug}`);
      console.log(`http://localhost:8080/api/products/${slug}`);
      const data = await response.json();
      console.log(data);
      // setProducts(data.records);
      const filteredProducts = data.records.filter((product) => product.DreamPCProductCategory__c === slug);
      console.log(filteredProducts);
      setMatchingProducts(filteredProducts);
      setVisibleProducts(filteredProducts.slice(0, itemsPerPage));
      setLoadedCount(itemsPerPage);
    };
    
    if (!slug) {
      getAllProducts();
    } else {
      getProductsByCategory();
    }
  }, [slug, itemsPerPage])

  const loadMoreProducts = () => {
    const nextCount = loadedCount + itemsPerPage;
    const newVisibleProducts = matchingProducts.slice(0, nextCount);
    setVisibleProducts(newVisibleProducts);
    setLoadedCount(nextCount);
  };

  return (
    <div className='product-main-container'>
      {visibleProducts.map((item) => (
        <div className="item-container" key={item.DreamPCProductID__c}>
          {
            <div className="details-container">
              <div className='product-image-container'>
                <img src={item.DreamPCProductImage__c} alt="" width={200} height={240} />
              </div>
              <div className="info-container">
                <Link className='item-details-link' to={`/product-details/${item.DreamPCProductID__c}`}><h2>{item.DreamPCProductName__c}</h2></Link>
                <p className='description'>{item.DreamPCProductDescription__c}</p>
                <p className='price'>Price: {item.DreamPCProductPrice__c}</p>
              </div>
            </div>
          }
        </div>
      ))
      }
      {/* Load More Button */}
      {loadedCount < matchingProducts.length && (
        <div className="pagination">
          <button onClick={loadMoreProducts} className="load-more-button">
            Load More
          </button>
        </div>
      )}
    </div >
  )
}

export default Product