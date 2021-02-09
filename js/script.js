const searchMeals = () => {
    const searchText = document.getElementById('search-bar').Value;
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.categories))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result';
        mealDiv.innerHTML = `
        <div id="list-detail" class= "col-md-3 meal-list">
            <img src="${meal.strCategoryThumb}">
            <h4 class="category-Name">${meal.strCategory}</h4>
        </div>
        `;
        mealContainer.appendChild(mealDiv);

    });
}
const displayMealDetail = name => {
    const url = ``
}