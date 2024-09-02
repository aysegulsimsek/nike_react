/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit'
const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}
const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    estimatedDelivery: '',

}


const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.count += action.payload.count;
                findProduct.image = action.payload.image;
                findProduct.shippingInformation = action.payload.shippingInformation;
            } else {
                state.products.push(action.payload);
            }
            writeFromBasketToStorage(state.products);
        },
        removeFromBasket: (state, action) => {
            const findProduct = state.products.find(product => product.id === action.payload.id);
            if (findProduct) {
                if (findProduct.count > 1) {
                    findProduct.count -= 1;
                }
                else {
                    state.products = state.products.filter(product => product.id !== action.payload.id);
                }
                writeFromBasketToStorage(state.products);

            }

        },
        setDrawer: (state) => {
            state.drawer = !state.drawer
        },
       

    }
})

export const { addToBasket, setDrawer, removeFromBasket } = basketSlice.actions


export default basketSlice.reducer