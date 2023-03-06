import Gallery from "../gallery/build-gallery";

const screenWidth = window.innerWidth;

const gallery = new Gallery;
gallery.numberOfItemsPerPage(screenWidth);
gallery.randomCoctails();
gallery.getRandomData();
