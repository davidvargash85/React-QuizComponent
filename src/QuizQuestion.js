// Importing the React library into the QuizQuestion component
import React, { Component } from "react";
// Importing QuizQuestionButton into the Quiz file
import QuizQuestionButton from "./QuizQuestionButton";
 
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
                        <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} />
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;