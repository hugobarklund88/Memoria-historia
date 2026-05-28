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
        q9: 'maginotlinjen'
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const formData = new FormData(event.target);

    // 1. fråga 1
    if (formData.get('q1') === correctAnswers.q1) score++;

    // 2. fråga 2
    const q2Answer = (formData.get('q2') || '').trim().toLowerCase();
    if (q2Answer.includes('churchill')) score++; 

    // 3. fråga 3
    if (formData.get('q3') === correctAnswers.q3) score++;

    // 4. fråga 4
    if (formData.get('q4') === correctAnswers.q4) score++;

    // 5. fråga 5
    const q5Answer = (formData.get('q5') || '').trim().toLowerCase();
    if (q5Answer === correctAnswers.q5) score++;

    // 6. fråga 6
    const q6Answer = (formData.get('q6') || '').trim().toLowerCase();
    if (q6Answer === correctAnswers.q6) score++;

    // 7. Fråga 7
    if (formData.get('q7') === correctAnswers.q7) score++;

    // 8. Fråga 8
    if (formData.get('q8') === correctAnswers.q8) score++;

    // 8. Fråga 8
    if (formData.get('q9') === correctAnswers.q9) score++;

    // resultat
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.innerHTML = `<h2>Ditt resultat: ${score} av ${totalQuestions} rätt!</h2>`;
    resultDiv.style.display = 'block';
    
    // scrolla
    resultDiv.scrollIntoView({ behavior: 'smooth' });
});