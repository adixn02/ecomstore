const Product = ({item})=>{
    return(
        <div className="card p-1">
            <img src={item.images} alt={item.title}/>
            <h1 className="h4">{item.title}</h1>
            <h2>Price - {item.price} $</h2>
            <p>{item.description}</p>
        </div>
    )
}
export default Product