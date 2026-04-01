function showInfo(element) {
    const preview = document.getElementById('image');
    preview.innerText = element.alt;
    preview.style.backgroundImage = `url('${element.src}')`;
}

function resetInfo() {
    const preview = document.getElementById('image');
    preview.innerText = 'Hover over an image below to display here.';
    preview.style.backgroundImage = "url('')";
}

function addTabFocus() {
    console.log('Page loaded. Adding tabindex attributes to gallery images.');
    const images = document.querySelectorAll('.gallery img');

    for (let i = 0; i < images.length; i += 1) {
        images[i].setAttribute('tabindex', '0');
    }
}
