console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function addImage(array) {
  const containter =  document.getElementById('dog-image-container')
  array.forEach(image => {
    let newImage = document.createElement('img')
    newImage.setAttribute('src', image)
    newImage.setAttribute('alt', 'random picture')
    newImage.setAttribute('width', "500")
    newImage.setAttribute('height', "500")
    containter.appendChild(newImage)
  })
}

function addBreed(array) {
  const ulTag =  document.getElementById('dog-breeds')
  for(let keys in array) {
    // array[keys] -> array, check if empty or not
    if (array[keys].length > 0) {
      for(let breed of array[keys]) {
        let newLiTag = document.createElement('li')
        newLiTag.setAttribute('class', 'breed')
        newLiTag.innerHTML = breed
        ulTag.appendChild(newLiTag)
      }
    }
  }
  document.querySelectorAll('li').forEach(liTag => {
    liTag.addEventListener("click", function(e) { e.toElement.style.color ='#'+(Math.random()*0xFFFFFF<<0).toString(16) })
  })
}


function displayBreed() {
  let filterValue = document.getElementById('breed-dropdown').value
  let liArray = document.querySelectorAll('li')
  for(const value of liArray) {
    if (value.innerHTML[0] !== filterValue ) {
      value.style.display = 'none';
    } else {
      value.style.display = 'list-item';
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl).then(response => response.json()).then(json => addImage(json.message))
  fetch(breedUrl).then(response => response.json()).then(json => addBreed(json.message))
  document.getElementById('breed-dropdown').addEventListener("change", function(e) { displayBreed() })
});





