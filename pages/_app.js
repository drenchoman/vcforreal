import '../styles/globals.css'
import '../styles/design_tokens.css'
import '../styles/utilities.css'
import {useEffect, useState} from 'react'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

const [cartCount, setCartCount] = useState(0);
const [cartTotal, setCartTotal] = useState();
const [heartId, setHeartId] = useState();
const [cartEmpty, setCartEmpty] = useState(true);

const [activeHearts, setActiveHearts] = useState(() => {
  if (typeof window!== 'undefined'){
    const saved = localStorage.getItem('userLikes')
    const init = JSON.parse(saved);
    return init || [];
  }
});

const [cartItems, setCartItems] = useState(() => {
  if (typeof window !== 'undefined'){
    const saved = localStorage.getItem('favourites');
    const init = JSON.parse(saved);
    return init || [];
  }
});

const addToCart = (props) => {
  const foundIndex = checkCartIndex(props.id);
  const inCart = isInCart(props, foundIndex);
  const inHeart = isInHeart(props.id);
  if (inCart && inHeart){
    removeItem(props.id);
    return;
  } else {
    setCartItems([...cartItems, props]);
    setCartCount(cartCount + 1);
    checkCartEmpty();
    addToHeartArray(props);
    updateLocalStorage();
    console.log(cartItems, cartEmpty)
  }
}


//TO DO: Below functions can be hidden/ private

const checkCartIndex = (id) => {
  const foundIndex = cartItems.findIndex(xItem => xItem.id === id)
  return foundIndex
}

const isInCart = (cartItem, index) => {
  const alreadyInCart = cartItems.map((item) => item.id).includes(cartItem.id)
  return alreadyInCart
}

const isInHeart = (id) => {
  const index = activeHearts.indexOf(id)
  if (index === -1){
    return false
  } else {
    return true
  }
};

const addToHeartArray = (props) => {
  setActiveHearts( activeHearts => [...activeHearts, props.id]);
};

const removeItem = (id) => {
  setCartItems(cartItems.filter((item) => item.id !== id));
  setCartCount(cartCount - 1);
  setActiveHearts(activeHearts.filter(item => item !== id));
  setHeartId(id);
  checkCartEmpty();
  updateLocalStorage();
};

const checkCartEmpty = () => {
  if (cartCount === 0){
    setCartEmpty(true)
    return true
  } else {
    setCartEmpty(false);
    return false
  }
};

const updateCartCount = () => {
  setCartCount(cartItems.length);
};

const updateLocalStorage = () => {
  localStorage.setItem("favourites", JSON.stringify(cartItems));
  localStorage.setItem("userLikes", JSON.stringify(activeHearts));
};

const updateHeartState = () => {
  setHeartId('')
};

useEffect(() => {
  updateCartCount();
  checkCartEmpty();

  localStorage.setItem("favourites", JSON.stringify(cartItems));
  localStorage.setItem("userLikes", JSON.stringify(activeHearts));

}, [activeHearts, cartEmpty])

  return <Layout cartCount={cartCount}>
   <Component {...pageProps} addToCart={addToCart} activeHearts={activeHearts} updateHeartState={updateHeartState} heartId={heartId} cartItems={cartItems} removeItem={removeItem} cartEmpty={cartEmpty}  />
   </Layout>
}

export default MyApp
