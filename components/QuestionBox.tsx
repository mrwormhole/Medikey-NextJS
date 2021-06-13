import React from "react";

import { Collapse, Well, Panel } from "react-bootstrap";

type QuestionBoxProps = {
    question: string
    answer: string
    isOpen: boolean
}

export default function QuestionBox({question, isOpen, answer}: QuestionBoxProps) {
    return (
        <div className="main-box">
            <Panel className="question-box">
                {question}
            </Panel>
            <Collapse in={isOpen}>
                <div>
                    <Well className="answer-box">
                        {answer}
                    </Well>
                </div>
            </Collapse>
        </div>
    );
};