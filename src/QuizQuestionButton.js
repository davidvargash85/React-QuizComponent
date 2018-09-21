// Importing the React library into the QuizQuestionButton component
import React, { Component } from 'react'

// Adding a render() method to the QuizQuestionButton class
class QuizQuestionButton extends Component {

    handleClick() {
        this.props.clickHandler(this.props.button_text);
    }

    render() {
        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        );
    }
}

export default QuizQuestionButton;