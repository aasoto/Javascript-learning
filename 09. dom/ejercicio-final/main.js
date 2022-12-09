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
param_input.classList.add('input-big')
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
let types = ['ganadora', 'finalista', 'designada']
let countries = ['colombia', 'venezuela', 'mexico', 'brasil']

let add_card_title = ''
const add_card = document.querySelector('#add')
let card = ''
let card_title = ''
let card_body = ''
let card_footer = ''
let card_footer_content = ''
let counter = 0
/**Fields body card */
let label_name = ''
let name = ''
let type_input = ''
let label_country = ''
let country = ''
/**Buttons footer card */
let button_save = ''
let button_remove = ''

const card_grid = document.createElement('div')
card_grid.classList.add('grid-3')
main.appendChild(card_grid)

let card_col = ''

function content_body_card(){
  /**Add name input */
  label_name = document.createElement('label')
  label_name.textContent = 'Nombre'
  label_name.for = "name-"+counter
  name = document.createElement('input')
  name.classList.add('input')
  name.id = "name-"+counter
  card_body.append(label_name, name)
  /**Add type contestant */
  let type_name = ''
  types.forEach(type =>{
    type_input = document.createElement('input')
    type_input.type = 'radio'
    type_input.name = 'type-'+counter
    type_input.value = type
    type_name = document.createElement('span')
    type_name.classList.add('span-card')
    type_name.textContent = type
    card_body.append(type_input, type_name)
  })
  /**Add countries */
  label_country = document.createElement('label')
  label_country.textContent = 'País'
  country = document.createElement('select')
  country.id = 'country-'+counter
  country.name = 'country-'+counter
  card_body.append(label_country, country)
  let country_option = ''
  countries.forEach(c =>{
    country_option = document.createElement('option')
    country_option.value = c
    country_option.classList.add('capitalize')
    country_option.textContent = c
    country.append(country_option)
  })
}

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
  card.appendChild(card_body)
  content_body_card()
  //add card footer
  card_footer = document.createElement('div')
  card_footer.classList.add('card-footer')
  card.appendChild(card_footer)
  card_footer_content = document.createElement('div')
  card_footer.appendChild(card_footer_content)
  buttons_footer_card()

  counter = counter + 1
})