import React from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Parent: 'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.Parent} from ${childName}`)
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent;