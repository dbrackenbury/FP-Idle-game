
populationDisplay = document.getElementById('population-display');
populationMaxDisplay = document.getElementById('population-max-display');
populationIdleDisplay = document.getElementById('population-idle-display');
dayDisplay = document.getElementById('day-number-display');

woodDisplay = document.getElementById('wood-display');
woodMaxDisplay = document.getElementById('wood-max-display');
woodWorkingDisplay = document.getElementById('wood-worker-display');
woodMaxWorkingDisplay = document.getElementById('wood-max-worker-display');

stoneDisplay = document.getElementById('stone-display');
stoneMaxDisplay = document.getElementById('stone-max-display');
stoneWorkingDisplay = document.getElementById('stone-worker-display');
stoneMaxWorkingDisplay = document.getElementById('stone-max-worker-display');

foodDisplay = document.getElementById('food-display');
foodMaxDisplay = document.getElementById('food-max-display');
foodWorkingDisplay = document.getElementById('food-worker-display');
foodMaxWorkingDisplay = document.getElementById('food-max-worker-display');


function varDisplaySetup() {
    populationDisplay.innerHTML = POPULATION;
    populationMaxDisplay.innerHTML = POPULATION_MAX;
    populationIdleDisplay.innerHTML = POPULATION_IDLE;
    dayDisplay.innerHTML = DAY;

    woodDisplay.innerHTML = LIVE_WOOD;
    woodMaxDisplay.innerHTML = MAX_WOOD;
    woodWorkingDisplay.innerHTML =  WORKING_WOOD;
    woodMaxWorkingDisplay.innerHTML = MAX_WORKING_WOOD;

    stoneDisplay.innerHTML = LIVE_STONE;
    stoneMaxDisplay.innerHTML = MAX_STONE;
    stoneWorkingDisplay.innerHTML =  WORKING_STONE;
    stoneMaxWorkingDisplay.innerHTML = MAX_WORKING_STONE;

    foodDisplay.innerHTML = LIVE_FOOD;
    foodMaxDisplay.innerHTML = MAX_FOOD;
    foodWorkingDisplay.innerHTML =  WORKING_FOOD;
    foodMaxWorkingDisplay.innerHTML = MAX_WORKING_FOOD;
}