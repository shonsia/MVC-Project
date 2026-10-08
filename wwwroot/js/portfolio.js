const videoData = [
  { id: 'jr6pgriP5W8', title: 'Video Edit #1' },
  { id: '5MIPImPRnGM', title: 'Video Edit #2' },
  { id: '7LpBqhtV3y8', title: 'Video Edit #3' },
];

const designCards = [
  {
    title: 'Formula 1 Inspired',
    description: 'High-octane poster series inspired by F1 racing aesthetics — speed, precision, motion blur.',
    image: 'https://i.imgur.com/4Q1hHuW.jpeg',
  },
  {
    title: 'Better Together',
    description: 'Warmth-forward design exploring connection and togetherness across different generations of block games.',
    image: 'https://i.imgur.com/EylErww.jpeg',
  },
  {
    title: 'Resident Evil Inspired',
    description: 'A funny survival-horror themed poster inspired by the Resident Evil franchise visual language.',
    image: 'https://i.imgur.com/MphiG3h.jpeg',
  },
  {
    title: 'Kanibalismo',
    description: 'A receipt-inspired poster based on the song “Pag-ibig ay Kanibalismo II” by Fitterkarma.',
    image: 'https://i.imgur.com/sqi2r7K.jpeg',
  },
  {
    title: 'Retro Design',
    description: 'A throwback aesthetic piece with grain, muted palettes, and vintage typography.',
    image: 'https://i.imgur.com/yxSY9Mk.jpeg',
  },
  {
    title: 'Pop Design',
    description: 'A bold, maximalist pop-art piece built around loud type and high contrast.',
    image: 'https://i.imgur.com/X05z60Q.jpeg',
  },
];

const photoCards = [
  {
    title: 'The Wall',
    location: 'Intramuros, Manila',
    image: 'https://instagram.fmnl44-1.fna.fbcdn.net/v/t51.75761-15/482524090_18362520637131480_7327501121127671174_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=106&ig_cache_key=MzU4MTUwMzE2MDM2OTI1NjI0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=3n3k9cdBD4UQ7kNvwG1P-Wi&_nc_oc=AdoTlaWqPyUX0sl8PWqlEwqFVCbrmFGmFP5IgoPCbgtpY1euK_7zrl7Zn5YsVjeAxEiH1yY2oT-ORVVraSuqYY_-&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=IWxK4VwAIwS0Xm9wKxjmaA&_nc_ss=7a32e&oh=00_Af2gvh8h4SE-SjywoxSXUbdUCbIvYmDeIOj7Izd6pLoleg&oe=69D5BBC5',
  },
  {
    title: 'The City',
    location: 'Pasig City',
    image: 'https://i.imgur.com/ZcF1qCu.jpeg',
  },
  {
    title: 'The Train',
    location: 'Dr Santos Station',
    image: 'https://i.imgur.com/6vnFaGc.jpeg',
  },
  {
    title: 'The Crosswalk',
    location: 'Fort Santiago',
    image: 'https://i.imgur.com/oVY8kj2.jpeg',
  },
  {
    title: 'The Feeling',
    location: 'Smart Araneta Coliseum',
    image: 'https://i.imgur.com/02Y4tXT.jpeg',
  },
  {
    title: 'The Obelisk',
    location: 'Polytechnic University of the Philippines Manila',
    image: 'https://i.imgur.com/6LgLFZu.jpeg',
  },
];

const toolData = [
  { name: 'Photoshop', years: '9 years', color: '#31A8FF', percent: 100 },
  { name: 'DaVinci Resolve', years: '6 years', color: '#ED3B49', percent: 66 },
  { name: 'CapCut', years: '4 years', color: '#FFFFFF', percent: 44 },
  { name: 'Lightroom', years: '3 years', color: '#7DB0E8', percent: 33 },
  { name: 'Figma', years: '2 years', color: '#F24E1E', percent: 22 },
];

const videoTags = ['CapCut', 'DaVinci Resolve', 'Edits', '@oma1036'];
const designTags = ['Photoshop', 'Figma', 'Publications', 'Logos', 'Brand Identity'];
const photoTags = ['Lightroom', 'Photography', 'Color Grading', 'Personal Work'];

function renderVideoCards() {
  const grid = document.getElementById('video-grid');
  if (!grid) return;

  grid.innerHTML = videoData.map(video => `
    <article class="video-card">
      <iframe
        src="https://www.youtube.com/embed/${video.id}"
        title="${video.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy">
      </iframe>
    </article>
  `).join('');

  const tagContainer = document.getElementById('video-tags');
  if (tagContainer) {
    tagContainer.innerHTML = videoTags.map(tag => `<span class="tag">${tag}</span>`).join('');
  }
}

function renderDesignCards() {
  const grid = document.getElementById('design-grid');
  if (!grid) return;

  grid.innerHTML = designCards.map(card => `
    <article class="design-card">
      <img src="${card.image}" alt="${card.title}" loading="lazy" />
      <div class="card-overlay">
        <strong>${card.title}</strong>
        <p>${card.description}</p>
      </div>
    </article>
  `).join('');

  const tagContainer = document.getElementById('design-tags');
  if (tagContainer) {
    tagContainer.innerHTML = designTags.map(tag => `<span class="tag">${tag}</span>`).join('');
  }
}

function renderPhotoCards() {
  const grid = document.getElementById('photo-grid');
  if (!grid) return;

  grid.innerHTML = photoCards.map(card => `
    <article class="photo-card">
      <img src="${card.image}" alt="${card.title}" loading="lazy" />
      <div class="card-overlay">
        <strong>${card.title}</strong>
        <p>${card.location}</p>
      </div>
    </article>
  `).join('');

  const tagContainer = document.getElementById('photo-tags');
  if (tagContainer) {
    tagContainer.innerHTML = photoTags.map(tag => `<span class="tag">${tag}</span>`).join('');
  }
}

function renderTools() {
  const list = document.getElementById('tools-list');
  if (!list) return;
  list.innerHTML = toolData.map(tool => `
    <div class="tool-row">
      <div class="tool-name" style="color:${tool.color};">${tool.name}</div>
      <div class="tool-bar">
        <div class="tool-fill" style="background:${tool.color}; width:${tool.percent}%"></div>
      </div>
      <div class="tool-years">${tool.years}</div>
    </div>
  `).join('');
}

function setupMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.hidden;
    menu.hidden = !isOpen;
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

renderVideoCards();
renderDesignCards();
renderPhotoCards();
renderTools();
setupMobileNav();
initSmoothAnchors();
