import { useSelector } from "react-redux";
import CartProduct from "../components/cartproduct";

const Cart = () => {
    const cartProductdata = useSelector(store => store.cart.items);
    console.log(cartProductdata);
    const totalprice = cartProductdata.reduce((sum,item)=>sum+item.price,0)
    // console.log(totalprice)

    return (
        <div>
            <h1>Cart-Items</h1>
            <div className="cartproducts mt-4 m-3">
                <span>total items in your cart - {cartProductdata.length}</span>
                {
                    cartProductdata.map((item, index) => (
                        <CartProduct item={item} key={item.id} />
                    ))
                }
                <p>cart Value - {totalprice}</p>
            </div>
        </div>
    );
};

export default Cart;
