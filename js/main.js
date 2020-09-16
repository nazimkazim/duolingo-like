const flags = [
  {
    flag: '../assets/japan.png',
    lang: 'japanese'
  },
  {
    flag: '../assets/russia.png',
    lang: 'russian'
  },
  {
    flag: '../assets/china.png',
    lang: 'chinese'
  },
  {
    flag: '../assets/denmark.png',
    lang: 'danish'
  },
  {
    flag: '../assets/france.png',
    lang: 'french'
  },
  {
    flag: '../assets/germany.png',
    lang: 'german'
  },
  {
    flag: '../assets/italy.png',
    lang: 'italian'
  },
  {
    flag: '../assets/norway.png',
    lang: 'norwegian'
  },
  {
    flag: '../assets/poland.png',
    lang: 'polish'
  },
  {
    flag: '../assets/romania.png',
    lang: 'romanian'
  },
  {
    flag: '../assets/saudi-arabia.png',
    lang: 'arabic'
  },
  {
    flag: '../assets/south-korea.png',
    lang: 'korean'
  },
  {
    flag: '../assets/spain.png',
    lang: 'spanish'
  },
  {
    flag: '../assets/sweden.png',
    lang: 'swedish'
  },
  {
    flag: '../assets/thailand.png',
    lang: 'thai'
  },
  {
    flag: '../assets/turkey.png',
    lang: 'turkish'
  },
  {
    flag: '../assets/uk.png',
    lang: 'english'
  },
  {
    flag: '../assets/ukraine.png',
    lang: 'ukrainian'
  },
  {
    flag: '../assets/vietnam.png',
    lang: 'vietnamese'
  },
  {
    flag: '../assets/iran.png',
    lang: 'persian'
  }
];

const footerItems = [
  {
    header: "About us",
    list: [
      "Courses",
      "Mission",
      "Approach",
      "Team",
      "Research",
      "Incubator",
      "Career",
      "Press",
      "Contact us"
    ]
  },
  {
    header: "Products",
    list: [
      "Duolingo",
      "Duolingo for Schools",
      "Duolingo English Test",
      "Duolingo ABC",
      "Podcast",
      "Stories",
      "Disctionary"
    ]
  },
  {
    header: "Apps",
    list: [
      "Duolingo for Android",
      "Duolingo for iOS",
      "Duolingo ABC (iOS)"
    ]
  },
  {
    header: "Help & Support",
    list: [
      "Discussion",
      "Troubleshooting",
      "Duolingo FAQs",
      "Schools FAQs",
      "Duolingo English Test",
      "FAQs",
      "Status"
    ]
  },
  {
    header: "Privacy and Terms",
    list: [
      "Community Guidelines",
      "Troubleshooting",
      "Terms",
      "Privacy",
      'Respecting your "do not sell my info" right',
      "FAQs",
      "Status"
    ]
  }
];

const languages = [
  'العربية',
  'Čeština',
  'Deutsch',
  'Ελληνικά',
  'English',
  'Español',
  'Français',
  'हिंदी',
  'Magyar',
  'Bahasa',
  'Indonesia',
  'Italiano',
  '日本語',
  '한국어',
  'Nederlands',
  'Polski',
  'Português',
  'Română',
  'Русский',
  'ภาษาไทย',
  'Türkçe',
  'Українською',
  'Tiếng Việt',
  '中文'
];


const flagsContainer = document.querySelector('.header__bottom_strip_flags_container');
const flagsModal = document.querySelector('.flags-modal');
const arrowSlideLeft = document.querySelector('.arrow-slide-left');
const arrowSlideRight = document.querySelector('.arrow-slide-right');
const dropdown = document.querySelector('.dropdown');
const seeHowWeDoIt = document.querySelector('.see-how-we-do-it');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.modal-close');
const duolingoVideo = document.getElementById("video-duolingo");
const footerListsContainer = document.querySelector(".lists-container");
const footerLanguagesContainer = document.querySelector(".footer-languages-container");

let scrollRange = 300;
let scrollStart = 0;

// Create flags modal
for (let i = 0; i < flags.length; i++) {
  const flagItem = document.createElement('div');
  flagItem.className = "flag-item";
  flagItem.innerHTML = `<img src="${flags[i].flag}"/><span class="lang-name">${flags[i].lang}</span>`;
  flagsContainer.appendChild(flagItem);

  const flagModalItem = document.createElement('div');
  flagModalItem.className = "flags-modal-item";
  flagModalItem.innerHTML = `<img src="${flags[i].flag}"/><span class="modal-lang-name">${flags[i].lang}</span>`;
  flagsModal.appendChild(flagModalItem);
}

// Create footer lists
for (let i = 0; i < footerItems.length; i++) {
  let header = footerItems[i].header;
  let lists = footerItems[i].list;
  //console.log(lists)
  const listEl = document.createElement('ul');
  listEl.className = "list";
  const headerEl = document.createElement('li');
  headerEl.className = 'item-header';
  headerEl.innerHTML = header;
  listEl.appendChild(headerEl);

  for (let y = 0; y < lists.length; y++) {
    let itemEl = document.createElement('li');
    itemEl.className = "item";
    itemEl.innerHTML = `${lists[y]}`;
    listEl.appendChild(itemEl);
    footerListsContainer.appendChild(listEl);
  }
}

// Create footer languages
for (let i = 0; i < languages.length; i++) {
  let item = document.createElement('a');
  item.className = 'footer-item-lang';
  item.innerHTML = languages[i];
  footerLanguagesContainer.appendChild(item);
}

// Slide flags in header to the left
arrowSlideLeft.addEventListener('click', () => {
  scrollStart -= scrollRange;
  flagsContainer.scrollTo({
    left: scrollStart,
    behavior: 'smooth'
  });
  console.log(scrollStart);
  if (scrollStart <= 0) {
    scrollStart = 0;
  }
  /* console.log('clicked left'); */
});

// Slide flags in header to the right
arrowSlideRight.addEventListener('click', () => {
  scrollStart += scrollRange;
  flagsContainer.scrollTo({
    left: scrollStart,
    behavior: 'smooth'
  });
  //console.log(scrollStart);
  if (scrollStart >= 1400) {
    scrollStart = -scrollRange;
  }
  /* console.log('clicked right'); */
});

// Show flags modal on hover
function ShowModal(event, property) {
  if (event === 'mouseover') {
    dropdown.addEventListener(event, () => {
      flagsModal.style.display = property;
    });
    flagsModal.addEventListener(event, () => {
      flagsModal.style.display = property;
    });
  }

  else if (event === 'mouseleave') {
    dropdown.addEventListener('mouseleave', () => {
      //console.log('hovered')
      flagsModal.style.display = property;
    });

    flagsModal.addEventListener('mouseleave', () => {
      flagsModal.style.display = property;
    });
  }
}

ShowModal('mouseover', 'grid');
ShowModal('mouseover', 'grid');
ShowModal('mouseleave', 'none');

modalWindow.style.display = 'none';
overlay.style.display = 'none';

seeHowWeDoIt.addEventListener('click', () => {
  setTimeout(() => {
    modalWindow.style.display = 'flex';
  }, 300);
  duolingoVideo.setAttribute('src', 'https://www.youtube.com/embed/SUz6oBiRlxk');
  overlay.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
  duolingoVideo.setAttribute('src', '');
});

//console.log(document.getElementById("video-duolingo").removeAttribute('src'));






