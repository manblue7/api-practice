

setInterval(() => {
  const date = new Date(Date.now());
  document.getElementById('time').textContent = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds();

  }, 1);
  


const getSuggestions = () => {
    const inputField = document.querySelector('#input1').value;
    
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let arr = [];
        
        for(let i = 0; i < 10; i++) {
            arr.push(` ${xhr.response[i].word} `);
            
        }
        document.querySelector('#rhymeP').innerHTML = arr;
        return;
      }
    }
    xhr.open('GET', `https://api.datamuse.com/words?rel_rhy=${inputField.toString()}`);
    xhr.send();
}

const getImage = () => {
  fetch('https://api.unsplash.com/photos/random/?client_id=oayq8WFUf8OkQ04rtPtjsY8iVjVyX6Si-Vzcg-bItyg')
  .then(response => response.json())
  .then(response => document.getElementById('img1').src = response.urls.small);
}

function chColor() {
  const hexStuff = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
'9', 'A', 'B', 'C', 'D', 'E', 'F']
  let hex = '';
  one = hexStuff[Math.floor(Math.random() * 16)];
  two = hexStuff[Math.floor(Math.random() * 16)];
  three = hexStuff[Math.floor(Math.random() * 16)];
  four = hexStuff[Math.floor(Math.random() * 16)];
  five = hexStuff[Math.floor(Math.random() * 16)];
  six = hexStuff[Math.floor(Math.random() * 16)];
  hex += one + two + three + four + five + six;
  console.log(hex);
  return hex;
}

const getImage2 = async () => {
  document.getElementById('img2').src = `https://picsum.photos/` + String(Math.floor(Math.random() * (1000 - 400 + 1))+ 400) 
  + '/' + String(Math.floor(Math.random() * (600 - 400 + 1))+ 400) ;
  document.getElementById('randomcolor').style.backgroundColor = '#' + chColor();
  const newPromise = await new Promise((resolve, reject) =>{
    let i = 0;
    let negInt = 99;
    const newInterval = setInterval(() => {
      document.getElementById('random').textContent = `${i}${negInt}`;
      i += 1;
      negInt -= 1;
      if(i > 99) {
        clearInterval(newInterval);
        resolve('');
      }
    }, 1);
    
  });
  
  document.getElementById('random').textContent = String(Math.floor(Math.random() * 10000));
  
  
}