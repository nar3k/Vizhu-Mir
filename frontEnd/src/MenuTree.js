import Contacts from './Contacts'
import Lenses from './Lenses'
import Glasses from './Glasses'
import Home from './Home'

const MenuTree= [
  { key:0, name: 'Добро пожаловать', icon: 'home', to:'/home' ,component:Home},
  { key:1, name: 'Очки', icon: 'radio',to:'/glasses',component:Glasses},
  { key:2, name: 'Контактные линзы', icon: 'genderless',to:'/lenses',component:Lenses },
  { key:3, name: 'Контакты', icon: 'map',to:'/contacts',component:Contacts},
]
export default MenuTree
