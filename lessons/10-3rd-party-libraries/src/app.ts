// import _ from 'lodash';

// declare let GLOBAL: string;

// console.log(_.shuffle([1, 2, 3]));

// console.log(GLOBAL);

import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator';

import { Product } from "./product.model";

const p1 = new Product('A Book', 12.99)

console.log(p1.getInformation());

const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
]

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// })

// class-transformer
const loadedProducts = plainToInstance(Product, products)


for (const prod of loadedProducts) {
    console.log(prod.getInformation());

}

// class-validator
const newProd = new Product('', -5.99);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});