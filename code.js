function get_random_image() {
    var image_array = [
      '/img/lagna.jpeg',
      '/img/lagna1.jpeg',
      '/img/sangiulio.jpeg',
      '/img/gatozzo.jpeg'
    ];
    const random_index = Math.floor(Math.random() * image_array.length);
    const selected_image = image_array[random_index];
    return selected_image;
}

document.getElementById("homeph").src = get_random_image();
