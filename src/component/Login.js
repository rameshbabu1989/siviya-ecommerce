import React, { Component } from 'react';


class Login extends Component{
    
    myInput = React.createRef();

    goToStore = event => {
        // Stop the form submitting
        event.preventDefault();
        // get the text box values
        console.log(this);
        const userName = this.myInput.current.value;
        this.props.history.push(`/user/${userName}`);
    }
    componentDidMount(){
        console.log("MOUNTED !!!");
    }
    render(){
        return (
            //dsfsdfdsfsd 
            <form className="store-selector" onSubmit={this.goToStore}>
                <h3> Welcome To SiviyaMarket</h3>
                <input type="text" ref={this.myInput} required placeholder="Your Name"/>
                <input type="Password" required placeholder="Password"/>
                <button type="submit">
                    Visit Store >>>
                </button>
            </form>
        )
    }
}

export default Login;