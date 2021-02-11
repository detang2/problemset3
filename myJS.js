/*
* Exercise 1
*/
const square = document.getElementById("color-block"); //define what "square" is, which we defined as the color box (the box that has an id called "color-block")
square.addEventListener ("click", changeColor); //when "square" is "click(ed)", run "changeColor" function

function changeColor(){
    const text = document.getElementById("color-name"); //defining the color name as "text" - this is text with is a string
    const colors = ["#F08080", "#80E8F0"]; //list of color, with the original and my own
    if(text.innerHTML === colors[0]){ //originally i wanted to grab the hex code from css somehow. but the answer was that the color-name was a string so reading that and changing that would work. also use == or ===. when i used x=y i'm setting y to become x. == or === is saying, check if color name matches this hex code i want
        square.style.backgroundColor = colors[1]; //change square color to #80E8F0
        text.innerText=colors[1]; //change HTML text to string #80E8F0
        // text.innerText=square.style.backgroundColor; this works too but it returns rgb... which is not consistent with my hex code
    } else {
        square.style.backgroundColor = colors[0];
        text.innerText=colors[0];
    }
}

/*
Exercise 2
*/
const button = document.getElementById("convertbtn"); //defining what "button" means > the feedback that "submit" button has been clicked, we know because the button id is "covertbtn"
button.addEventListener ("click", convertTemp); //so, when "button" is "click(ed)", run "converTemp"

function convertTemp(){ //leave () empty for any input we wanna give the function
    const number = document.getElementById("f-input").value; //defining that "number" is user's input ("f-input") "value"
    const celcius = (number-32)*5/9; //send "number" through equation and get answer
    document.getElementById("c-output").innerText=celcius; //send answer behind "Celsius: " so user can see. can also use innerHTML instead of innerText
}


