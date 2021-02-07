fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => displayMeals(data));

const displayMeals = (meals) =>{
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <img src="${meal.img}>
        <h3 class="item-name">${meal.name}</h3>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}