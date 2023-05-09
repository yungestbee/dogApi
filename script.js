// create a div to contain the whole webpage

let div = document.createElement('div');
let container = document.getElementById('container')

// create a navbar

let navBar = document.createElement('nav');
container.appendChild(navBar)
navBar.className='navbar'




let now = document.createElement('img')
navBar.appendChild(now)
now.className = 'img1'
now.src = "bulldog-head-dog-logo-fighting-dogs-label-sport-mascot-t-shirt-print_219687-138-removebg-preview.png"

let ul = document.createElement('ul')
navBar.appendChild(ul)
ul.className = 'unordered'
ul.innerHTML = `
<a href='#'>MAGAZINE</a>
<a href='#'>DOG ABC</a>
`
// create a search form to aid effective navigation and create a function for value return

let form = document.createElement('form');
navBar.appendChild(form)
form.innerHTML = `
<input type='text'  id='inp' placeholder='Search Dog Breed'>
<button id='btn' onclick='myfunc()'>Search</button>
`



// function myfunc(){
//     let input = document.querySelector('#inp');
//     let result = input.value;


//         searchBreed(result)
//  }



// create a div for the Hero section

container.appendChild(div)
div.id = 'sub-contain'

div.innerHTML = `
<img class='hero-img' src='Screenshot_2023-05-09_231113-removebg-preview.png'>
<div id='imag'> </div>
`


// create a footer to make the webpage more interactive



// create a function that fetches data from an API

async function fact (){
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    
    
    createBreedList(data.message);

}
fact()

let foot = document.createElement('div')
container.appendChild(foot)
foot.className="footer"

foot.innerHTML = `
<div>
<h4>Location</h4>
<h2>Lagos, Nigeria</h2>
</div>

`
let give = document.createElement('div')
foot.appendChild(give)
give.id='give'



function createBreedList(breedList){
    
    document.getElementById('give').innerHTML = `
    <select class= "selection" onchange="specBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function (x){
             return `<option>${x}</option>`
    })}</select>`
}



async function specBreed(breed){
    let input = document.querySelector('#inp');
    let result = input.value;
    if (breed != "Choose a dog breed" || result){
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        showImage(data.message)
    } 
}


function showImage(images){
    document.getElementById('imag').innerHTML = `<img class='img2' src='${images[0]}'>` 
}



function myfunc(){
    let input = document.querySelector('#inp');
    let result = input.value;

        searchBreed(result)
 }

    async function searchBreed(breed){
            const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
            const data = await response.json()
            console.log(data)
             searchImage(data)

            }

    function searchImage(images){
        document.getElementById('imag').innerHTML = `<img class='img2' src='${images[0]}'>` 
    }



