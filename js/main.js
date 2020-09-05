const flags = [
  {
    flag: '../assets/flags/japan.png',
    lang: 'japanese'
  },
  {
    flag: '../assets/flags/russia.png',
    lang: 'russian'
  },
  {
    flag: '../assets/flags/china.png',
    lang: 'chinese'
  },
  {
    flag: '../assets/flags/denmark.png',
    lang: 'danish'
  },
  {
    flag: '../assets/flags/france.png',
    lang: 'french'
  },
  {
    flag: '../assets/flags/germany.png',
    lang: 'german'
  },
  {
    flag: '../assets/flags/italy.png',
    lang: 'italian'
  },
  {
    flag: '../assets/flags/norway.png',
    lang: 'norwegian'
  },
  {
    flag: '../assets/flags/poland.png',
    lang: 'polish'
  },
  {
    flag: '../assets/flags/romania.png',
    lang: 'romanian'
  },
  {
    flag: '../assets/flags/saudi-arabia.png',
    lang: 'arabic'
  },
  {
    flag: '../assets/flags/south-korea.png',
    lang: 'korean'
  },
  {
    flag: '../assets/flags/spain.png',
    lang: 'spanish'
  },
  {
    flag: '../assets/flags/sweden.png',
    lang: 'swedish'
  },
  {
    flag: '../assets/flags/thailand.png',
    lang: 'thai'
  },
  {
    flag: '../assets/flags/turkey.png',
    lang: 'turkish'
  },
  {
    flag: '../assets/flags/uk.png',
    lang: 'english'
  },
  {
    flag: '../assets/flags/ukraine.png',
    lang: 'ukrainian'
  },
  {
    flag: '../assets/flags/vietnam.png',
    lang: 'vietnamese'
  },
  {
    flag: '../assets/flags/iran.png',
    lang: 'persian'
  }
];

const flagsContainer = document.querySelector('.header__bottom_strip_flags_container');


for (let i = 0; i < flags.length; i++) {
  const flagItem = document.createElement('div');
  flagItem.className = "flag-item";
  flagItem.innerHTML = `<img src="${flags[i].flag}"/><span class="lang-name">${flags[i].lang}</span>`;
  flagsContainer.appendChild(flagItem);
}
console.log(flagsContainer);