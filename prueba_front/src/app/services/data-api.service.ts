import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  public selectedProduct = {
    id: null,
    name: '',
    description: '',
    cost: '',
    category: '',
    user: ''
  };

  getAllProducts() {
    const URL_API = `http://127.0.0.1:8000/product/list`;
    return this.http.get(URL_API);
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
    const URL_API = `http://127.0.0.1:8000/product/create`;
    return this.http
      .post(URL_API, product)
      .pipe(map(data => data));
  }

  updateProduct(product) {
    console.log(product);
    // TODO: obtener token
    // TODO: not null
    // const productId = product.productId;
    // const token = this.authService.getToken();
    const URL_API = `http://127.0.0.1:8000/product/update/${product.productId}`;
    return this.http
      .put(URL_API, product)
      .pipe(map(data => data));
  }

  deleteProduct(id: string) {
    const URL_API = `http://127.0.0.1:8000/product/softDelete`;
    return this.http
      .put(URL_API, { id })
      .pipe(map(data => data));
  }


}
