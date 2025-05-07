//selection boxes
const box = document.querySelectorAll('.selectionBox');
let draggedElement=null;
//dropzones
const dropZones = document.querySelectorAll('section');
//og spot
const boxCon=document.querySelector('.box-container');

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

    for (let i = 0; i < dropZones.length; i++) {
        const zone = dropZones[i];

        if (zone.children.length > 0) {
            if (i === 0) {
                zone1 =zone.children[0].textContent
            } else if (i === 1) {
                zone2 =zone.children[0].textContent
            }
        } else {
            console.log("Dropzone "+(i + 1)+" is empty");
        }
    }

    console.log(zone1+" and "+zone2);
}