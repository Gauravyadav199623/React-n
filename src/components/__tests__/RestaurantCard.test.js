import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMocks.json'
import "@testing-library/jest-dom"
//to use "toBeInTheDocument"


it("should render RestaurantCard componentwith props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Amritsari Kulcha Factory")
    expect(name).toBeInTheDocument()
})
it('should render RestaurantCard Component with promotedLabel',()=>{
    // Homework - test HOC: withPromotedLabel()
    // render(withPromotedLabel)
})