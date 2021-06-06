import React from "react";

import { Collapse, Well, Panel } from "react-bootstrap";

const QuestionBox = (props) => {
    return (
        <div className="main-box">
            <Panel className="question-box">
                {props.question}
            </Panel>
            <Collapse in={props.isOpen}>
                <div>
                    <Well className="answer-box">
                        {props.answer}
                    </Well>
                </div>
            </Collapse>
        </div>
    );
};

export default QuestionBox;