document.addEventListener('DOMContentLoaded', () => {
    const currentPhoto = document.getElementById('currentPhoto');
    const photoDescription = document.getElementById('photoDescription');
    const gallerySection = document.getElementById('gallery');

    const photos = [
        { src: './eiffiel.jpg.jpg', description: 'Effiel tower under the sky.' },
        { src: './eiffiel.jpg', description: 'Effiel tower under the sky.' }
    ];

    let currentIndex = 0;

    function updatePhoto() {
        const photo = photos[currentIndex];
        currentPhoto.src = photo.src;
        photoDescription.textContent = photo.description;
    }

    document.getElementById('viewGallery').addEventListener('click', () => {
        gallerySection.innerHTML = photos.map((photo, index) => `
            <img src="${photo.src}" alt="Thumbnail of ${photo.description}" 
                tabindex="0" onclick="selectPhoto(${index})" />
        `).join('');
        gallerySection.removeAttribute('aria-hidden');
    });

    window.selectPhoto = (index) => {
        currentIndex = index;
        updatePhoto();
    };

    updatePhoto();
});
