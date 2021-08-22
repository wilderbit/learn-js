import React from "react";

export const App = ({questions, answers, handleModifyAnswerVotes}) => (
    <div>
        <h1>This is a React.</h1>
        {questions.map(({questionId, content}) => (
            <div key={questionId}>
            <h3>{content}</h3>
                <div>
                    {answers.filter(answer => answer.questionId === questionId).map(({answerId, upvotes, content}) => (
                        <div key={answerId}>
                            <span>
                                {content} - {upvotes}
                            </span>
                            <button onClick={() => handleModifyAnswerVotes(answerId, 1)}>+</button>
                            <button onClick={() => handleModifyAnswerVotes(answerId, -1)}>-</button>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);
