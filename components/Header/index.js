// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //create elements
    const 
    div=document.createElement('div'),
    date=document.createElement('span'),
    h1=document.createElement('h1'),
    temp=document.createElement('temp');

    //Structure
    div.appendChild(date)
    div.appendChild(h1)
    div.appendChild(temp)

    //Apply Classes
    div.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp')

    //Content
    date.textContent="SMARCH 28, 2019";
    h1.textContent="Lambda Times";
    temp.textContent="98°";

    return div;
}

const parent=document.querySelector('.header-container');
parent.appendChild(Header());
