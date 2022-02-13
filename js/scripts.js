
function getRandomCocktail(){
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      displayRandomCocktail(data);
      console.log(data)
    });
  }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});

}

getRandomCocktail();

function displayRandomCocktail(cocktail){


  
  let nomeCocktail = (cocktail.drinks[0].strDrink)
  document.getElementById('cocktail-name').innerHTML = nomeCocktail

  let imgCocktail = (cocktail.drinks[0].strDrinkThumb)
  document.getElementById('img-cocktail').src = imgCocktail
  let controle = 0


  for(let i=1; i<15; i++){
    
    
    let auxIng = 'strIngredient' + i
    let auxQtd = 'strMeasure' + 1
    ingredient = (cocktail.drinks[0][auxIng])
    quantity = (cocktail.drinks[0][auxQtd])
    ingQtd = ingredient + "  -  " + quantity
    if (ingredient != null){
     
      
      let divIngrediente = document.createElement('div')
      //let divQtd = document.createElement('span')
      divIngrediente.setAttribute("class", "ingredientes")

      let ingrediente = document.createTextNode(ingQtd)
      //let quantidade = document.createTextNode(quantity)

      divIngrediente.appendChild(ingrediente)
      //divQtd.appendChild(quantity)

      var divAtual = document.getElementById('ingredient')
      var divPai = divAtual.parentNode

      divPai.insertBefore(divIngrediente, divAtual)

    }
   
  }

  let cockatilInstructions = (cocktail.drinks[0].strInstructions)
  document.getElementById('cocktail-instructions').innerHTML = cockatilInstructions
  





}