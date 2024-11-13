import hamburger_Icon from './hamburger_icon.png'
import close_icon from './close_icon.png'
import homepageImage from './homepage.jpg.png';
import lodge_background from './room_background.png'

import tea_icon  from './tea_icon.png'
import milk_tea from './milk_tea.jpg'
import black_tea from './black_tea.jpg'
import lemon_tea from './lemon_tea.jpg'
import ginger_tea from './ginger_tea.jpg'
import milk_coffee from './milk_coffee.jpg'
import black_coffee from './black_coffee.jpg'
import milk from './milk.jpg'
import hot_lemon from './hot_lemon.jpg'

import breakfast from './breakfast.jpg'
import puritarkari from './puritarkari.jpg'
import rooti from './rooti.jpg'
import aloo_fry from './aloo_fry.jpg'
import aloo_jeera from './aloo_jeera.jpg'
import chana_fry from './chana_fry.jpg'
import aloo_kerau from './aloo_kerau.jpg'
import boiled_egg from './boiled_egg.jpg'
import veg_sandwitch from './veg_sandwitch.jpg'
import chicken_sandwitch from './chicken_sandwitch.jpg'

import thukpa_icon from './thukpa_icon.jpg'
import chicken_thukpa from './chicken_thukpa.jpg'
import buff_thukpa from './buff_thukpa.jpg'
import mutton_thukpa from './mutton_thukpa.jpg'
import mix_thukpa from './mix_thukpa.jpg'
import egg_thukpa from './egg_thukpa.jpg'

import vegkhana1 from './vegkhana1.png';
import chickenkhana from './chickenkhana.png';
import muttonkhana from './muttonkhana.jpg';
import egg_khana from './anda_khana.jpg';
import matcha_khana from './matcha_khana.jpg';

import khajaset from './khajaset.jpg'
import vegkhajaset from './vegkhajaset.jpg'
import chicken_khaja from './chicken_khaja.jpg'
import mutton_khaja from './mutton_khaja.jpg'
import egg_khaja from './egg_khaja.jpg'
import mix_khaja from './mix_khaja.jpg'


import momo from './momos.jpeg';
import chowmein from './chowmein.png';
import vegkhana from './vegkhana.jpg';
import masu from './masu.png';
import plus from './plus.png';
import searchIcon from './search_icon.png';
import vegmomo from './veg_momo.jpg';
import chickenmomo from './chicken momo.jpg';
import frymomo from './fried_momo.jpg'
import buffmomo from './buffmomo.jpg';
import vegchowmein from './vegchowmein.jpg';
import chickenchowmein from './chickenchowmein.jpg';
import buffchowmein from './buffchowmein.jpg';

export const assets ={
    hamburger_Icon,
    close_icon,
    homepageImage,
    lodge_background,

    tea_icon,
    milk_tea,
    black_tea,
    lemon_tea,
    ginger_tea,
    milk_coffee,
    black_coffee,
    milk,
    hot_lemon,

    breakfast,
    puritarkari,
    rooti,
    aloo_fry,
    aloo_jeera,
    chana_fry,
    aloo_kerau,
    rooti,
    boiled_egg,
    veg_sandwitch,
    chicken_sandwitch,

    thukpa_icon,
    chicken_thukpa,
    buff_thukpa,
    mutton_thukpa,
    mix_thukpa,
    egg_thukpa,

    vegkhana1,
    chickenkhana,
    muttonkhana,
    egg_khana,
    matcha_khana,

    khajaset,
    vegkhajaset,
    chicken_khaja,
    mutton_khaja,
    egg_khaja,
    mix_khaja,

    momo,
    chowmein,
    vegkhana,
    masu,
    plus,
    searchIcon,
    vegmomo,
    chickenmomo,
    buffmomo,
    vegchowmein,
    chickenchowmein,
    buffchowmein,
    frymomo,


}
export const category_list = [
    {
        category_name: "Momo",
        category_image:frymomo
    },
    {
        category_name: "Chowmein",
        category_image:vegchowmein
    },
    {
        category_name: "Khana Set",
        category_image:vegkhana
    },
    {
        category_name: "Khaja Set",
        category_image:khajaset
    },
    {
        category_name: "Breakfast",
        category_image:breakfast
    },

    {
        category_name: "Tea/Coffee",
        category_image:tea_icon
    },
    {
        category_name: "Thukpa",
        category_image:thukpa_icon
    },
    
]

export const food_list =[

    {
        _id: "20",
        name: "Milk Tea",
        image: milk_tea,
        price:30,
        description:"We brew premium tea, add fresh milk and sugar, and serve it hot",
        category:"Tea/Coffee"
    },
    {
        _id: "21",
        name: "Black Tea",
        image: black_tea,
        price:20,
        description:"We brew premium black tea leaves for a rich, bold flavor, served hot",
        category:"Tea/Coffee"
    },
    {
        _id: "22",
        name: "Lemon Tea",
        image: lemon_tea,
        price:25,
        description:"We brew fresh black tea and add a splash of zesty lemon for a refreshing, tangy drink, served hot",
        category:"Tea/Coffee"
    },
    {
        _id: "23",
        name: "Ginger Tea",
        image: ginger_tea,
        price:'N/A',
        description:"We brew aromatic ginger with premium tea leaves for a warm, soothing drink, served hot for a refreshing kick.",
        category:"Tea/Coffee"
    },
    {
        _id: "24",
        name: "Milk Coffee",
        image: milk_coffee,
        price: 60,
        description:"We brew rich coffee and combine it with smooth milk for a creamy, bold flavor, served hot.",
        category:"Tea/Coffee"
    },
    {
        _id: "25",
        name: "Black Coffee",
        image: black_coffee,
        price: 40,
        description:"We brew premium coffee beans for a rich, bold flavor, served black and fresh, hot.",
        category:"Tea/Coffee"
    },
    {
        _id: "26",
        name: "Milk Glass",
        image: milk,
        price: 40,
        description:"We serve fresh, creamy milk, perfect on its own or paired with any of our beverages.",
        category:"Tea/Coffee"
    },
    {
        _id: "27",
        name: "Hot Lemon",
        image: hot_lemon,
        price: 'N/A',
        description:"We steep fresh lemon in hot water for a simple, soothing, and refreshing drink with a zesty kick.",
        category:"Tea/Coffee"
    },
    {
        _id: "28",
        name: "Alu Fry",
        image: aloo_fry,
        price:50,
        description:"A flavorful and crispy dish made from seasoned potatoes, pan-fried until golden and crunchy.",
        category:"Breakfast"
    },
    {
        _id: "29",
        name: "Alu Jeera",
        image: aloo_jeera,
        price:'50/60',
        description:"A quick, flavorful dish of boiled potatoes sautéed with cumin, turmeric, and spices. Simple, aromatic, and perfect as a side or snack.",
        category:"Breakfast"
    },
    {
        _id: "30",
        name: "Chana Fry",
        image: chana_fry,
        price:'50',
        description:"A quick, tasty dish made with chickpeas sautéed in spices, garlic, and onions. Crispy, flavorful, and perfect as a snack or side.",
        category:"Breakfast"
    },
    {
        _id: "31",
        name: "Alu Kerau",
        image: aloo_kerau,
        price:'30',
        description:"A delicious dish made with potatoes and peas cooked together in a spiced gravy. Simple, comforting, and perfect with roti or rice.",
        category:"Breakfast"
    },
    {
        _id: "32",
        name: "Sada Rooti",
        image: rooti,
        price:'20',
        description:"Made from whole wheat flour, cooked on a hot griddle. Soft, simple, and perfect with any curry or side dish.",
        category:"Breakfast"
    },
    {
        _id: "33",
        name: "Boiled Egg",
        image: boiled_egg,
        price:'30',
        description:" A simple, nutritious egg cooked in water until firm. Quick, versatile, and perfect as a snack or added to salads, sandwiches, or curries.",
        category:"Breakfast"
    },
    {
        _id: "34",
        name: "Veg Sandwich",
        image: veg_sandwitch,
        price:'N/A',
        description:" A quick, healthy sandwich filled with fresh vegetables like cucumber, tomato, and lettuce, often layered with cheese and spreads. Light, tasty, and perfect for a snack or light meal.",
        category:"Breakfast"
    },
    {
        _id: "35",
        name: "Chicken Sandwich",
        image: chicken_sandwitch,
        price:'N/A',
        description:" A quick, healthy sandwich filled with chicken slices and fresh vegetables like cucumber, tomato, and lettuce, often layered with cheese and spreads. Light, tasty, and perfect for a snack or light meal.",
        category:"Breakfast"
    },
    {
        _id: "36",
        name: "Chicken Thukpa",
        image: chicken_thukpa,
        price:'200',
        description:"Popular Nepali noodle soup with chicken, vegetables, and spices, served in a warm, flavorful broth",
        category:"Thukpa"
    },
    {
        _id: "37",
        name: "Buff Thukpa",
        image: buff_thukpa,
        price:'200',
        description:"Popular Nepali noodle soup with buffalo meat, vegetables, and spices, served in a warm, flavorful broth",
        category:"Thukpa"
    },
    {
        _id: "38",
        name: "Mutton Thukpa",
        image: mutton_thukpa,
        price:'300',
        description:"Popular Nepali noodle soup with mutton, vegetables, and spices, served in a warm, flavorful broth",
        category:"Thukpa"
    },
    {
        _id: "39",
        name: "Mix Thukpa",
        image: mix_thukpa,
        price:'350',
        description:"Popular Nepali noodle soup with mutton,chicken, buff, vegetables, and spices, served in a warm, flavorful broth",
        category:"Thukpa"
    },
    {
        _id: "40",
        name: "Egg Thukpa",
        image: egg_thukpa,
        price:'200',
        description:"Popular Nepali noodle soup with egg, vegetables, and spices, served in a warm, flavorful broth",
        category:"Thukpa"
    },

    {
        _id: "41",
        name: "Veg Khana",
        image: vegkhana1,
        price:200,
        description:"Traditional vegetarian dishes from Nepal, featuring a variety of lentils, rice, vegetables, and flavorful spices, often served with chutney and pickles for a wholesome, aromatic meal.",
        category:"Khana Set"
    },
    {
        _id: "42",
        name: "Chicken Khana",
        image: chickenkhana,
        price:300,
        description:"Traditional vegetarian dishes from Nepal, featuring a variety of Chicken, lentils, rice, vegetables, and flavorful spices, often served with chutney and pickles for a wholesome, aromatic meal.",
        category:"Khana Set"
    },
    {
        _id: "43",
        name: "Mutton Khana",
        image: muttonkhana,
        price:400,
        description:"Traditional vegetarian dishes from Nepal, featuring a variety of Mutton, lentils, rice, vegetables, and flavorful spices, often served with chutney and pickles for a wholesome, aromatic meal.",
        category:"Khana Set"
    },
    {
        _id: "43",
        name: "Fish Khana",
        image: matcha_khana,
        price:300,
        description:"Traditional vegetarian dishes from Nepal, featuring a variety of Fish, lentils, rice, vegetables, and flavorful spices, often served with chutney and pickles for a wholesome, aromatic meal.",
        category:"Khana Set"
    },
    {
        _id: "44",
        name: "Egg Khana",
        image: egg_khana,
        price:300,
        description:"Traditional vegetarian dishes from Nepal, featuring a variety of egg, lentils, rice, vegetables, and flavorful spices, often served with chutney and pickles for a wholesome, aromatic meal.",
        category:"Khana Set"
    },
    {
        _id: "45",
        name: "Chicken Khaja",
        image: chicken_khaja,
        price:250,
        description:"Chicken Khaja Set is a delicious meal with spiced chicken, rice flakes, curries, salads, and achar, offering a flavorful taste of Nepalese cuisine.",
        category:"Khaja Set"
    },
    {
        _id: "46",
        name: "Veg Khaja Set",
        image: vegkhajaset,
        price:180,
        description:"Veg Khaja Set is a delicious meal with rice flakes, curries, salads, and achar, offering a flavorful taste of Nepalese cuisine.",
        category:"Khaja Set"
    },
    {
        _id: "47",
        name: "Mutton Khaja",
        image: mutton_khaja,
        price:350,
        description:"Mutton Khaja Set is a delicious meal with spiced mutton, rice flakes, curries, salads, and achar, offering a flavorful taste of Nepalese cuisine.",
        category:"Khaja Set"
    },
    {
        _id: "48",
        name: "Egg Khaja",
        image: egg_khaja,
        price:250,
        description:"Egg Khaja Set is a delicious meal with boiled eggs, rice flakes, curries, salads, and achar, offering a flavorful taste of Nepalese cuisine.",
        category:"Khaja Set"
    },
    {
        _id: "48",
        name: "Mix Khaja",
        image: mix_khaja,
        price:400,
        description:"Mix Khaja Set is a delicious meal with spiced mutton, chicken, egg, rice flakes, curries, salads, and achar, offering a flavorful taste of Nepalese cuisine.",
        category:"Khaja Set"
    },
    {
        _id: "2",
        name: "Chicken Momo",
        image: chickenmomo,
        price:100,
        description:"Chicken and vegetables wrapped with spices and dough",
        category:"Momo"
    },
    {
        _id: "3",
        name: "Buff Momo",
        image: buffmomo,
        price:90,
        description:"Buffalo meat and vegetables wrapped with spices and dough",
        category:"Momo"
    },
    {
        _id: "4",
        name: "Veg Chowmein",
        image: vegchowmein,
        price:70,
        description:"Noodles with mix vegetables and sauces",
        category:"Chowmein"
    },
    {
        _id: "5",
        name: "Chicken Chowmein",
        image: chickenchowmein,
        price:90,
        description:"Noodles with mix vegetables, chicken pieces and sauces",
        category:"Chowmein"
    },
    {
        _id: "6",
        name: "Veg Chowmein",
        image: buffchowmein,
        price:85,
        description:"Noodles with mix vegetables, buffalo meat pieces and sauces",
        category:"Chowmein"
    }, 
]