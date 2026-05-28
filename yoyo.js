document.getElementById('history-quiz').addEventListener('submit', function(event) {
    // Prevent the page from reloading when submitting
    event.preventDefault();

    const correctAnswers = {
        q1: '1939',
        q2: 'winston churchill', 
        q3: 'overlord',
        q4: 'usa',
        q5: 'hitler', 
        q6: 'hirohito',
        q7: 'polen',
        q8: 'stalingrad',
        q9: 'maginotlinjen',
        q10: 'roosevelt',
        q11: 'barbarossa',
        q12: 'bismarck',
    };

    const readableAnswers = {
        q1: '1939',
        q2: 'Winston Churchill',
        q3: 'Operation Overlord',
        q4: 'USA',
        q5: 'Hitler',
        q6: 'Hirohito',
        q7: 'Polen',
        q8: 'Slaget vid Stalingrad',
        q9: 'Maginotlinjen',
        q10: 'Roosevelt',
        q11: 'Operation Barbarossa',
        q12: 'Bismarck',
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const formData = new FormData(event.target);

    const questionCards = document.querySelectorAll('.question-card');

    for (let i = 1; i <= totalQuestions; i++) {
        const qName = 'q' + i;
        const card = questionCards[i - 1]; // Tar rätt kort i ordningen
        
        card.classList.remove('correct', 'incorrect');
        const oldFeedback = card.querySelector('.correct-answer-text');
        if (oldFeedback) oldFeedback.remove();

        let userAnswer = (formData.get(qName) || '').trim().toLowerCase();

        let isCorrect = false;
        if (qName === 'q2') {
            isCorrect = userAnswer.includes('churchill');
        } else {
            isCorrect = (userAnswer === correctAnswers[qName]);
        }

        if (isCorrect) {
            score++;
            card.classList.add('correct'); // Gör kortet grönt
        } else {
            card.classList.add('incorrect'); // Gör kortet rött
            
            const feedbackTemplate = document.createElement('div');
            feedbackTemplate.classList.add('correct-answer-text');
            feedbackTemplate.innerText = `Fel! Rätt svar: ${readableAnswers[qName]}`;
            card.appendChild(feedbackTemplate);
        }
    }

    // resultat
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.innerHTML = `<h2>Ditt resultat: ${score} av ${totalQuestions} rätt!</h2>`;
    resultDiv.style.display = 'block';
    
    // scrolla
    resultDiv.scrollIntoView({ behavior: 'smooth' });
});