// Importing the React library into the QuizQuestion component
import React, { Component } from "react";
 
class QuizQuestion extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li><button>{this.props.quiz_question.answer_options[0]}</button></li>
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;