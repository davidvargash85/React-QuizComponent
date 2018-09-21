// Importing the React library into the QuizQuestionButton component
import React, {Component} from 'react'

// Adding a render() method to the QuizQuestionButton class
class QuizQuestionButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li>
                <button>{this.props.button_text}</button>
            </li>
        );
    }
}

export default QuizQuestionButton;