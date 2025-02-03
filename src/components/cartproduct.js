const CartProduct =({item})=>{
return(
    <div className="d-md-flex mt-2 border cartproductimg ">
    <img className=" w-50" src={item.images}/>
 <div>
 <h1>{item.title}</h1>
 <p>price - {item.price}</p>
 </div>
    </div>
)
}
export default CartProduct