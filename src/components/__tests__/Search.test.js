// * Integration Testing - Testing Search Feature => which includes many components


import {fireEvent, render, screen} from "@testing-library/react";
import Body from '../Body';
import MOCK_DATA from '../mocks/mockResListData.json'
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom" // for "toBeInTheDocument"

// faking the fetch input
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})


// it('Should Search Res List burger text input',async ()=>{
//     //act function return promise
//     await act(async ()=>
//         render(
//         <BrowserRouter>
//             <Body />
//         </BrowserRouter>
//     ));
//     const cardsBeforeSearch = screen.getAllByTestId("resCard")
//     expect(cardsBeforeSearch.length).toBe(8)

//     const searchBtn = screen.getByRole('button', {name: 'Search'})
    
//     const searchInput = screen.getByTestId('searchInput')
//     // console.log(searchBtn);

//     fireEvent.change(searchInput, {target: {value: 'Burger'}})
//     //this object "{}" is simulating what we do in "onchange" function's "e (event)" in js which is given to us by browser which we have to fake it here just like "fetch"


//     fireEvent.click(searchBtn)

//     //screen should load 4 cart
//     const cardsAfterSearch = screen.getAllByTestId('resCard')
//     console.log(cardsAfterSearch,"..................cards");


//     // expect(searchBtn).toBeInTheDocument()
//     expect(cardsAfterSearch.length).toBe(1)

// })

it('Should Filter Top rated restaurant', async()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })

    const cardsBeforeFilter = screen.getAllByTestId('resCard');

    expect(cardsBeforeFilter.length).toBe(8)

    const topRatedBtn = screen.getByRole("button", {name :"Filter Restaurant"})

    fireEvent.click(topRatedBtn)

    const cardAfterFilter = screen.getAllByTestId("resCard");

    expect(cardAfterFilter.length).toBe(5)


})



//fetch is given to us by the browser and not by javascript so here we are faking it because we are not actually calling the api

//we generally fake the functionality of the browsers