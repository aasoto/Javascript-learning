/**---------- BARRA DE NAVEGACIÓN --------- */
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

/**---------- CUERPO DE LA PÁGINA ------------ */
const main = document.querySelector('main')
main.classList.add('main-dimension')
const param_grid = document.createElement('div')
param_grid.classList.add('grid-3')
main.appendChild(param_grid)

const param_col_2 = document.createElement('div')
param_col_2.classList.add('col-2')
param_grid.appendChild(param_col_2)

const param_input = document.createElement('input')
param_input.classList.add('input')
param_input.id="title"
param_col_2.appendChild(param_input)

const param_col_1 = document.createElement('div')
param_col_1.classList.add('col-1')
param_grid.appendChild(param_col_1)

const param_button = document.createElement('button')
param_button.classList.add('btn-primary-full')
param_button.textContent = 'Agregar'
param_button.id="add"
param_col_1.appendChild(param_button)

/**-------------- EVENTOS --------------- */
let cards = {
  title: '',
  type: []
}

let add_card_title = ''
const add_card = document.querySelector('#add')
let card = ''
let card_title = ''
let card_body = ''
let card_footer = ''
let card_footer_content = ''
let counter = 0
let button_save = ''
let button_remove = ''

const card_grid = document.createElement('div')
card_grid.classList.add('grid-3')
main.appendChild(card_grid)

let card_col = ''

function buttons_footer_card(){
  button_save = document.createElement('button')
  button_save.classList.add('btn-secondary')
  button_save.textContent = 'Enviar'
  button_remove = document.createElement('button')
  button_remove.classList.add('btn-danger')
  button_remove.textContent = 'Eliminar'
  card_footer_content.append(button_remove, button_save)
}

add_card.addEventListener('click', function (e) {
  //add column
  card_col = document.createElement('div')
  card_col.classList.add('col-1')
  card_grid.appendChild(card_col)
  //add card body
  card = document.createElement('div')
  card.classList.add('card')
  card.id = 'card-'+counter
  card_col.appendChild(card)
  //add card head and title
  card_title = document.createElement('div')
  card_title.classList.add('card-primary-header')
  add_card_title = document.querySelector('#title')
  card_title.textContent = add_card_title.value
  card.appendChild(card_title)
  //add card body
  card_body = document.createElement('div')
  card_body.classList.add('card-body')
  card_body.textContent = 'Cuerpo de la tarjeta'
  card.appendChild(card_body)
  //add card footer
  card_footer = document.createElement('div')
  card_footer.classList.add('card-footer')
  card.appendChild(card_footer)
  card_footer_content = document.createElement('div')
  card_footer.appendChild(card_footer_content)
  buttons_footer_card()

  counter = counter + 1
})