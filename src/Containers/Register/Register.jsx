
import React from 'react';
import Clicker from '../../Components/Clicker/Clicker';

import './Register.css';

class Register extends React.Component {

    //Mandatory constructor for our class component  CONSTRUCTOR is equivalent to HOOKS on Functional Components
    constructor(props) {
        super(props);

        //The state is going to take place as hooks on functional components
        this.state = {

            name: "",
            email: "",
            phone: "",
            paypal: ""
        }
    }

    //Handler function for our inputs......

    handleChange = (ev) => {
        
        /* [ev.target.name] this acts as a translator, for our handler function to be able to 
        identify which correct property will take the value of the input we are writing in..  */
        this.setState({[ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value});
    }


    //Component lifecycle functions........


    componentDidMount(){
        /*This is the equivalent to useEffect with the [] symbols, 
        this triggers once component is mounted ONLY for the first time*/

        /*
            useEffect ( () => {
                console.log("I am a mounted component!");
            },[]);
        */
        console.log("Hello, only for the first Time!!!!");

    };

    componentDidUpdate(){
        /*This is the equivalent to useEffect without the [] symbols, 
        this triggers EVERY TIME component is updated*/

        /*
            useEffect ( () => {
                console.log("I an updated component!");
            });
        */

        
    };


    componentWillUnmount(){
        //This will trigger when Component start the unmounting process...

    };

    /////////////////////////////////////////

    render() {

        //Inside the render zone, our return containing a div, render zone is the equivalent of the return on functional components

        return (
            <div className="registerDesign">
                {/* <pre>{JSON.stringify(this.state, null,2)}</pre> */}
                <div className="fieldsDesign">
                    <input className="inputRegister" type="text" placeholder="Name" name="name" value={this.state.name}  onChange={this.handleChange}></input>
                    <input className="inputRegister" type="text" placeholder="Email" name="email" value={this.state.email}  onChange={this.handleChange}></input>
                    <input className="inputRegister" type="text" placeholder="Phone" name="phone" value={this.state.phone}  onChange={this.handleChange}></input>
                    <input className="inputRegister" type="text" placeholder="Paypal" name="paypal" value={this.state.paypal}  onChange={this.handleChange}></input>
    
                </div>
                <div className="buttonDesign">
                    { this.state.name === "Diogo" &&
                    
                        <div>Welcome back! you won a prize!
                            <Clicker name={"Diogo"}/>
                        </div>

                    }

                </div>
            </div>
        )
    }

}

export default Register;
