import { Component, OnDestroy, OnInit } from "@angular/core";



@Component({
    selector: 'app-product',
    // selector: '[app-product]',
    // selector: '.app-product',

    templateUrl: './product.component.html',
    // template: `<p>This is product <strong>{{productName}}</strong> with id <strong>{{productId}}</strong></p>
    // <p>This is <strong>{{pro01}}</strong> Project and version is 14</p>`,
    // we can create a component in single file


    styleUrls: ['./product.component.scss']
    //     styles: [
    //         `
    //         p {
    //     color: rgb(151, 225, 164);
    //     background-color: rgb(3, 29, 3);
    //     padding: 15px;
    //     font-size: 21px;
    //     font-family: Georgia;
    // }
    //         `
    //     ]
})
export class ProductComponent implements OnInit, OnDestroy {
    // here we can implements multiple interface
    productName: string = 'Samsung';
    productId: string = 'P-5635'
    pro01: string = 'Angular'
    property: string = `<strong>Love Angular</strong>`




    // here productComponent is component

    // OnInit is an interface defined in the @angular/core package. it includes properties and methods.

    ngOnInit(): void {
        // it is a method which is called by angular when a component is initailized.
        // it is lifecycle hook. 
        console.log(`Product is Created Successfully`);
        // it is a method which is called by angular when a component is initailized.
    }

    ngOnDestroy(): void {
        console.log('Component destroyed!');

    }


}


