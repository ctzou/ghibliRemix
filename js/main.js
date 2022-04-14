//get 1 location, two people, 1 species, 1 vehicle
const url =`https://ghibliapi.herokuapp.com/`

document.querySelector('button').addEventListener('click', 
  createGhibli)

function shuffle(array) {
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function createGhibli() {
  fetch(`${url}locations`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#location').innerText = data[Math.floor(data.length * Math.random())].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  fetch(`${url}people`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let charaArray = shuffle(data)
        document.querySelector('#chara1').innerText = data[0].name
        document.querySelector('#chara2').innerText = data[1].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  fetch(`${url}species`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#species').innerText = data[Math.floor(data.length * Math.random())].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  fetch(`${url}vehicles`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#vehicle').innerText = data[Math.floor(data.length * Math.random())].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}