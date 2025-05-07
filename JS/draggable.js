//selection boxes
const box = document.querySelectorAll('.selectionBox');
let draggedElement=null;
//dropzones
const dropZones = document.querySelectorAll('section');
//og spot
const boxCon=document.querySelector('.box-container');


//swaps to genre page from index
function Genre() {
    window.location.href="genrePage.html";
}

//assigning drag to boxes
box.forEach((el) => {
    el.ondragstart = function(e) {
        draggedElement = e.target;
        this.style.opacity = '0.5';
    }

    el.ondragend = function(e) {
        this.style.opacity = '1';
    }
})


// Assign drop logic to all zones
dropZones.forEach(zone => {
    zone.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('over');
    });

    zone.addEventListener('dragleave', function () {
        this.classList.remove('over');
    });

    zone.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('over');

        // Only allow drop if the dropzone's empty
        if (this.children.length === 0 && draggedElement) {
            this.appendChild(draggedElement);
        } else {
            alert("one box per zone!")
        }
    });
});

//allows reseting box to og spot
boxCon.addEventListener('dragover', function (e) {
    e.preventDefault();
});

boxCon.addEventListener('drop', function (e) {
    e.preventDefault();
    if(draggedElement) {
        this.appendChild(draggedElement);
    }
})


function whatGenres() {
    let zone1 = null;
    let zone2 = null;
    let zoneOne = null;
    let zoneTwo = null;


    for (let i = 0; i < dropZones.length; i++) {
        const zone = dropZones[i];

        if (zone.children.length > 0) {
            const genreName=zone.children[0].textContent.trim();
            if (i === 0) {
                zoneOne =zone.children[0].textContent
                zone1 =genre[genreName];
            } else if (i === 1) {
                zoneTwo =zone.children[0].textContent
                zone2 =genre[genreName];
            }
        } else {
            console.log("Dropzone "+(i + 1)+" is empty");
        }
    }

    console.log(zoneOne+" and "+zoneTwo);
    sortGenre(zone1,zone2);
}

function sortGenre(zone1,zone2) {
    const overlappingBooks = zone1.filter(book => zone2.includes(book));

    sessionStorage.setItem('overlappingBooks', JSON.stringify(overlappingBooks));
    window.location.href="filteredPage.html";
}




function populateCarousel(imageArray, carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);

    // Clear existing items (except genre label if needed)
    const genreLabel = carousel.querySelector('.carousel-genre-name');
    carousel.innerHTML = '';
    if (genreLabel) carousel.appendChild(genreLabel); // Keep the label

    imageArray.forEach((fileName, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item' + (index === 0 ? ' active' : '');
        item.innerHTML = `
      <img class="d-block w-100 carousel-size" src="/img/${fileName}" alt="${fileName}">
    `;
        carousel.appendChild(item);
    });
}





const genre = {

    Romance: ["The Love Hypothesis",
        "The Spanish Love Deception",
        "Flirting Lessons",
        "The Exiled Prince",
        "Mine for Tonight",
        "Crown of Wrath",
        "Stardust Child",
        "Bound By Fire and Scales",
        "Winter's Fate",
        "Love at First Flight",
        "Home is Where the Sunflower Grows",
        "Hear My Heart",
        "Storm and Sea",
        "Only Hope",
        "Fable for the End of the World",
        "The Duke and I",
        "The Viscount Who Loved Me",
        "An Offer from a Gentleman",
        "Romancing Mr. Bridgerton",
        "To Sir Philip, With Love",
        "When He Was Wicked",
        "It's In His Kiss",
        "Red, White & Royal Blue",
        "The Song of Achilles",
        "The Love Lyric",
        "Scythe",
        "Divergent",
        "Insurgent",
        "Allegiant",
        "Matched",
        "Shatter Me",
        "The Selection",
        "Delirium",
        "Red Queen",
        "Legend",
        "The 5th Wave",
        "Unravel Me",
        "The Darkest Minds",
        "Angelfall",
        "Ignite Me",
        "Interview with the Vampire",
        "The Vampire Lestat",
        "One Dark Window",
        "Gray After Dark",
        "Frankenstein",
        "The Fault in Our Stars",
        "Thirteen Reasons Why",
        "Wicked",
        "Vampire Academy",
        "Beautiful Creatures",
        "Ella Enchanted",
        "Switched",
        "Graceling",
        "Pretty Little Liars",
        "The Vincent Brothers",
        "Poison Study",
        "The Darkest Pleasure",
        "Born at Midnight", "Powerless",
        "Once Upon a Broken Heart",
        "The Ballad of Never After",
        "A Curse for True Love",
        "Legendborn",
        "Yumi and the Nightmare Painter",
        "The Sun and the Star",
        "The King of Battle and Blood",
        "Curse of Shadows and Thorns",
        "City of Bones",
        "One Dark Window"],

    Dystopian: ["Unwind",
        "Thunderhead",
        "Scythe",
        "Divergent",
        "Insurgent",
        "Allegiant",
        "The Maze Runner",
        "Matched",
        "Shatter Me",
        "The Selection",
        "Delirium",
        "Red Queen",
        "Red Rising",
        "Legend",
        "The 5th Wave",
        "Unravel Me",
        "The Darkest Minds",
        "The Handmaid’s Tale",
        "Angelfall",
        "Ignite Me",
        "Fable for the End of the World",
        "The Stand",
        "World War Z",
        "Bird Box",
        "Poison Study",
    ],


    Horror: ["When the Bones Sing",
        "It",
        "The Shining",
        "Mexican Gothic",
        "Misery",
        "Salem's Lot",
        "The Stand",
        "World War Z",
        "Bird Box",
        "Coraline",
        "The Exorcist",
        "Cujo",
        "Interview with the Vampire",
        "The Vampire Lestat",
        "Home is Where the Bodies Are",
        "That's Not My Name",
        "One Dark Window",
        "Gray After Dark",
        "The Silence of the Lambs",
        "Frankenstein",
        "Fable for the End of the World",
        "The 5th Wave",
        "The Handmaid’s Tale",
        "Angelfall",
    ],

    Young_Adult: ["The Fault in Our Stars",
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Deathly Hallows",
        "Harry Potter and the Order of the Phoenix",
        "Harry Potter and the Half-Blood Prince",
        "Harry Potter and the Prisoner of Azkaban",
        "Thirteen Reasons Why",
        "Wicked",
        "Vampire Academy",
        "Beautiful Creatures",
        "Ella Enchanted",
        "Switched",
        "Graceling",
        "Pretty Little Liars",
        "The Vincent Brothers",
        "Poison Study",
        "The Darkest Pleasure",
        "Born at Midnight",
        "Vampire Academy",
        "Pretty Little Liars",
        "Poison Study",
        "The Darkest Pleasure",
        "The Familiar",
        "The King of Battle and Blood",
        "City of Bones",
        "One Dark Window"
    ],

    Fantasy:["Somewhere Beyond the Sea",
        "The Familiar",
        "The Ballad of Songbirds and Snakes",
        "Powerless",
        "The Midnight Library",
        "Once Upon a Broken Heart",
        "The Ballad of Never After",
        "A Curse for True Love",
        "The Chalice of the Gods",
        "Legendborn",
        "The Atlas Six",
        "Yumi and the Nightmare Painter",
        "The Sun and the Star",
        "The King of Battle and Blood",
        "Curse of Shadows and Thorns",
        "The Hunger Games",
        "Catching Fire",
        "Mockingjay",
        "The Sunlit Man",
        "I Am Made of Death",
        "The Lightning Thief",
        "The Sea of Monsters",
        "The Titan’s Curse",
        "City of Bones",
        "One Dark Window",
        "The Exiled Prince",
        "Crown of Wrath",
        "Stardust Child",
        "Bound By Fire and Scales",
        "Winter's Fate",
        "The Duke and I",
        "The Viscount Who Loved Me",
        "Romancing Mr. Bridgerton",
        "Red, White & Royal Blue",
        "The Song of Achilles",
        "Shatter Me",
        "The Selection",
        "Red Queen",
        "Red Rising",
        "The Darkest Minds",
        "Angelfall",
        "Ignite Me",
        "Interview with the Vampire",
        "The Vampire Lestat",
        "The Fault in Our Stars",
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Deathly Hallows",
        "Harry Potter and the Order of the Phoenix",
        "Harry Potter and the Half-Blood Prince",
        "Harry Potter and the Prisoner of Azkaban",
        "Thirteen Reasons Why",
        "Wicked",
        "Vampire Academy",
        "Beautiful Creatures",
        "Ella Enchanted",
        "Switched",
        "Graceling",
        "Pretty Little Liars",
        "The Vincent Brothers",
        "Poison Study",
        "The Darkest Pleasure",
        "Born at Midnight"
    ]

}
