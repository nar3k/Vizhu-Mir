import Contacts from './Contacts'


const MenuTree= [
  { key:0, name: 'Добро пожаловать', icon: 'home', to:'/' ,component:Contacts},
  { key:1, name: 'Очки', icon: 'radio',to:'/glasses',component:Contacts},
  { key:2, name: 'Контактные линзы', icon: 'genderless',to:'/lenses',component:Contacts },
  { key:3, name: 'Контакты', icon: 'map',to:'/contacts',component:Contacts},
]
export default MenuTree
