import { Component } from "react";
import UserFun from "./UserFunction";
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props){
        super(props)
        //  console.log('Parent Constructor');

    }
    componentDidMount(){
            // console.log('Parent Component Did Mount');


    }
    render(){
            // console.log('Parent Render');
        return(
            <div>
                <h1> The About Us Page</h1>
                <div>
                    loggedIn User
                    <UserContext.Consumer> // if we cant use "createcontext" hook like in this class based component we use like this 
                      {(loggedInUser)=>(
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                      )}  
                      // we will have to have a jsx "{}" inside which we have a callback function and that call back function get access to the data(context data)
                    </UserContext.Consumer>
                </div>
                <h2>This is our About page</h2>
                {/* <UserFun name={'Gaurav Yadav'} /> */}
                <UserClass name={'First'} location={'Delhi'} />
            </div>
        );
    }
};
export default About




// * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN

/* 
*  - Parent Constructor()              -- Render Phase
*  - Parent Render()

*    - First Child Constructor()
*    - First Child Render()
*                                      -- Render Phase
*    - Second Child Constructor()
*    - Second Child Render()

*     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
*    - First Child ComponentDidMount()
*    - Second Child ComponentDidMount()

*  - Parent ComponentDidMount()=
*/