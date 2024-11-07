import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import Header from '../Header'
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it('should render header Component with a login button',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // const loginButton = screen.getByRole('button')
    const loginButton = screen.getByRole('button', {name: "Login"})

    expect(loginButton).toBeInTheDocument()
})

it('should render header Component with cart Items-->cart(0)',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText('Cart(0)')

    expect(cartItems).toBeInTheDocument()
})


it('should render header Component with cart',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument()
})


it('should render header Component with cart Items',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText('Cart(0)')

    expect(cartItems).toBeInTheDocument()
})

it('should change login button to logout on click',()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', {name: "Login"}) // is recommended
    
    fireEvent.click(loginButton)
    
    const logoutButton = screen.getByRole('button', {name: "Logout"})

    expect(logoutButton).toBeInTheDocument()
})



// ?every test case is isolated