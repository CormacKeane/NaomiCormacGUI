const box = document.querySelectorAll('.selectionBox');
let draggedElement=null;
const dropZones = document.querySelectorAll('section');

//assigning drag to boxes
box.forEach((el) => {
    box.ondragstart = function(e) {
        draggedElement = e.target;
        this.style.opacity = '0.5';
    }

    box.ondragend = function(e) {
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

        // Only allow drop if the zone is empty
        /*if (this.children.length === 0 && draggedElement) {
            this.appendChild(draggedElement);
        } else {
            alert("one box per zone!")
        }*/
    });
});




