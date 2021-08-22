export function handleUpvotes(answers, answerId, count) {
    return answers.map(answer =>
        {
            if(answer.answerId === answerId) {
                return {...answer, upvotes: answer.upvotes + count}
            }
            return answer;
        }
    );
}
