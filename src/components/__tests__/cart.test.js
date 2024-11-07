import {fireEvent, render, screen} from "@testing-library/react";

import {act} from "react"
import RestaurantMenu from "../RestaurantMenu";
import Header from '../Header'
import Cart from "../Cart"

import MOCK_DATA from "../mocks/mockResMenu.json"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('should load Restaurant Menu Component', async ()=>{
    await act( async ()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>

        )
    })

    const accordionHeader = screen.getByText("Veg Pizza(14)")

    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(14)
    
    const addBtn = screen.getAllByRole('button', {name: 'Add +'})
    // console.log(addBtn.length)
    
    fireEvent.click(addBtn[0])
    expect(screen.getByText('Cart(1)')).toBeInTheDocument()
    fireEvent.click(addBtn[1])
    expect(screen.getByText('Cart(2)')).toBeInTheDocument()
    expect(screen.getAllByTestId("foodItems").length).toBe(16)
    // 16 = 14(resMenu) + 2(Cart Items)
    
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart" } ))
    expect(screen.getAllByTestId("foodItems").length).toBe(14) //cart is empty now
    expect(screen.getByText("Cart is empty")).toBeInTheDocument()


})