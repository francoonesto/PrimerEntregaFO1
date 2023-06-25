import { createContext, useState , children  } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart , setCart] = useState([]);

    const addItem = (item , quantity) => {
if(isInCart(item.id)){
    let pos = cart.findIndex(prod => prod.id === item.id);
    cart[pos].quantity += quantity;
    setCart([...cart]);
}else{
    setCart([...cart,{...item , cantidad:quantity}])
}
    };

    const removeItem = (id) => {
     const items = cart.filter(prod => prod.id !== id );
     setCart([...items]);
    };

    const clear = () => {
      setCart([])
    };

    const isInCart = (id) => {
return cart.some (prod => prod.id === id )
    };

const cartTotal = () => {
    return cart.reduce((acum , item ) => acum += item.cantidad, 0);
}
const sumaTotal = () =>{
    return cart.reduce((acum , item ) => acum += item.cantidad * item.precio , 0);
}

    return(
        <CartContext.Provider value={{cart , addItem , removeItem , clear , cartTotal , sumaTotal}}>
        {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;