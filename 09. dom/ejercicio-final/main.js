const header = document.querySelector('header');
const navigation = document.createElement('nav');
navigation.classList.add('nav-bar');
header.appendChild(navigation);

const navigation_grid = document.createElement('div');
navigation_grid.classList.add('grid-nav-bar');
navigation.appendChild(navigation_grid)

const navigation_column = document.createElement('div');
navigation_column.classList.add('grid-nav-bar-col');
navigation_grid.appendChild(navigation_column);

const navigation_image = document.createElement('img');
navigation_image.src = 'images/logo-BPproject-horizontal-fuente.svg';
navigation_image.classList.add('nav-image-dimension')
navigation_column.appendChild(navigation_image);