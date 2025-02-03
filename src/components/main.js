import React, { useEffect, useState } from 'react'
import Product from './product'
import { Link } from 'react-router-dom'
const Main = () => {
    let [allproducts, setAllProducts] = useState([])
    let [filterdata, setFilterData] = useState([])
    let [search, setSearch] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

const handlefilterdata=()=>{
    let newdata = allproducts.filter((product)=>{
        return product.title.toLowerCase().includes(search.toLowerCase())
    })
    setFilterData(newdata)
}

    async function fetchData() {
        let response = await fetch('https://dummyjson.com/products')
        let data = await response.json()
        let newdata = data.products
        // console.log(newdata)
        setAllProducts(newdata)
        setFilterData(newdata)
    }

    return (
        <>
            {/* <h1>Products</h1> */}
            <div className="d-flex  align-items-center justify-content-center m-3"> 
                <input type="text" value={search} placeholder="search here..." onChange={(e)=>{
                    setSearch(e.target.value)
                }}/>
                <button className="btn btn-primary ms-3" onClick={()=>{
                   handlefilterdata()
                }}>Search</button>
            </div>
            <div className="productscontainer container">
                {
                    filterdata.map((product) => {
                        return <Link className='text-decoration-none' to={'/product/'+product.id}><Product key={product.id} item={product} /></Link>
                    })
                }
            </div>

        </>
    )
}

export default Main