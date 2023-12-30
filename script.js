function searchRecipes() {
    const query = document.getElementById('query').value;
    const appId = '2082fbb2';
    const appKey = '474ae43c61a896cd0c46f198c68fbcc8';

    const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayResults(data.hits))
      .catch(error => console.error('Error fetching recipes:', error));
  }

  function displayResults(recipes) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (recipes.length === 0) {
      resultsContainer.innerHTML = '<p>No recipes found.</p>';
      return;
    }

    recipes.forEach(recipe => {
      const recipeCard = `
        <div id="recipe-card">
          <h3>${recipe.recipe.label}</h3>
          <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}" style="max-width: 100%;">
          <p>${recipe.recipe.source}</p>
          <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        </div>
      `;

      resultsContainer.innerHTML += recipeCard;
    });
  }

