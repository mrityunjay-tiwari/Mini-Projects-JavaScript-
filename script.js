const cols1 = document.querySelectorAll('.col1');
console.log(cols1);
const cols2 = document.querySelectorAll('.col2');
const cols3 = document.querySelectorAll('.col3');
const cols4 = document.querySelectorAll('.col4');
const cols5 = document.querySelectorAll('.col5');
const cols6 = document.querySelectorAll('.col6');
const cols7 = document.querySelectorAll('.col7');
const cols8 = document.querySelectorAll('.col8');
const cols9 = document.querySelectorAll('.col9');

const grid1 = document.querySelector('.GRID1');
const grid2 = document.querySelector('.GRID2');
const grid3 = document.querySelector('.GRID3');
const grid4 = document.querySelector('.GRID4');
const grid5 = document.querySelector('.GRID5');
const grid6 = document.querySelector('.GRID6');
const grid7 = document.querySelector('.GRID7');
const grid8 = document.querySelector('.GRID8');
const grid9 = document.querySelector('.GRID9');
console.log(grid1);


const btn = document.getElementById("restart");
const player = document.querySelector("h3");
const choice = document.querySelector(".choice");
const chooseX = document.getElementById("chooseX");
const chooseO = document.getElementById("chooseO");
const defaultPlayer = document.getElementById('default');
const result = document.getElementById("result");
console.log(player, choice, chooseO, chooseX, defaultPlayer);

let arr1 = new Array(9).fill(null);
console.log(arr1);
let arr2 = new Array(9).fill(null);
let arr3 = new Array(9).fill(null);
let arr4 = new Array(9).fill(null);
let arr5 = new Array(9).fill(null);
let arr6 = new Array(9).fill(null);
let arr7 = new Array(9).fill(null);
let arr8 = new Array(9).fill(null);
let arr9 = new Array(9).fill(null);
let Arr = new Array(9).fill(null);

function won(arr) {
    let count = 0;
    if (
      (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
      (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
      (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
      (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
      (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
      (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
      (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
      (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
      console.log(`Player ${userEntry} won`);
      if (arr == Arr) {
        console.log(`Player ${userEntry} won finally`);
        result.innerHTML = `Player ${userEntry} won`;
        result.style.color = 'green';
        result.style.fontSize = '25px';
      }
      if (arr == arr1) {
            grid1.innerHTML = `${userEntry}`; 
            Arr[0] = userEntry;       
      }
     else if (arr == arr2) {
        grid2.innerHTML = `${userEntry}`;
            Arr[1] = userEntry;
     }
     else if (arr == arr3) {
        grid3.innerHTML = `${userEntry}`;
        Arr[2] = userEntry;
     }
     else if (arr == arr4) {
        grid4.innerHTML = `${userEntry}`;
        Arr[3] = userEntry;
     }
     else if (arr == arr5) {
        grid5.innerHTML = `${userEntry}`;
        Arr[4] = userEntry;
     }
     else if (arr == arr6) {
        grid6.innerHTML = `${userEntry}`;
        Arr[5] = userEntry;
     }
     else if (arr == arr7) {
        grid7.innerHTML = `${userEntry}`;
        Arr[6] = userEntry;
     }
     else if (arr == arr8) {
        grid8.innerHTML = `${userEntry}`;
        Arr[7] = userEntry;
     }
     else if (arr == arr9) {
        grid9.innerHTML = `${userEntry}`;
        Arr[8] = userEntry;
     }
    }
  }

  function chooseUser(){
    if (userEntry == "X") {
        userEntry = "O";
      } else if (userEntry == "O") {
        userEntry = "X";
      }
  }

  function choose1(array) {
    array.forEach((element) => {
     console.log(element);

    })
  }
  function display() {
    player.style.display = "none";
    choice.style.display = "none";
    defaultPlayer.style.display = "none";
  }
  let userEntry = "X";

  chooseX.addEventListener("click", () => {
    userEntry = "X";
    display();
    return userEntry;
  });
  
  chooseO.addEventListener("click", () => {
    userEntry = "O";
    display();
    return userEntry;
  });

cols1.forEach((div) => {
  div.addEventListener("click", () => {
    if (arr1[div.id] != null) {
      return;
    }

    display();

    div.innerHTML = userEntry;
    console.log(div.id);

    grid2.addEventListener('mouseover', () => {
        console.log('this is wrong div');
    })
    arr1[div.id] = userEntry;
    console.log(arr1);

    won(arr1);
    won(Arr);
    choose1(cols1);
    chooseUser();
    console.log(Arr);
  });
});


cols2.forEach((div) => {
  div.addEventListener("click", () => {
    if (arr2[div.id -9] != null) {
      return;
    }

    display();
   
    div.innerHTML = userEntry;
    console.log(div.id - 9);

    arr2[div.id -9] = userEntry;
    console.log(arr2);

    won(arr2);
    won(Arr);

    chooseUser();    
    console.log(Arr);
  });
});

cols3.forEach((div) => {
    div.addEventListener("click", () => {
      if (arr3[div.id -18] != null) {
        return;
      }
  
      display();
  
      div.innerHTML = userEntry;
      console.log(div.id - 18);
  
      arr3[div.id -18] = userEntry;
      console.log(arr3);
  
      won(arr3);
      won(Arr);

      chooseUser();
      console.log(Arr);
    });
  });

  cols4.forEach((div) => {
    div.addEventListener("click", () => {
      if (arr4[div.id -27] != null) {
        return;
      }
  
      display();
  
      div.innerHTML = userEntry;
      console.log(div.id - 27);
  
      arr4[div.id -27] = userEntry;
      console.log(arr4);
  
      won(arr4);
      won(Arr);
      
      chooseUser();
      console.log(Arr);
    });
  });

  cols5.forEach((div) => {
    div.addEventListener("click", () => {
      if (arr5[div.id -36] != null) {
        return;
      }
  
      display();
  
      div.innerHTML = userEntry;
      console.log(div.id - 36);
  
      arr5[div.id -36] = userEntry;
      console.log(arr5);
  
      won(arr5);
      won(Arr);
      
      chooseUser();
      console.log(Arr);
    });
  });

  cols6.forEach((div) => {
    div.addEventListener("click", () => {
      if (arr6[div.id -45] != null) {
        return;
      }
  
      display();
  
      div.innerHTML = userEntry;
      console.log(div.id - 45);
  
      arr6[div.id -45] = userEntry;
      console.log(arr6);
  
      won(arr6);
      won(Arr);
      
      chooseUser();
      console.log(Arr);
    });
  });

  cols7.forEach((div) => {
    div.addEventListener("click", () => {
      if (arr7[div.id -54] != null) {
        return;
      }
  
      display();
  
      div.innerHTML = userEntry;
      console.log(div.id - 54);
  
      arr7[div.id -54] = userEntry;
      console.log(arr7);
  
      won(arr7);
      won(Arr);
      
      chooseUser();
      console.log(Arr);
    });
  });

  cols8.forEach((div) => {
    div.addEventListener("click", () => {
      if (arr8[div.id -63] != null) {
        return;
      }
  
      display();
  
      div.innerHTML = userEntry;
      console.log(div.id - 63);
  
      arr8[div.id -63] = userEntry;
      console.log(arr8);
  
      won(arr8);
      won(Arr);
      
      chooseUser();
      console.log(Arr);
    });
  });


  cols9.forEach((div) => {
    div.addEventListener("click", () => {
      if (arr9[div.id -72] != null) {
        return;
      }
  
      display();
  
      div.innerHTML = userEntry;
      console.log(div.id - 72);
  
      arr9[div.id -72] = userEntry;
      console.log(arr9);
  
      won(arr9);
      won(Arr);
      chooseUser();
      console.log(Arr);
    });
  });

  btn.addEventListener('click', () => {
    location.reload();
  })

  const okayRule = document.getElementById('closeRule');
  const rule = document.querySelector('.rules');

  okayRule.addEventListener('click', () =>{
    rule.style.display = 'none';
  })

  window.addEventListener('load', () => {
    setTimeout(function open(event){
        rule.style.display = 'block';
    }, 500)
  })
  const rules = document.getElementById('rule');
  rules.addEventListener('click', () => {
    if (rule.style.display == 'none') {
        rule.style.display = 'block';
    }
    else if (rule.style.display == 'block') {
        rule.style.display = "none";
    }
  })
