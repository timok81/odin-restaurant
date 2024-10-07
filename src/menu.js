
import pbAndJSandwichImage from './images/food-2202381_1280.jpg';
import turkeySandwichImage from './images/sandwich-2408026_1280.jpg';
import avocadoToastImage from './images/toast-7009956_1280.jpg';
import tunaSandwichImage from './images/sandwich-1580348_960_720.jpg';
import eggBaconSandwichImage from './images/breakfast-2680845_1920.jpg';
import chickenSandwichImage from './images/food-1648767_1280.jpg';

export default function createMenuPage() {
    const content = document.querySelector('#content');

    const menuIntro = content.appendChild(document.createElement('div'));
    menuIntro.classList.add('menuintro');
    const menuHeader = menuIntro.appendChild(document.createElement('h1'));
    menuHeader.textContent = 'MENU';
    const menuIntroText = menuIntro.appendChild(document.createElement('p'));
    menuIntroText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const menuList = content.appendChild(document.createElement('div'));
    menuList.classList.add('menulist');

    let menu = [
        pbAndJSandwich,
        turkeySandwich,
        avocadoToast,
        tunaSandwich,
        eggBaconSandwich,
        chickenSandwich
    ]

    for (let i = 0; i < menu.length; i++) {
        const productcard = menuList.appendChild(document.createElement('div'));
        productcard.classList.add('menuitem');
        const productImageContainer = productcard.appendChild(document.createElement('div'));
        productImageContainer.classList.add('productimage');
        productImageContainer.style.backgroundImage = `url(${menu[i].image})`;
        const productDescription = productcard.appendChild(document.createElement('div'));
        productDescription.classList.add('productdescription')
        const productDescriptionText = productDescription.appendChild(document.createElement('p'));
        productDescriptionText.textContent = menu[i].description;
        const productPrice = productcard.appendChild(document.createElement('div'));
        productPrice.classList.add('productprice')
        productPrice.textContent = menu[i].price;
    }

}

class product {
    constructor(name, price, image, description) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }
}

const pbAndJSandwich = new product('Peanut butter and Jelly sandwich', '3€', pbAndJSandwichImage, 'Peanut butter and strawberry jelly on toast. Bestseller!');
const turkeySandwich = new product('Turkey sandwich', '4€', turkeySandwichImage, 'Turkey, cheese, and vegetables in wheat bun.');
const avocadoToast = new product('Avocado toast', '4€', avocadoToastImage, 'Avocado and creamcheese toast.');
const tunaSandwich = new product('Tuna sandwich', '5€', tunaSandwichImage, 'Tuna and vegetables in wholegrain bun.');
const eggBaconSandwich = new product('Egg and bacon sandwich', '5€', eggBaconSandwichImage, 'Scrambled eggs and bacon. Breakfast classic!');
const chickenSandwich = new product('Chicken sandwich', '5€', chickenSandwichImage, 'Chicken breast in wheat bun.');