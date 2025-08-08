import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDto } from '../dto/products.dto';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})
export class EditPageComponent {
  public saveButtonText: string = "Save"
  private routeSub: Subscription|null = null;
  public item: ProductDto|null = null;
  private id: number|null = null
  constructor(private route: ActivatedRoute, private readonly Http: HttpClient){}  
  newProductForm = new FormGroup({
    id: new FormControl(this.item?.id),
    Name: new FormControl(this.item?.Name),
    Description: new FormControl(this.item?.Description),
    StockQuantity: new FormControl(this.item?.StockQuantity),
    Price: new FormControl(this.item?.Price)
  });
  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
      console.log(params['id'])
    });
    this.Http.get<ProductDto>(`http://localhost:8080/product/${this.id}`).subscribe((result) => {
      this.item = result
      this.newProductForm.setValue(this.item)
    })
  }
  changeTextBack(){
    this.saveButtonText = "Save"
  }
  saveChanges(){
    console.log(this.newProductForm.value)
    this.Http.put<ProductDto>(`http://localhost:8080/pUpdate/${this.id}`,this.newProductForm.value).subscribe(()=>{console.log('updated')})
    this.saveButtonText = "Saved"
  }
}
