document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);

    let bmr;

    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const dailyCalories = Math.round(bmr * activity);
    const protein = Math.round(dailyCalories * 0.3 / 4);
    const fats = Math.round(dailyCalories * 0.25 / 9);
    const carbs = Math.round(dailyCalories * 0.45 / 4);

    document.getElementById('results').innerHTML = `
        <h3>Результаты</h3>
        <p>Калории: ${dailyCalories} ккал</p>
        <p>Белки: ${protein} г</p>
        <p>Жиры: ${fats} г</p>
        <p>Углеводы: ${carbs} г</p>
    `;
});

