export const shopState = {
    products: [],
};

export const shopReducer = (state, action) => {
    console.log(state, action.name);
    switch(action.type){
        case 'PRODUCT_ADDED':
            const addProduct = {
                id: action.id,
                name: action.name
            }
            const allProduct = [...state.products, addProduct];
            return {products: allProduct};
        case 'SALE_PRODUCT':
            const remainProduct = state.products.filter(pd => pd.id !== action.id);
            const newState = {products: remainProduct};
            return newState;
        default:
            return state;
    }
}