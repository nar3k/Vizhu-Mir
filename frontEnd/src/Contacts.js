import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import {Message,Popup,Grid,Header,Icon,Container,Divider,Image} from 'semantic-ui-react'



const vizhuIcon = (
  <div style={{borderRadius: '100%', overflow: 'hidden'}}>
          <img src="http://vizhu-mir.s3-website-us-east-1.amazonaws.com/static/icon.png"/>
    </div>
  )

const stores = [
  {
    name:"Филевский парк, ТЦ «Мини молл»",
    address:"Москва, ул. Минская, д.14а, метро Филевский Парк, ТЦ «Мини Молл»",
    howToGet:"Мы находимся на 0 этаже  в прикассовой зоне «Перекрестка»",
    time:"Мы работаем каждый день с 10 до 21",
    phones:["+7 (916) 804-43-68"],
    imgs:['FP/3.jpg','FP/4.jpg','FP/5.jpg'],

    map: {
      center:[55.739349, 37.484090],
      zoom:17,
      lat:55.738821,
      lon:37.485139,
    },
  },
  {
    name:"Университет, ТЦ «Университи»",
    address:"Площадь Джавахарлалу Неру, д. 1, метро Университет, ТЦ «Университи» 2 этаж",
    howToGet:"Мы находимся на 2 этаже сразу возле эскалатора",
    time:"Мы работаем каждый день с 10 до 21",
    phones:["+7 (985) 416-79-93"],
    imgs:['UN/1.jpg','UN/2.jpg','UN/3.jpg'],
    map: {
      center:[55.693454, 37.533439],
      zoom:17,
      lat:55.693211,
      lon:37.533757,
    },
  },
  {
    //55.693211, 37.533757
    name:"Проспект Вернадского, ТЦ «Обувь-Сити»",
    address:"Москва, проспект Вернадского, д. 14а, метро Проспект Вернадского, ТЦ «Обувь Сити»",
    howToGet:"Мы находимся на 1 этаже сразу возле входа",
    time:"Мы работаем каждый день с 10 до 20",
    phones:["+7 (965) 346-01-90","+7 (499) 350-15-50"],
    imgs:['PV/1.jpg','PV/2.jpg','PV/3.jpg'],
    map: {
      center:[55.677956, 37.506233],
      zoom:17,
      lat:55.677851,
      lon:37.506717,
    },
  },
  {
    //55.693211, 37.533757
    name:"Центральный офис",
    address:"г. Москва, ул. Вавилова, д. 66 ТЦ «Триумфальный»",
    howToGet:"Мы находимся на 2 этаже ",
    time:"Офис работает в будние дни с 10 до 19",
    phones:["+7 (926) 100-15-12","+7 (905) 550-02-55","+7 (926) 317-31-13"],
    email:['1467529@gmail.com'],
    map: {
      center:[55.685304, 37.548942],
      zoom:14,
      lat:55.682419,
      lon:37.549328,
    },
  },

]

const Contacts = () => (
  <div >
    <Container>
      <Header as='h1'>Наши магазины и центральный офис</Header>
    </Container>
    {
      stores.map((store,key)=> (
    <Message>
    <Grid columns={2} divided stackable>
    <Grid.Column width={11}>
      <Header size='small'>
        {store.name}
      </Header>
      <Divider/>
      <Container text textAlign='left' >
      <Icon name='map' /> {store.address}<br/>
      <Icon name='location arrow' /> {store.howToGet}<br/>
      <Icon name='calendar' /> {store.time}<br/>
      {
        store.phones.map((phone,index)=>(
          <div>
            <Icon name='call' ></Icon>
             <a href={'tel:'+phone}>{phone}</a>
           </div>
        ))
      }
        {
          !!store.email ? <div><Icon name='mail'/> {store.email} </div>:  ''
        }

    </Container>

    { !!store.imgs ?
      <div>
    <Divider/>
    <Grid columns={3} >
      {
        store.imgs.map((img,index)=>(
          <Grid.Column only={['tablet','computer']}>
            <Image src={"http://vizhu-mir.s3-website-us-east-1.amazonaws.com/static/"+img}/>
          </Grid.Column>
        ))
      }
    </Grid>
    </div>
    : ''
  }
    </Grid.Column>
    <Grid.Column width={5} verticalAlign>
    <Map onAPIAvailable={function () { console.log('API loaded'); }}
      center={store.map.center} zoom={store.map.zoom}
      width={400}
      height={400}>
      <Marker lat={store.map.lat} lon={store.map.lon}>
          <MarkerLayout>
           {vizhuIcon}

          </MarkerLayout>
        </Marker>
    </Map>
  </Grid.Column>
  </Grid>
    </Message>
    ))
  }
  </div>

);


export default Contacts;
