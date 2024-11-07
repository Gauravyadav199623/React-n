

import { render, screen } from "@testing-library/react"
import Contact from '../Contact'
import '@testing-library/jest-dom'


describe("Contact us Page Test Case",()=>{

    // we can use test or it
    test('should  load contact us component', ()=>{
        
        render(<Contact/>)
        
        // what ever we will render it will render on to js dom
        // and then we can access it through "screen"
        
        const heading = screen.getByRole('heading')
        
        // Assertion
        expect(heading).toBeInTheDocument()
    })
    
    
    
    it('should  load button inside contact component', ()=>{
        
        render(<Contact/>)
        
        // what ever we will render it will render on to js dom
        // and then we can access it through "screen"
        
        const button  = screen.getByRole('button')
        // const button  = screen.getByText('Submit')
        
        // Assertion
        expect(button).toBeInTheDocument()
    })
    
    
    test('should  load button inside contact component', ()=>{

        render(<Contact/>)
        
        // what ever we will render it will render on to js dom
        // and then we can access it through "screen"
        
        // const button  = screen.getByRole('button')
        const inputName  = screen.getByPlaceholderText('name')
        
        // Assertion
        expect(inputName).toBeInTheDocument()
    })
    
    test("should load 2 input boxes on the Contact component",()=>{
        render(<Contact/>)
        
        // Querying
        const inputBoxes = screen.getAllByRole('textbox')
        
        // Assertion
        expect(inputBoxes.length).toBe(2)
        // expect(inputBoxes.length).not.toBe(3)
    })
    
})