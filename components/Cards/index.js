// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const articleContainer=document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (response){
        console.log(response.data.articles);
        //capture object
        const topics=response.data.articles;
        //turn nasty object into array
        const articleArray=Object.keys(topics)
        console.log(articleArray);
        //take beautiful array and forEach. But sadly the conversion loses the inner arrays.
        //so articleArray only equals
        // 0: "javascript"
        // 1: "bootstrap"
        // 2: "technology"
        // 3: "jquery"
        // 4: "node"
        articleArray.forEach(function(topic){
            //topics is still usable if we narrow that object down to its array
            topics[topic].forEach(function(article){
                articleContainer.appendChild(createCard(article));
            })
        })
    })
    .catch(function(error){
        console.log(error);
    })

    function createCard(article){
        const 
        card=document.createElement('div'),
        headline=document.createElement('div'),
        author=document.createElement('div'),
        imgContainer=document.createElement('div'),
        img=document.createElement('img'),
        authorName=document.createElement('span');

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        author.appendChild(authorName);
        imgContainer.appendChild(img);

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        headline.textContent=article.headline;
        img.src=article.authorPhoto;
        authorName.textContent=article.authorName;

        return card;
    }