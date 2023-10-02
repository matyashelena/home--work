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

const openModalButton = document.querySelector('.modal');
console.log(openModalButton);
const closeModalButton = document.querySelector('.button_close');
console.log(closeModalButton);
const overlay = document.querySelector('.overlay');

function openModal() {
  openModalButton.classList.add('active');
  overlay.classList.add('active');
}

function closeModal() {
  openModalButton.classList.remove('active');
  overlay.classList.remove('active');
}