

import { render, screen } from "@testing-library/react"
import Contact from '../Contact'
import '@testing-library/jest-dom'


test('should  load contact us component', ()=>{

    render(<Contact/>)

    // what ever we will render it will render on to js dom
    // and then we can access it through "screen"

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()

})