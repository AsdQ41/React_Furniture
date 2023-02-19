import React, { useState } from "react";
import { FaCartPlus } from 'react-icons/fa'
import Orders from "./Orders";



const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                        <Orders key={el.id} item={el} onDelete={props.onDelete} />
            ))}
            <p className="summa">Summa: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div><h2>Nothing</h2></div>
    )
}

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div className="head">
                <span className="logo">React Furniture</span>
                <ul className="nav">
                    <li>About as</li>
                    <li>Contact</li>
                    <li>Cabinet</li>
                </ul>
                <FaCartPlus onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`img-cart ${cartOpen && 'active'}`} />

                <div className="presentation"></div>

                {cartOpen && (
                    <div className="shop-cart">
                        {props.orders.length > 0 ? 
                        showOrders(props) : showNothing()}
                    </div>
                )}
            </div>

        </header>
    );
}
 
export default Header;