import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(
    public dataApiService: DataApiService,
    private location: Location
  ) {}

  ngOnInit() {}

  toJSON() {
    console.log(JSON.stringify(this.dataApiService, null, 2));
  }

  onSaveProduct(productForm: NgForm): void {
    console.log(productId);
    if (productForm.value.productId == null) {
      // NEW
      this.dataApiService
        .saveProduct(productForm.value)
        .subscribe(product => location.reload());
    } else {
      // update
      this.dataApiService
        .updateProduct(productForm.value)
        .subscribe(product => location.reload());
    }
  }
}
