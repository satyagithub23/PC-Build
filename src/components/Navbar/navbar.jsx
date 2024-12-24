import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const items = [
        { id: 1, category: 'Processor' },
        { id: 2, category: 'Motherboard' },
        { id: 3, category: 'RAM' },
        { id: 4, category: 'SSD/HDD' },
        { id: 5, category: 'Graphics Card' },
        { id: 6, category: 'Cabinets' },
        { id: 7, category: 'PSU' },
        { id: 8, category: 'Monitor' },
        { id: 9, category: 'Keyboard' },
        { id: 10, category: 'Headphones' }
    ];

    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <>
            <section className='navbar-header'>
                <div className="logo-name-container">
                    <h3>PC Build</h3>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Products</a></li>
                        <li>
                            <button className='dropdown-btn' onClick={toggleDropdown}>
                                Categories
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                <div className={`categories-container ${dropdown ? 'show' : ''}`}>
                                    <ul>
                                        {items.map((item) => (
                                            <li key={item.id}><a href="#">{item.category}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </button>
                        </li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </nav>
            </section>

        </>
    );
};

export default Navbar;
