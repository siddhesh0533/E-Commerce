import a1 from './a1.jpg';
import a2 from './a2.jpg';
import a3 from './a3.jpg';   
import a4 from './a4.jpg';
import a5 from './a5.jpg';
import a6 from './a6.jpg';

import b2 from './b2.png';       
import b1 from './b1.png';
import b3 from './b3.png';
import b4 from './b4.png';
import b5 from './b5.png';
import b6 from './b6.png';

import c1 from './c1.jpg';
import c2 from './c2.jpg';
import c3 from './c3.jpg';

// import blog1 from './blog1.jpg';
// import blog2 from './blog2.jpg';
// import blog3 from './blog3.jpg';

import home from './home.jpg';

import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.png';
import i4 from './i4.png';
import i5 from './i5.png';
import i6 from './i6.png';
import i7 from './i7.png';

import logo from './logo.png';

import m1 from './m1.jpg';
import m2 from './m2.jpg';
import m3 from './m3.jpg';
import m4 from './m4.jpg';
import m5 from './m5.jpg';
import m6 from './m6.jpg';
import m7 from './m7.jpg';
import m8 from './m8.jpg';

import o1 from './o1.jpg';
import o2 from './o2.png';
import o3 from './o3.png';

import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';

import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png';
import shoping_cart from './shopping_cart.png';
import menu_icon from './menu_icon.png';
import dropdown_icon from './dropdown_icon.png';
import exchange_icon from './exchange_icon.png';
import quality_icon from './quality_icon.png';
import support_icon from './support_icon.png';
import cross_icon from './cross_icon.png';
import star_icon from './star_icon.png';
import star_dull_icon from './star_dull_icon.png';
import bin_icon from './bin_icon.png';
import Stripe_logo from './Stripe_logo.svg';
import razorpay_logo from './razorpay_logo.png';
// import w1 from './w1.png';
// import w2 from './w1.jpg';
// import w1 from './w2.jng';

export const assets = {
    a1,
    a2, 
    a3,
    a4,
    a5,
    a6,
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    c1,
    c2,
    c3,
    // blog1,
    // blog2,
    // blog3,
    home,
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    logo,
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    o1,
    o2,
    o3,
    p1,
    p2,
    p3,
    p4,
    search_icon,
    profile_icon,
    shoping_cart,
    menu_icon,
    dropdown_icon,
    exchange_icon,
    quality_icon,
    support_icon,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon,
    Stripe_logo,
    razorpay_logo,
    // w1,
    // w2,
    // w3: w1, // Assuming w3 is a duplicate of w2
    // Add more assets as needed
}

export const products = [
    {
        _id: "aaaaa",
        name: "Product 1",
        description: "Description for Product 1",
        price: 29.99,
        image: [a1],
        category: 'Men',
        subCategory: 'Bottomwear',
        sizes : ['S', 'M', 'L', 'XL'],
        date: 1716634345448,
        bestseller: true,
    },
    {
        _id: "aaaab",
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 39.99,
        image: [assets.b1],
        category: 'Women',
        subCategory: 'Topwear',
        sizes : ['S', 'M', 'L'],
        bestseller: false,
    },
    {
        _id: "aaaac",
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 49.99,
        image: [assets.c1],
        category: 'Kids',
        subCategory: 'Winterwear',
        sizes : ['M', 'L', 'XL'],
        bestseller: true,
    },
    {
        _id: "aaaad",
        name: 'Product 4',
        description: 'Description for Product 4',
        price: 59.99,
        image: [assets.i1],
        category: 'Men',
        subCategory: 'Winterwear',
        sizes : ['S', 'M', 'L', 'XL'],
        bestseller: false,
    },
    {
        _id: "aaaae",
        name: 'Product 5',
        description: 'Description for Product 5',
        price: 69.99,
        image: [assets.m1],
        category: 'Women',
        subCategory: 'Bottomwear',
        sizes : ['S', 'M'],
        bestseller: true,
    },  
    {
        _id: "aaaaf",
        name: 'Product 6',
        description: 'Description for Product 6',
        price: 79.99,
        image: [assets.a2],
        category: 'Kids',
        subCategory: 'Topwear',
        sizes : ['M', 'L', 'XL'],
        bestseller: false,
    },
    {
        _id: "aaaag",
        name: 'Product 7',
        description: 'Description for Product 7',
        price: 89.99,
        image: [assets.a3],
        category: 'Men',
        subCategory: 'Topwear',
        sizes : ['S', 'M', 'L'],
        bestseller: true,
    },
    {
        _id: "aaaah",
        name: 'Product 8',
        description: 'Description for Product 8',
        price: 99.99,
        image: [assets.a4],
        category: 'Women',
        subCategory: 'Winterwear',
        sizes : ['M', 'L', 'XL'],
        bestseller: false,
    },
    {
        _id: "aaaai",
        name: 'Product 9',
        description: 'Description for Product 9',
        price: 109.99,
        image: [assets.a6],
        category: 'Kids',
        subCategory: 'Bottomwear',
        sizes : ['S', 'M', 'L', 'XL'],
        bestseller: true,
    },
    {
        _id: "aaaaj",
        name: 'Product 10',
        description: 'Description for Product 10',
        price: 119.99,
        image: [assets.i1],
        category: 'Men',
        subCategory: 'Topwear',
        sizes : ['S', 'M'],
        bestseller: false,
    },
    {
        _id: "aaaak",
        name: 'Product 11',
        description: 'Description for Product 11',
        price: 129.99,
        image: [assets.m4],
        category: 'Women',
        subCategory: 'Winterwear',
        sizes : ['M', 'L', 'XL'],
        bestseller: true,
    },
    {
        _id: "aaaal",
        name: 'Product 12',
        description: 'Description for Product 12',
        price: 139.99,
        image: [assets.m7, assets.m8],
        category: 'Kids',
        subCategory: 'Winterwear',
        sizes : ['S', 'M', 'L'],
        bestseller: false,
    },
    {
        _id: "aaaam",
        name: 'Product 13',
        description: 'Description for Product 13',
        price: 149.99,
        image: [assets.a4, assets.a5, assets.a6],
        category: 'Men',
        subCategory: 'Bottomwear',
        sizes : ['S', 'M', 'L', 'XL'],
        bestseller: true,
    },
    {
        _id: "aaaan",
        name: 'Product 14',
        description: 'Description for Product 14',
        price: 159.99,
        image: [assets.b4, assets.b5, assets.b6],
        category: 'Women',
        subCategory: 'Topwear',
        sizes : ['S', 'M'],
        bestseller: false,
    },
    {
        _id: "aaaao",
        name: 'Product 15',
        description: 'Description for Product 15',
        price: 169.99,
        image: [assets.c3],
        category: 'Kids',
        subCategory: 'Winterwear',
        sizes : ['M', 'L', 'XL'],
        bestseller: true,
    },
    {
        _id: "aaaap",
        name: 'Product 16',
        description: 'Description for Product 16',
        price: 179.99,
        image: [assets.a1],
        category: 'Men',
        subCategory: 'Bottomwear',
        sizes : ['S', 'M', 'L'],
        bestseller: false,
    },
    {
        _id: "aaaaq",
        name: 'Product 17',
        description: 'Description for Product 17',
        price: 189.99,
        image: [assets.a1, assets.a2, assets.a3],
        category: 'Women',
        subCategory: 'Topwear',
        sizes : ['S', 'M', 'L', 'XL'],
        bestseller: true,
    },
    {
        _id: "aaaar",
        name: 'Product 18',
        description: 'Description for Product 18',
        price: 199.99,
        image: [assets.i1, assets.i2, assets.i3],
        category: 'Kids',
        subCategory: 'Winterwear',
        sizes : ['S', 'M'],
        bestseller: false,
    },
    {
        _id: "aaaas",
        name: 'Product 19',
        description: 'Description for Product 19',
        price: 209.99,
        image: [assets.a1, assets.a2, assets.a3],
        category: 'Men',
        subCategory: 'Bottomwear',
        sizes : ['M', 'L', 'XL'],
        bestseller: true,
    },
    {
        _id: "aaaat",
        name: 'Product 20',
        description: 'Description for Product 20',
        price: 219.99,
        image: [assets.c1, assets.c2, assets.c3],
        category: 'Women',
        subCategory: 'Topwear',
        sizes : ['S', 'M', 'L'],
        bestseller: false,
    },
   
]
