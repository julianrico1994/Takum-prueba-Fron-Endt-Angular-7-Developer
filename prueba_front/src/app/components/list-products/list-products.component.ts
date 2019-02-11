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
  constructor(public dataApiService: DataApiService) {}
  public products;

  ngOnInit() {
    this.getListProducts();
  }

  categoryFilter(idCategory) {
    const categoryArray = this.dataApiService.categories.filter(
      category => category.id === idCategory
    );
    return categoryArray[0].name;
  }

  getListProducts(): void {
    this.dataApiService
      .getAllProductsUser()
      .subscribe(products => (this.products = products));
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
