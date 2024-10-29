import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{

            
      // * Vanilla (Older) Redux - DON'T MUTATE STATE, returning was mandatory
      /*
      const newState = [ ...state ];
      newState.items.push(action.payload)
      return newState
      */


      // * Redux Toolkit - We should have to mutate the state, returning is not mandatory
      // * RTK uses Immer.js library  behind the scenes. 
      //* immer (german for always) is a tiny package that allow you to work with immutable state in a more convenient way

            // we are mutating the state here 
            state.items.push(action.payload)
        },
        removeItem:(state ,action)=>{
            state.items.pop()
        },
        // originalState = {items : ['pizza]}
        clearCart:(state, action) =>{
             // * RTK - either Mutate the existing state or return the new State

            state.items.length = 0; // state = [] //making the original state empty
            //! or
            // return {items :[]}  //returning the new one 
            //? this new [] will replaced inside originalState = [] 
            // console.log(current(state));
        },
    },
});
export const {addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer




 






 // Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes