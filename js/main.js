//JS Varibles
const recipes = [
  {
    imgUrl: "./images/margherita-pizza.png",
    rating: 4.8,
    reviews: 356,
    prepTime: 60,
    cookTime: 15,
    servings: "2 people",
    difficulty: "Beginner",
    cuisine: "Italian",
    title: "Margherita Pizza",
    description: "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "1 cup mozzarella cheese",
      "Fresh basil leaves",
      "1 tbsp olive oil",
      "1/2 tsp salt",
      "1/2 tsp black pepper",
      "1/4 cup Parmesan cheese",
    ],
    instructions: [
      "Preheat oven to 475°F (245°C).",
      "Roll out the pizza dough on a floured surface.",
      "Spread tomato sauce evenly over the dough.",
      "Add mozzarella cheese and Parmesan cheese.",
      "Drizzle with olive oil.",
      "Bake for 12-15 minutes until crust is golden.",
      "Top with fresh basil leaves.",
      "Slice and serve hot.",
    ],
    nutritionContent: {
      Calories: "320",
      Protein: "14",
      Carbohydrates: "38",
      Fat: "12",
      Fiber: "3",
      Sodium: "4",
    },
    chifeTips: [
      "Use fresh mozzarella for better flavor.",
      "Preheat the oven well before baking.",
      "Don't add too much sauce.",
      "Add basil after baking.",
      "Use a pizza stone if available.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/chicken-tikka-masala.png",
    rating: 4.9,
    reviews: 512,
    prepTime: 50,
    cookTime: 60,
    servings: "4 people",
    difficulty: "Intermediate",
    cuisine: "Indian",
    title: "Chicken Tikka Masala",
    description: "Tender chicken cooked in a creamy spiced tomato curry sauce",
    ingredients: [
      "1 lb chicken breast",
      "1 cup yogurt",
      "1 cup tomato sauce",
      "1/2 cup heavy cream",
      "1 onion",
      "3 cloves garlic",
      "1 tbsp garam masala",
      "2 tbsp butter",
    ],
    instructions: [
      "Cut chicken into bite-sized pieces.",
      "Marinate chicken with yogurt and spices for 20 minutes.",
      "Cook onion and garlic in butter until soft.",
      "Add chicken and cook until browned.",
      "Pour in tomato sauce and simmer for 20 minutes.",
      "Add heavy cream and stir well.",
      "Cook for another 10 minutes.",
      "Serve with rice or naan.",
    ],
    nutritionContent: {
      Calories: "420",
      Protein: "32",
      Carbohydrates: "18",
      Fat: "24",
      Fiber: "4",
      Sodium: "7",
    },
    chifeTips: [
      "Marinate the chicken for deeper flavor.",
      "Use fresh garlic and ginger if possible.",
      "Don't boil the cream too hard.",
      "Serve with basmati rice.",
      "Add chili powder for extra heat.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/beef-tacos.png",
    rating: 4.7,
    reviews: 289,
    prepTime: 15,
    cookTime: 50,
    servings: "3 people",
    difficulty: "Beginner",
    cuisine: "Mexican",
    title: "Beef Tacos",
    description: "Soft tacos filled with seasoned beef, vegetables, cheese, and avocado",
    ingredients: [
      "1 lb ground beef",
      "6 soft tortillas",
      "1 cup shredded lettuce",
      "1 tomato",
      "1 avocado",
      "1/2 cup shredded cheese",
      "1 tbsp taco seasoning",
      "1 lime",
    ],
    instructions: [
      "Cook ground beef in a pan until browned.",
      "Add taco seasoning and a little water.",
      "Simmer for 5 minutes.",
      "Warm tortillas in a pan.",
      "Fill tortillas with beef.",
      "Add lettuce, tomato, cheese, and avocado.",
      "Squeeze lime juice on top.",
      "Serve immediately.",
    ],
    nutritionContent: {
      Calories: "380",
      Protein: "24",
      Carbohydrates: "30",
      Fat: "18",
      Fiber: "6",
      Sodium: "3",
    },
    chifeTips: [
      "Warm tortillas before serving.",
      "Drain excess fat from the beef.",
      "Use fresh lime juice.",
      "Add salsa for more flavor.",
      "Don't overfill the tacos.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/salmon-teriyaki-bowl.png",
    rating: 4.8,
    reviews: 401,
    prepTime: 20,
    cookTime: 25,
    servings: "2 people",
    difficulty: "Intermediate",
    cuisine: "Japanese",
    title: "Salmon Teriyaki Bowl",
    description: "Glazed salmon served over rice with vegetables and sesame seeds",
    ingredients: [
      "2 salmon fillets",
      "2 cups cooked rice",
      "1 cup broccoli",
      "1/2 cup edamame",
      "1 carrot",
      "1 cucumber",
      "1/4 cup teriyaki sauce",
      "1 tbsp sesame seeds",
    ],
    instructions: [
      "Season salmon fillets with salt and pepper.",
      "Cook salmon in a pan for 4-5 minutes per side.",
      "Brush salmon with teriyaki sauce.",
      "Steam broccoli until tender.",
      "Slice cucumber and carrot.",
      "Add rice to serving bowls.",
      "Top with salmon and vegetables.",
      "Sprinkle sesame seeds before serving.",
    ],
    nutritionContent: {
      Calories: "520",
      Protein: "35",
      Carbohydrates: "55",
      Fat: "18",
      Fiber: "7",
      Sodium: "9",
    },
    chifeTips: [
      "Don't overcook the salmon.",
      "Use warm rice for serving.",
      "Brush sauce at the end to avoid burning.",
      "Add sesame oil for extra flavor.",
      "Serve immediately after cooking.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/vegetable-stir-fry.png",
    rating: 4.6,
    reviews: 245,
    prepTime: 15,
    cookTime: 20,
    servings: "3 people",
    difficulty: "Beginner",
    cuisine: "Asian",
    title: "Vegetable Stir-Fry",
    description: "Colorful vegetables tossed with noodles in a light savory sauce",
    ingredients: [
      "2 cups noodles",
      "1 cup broccoli",
      "1 red bell pepper",
      "1 yellow bell pepper",
      "1 carrot",
      "1 cup mushrooms",
      "1/4 cup soy sauce",
      "1 tbsp sesame oil",
    ],
    instructions: [
      "Cook noodles according to package directions.",
      "Slice all vegetables evenly.",
      "Heat sesame oil in a large pan.",
      "Add vegetables and stir-fry for 5-7 minutes.",
      "Add cooked noodles.",
      "Pour in soy sauce and toss well.",
      "Cook for another 3 minutes.",
      "Serve hot.",
    ],
    nutritionContent: {
      Calories: "300",
      Protein: "9",
      Carbohydrates: "48",
      Fat: "8",
      Fiber: "6",
      Sodium: "7",
    },
    chifeTips: [
      "Cut vegetables the same size.",
      "Cook on high heat.",
      "Don't overcrowd the pan.",
      "Keep vegetables slightly crunchy.",
      "Add sauce gradually.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/chocolate-lava-cake.png",
    rating: 4.9,
    reviews: 623,
    prepTime: 15,
    cookTime: 12,
    servings: "2 people",
    difficulty: "Intermediate",
    cuisine: "French",
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a rich molten center served with berries",
    ingredients: [
      "1/2 cup dark chocolate",
      "1/4 cup butter",
      "1/4 cup Sodium",
      "2 eggs",
      "2 tbsp flour",
      "1 tsp vanilla extract",
      "Powdered Sodium",
      "Fresh berries",
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Melt chocolate and butter together.",
      "Whisk eggs and Sodium until smooth.",
      "Add melted chocolate mixture.",
      "Fold in flour and vanilla extract.",
      "Pour batter into greased ramekins.",
      "Bake for 10-12 minutes.",
      "Dust with powdered Sodium and serve warm.",
    ],
    nutritionContent: {
      Calories: "430",
      Protein: "7",
      Carbohydrates: "42",
      Fat: "26",
      Fiber: "4",
      Sodium: "32",
    },
    chifeTips: [
      "Do not overbake the cake.",
      "Use high-quality dark chocolate.",
      "Grease ramekins well.",
      "Serve immediately while warm.",
      "Add ice cream for a better dessert.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },
];
var imageSection = document.getElementById("imgSection");
var infoSection = document.getElementById("infoSection");
var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructionsList");
var nutritionGrid = document.getElementById("nutritionGrid");
var tipsList = document.getElementById("tipsList");

var lastindex;
var showedindexes = [];
function GetRandomRecipe() {
  var randomIndex = Math.floor(Math.random() * recipes.length);
  if (showedindexes.length === recipes.length) {
    showedindexes = [];
  }
  if (lastindex === randomIndex || showedindexes.includes(randomIndex)) {
    return GetRandomRecipe();
  }
  lastindex = randomIndex;
  console.log(randomIndex);
  showedindexes.push(randomIndex);
  dispalyrecipe(randomIndex);
}

function dispalyrecipe(index) {
  var myrecipe = recipes[index];

  var imgcontent = `  
            <img src="${myrecipe.imgUrl}" alt="${myrecipe.title}" class="recipe-image" />
            <div class="recipe-rating">
              <i class="fa-solid fa-star text-warning"></i>
              <span>${myrecipe.rating} <small class="text-muted">(${myrecipe.reviews} reviews)</small></span>
            </div>
            <div class="stats-overlay">
              <div class="stat-item">
                <i class="fa-solid fa-clock"></i>
                <span class="stat-label">Prep Time</span>
                <span class="stat-value">${myrecipe.prepTime} min</span>
              </div>
              <div class="stat-item">
                <i class="fa-solid fa-fire"></i>
                <span class="stat-label">Cook Time</span>
                <span class="stat-value">${myrecipe.cookTime} min</span>
              </div>
              <div class="stat-item">
                <i class="fa-solid fa-users"></i>
                <span class="stat-label">Servings</span>
                <span class="stat-value">${myrecipe.servings} people</span>
              </div>
            </div>`;
  var infoContent = ` <div class="d-flex justify-content-between align-items-start mb-3">
                <div class="recipe-badges d-flex gap-2">
                  <span class="badge-custom badge-difficulty">${myrecipe.difficulty}</span>
                  <span class="badge-custom badge-cuisine">${myrecipe.cuisine}</span>
                </div>
                <div class="action-buttons d-flex gap-2">
                  <button class="btn rounded-2 shadow-sm" type="button">
                    <i class="fa-regular fa-bookmark"></i>
                  </button>
                  <button class="btn rounded-2 shadow-sm" type="button">
                    <i class="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              </div>
              <h2 class="display-6 fw-bold mb-2">${myrecipe.title}</h2>
              <h2 class="display-6 fw-bold mb-2">${myrecipe.description}</h2>
              <p class="text-muted mb-4"></p>
              <!-- JS CONDITION: Show this alert only when prepTime > 45; otherwise hide it. -->
              <div class="custom-alert ${myrecipe.over45min ? "d-flex align-items-center" : "d-none"}>
                <i class="fa-solid fa-triangle-exclamation fs-4"></i>
                <div>
                  <span class="alert-title">Extended Preparation Time</span>
                  <span class="alert-text"
                    >This recipe requires more than 45 minutes to prepare. Plan accordingly!</span
                  >
                </div>
              </div>`;

  var ingredientContet = "";
  for (let i = 0; i < myrecipe.ingredients.length; i++) {
    ingredientContet =
      ingredientContet +
      `           <li class="ingredient-item">
                    <div class="number-circle">${i + 1}</div>
                    ${myrecipe.ingredients[i]}
                  </li>`;
  }
  var instructionContet = "";
  for (let i = 0; i < myrecipe.ingredients.length; i++) {
    instructionContet =
      instructionContet +
      `<li class="instruction-item">
                    <div class="number-circle">${i + 1}</div>
                    ${myrecipe.instructions[i]}
                  </li>`;
  }
  var nutritionCard = `
                  <div class="nutrition-card">
                    <div class="nutrition-info">
                      <div class="nutrition-icon bg-warning">
                        <i class="fa-solid fa-fire"></i>
                      </div>
                      <span class="text-muted">Calories</span>
                    </div>
                    <span class="fw-bold">${myrecipe.nutritionContent.Calories} kcal</span>
                  </div>
                  <div class="nutrition-card">
                    <div class="nutrition-info">
                      <div class="nutrition-icon bg-primary">
                        <i class="fa-solid fa-dumbbell"></i>
                      </div>
                      <span class="text-muted">Protein</span>
                    </div>
                    <span class="fw-bold">${myrecipe.nutritionContent.Protein}g</span>
                  </div>
                  <div class="nutrition-card">
                    <div class="nutrition-info">
                      <div class="nutrition-icon bg-info">
                        <i class="fa-solid fa-wheat-awn"></i>
                      </div>
                      <span class="text-muted">Carbohydrates</span>
                    </div>
                    <span class="fw-bold">${myrecipe.nutritionContent.Carbohydrates}g</span>
                  </div>
                  <div class="nutrition-card">
                    <div class="nutrition-info">
                      <div class="nutrition-icon bg-danger">
                        <i class="fa-solid fa-droplet"></i>
                      </div>
                      <span class="text-muted">Fat</span>
                    </div>
                    <span class="fw-bold">${myrecipe.nutritionContent.Fat}g</span>
                  </div>
                  <div class="nutrition-card">
                    <div class="nutrition-info">
                      <div class="nutrition-icon bg-success">
                        <i class="fa-solid fa-leaf"></i>
                      </div>
                      <span class="text-muted">Fiber</span>
                    </div>
                    <span class="fw-bold">${myrecipe.nutritionContent.Fiber}g</span>
                  </div>
                  <div class="nutrition-card">
                    <div class="nutrition-info">
                      <div class="nutrition-icon bg-secondary">
                        <i class="fa-solid fa-cube"></i>
                      </div>
                      <span class="text-muted">Sodium</span>
                    </div>
                    <span class="fw-bold">${myrecipe.nutritionContent.Sodium}mg</span>
                  </div>
  `;
  var tipchif = "";
  for (let i = 0; i < myrecipe.chifeTips.length; i++) {
    tipchif += `  
                  <div class="tip-item">
                    <i class="fa-solid fa-circle-check tip-icon"></i>
                    <span>${myrecipe.chifeTips[i]}</span>
                  </div>`;

    imageSection.innerHTML = imgcontent;
    infoSection.innerHTML = infoContent;
    ingredientsList.innerHTML = ingredientContet;
    instructionsList.innerHTML = instructionContet;
    nutritionGrid.innerHTML = nutritionCard;
    tipsList.innerHTML = tipchif;
  }
}

GetRandomRecipe();
