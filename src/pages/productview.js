import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/slices/cartslice"
const Product = () => {
    const { id } = useParams()
    const [productd, setProductd] = useState({})

    useEffect(() => {
        fetchProduct()
    }, [])

    async function fetchProduct() {
        let response = await fetch('https://dummyjson.com/products/' + id)
        let data = await response.json()
        setProductd(data)

    }

    const dispatch = useDispatch()

    const handleAdditem =()=>{
dispatch(addItem(productd))
    }


    return (
        <>
            <div className="d-md-flex">
                <img className="w-50" src={productd.images} />
                {/* text section */}
                <div className="text">
                    <h1>{productd.title}</h1>
                    <p>{productd.description}</p>
                    <p>price - {productd.price} $</p>
                    <p>{productd.returnPolicy}</p>
                    <p>{productd.shippingInformation}</p>
                    <button className="btn btn-primary" onClick={()=>{
                        handleAdditem()
                    }}>add to cart</button>
                    {console.log(productd)}
                </div>
            </div>



        </>


    )
}
export default Product