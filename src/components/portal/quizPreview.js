import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Checkmark } from 'react-checkmark'

const QuizPreview = ({ url, quiz, showCreator, deleteQuiz, addQuestions }) => {

    const [copied, setCopied] = useState(false);

    const topic = <strong>{quiz.topic}</strong> ;
    const header = showCreator ? <h6 className="has-text-weight-normal">A quiz on {topic} created by {quiz.creator}</h6> : 
                                <h6 className="has-text-weight-normal">A quiz on {topic} created on {quiz.creationDate}</h6>;

    return(
        <div className="box content" style={{maxWidth: "550px"}}>
            {header}
            <h6 className="has-text-weight-normal">You and your friends can take it at: <a href={url}>{url}</a></h6>

            <CopyToClipboard text={url}
                onCopy={() => setCopied(true)}>
                <button className="button is-light with-space-on-right">Copy Link to Clipboard</button>
            </CopyToClipboard>

            <div>
                <br />
                {addQuestions && <button onClick={() => addQuestions(quiz)} className="button is-info with-space-on-right">Add More Questions</button>}
                {deleteQuiz && <button onClick={() => deleteQuiz(quiz)} className="button is-danger">Delete Quiz</button>}
            </div>

            {copied && 
                <Checkmark size={40} />
            }
        </div>
    )
};
 
export default QuizPreview;