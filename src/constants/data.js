import images from "./images";

const dishes = [
  {
    key:'01',
    imageUrl: images.image01,
    title: "Carne Mechada(Shredded Beef)",
    description:
      " Savory and tangy shredded beef slow-cooked in flavorful Venezuelan stew",
  },
  {
    key:'02',
    imageUrl: images.image02,
    title: "Pollo Mechada(Shredded Chicken)",
    description:
      " Shredded chicken cooked with onions, bell peppers, and a traditional mix of Venezuelan spices",
  },
  {
    key:'03',
    imageUrl: images.image03,
    title: "Queso (Mozarella Cheese)",
    description:
      " The popular version of a cachapa filled with cheese, a perfect balance of savory and sweet"
  },
  { key:'04',
    imageUrl: images.image04,
    title: "Papelon con Limon (Venezuelan Lemonade)",
    description:
      " Refreshing Venezuelan lemonade made with Panela (raw sugar) and lemon",
  },


];
const gallery=[ 
  {imageUrl:images.gallery01, 
  id:'1'}, 
  {imageUrl:images.gallery02, 
    id:'2'}, 
    {imageUrl:images.gallery01, 
      id:'3'}, 
]
export default {dishes,gallery};
