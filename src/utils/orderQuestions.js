const orderQuestions = questions => {
    let orderedQuestions = questions.sort((a, b) => a.number - b.number);
    
    orderedQuestions.forEach(question => {
        const sortedAnswerChoices = question.answerChoices.sort((a, b) => a.letter < b.letter ? -1 : 1);
        return {
            ...question,
            answerChoices: sortedAnswerChoices
        }
    })

    return orderedQuestions;
}

export default orderQuestions;