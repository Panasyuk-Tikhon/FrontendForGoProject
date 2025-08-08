import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDto } from '../dto/products.dto';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.scss'
})
export class AddNewProductComponent {
  public saveButtonText: string = "Save"
  public item: ProductDto|null = null;
  constructor(private route: ActivatedRoute, private readonly Http: HttpClient){}  

  productToAdd = new FormGroup({
    id: new FormControl(this.item?.id),
    Name: new FormControl(this.item?.Name),
    Description: new FormControl(this.item?.Description),
    StockQuantity: new FormControl(this.item?.StockQuantity),
    Price: new FormControl(this.item?.Price)
  });

  changeTextBack(){
    this.saveButtonText = "Save"
  }
  saveChanges(){
    console.log(this.productToAdd.value)
    this.Http.post<ProductDto>('http://localhost:8080/productAdd',this.productToAdd.value).subscribe(()=>{console.log('updated')})
    this.saveButtonText = "Saved"
  }
}