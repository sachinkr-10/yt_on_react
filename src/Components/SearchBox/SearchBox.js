import React, {Component} from 'react'
import Input from '../Input/Input'
class SearchBox extends Component{

    constructor(props){
        super(props)
        this.state = {
            'placeholder' : 'Search',
            'value' : ''
        }
    }

    changeHandler = (event) =>{
        var value = event.target.value;

        if(value.length !== 0){
            this.setState({value})
        }
    }

    submitHandler = () => {

    }

    render(){

        return(
            <Input 
            changeHandler={this.changeHandler} 
            submitHandler={this.submitHandler}
            placeholder={this.state.placeholder}
            ></Input>
        )
    }
}

export default SearchBox