import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
// import { Observable } from 'rxjs/internal/Observable';
// import { forkJoin } from 'rxjs'; // RxJS 6 syntax

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) {
    this.getCategories();
  }

  public selectedProduct = {
    id: null,
    name: '',
    description: '',
    cost: '',
    category: '',
    user: ''
  };

  public categories;

  getAllProducts() {
    const URL_API = `http://127.0.0.1:8000/product/list`;
    return this.http.get(URL_API);
  }

  getCategories() {
    const URL_API = `http://127.0.0.1:8000/category/list`;
    return this.http
      .get(URL_API)
      .subscribe(categories => (this.categories = categories));
  }

  getAllProductsUser() {
    const user = this.authService.getToken();
    console.log(`user: ${user}`);
    const URL_API = `http://127.0.0.1:8000/product/listGroupByCategoryByUser/${user}`;
    return this.http.get(URL_API);
  }

  saveProduct(product) {
    // TODO: obtener token
    // TODO: not null
    // const token = this.authService.getToken();
    const user = this.authService.getToken();
    product.user = user;
    const URL_API = `http://127.0.0.1:8000/product/create`;
    return this.http.post(URL_API, product).pipe(map(data => data));
  }

  updateProduct(product) {
    console.log(product);
    // TODO: obtener token
    // TODO: not null
    // const productId = product.productId;
    // const token = this.authService.getToken();
    const URL_API = `http://127.0.0.1:8000/product/update/${product.productId}`;
    return this.http.put(URL_API, product).pipe(map(data => data));
  }

  deleteProduct(id: string) {
    const URL_API = `http://127.0.0.1:8000/product/softDelete`;
    return this.http.put(URL_API, { id }).pipe(map(data => data));
  }
}
