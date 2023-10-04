// 1. Створити сторінку, що показує нумерований список пісень:

const playList = [{
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];

function createPlayList() {
  const boxSong = document.getElementById('boxSong');
  let insert = '<ul class="list">';

  for (let i = 0; i < playList.length; i++) {
    insert += `<li class="list_item"><p>Author: ${playList[i].author}</p><p>Song: ${playList[i].song}</p></li>`;
  }

  insert += '</ul>';
  boxSong.innerHTML = insert;
}


// 2. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const openModalButton = document.querySelector('.modal');
const closeModalButton = document.querySelector('.button_close');
const overlay = document.querySelector('.overlay');

function openModal() {
  openModalButton.classList.add('active');
  overlay.classList.add('active');
}

function closeModal() {
  openModalButton.classList.remove('active');
  overlay.classList.remove('active');
}

// 3. Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const light = document.querySelectorAll('.traffic_light div');
let activeColor = 0;

function getChangeLight() {
  const traffic = light[activeColor];  
  traffic.classList.toggle('active');
  activeColor++;
  if (activeColor > 2) {
    activeColor = 0;
  }
}