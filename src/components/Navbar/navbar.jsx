import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'
import './navbar.css';


const Navbar = () => {

    const [tokenAvailable, settokenAvailable] = useState(false)
    const location = useLocation()
    // const items = [
    //     { id: 1, category: 'Processor', slug: 'processors' },
    //     { id: 2, category: 'Motherboard', slug: 'motherboard' },
    //     { id: 3, category: 'RAM', slug: 'ram' },
    //     { id: 4, category: 'SSD/HDD', slug: 'ssd-hdd' },
    //     { id: 5, category: 'Graphics Card', slug: 'gpu' },
    //     { id: 6, category: 'Cabinets', slug: 'cabinets' },
    //     { id: 7, category: 'PSU', slug: 'psu' },
    //     { id: 8, category: 'Monitor', slug: 'monitor' },
    //     { id: 9, category: 'Keyboard', slug: 'keyboard' },
    //     { id: 10, category: 'Headphones', slug: 'headphones' }
    // ];

    const [dropdown, setDropdown] = useState(false);
    const [items, setItems] = useState([])

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };


    useEffect(() => {
        const token = Cookies.get('token')
        settokenAvailable(!!token)
    }, [location])



    useEffect(() => {
        const getItems = async () => {
            const response = await fetch(`http://localhost:8080/api/category/all`)
            const data = await response.json();
            setItems(data.records)
        }
        getItems()
    }, [])



    return (
        <>
            <section className='navbar-header'>
                <div className="logo-name-container">
                    <h3>PC Build</h3>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li>
                            <button className='dropdown-btn' onClick={toggleDropdown}>
                                Categories
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                <div className={`categories-container ${dropdown ? 'show' : ''}`}>
                                    <ul>
                                        {items.map((item) => (
                                            <li key={item.DreamPCProductCategoryID__c}><Link to={`/categories/${item.DreamPCProductCategorySlug__c}`}>{item.DreamPCProductCategoryName__c}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </button>
                        </li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li>
                            {tokenAvailable ? <Link to='/profile'>Profile</Link> : <Link to="/login">Login</Link>}
                        </li>
                    </ul>
                </nav>
            </section>

        </>
    );
};

export default Navbar;
