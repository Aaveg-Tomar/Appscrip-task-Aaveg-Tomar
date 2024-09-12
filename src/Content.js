import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Content.css";
import "./Filter.css";

const Content = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {

        const fetchProducts = async () => {

            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);

        };

        fetchProducts();
    }, []);


    const [openFilters, setOpenFilters] = useState({
        idealFor: false,
        occasion: false,
        work: false,
        fabric: false,
        suitable: false,
        raw: false,
        segment: false,
    });

    const [showFilters, setShowFilters] = useState(false);

    const toggleFilter = (filter) => {
        setOpenFilters({
            ...openFilters,
            [filter]: !openFilters[filter],
        });
    };


    const toggleShowFilters = () => {
        setShowFilters(!showFilters);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };


    return (

        <div>
            <div className='two-line-container'></div>
            <div className='show-item-recommendation-container'>
                <div className='button-item-container'>
                    <div className='item-3425'>
                        <h6>3425 ITEMS</h6>
                    </div>
                    <div className='filter-show-hide-button'>
                        <button className="show-filter-button" onClick={toggleShowFilters}>
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                        </button>

                    </div>

                </div>
                <div className="recommendations-container">
                    <button className="recommendation-btn" onClick={toggleList}>
                        <p className='recommeded'>{isOpen ? 'RECOMMENDED' : 'RECOMMENDED'}</p>
                    </button>

                    <div className='all-options-container'>
                        {isOpen && (
                            <ul className="recommendation-list">
                                <li>PRICE HIGH</li>
                                <li>PRICE LOW</li>
                                <li>POPULAR</li>
                                <li>NEWEST FIRST</li>
                            </ul>
                        )}
                    </div>
                </div>

            </div>
            <div className='two-line-container'></div>
            <div className='filter-content-container'>
                <div className="filter-container">
                    {showFilters && (
                        <div className="filter-content">

                            <div className="filter-section">
                                <label>
                                    <input type="checkbox" />
                                    <span>CUSTOMIZABLE</span>
                                </label>
                            </div>

                            <div className="thin-line"></div>


                            <div className="filter-section">
                                <h5 onClick={() => toggleFilter('idealFor')}>
                                    IDEAL FOR {openFilters.idealFor}
                                </h5>
                                {openFilters.idealFor && (
                                    <div className="filter-options">
                                        <label><input type="checkbox" /> All</label>
                                        <label><input type="checkbox" /> Men</label>
                                        <label><input type="checkbox" /> Women</label>
                                        <label><input type="checkbox" /> Baby & Kids</label>
                                    </div>
                                )}
                            </div>

                            <div className="thin-line"></div>


                            <div className="filter-section">
                                <h5 onClick={() => toggleFilter('occasion')}>
                                    OCCASION {openFilters.occasion}
                                </h5>
                                {openFilters.occasion && (
                                    <div className="filter-options">
                                        <label><input type="checkbox" /> All</label>
                                    </div>
                                )}
                            </div>

                            <div className="thin-line"></div>


                            <div className="filter-section">
                                <h5 onClick={() => toggleFilter('work')}>
                                    WORK {openFilters.work}
                                </h5>
                                {openFilters.work && (
                                    <div className="filter-options">
                                        <label><input type="checkbox" /> All</label>
                                    </div>
                                )}
                            </div>


                            <div className="thin-line"></div>


                            <div className="filter-section">
                                <h5 onClick={() => toggleFilter('fabric')}>
                                    FABRIC {openFilters.fabric}
                                </h5>
                                {openFilters.fabric && (
                                    <div className="filter-options">
                                        <label><input type="checkbox" /> All</label>
                                    </div>
                                )}
                            </div>

                            <div className="thin-line"></div>

                            <div className="filter-section">
                                <h5 onClick={() => toggleFilter('segment')}>
                                    SEGMENT {openFilters.segment}
                                </h5>
                                {openFilters.segment && (
                                    <div className="filter-options">
                                        <label><input type="checkbox" /> All</label>
                                    </div>
                                )}
                            </div>

                            <div className="thin-line"></div>

                            <div className="filter-section">
                                <h5 onClick={() => toggleFilter('suitable')}>
                                    SUITABLE FOR {openFilters.suitable}
                                </h5>
                                {openFilters.suitable && (
                                    <div className="filter-options">
                                        <label><input type="checkbox" /> All</label>
                                    </div>
                                )}
                            </div>

                            <div className="thin-line"></div>

                            <div className="filter-section">
                                <h5 onClick={() => toggleFilter('raw')}>
                                    RAW MATERIAL {openFilters.raw}
                                </h5>
                                {openFilters.raw && (
                                    <div className="filter-options">
                                        <label><input type="checkbox" /> All</label>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className='div-container'>
                    {products.map((product) => (
                        <div className='div-container-card' key={product.id}>
                            <img className='product-img' src={product.image} alt={product.title} width="100" />
                            <h3 className='product-name'>
                                {product.title.length > 10 ? `${product.title.slice(0, 10)}...` : product.title}
                            </h3>
                            <p className='product-price'>{product.price} USD</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Content;
