import { Component, OnInit } from "@angular/core";



@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    username: string = '';
    password: string = '';
    isDisabled: boolean = true;
    productName: string = 'Angular is my Favorite Language'
    isdisabled: boolean = false;
    productStatus: string = 'No Product Is Added Yet';
    noOfProductsAdded: number = 0;
    serchedProduct: string = '';
    rateProduct: string = 'No Product';
    onSubmit() {
        // Handle form submission here
        console.log('Username:', this.username);
        console.log('Password:', this.password);
    }


    ngOnInit(): void {
        setTimeout(() => {
            this.isDisabled = false;
        }, 3000);
    }

    updateProduct() {
        console.log(`Clicked!!!`);
        this.noOfProductsAdded++;
        this.productStatus = ` ${this.noOfProductsAdded} Product Added`

    }

    removeProduct() {
        this.noOfProductsAdded--;
        this.productStatus = `${this.noOfProductsAdded} Product  Removed`
    }

    onProductSearch(eve: Event) {
        // this.onProductSearch is defination of function
        let val = (eve.target as HTMLInputElement).value;
        console.log(val);
        this.serchedProduct = val;

    }
}