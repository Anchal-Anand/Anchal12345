/*YOUR NAME:Anchal

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
// Variables to hold the selected model and booking duration
let modelName = "XYZ"; // Default model
let duration = 0; // Default duration



/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate() {
    // Create a variable to represent the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");
    
    // Check the value of the modelName variable and calculate the new total cost
    let cost;
    if (modelName === "XYZ") {
        cost = duration * 100; // Model XYZ costs $100 per day
    } else if (modelName === "CPRG") {
        cost = duration * 213; // Model CPRG costs $213 per day
    }
    
    // Set the value of the calculated-cost element's innerHTML to this new value
    costLabel.innerHTML = cost.toFixed(2); // Ensure cost is formatted to two decimal places
}


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
 
let modelButton = document.getElementById("model-button"); // Pseudo-button for switching models

function changeModel() {
    // Get the span element for the model name display
    let modelText = document.getElementById("model-text");
    
    //  model name and update the display text
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculate the cost after the model change
    recalculate();
}
// Attach the event listener to the "Switch Model" pseudo-button
modelButton.addEventListener("click", changeModel);




/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE


let durationButton = document.getElementById("duration-button"); // Pseudo-button for changing duration

function changeDuration() {
    // Get the span element for the duration display
    let durationText = document.getElementById("duration-text");
    
    // Prompt the user for a new duration
    let newDuration = prompt("Enter the new duration (in days):", "0");
    
    // Validate the input to ensure it's a positive number
    if (!isNaN(newDuration) && newDuration > 0) {
        // Update the duration and the display text
        duration = parseInt(newDuration);
        durationText.innerHTML = duration;
        
        // Recalculate the cost after the duration change
        recalculate();
    } else {
        alert("Please enter a valid positive number.");
    }
}

// Attach the event listener to the "Change Duration" pseudo-button
durationButton.addEventListener("click", changeDuration);

