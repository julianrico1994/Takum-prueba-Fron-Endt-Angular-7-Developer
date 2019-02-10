import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../models/product-interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  constructor(private dataApiService: DataApiService) {}
  // public products: ProductInterface;
  public products;
  // pageActual: number = 1;

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts(): void {
    this.dataApiService
      .getAllProductsUser()
      .subscribe(
        products => ((this.products = products), console.log(products))
      );
  }

  onDeleteProduct(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteProduct(id).subscribe();
    }
  }

  onPreUpdateProduct(product): void {
    // this.dataApiService.selectedProduct = Object.assign({}, product);
    this.dataApiService.selectedProduct = { ...product };
  }

  resetForm(): void {
    this.dataApiService.selectedProduct = {
      id: null,
      name: '',
      description: '',
      cost: '',
      category: '',
      user: ''
    };
  }
}
