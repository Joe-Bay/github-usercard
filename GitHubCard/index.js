/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

const entryCard = document.querySelector('.cards')

function ghCardMaker(ghDataObj){
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const bio = document.createElement('p')
  const followers = document.createElement('p')
  const following = document.createElement('p')

  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')


  name.textContent = ghDataObj.data.name
  userName.textContent = ghDataObj.data.login
  location.textContent = `Location: ${ghDataObj.data.location}`
  profile.textContent = `Profile: ${ghDataObj.data.html_url}`
  bio.textContent = `Bio: ${ghDataObj.data.bio}`
  followers.textContent = `Followers: ${ghDataObj.data.followers}`
  following.textContent = `Following: ${ghDataObj.data.following}`
  image.src = ghDataObj.data.avatar_url

  return card
}




const profileURL = 'https://api.github.com/users/Joe-Bay'

axios.get(profileURL).then(function(value){
  console.log('it succeeded to get the data')
  entryCard.appendChild(ghCardMaker(value))
  // console.log(value)
}).catch(function(error){
  debugger
  console.log('it failed to get the data')
})

/*
{
    "avatar_url": "https://avatars3.githubusercontent.com/u/64440710?v=4",
    "bio": null,
    "blog": "",
    "company": null,
    "created_at": "2020-04-27T20:58:20Z",
    "email": null,
    "events_url": "https://api.github.com/users/Joe-Bay/events{/privacy}",
    "followers": 0,
    "followers_url": "https://api.github.com/users/Joe-Bay/followers",
    "following": 0,
    "following_url": "https://api.github.com/users/Joe-Bay/following{/other_user}",
    "gists_url": "https://api.github.com/users/Joe-Bay/gists{/gist_id}",
    "gravatar_id": "",
    "hireable": null,
    "html_url": "https://github.com/Joe-Bay",
    "id": 64440710,
    "location": null,
    "login": "Joe-Bay",
    "name": "Joe Bay",
    "node_id": "MDQ6VXNlcjY0NDQwNzEw",
    "organizations_url": "https://api.github.com/users/Joe-Bay/orgs",
    "public_gists": 0,
    "public_repos": 22,
    "received_events_url": "https://api.github.com/users/Joe-Bay/received_events",
    "repos_url": "https://api.github.com/users/Joe-Bay/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/Joe-Bay/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Joe-Bay/subscriptions",
    "twitter_username": null,
    "type": "User",
    "updated_at": "2020-07-09T19:05:30Z",
    "url": "https://api.github.com/users/Joe-Bay"
}
*/ 

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
