let dictionary = {};
let output = [];
let singleEntities = [];
let sLen = 0;
let answer = [];

function compute(event){
    event.preventDefault()

    let rizz = document.getElementById("answer");
    rizz.innerHTML = "";

    let btns = document.getElementById("btns").style.display = "block";

    let string = document.getElementById("string").value;
    
    answer = [];
    dictionary = {};
    output = [];
    singleEntities = [];
    
    let phrase = "";
    current = 1;

    for(x of string){
        if(!singleEntities.includes(x)){
            singleEntities.push(x);
        }
    }
    sLen = singleEntities.length;

    
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (!dictionary.hasOwnProperty(char)) {
            dictionary[char] = Object.keys(dictionary).length + 1;
        }
    }

    for (let symbol of string) {
        let extendedPhrase = phrase + symbol;
        if (dictionary.hasOwnProperty(extendedPhrase)) {
            phrase = extendedPhrase;
        } else {
            output.push(dictionary[phrase]);
            dictionary[extendedPhrase] = Object.keys(dictionary).length + 1;
            phrase = symbol;
        }
    }



    if (phrase !== "") {
        output.push(dictionary[phrase]);
    }

    for(let s=0; s<sLen; s++){
        output.unshift(-1);
    }

    console.log(output);

    
    let table = document.getElementById("table");
    table.innerHTML =  `
    <tr>
            <th>Encoded Output</th>
            <th>Index</th>
            <th>Entity</th>
        </tr>
    <tr> <td>-</td> <td>${1}</td> <td>${Object.keys(dictionary)[0]}</td> </tr>`

    for(j of output){
        if(j === -1 || j == NaN){

        }
        else{
            answer.push(j);
        }
    }
    console.log(answer);

}


let current = 1;


function next(){
    let table = document.getElementById("table");

    if (current < output.length)
    {
        table.innerHTML += `<tr><td>${output[current] != -1 ? output[current] : `-`}</td> <td>${current < Object.keys(dictionary).length ? current+1 : `-`}</td> <td>${Object.keys(dictionary)[current] ? Object.keys(dictionary)[current] : `-`}</td> </tr>`;
        current++;
    }
    else{
        let rizz = document.getElementById("answer");
        rizz.innerHTML = `Encoded Output is: ${answer.toString()}`;
    }
    
}



function final(){
    let table = document.getElementById("table");
    current = 0;
    table.innerHTML = `
    <tr>
        <th>Encoded Output</th>
        <th>Index</th>
        <th>Entity</th>
    </tr>`;

    for(x in output){
        table.innerHTML += `<tr> <td>${output[current] != -1 ? output[current] : `-`}</td> <td>${current < Object.keys(dictionary).length ? current+1 : `-`}</td> <td>${Object.keys(dictionary)[current] ? Object.keys(dictionary)[current] : `-`}</td> </tr>`;
        current++;
    }

    let rizz = document.getElementById("answer");
    rizz.innerHTML = `Encoded Output is: ${answer.toString()}`;
}

