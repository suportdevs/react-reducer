import React, { useReducer, useRef } from 'react';
import { shopReducer, shopState } from '../../reducers/ShopReducer';

const ShopManagement = () => {
    const shopRef = useRef();
    const [state, dispatch] = useReducer(shopReducer, shopState);
    const handleShopManagement = e => {
        e.preventDefault();
        dispatch({
            type: "PRODUCT_ADDED",
            id: state.products.length + 1,
            name: shopRef.current.value
        })
        // console.log(shopRef.current.value);
        shopRef.current.value = "";
    }
    return (
        <>
            <h1>Product Added {state.products.length}</h1>
            <form onSubmit={handleShopManagement}>
                <input ref={shopRef} type="text" name="" id="" placeholder='Add Product' />
            </form>
            {
                state.products.map(pd => <li
                key={pd.id}
                onClick={() => dispatch({type: 'SALE_PRODUCT', id: pd.id})}
                >{ pd.name + "-" + pd.id }</li>)
            }
        </>
    );
};

export default ShopManagement;