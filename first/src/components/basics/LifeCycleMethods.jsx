import React from "react"

class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        };
        console.log("Constructor initialized");
    }

    componentDidMount(){
        console.log("Component Mounted successfully");
        this.interval = setInterval(() => {
            this.setState((prev) => ({count: prev.count + 1}));
        },1000);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count!==this.state.count){
            console.log("Component Updated ->",this.state.count);
        }
    }

    componentWillUnmount(){
        console.log("Component Unmounted");
        clearInterval(this.interval);
    }
    render(){
        return(
            <div>
                <h2>LifeCycle Methods</h2>
                <h3>Count: {this.state.count}</h3>
            </div>
        )
    }
}

export default LifeCycleMethods;