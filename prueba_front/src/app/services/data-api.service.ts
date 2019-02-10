import { Injectable } from '@angular/core'
import { HttpClient, HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { map } from "rxjs/operators";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  products: Observable<any>;
  product: Observable<any>;

  public selectedProduct = {
    id: null,
    titulo: '',
    idioma: '',
    descripcion: '',
    portada: '',
    precio: '',
    link_amazon: '',
    autor: '',
    oferta: ''
  };

  getAllProducts() {
    const url_api = `http://127.0.0.1:8000/product/list`;
    return this.http.get(url_api);
  }

  getAllProductsUser() {
    const user = this.authService.getToken();
    console.log(`user: ${user}`)
    const url_api = `http://127.0.0.1:8000/product/listGroupByCategoryByUser/${user}`;
    return this.http.get(url_api);
  }

  saveBook(book) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books?access_token=${token}`;
    return this.http
      .post(url_api, book)
      .pipe(map(data => data));
  }

  updateBook(book) {
    // TODO: obtener token
    // TODO: not null
    const bookId = book.bookId;
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/books/${bookId}/?access_token=${token}`;
    return this.http
      .put(url_api, book)
      .pipe(map(data => data));
  }

  deleteProduct(id: string) {
    const url_api = `http://127.0.0.1:8000/product/softDelete`;
    return this.http
      .put(url_api, { id })
      .pipe(map(data => data));
  }


}
