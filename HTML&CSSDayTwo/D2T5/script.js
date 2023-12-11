document.addEventListener("DOMContentLoaded", function() {
    var dropContainer = document.getElementById("drop-container");
    var draggableImage = document.getElementById("draggable-image");

    dropContainer.addEventListener("drop", function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        var draggedElement = document.getElementById(data);
        event.target.appendChild(draggedElement);
    });

    dropContainer.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    draggableImage.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    });
});
