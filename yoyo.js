document.getElementById('history-quiz').addEventListener('submit', function(event) {
    // Prevent the page from reloading when submitting
    event.preventDefault();

    // Define the correct answers
    const correctAnswers = {
        q1: '1939',
        q2: 'winston churchill', // lowercase for easier comparison
        q3: 'overlord',
        q4: 'usa',
        q5: 'hitler'
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const formData = new FormData(event.target);

    // 1. Check Question 1 (Radio)
    if (formData.get('q1') === correctAnswers.q1) score++;

    // 2. Check Question 2 (Text input - cleaned up lowercase and whitespace)
    const q2Answer = (formData.get('q2') || '').trim().toLowerCase();
    if (q2Answer.includes('churchill')) score++; // Accepts "Churchill" or "Winston Churchill"

    // 3. Check Question 3 (Radio)
    if (formData.get('q3') === correctAnswers.q3) score++;

    // 4. Check Question 4 (Radio)
    if (formData.get('q4') === correctAnswers.q4) score++;

    // 5. Check Question 5 (Text input)
    const q5Answer = (formData.get('q5') || '').trim().toLowerCase();
    if (q5Answer === correctAnswers.q5) score++;

    // Display the results
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.innerHTML = `<h2>Ditt resultat: ${score} av ${totalQuestions} rätt!</h2>`;
    resultDiv.style.display = 'block';
    
    // Scroll smoothly down to the result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
});