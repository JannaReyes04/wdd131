const temples = [
  {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah",
      dedicated: "April 6, 1893",
      area: 253000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Logan Utah Temple",
      location: "Logan, Utah",
      dedicated: "May 17, 1884",
      area: 119619,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Manti Utah Temple",
      location: "Manti, Utah",
      dedicated: "May 21, 1888",
      area: 100373,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Laie Hawaii Temple",
      location: "Laie, Oahu, Hawaii",
      dedicated: "November 27, 1919",
      area: 48740,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Cardston Alberta Temple",
      location: "Cardston, Alberta, Canada",
      dedicated: "August 26, 1923",
      area: 56682,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-13287-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Idaho Falls Idaho Temple",
      location: "Idaho Falls, Idaho",
      dedicated: "September 23, 1945",
      area: 92184,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-55801-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Bern Switzerland Temple",
      location: "Zollikofen, Switzerland",
      dedicated: "October 31, 1955",
      area: 48257,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "London England Temple",
      location: "Newchapel, Surrey, England",
      dedicated: "September 7, 1958",
      area: 46738,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Oakland California Temple",
      location: "Oakland, California",
      dedicated: "November 17, 1964",
      area: 95000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Rexburg Idaho Temple",
      location: "Rexburg, Idaho",
      dedicated: "February 10, 2008",
      area: 57652,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-1057-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "March 10, 2019",
      area: 40000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Paris France Temple",
      location: "Le Chesnay-Rocquencourt, France",
      dedicated: "May 21, 2017",
      area: 46330,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
  {
      name: "Manila Philippines Temple",
      location: "Quezon City, Metro Manila, Philippines",
      dedicated: "September 25, 1984",
      area: 26542,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg",
      width: 800, // Replace with actual optimized width if you optimize and host locally
      height: 533, // Replace with actual optimized height if you optimize and host locally
  },
];

const gallery = document.getElementById('gallery');
const navMenu = document.getElementById('nav-menu');

console.log("Gallery element:", gallery);

function displayTemples(templesArray) {
  console.log("displayTemples called with:", templesArray);

  if (!gallery) {
      console.error("Error: Gallery element not found!");
      return;
  }

  gallery.innerHTML = ''; // Clear existing content

  templesArray.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add('temple-card');

      const name = document.createElement('h3');
      name.classList.add('temple-name');
      name.textContent = temple.name;

      const location = document.createElement('p');
      location.classList.add('temple-location');
      location.textContent = `Location: ${temple.location}`;

      const dedicated = document.createElement('p');
      dedicated.classList.add('temple-dedicated');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;

      const area = document.createElement('p');
      area.classList.add('temple-area');
      area.textContent = `Size: ${temple.area} sq ft`;

      const image = document.createElement('img');
      image.src = temple.image;
      image.alt = `${temple.name} Temple`;
      image.loading = 'lazy';
      image.width = temple.width; // Set the width attribute
      image.height = temple.height; // Set the height attribute

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
      card.appendChild(image);

      gallery.appendChild(card);
      console.log("Creating card for:", temple.name); // Log when a card is created
  });
}

function filterOld() {
  const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[1]) < 1900);
  displayTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(', ')[1]) > 2000);
  displayTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

function displayAll() {
  console.log("displayAll called. Temples array:", temples);
  displayTemples(temples);
}

navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
      event.preventDefault();
      const filter = event.target.getAttribute('href').substring(1); // Remove the '#'

      switch (filter) {
          case 'old':
              filterOld();
              break;
          case 'new':
              filterNew();
              break;
          case 'large':
              filterLarge();
              break;
          case 'small':
              filterSmall();
              break;
          case 'home':
              displayAll();
              break;
          default:
              displayAll();
              break;
      }
  }
});

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('currentyear');
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  const lastModifiedSpan = document.getElementById('lastModified');
  const lastModifiedDate = new Date(document.lastModified);
  const formattedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
  lastModifiedSpan.textContent = `Last Modified: ${formattedDate}`;
});

// Initial display of all temples
displayAll();