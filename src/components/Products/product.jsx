import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './product.css';

const Product = () => {
  const { slug } = useParams()
  const [matchingProducts, setMatchingProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [itemsPerPage] = useState(10); 
  const [loadedCount, setLoadedCount] = useState(0); 

  useEffect(() => {
    const products = [
      {
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
      },
      {
        id: 2,
        name: 'Intel i5-8600K',
        Category: 'processors',
        Cores: 6,
        Threads: 6,
        Base_Clock_Speed: '3.6 GHz',
        Max_Turbo_Frequency: '4.3 GHz',
        Cache: '9 MB',
        TDP: '65 W',
        Description: 'Mid-range processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$199.99',
      },
      {
        id: 3,
        name: 'Intel i7-8700K',
        Category: 'processors',
        Cores: 6,
        Threads: 12,
        Base_Clock_Speed: '3.7 GHz',
        Max_Turbo_Frequency: '4.7 GHz',
        Cache: '12 MB',
        TDP: '95 W',
        Description: 'High-end processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$349.99',
      },
      {
        id: 4,
        name: 'Intel i3-9100',
        Category: 'processors',
        Cores: 4,
        Threads: 4,
        Base_Clock_Speed: '3.6 GHz',
        Max_Turbo_Frequency: '4.2 GHz',
        Cache: '6 MB',
        TDP: '65 W',
        Description: 'Affordable processor for light gaming and home use.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$119.99',
      },
      {
        id: 5,
        name: 'Intel i5-9600K',
        Category: 'processors',
        Cores: 6,
        Threads: 6,
        Base_Clock_Speed: '3.7 GHz',
        Max_Turbo_Frequency: '4.6 GHz',
        Cache: '9 MB',
        TDP: '95 W',
        Description: 'Mid-range processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$229.99',
      },
      {
        id: 6,
        name: 'Intel i7-9700K',
        Category: 'processors',
        Cores: 8,
        Threads: 8,
        Base_Clock_Speed: '3.6 GHz',
        Max_Turbo_Frequency: '4.9 GHz',
        Cache: '12 MB',
        TDP: '95 W',
        Description: 'High-end processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$399.99',
      },
      {
        id: 7,
        name: 'Intel i9-9900K',
        Category: 'processors',
        Cores: 8,
        Threads: 16,
        Base_Clock_Speed: '3.6 GHz',
        Max_Turbo_Frequency: '5.0 GHz',
        Cache: '16 MB',
        TDP: '95 W',
        Description: 'High-end processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$499.99',
      },
      {
        id: 8,
        name: 'Intel i3-10100',
        Category: 'processors',
        Cores: 4,
        Threads: 8,
        Base_Clock_Speed: '3.6 GHz',
        Max_Turbo_Frequency: '4.3 GHz',
        Cache: '6 MB',
        TDP: '65 W',
        Description: 'Affordable processor for light gaming and home use.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$119.99',
      },
      {
        id: 9,
        name: 'Intel i5-10600K',
        Category: 'processors',
        Cores: 6,
        Threads: 12,
        Base_Clock_Speed: '4.1 GHz',
        Max_Turbo_Frequency: '4.8 GHz',
        Cache: '12 MB',
        TDP: '125 W',
        Description: 'Mid-range processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$269.99',
      },
      {
        id: 10,
        name: 'Intel i7-10700K',
        Category: 'processors',
        Cores: 8,
        Threads: 16,
        Base_Clock_Speed: '3.8 GHz',
        Max_Turbo_Frequency: '5.1 GHz',
        Cache: '16 MB',
        TDP: '125 W',
        Description: 'High-end processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$399.99',
      },
      {
        id: 11,
        name: 'Intel i9-10900K',
        Category: 'processors',
        Cores: 10,
        Threads: 20,
        Base_Clock_Speed: '3.7 GHz',
        Max_Turbo_Frequency: '5.3 GHz',
        Cache: '20 MB',
        TDP: '125 W',
        Description: 'High-end processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$529.99',
      },
      {
        id: 12,
        name: 'Intel i3-10300',
        Category: 'processors',
        Cores: 4,
        Threads: 8,
        Base_Clock_Speed: '3.7 GHz',
        Max_Turbo_Frequency: '4.4 GHz',
        Cache: '6 MB',
        TDP: '65 W',
        Description: 'Affordable processor for light gaming and home use.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$129.99',
      },
      {
        id: 13,
        name: 'Intel i5-10400',
        Category: 'processors',
        Cores: 6,
        Threads: 12,
        Base_Clock_Speed: '2.9 GHz',
        Max_Turbo_Frequency: '4.3 GHz',
        Cache: '12 MB',
        TDP: '65 W',
        Description: 'Mid-range processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$179.99',
      },
      {
        id: 14,
        name: 'Intel i7-10700',
        Category: 'processors',
        Cores: 8,
        Threads: 16,
        Base_Clock_Speed: '2.9 GHz',
        Max_Turbo_Frequency: '4.8 GHz',
        Cache: '16 MB',
        TDP: '65 W',
        Description: 'High-end processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$349.99',
      },
      {
        id: 15,
        name: 'Intel i9-10900',
        Category: 'processors',
        Cores: 10,
        Threads: 20,
        Base_Clock_Speed: '2.8 GHz',
        Max_Turbo_Frequency: '5.2 GHz',
        Cache: '20 MB',
        TDP: '65 W',
        Description: 'High-end processor for gaming and multitasking.',
        image: '/ComponentsImages/Processors/IntelProcessor.jpg',
        price: '$449.99',
      },
      {
        id: 16,
        name: 'MSI B450 TOMAHAWK MAX',
        Category: 'motherboard',
        Chipset: 'AMD B450',
        Form_Factor: 'ATX',
        Memory_Speed: '4133 MHz',
        Memory_Slots: 4,
        Max_Memory: '64 GB',
        Description: 'High-end motherboard for gaming and multitasking.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$114.99',
      },
      {
        id: 17,
        name: 'ASUS ROG Strix Z390-E Gaming',
        Category: 'motherboard',
        Chipset: 'Intel Z390',
        Form_Factor: 'ATX',
        Memory_Speed: '4266 MHz',
        Memory_Slots: 4,
        Max_Memory: '64 GB',
        Description: 'High-end motherboard for gaming and multitasking.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$299.99',
      },
      {
        id: 18,
        name: 'GIGABYTE Z390 AORUS PRO WIFI',
        Category: 'motherboard',
        Chipset: 'Intel Z390',
        Form_Factor: 'ATX',
        Memory_Speed: '4266 MHz',
        Memory_Slots: 4,
        Max_Memory: '64 GB',
        Description: 'High-end motherboard for gaming and multitasking.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$199.99',
      },
      {
        id: 19,
        name: 'ASUS TUF Gaming B550M-PLUS',
        Category: 'motherboard',
        Chipset: 'AMD B550',
        Form_Factor: 'Micro ATX',
        Memory_Speed: '4400 MHz',
        Memory_Slots: 4,
        Max_Memory: '128 GB',
        Description: 'Mid-range motherboard for gaming and multitasking.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$159.99',
      },
      {
        id: 20,
        name: 'MSI MPG B550 GAMING PLUS',
        Category: 'motherboard',
        Chipset: 'AMD B550',
        Form_Factor: 'ATX',
        Memory_Speed: '4400 MHz',
        Memory_Slots: 4,
        Max_Memory: '128 GB',
        Description: 'Mid-range motherboard for gaming and multitasking.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$149.99',
      },
      {
        id: 21,
        name: 'ASUS Prime B450M-A/CSM',
        Category: 'motherboard',
        Chipset: 'AMD B450',
        Form_Factor: 'Micro ATX',
        Memory_Speed: '3200 MHz',
        Memory_Slots: 4,
        Max_Memory: '64 GB',
        Description: 'Entry-level motherboard for basic multitasking and office use.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$74.99',
      },
      {
        id: 22,
        name: 'GIGABYTE B450 AORUS PRO WIFI',
        Category: 'motherboard',
        Chipset: 'AMD B450',
        Form_Factor: 'ATX',
        Memory_Speed: '3600 MHz',
        Memory_Slots: 4,
        Max_Memory: '64 GB',
        Description: 'Entry-level motherboard for basic multitasking and office use.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$119.99',
      },
      {
        id: 23,
        name: 'Gigabyte B360M DS3H',
        Category: 'motherboard',
        Chipset: 'Intel B360',
        Form_Factor: 'Micro ATX',
        Memory_Speed: '2666 MHz',
        Memory_Slots: 4,
        Max_Memory: '64 GB',
        Description: 'Entry-level motherboard for basic multitasking and office use.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$74.99',
      },
      {
        id: 24,
        name: 'ASUS PRIME Z490-A',
        Category: 'motherboard',
        Chipset: 'Intel Z490',
        Form_Factor: 'ATX',
        Memory_Speed: '4600 MHz',
        Memory_Slots: 4,
        Max_Memory: '128 GB',
        Description: 'High-end motherboard for gaming and multitasking.',
        image: '/ComponentsImages/Motherboard/Motherboard.png',
        price: '$229.99',
      }
    ]
    if (!slug) {
      setMatchingProducts(products)
      setVisibleProducts(products.slice(0, itemsPerPage));
      setLoadedCount(itemsPerPage);
    } else {
      const filteredProducts = products.filter((product) => product.Category === slug)
      setMatchingProducts(filteredProducts);
      setVisibleProducts(filteredProducts.slice(0, itemsPerPage));
      setLoadedCount(itemsPerPage);
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
        <div className="item-container" key={item.id}>
          {
            <div className="details-container">
              <div className='product-image-container'>
                <img src={item.image} alt="" width={200} height={240} />
              </div>
              <div className="info-container">
                <Link className='item-details-link' to={`/product-details/${item.id}`}><h2>{item.name}</h2></Link>
                <p className='description'>{item.Description}</p>
                <p className='price'>Price: {item.price}</p>
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