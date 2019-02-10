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
  constructor(private dataApiService: DataApiService) { }
  private products: ProductInterface;
  pageActual: number = 1;

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts(): void {
    this.dataApiService
      .getAllProductsUser()
      .subscribe((products) => (this.products = products, console.log(products)));
  }

  onDeleteProduct(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteProduct(id).subscribe();
    }
  }

  onPreUpdateBook(product): void {
    // this.dataApiService.selectedProduct = Object.assign({}, product);
  }

  resetForm(bookForm?: NgForm): void {
    // this.dataApiService.selectedProduct = {
    //   id: null,
    //   titulo: '',
    //   idioma: '',
    //   descripcion: '',
    //   portada: '',
    //   precio: '',
    //   link_amazon: '',
    //   autor: '',
    //   oferta: ''
    // };
  }

}
