const sliderContainer = document.getElementById('slider');
const apiUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';
let currentIndex = 0;
let intervalId;
let speed = 6;

function fetchImages() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayImages(data);
            startAutoPlay();
        }
    };
    xhr.send();
}

function displayImages(images) {
    sliderContainer.innerHTML = '';
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('slider-item');
        const img = document.createElement('img');
        img.src = image.url;
        const text = document.createElement('p');
        text.textContent = image.title;
        item.appendChild(img);
        item.appendChild(text);
        sliderContainer.appendChild(item);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderContainer.children.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderContainer.children.length) % sliderContainer.children.length;
    updateSlider();
}

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startAutoPlay() {
    stopAutoPlay();
    intervalId = setInterval(() => {
        nextSlide();
    }, speed * 1000);
}

function stopAutoPlay() {
    clearInterval(intervalId);
}

function setSpeed(newSpeed) {
    speed = newSpeed;
    startAutoPlay();
}

// Fetch images and start the slider
fetchImages();
