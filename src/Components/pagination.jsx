import React, { Fragment, useEffect, useState } from 'react';
import { IoMdCart, IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Pagination = () => {

    const [products, setProducts] = useState([])
    const [searchItem, setSearchItem] = useState("")

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products?limit=20&skip=0")
                const result = await response.json()
                const filterdData = result.products.filter((product) => product.title.toLowerCase().includes(searchItem.toLowerCase()))
                setProducts(filterdData)
            } catch(error) { 
                console.log(error.message)
            }
            
        }
        getProducts()
    }, [searchItem]);

    return (
        <Fragment>
            <div className=' d-flex justify-content-center border-bottom border-black'>
                <div className='w-50 position-relative m-3'>
                    <input type="text" placeholder='Search Product...' className='w-100 px-3 py-1 rounded-3 border-0 bg-body-tertiary' onChange={(item) => setSearchItem(item.target.value)} value={searchItem}/>
                    <IoMdSearch className='position-absolute end-0 top-50 translate-middle'/>
                </div>
            </div>
            <div className='w-100 d-flex flex-wrap gap-3 justify-content-center mt-2'>
            {
                products.map((product) => {
                    return <div key={product.id} className='p-2 border border-dark rounded-2 text-center' style={{width:'16rem',cursor:'pointer'}}>
                        <div>
                            <img src={product.images[0]} alt={product.title} width={"100%"} height={250}/>
                        </div>
                        <div>
                            <h4 className='text-truncate'>
                                <Link to={`/Next-Page/${product.id}`} > {product.title} </Link>
                            </h4>
                            <p className='text-truncate'> {product.description} </p>
                        </div>
                        <button className='btn btn-outline-success w-100'><IoMdCart size={20}/>Add to Cart</button>

                    </div>

                })
            }
        </div>
        </Fragment>
    );
}

export default Pagination;
