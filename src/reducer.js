export const intialState={
    cart:[],
    user:null,
}

export const getCartTotal =(cart) =>(
cart.reducer((price,item) => item.price + price,0)); 

const reducer = (state,action) => {
console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
            return { 
            ...state,
                cart: [...state.cart,action.item],
        };
     
        case "REMOVE_FROM_CART":

        let newCart = [...state.cart];
        const index = state.cart.findIndex((cartItem)=>  cartItem.id === action.id);
        if(index >=0){
            newCart.splice(index,1);    
              
        }else{
            alert("Cant Remove the item")
        }
        return { ...state,
            cart:newCart,
         }; 
            default:
                return state;   
    }
}

export default reducer;