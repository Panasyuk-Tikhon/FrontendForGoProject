import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent implements ICellRendererAngularComp  {
    constructor(private readonly Http: HttpClient){}
    data: any;
    company = signal('');
    agInit(params: ICellRendererParams): void {
        this.data = params.data;
        this.refresh(params);
    }
    refresh(params: ICellRendererParams) {
        this.company.set(params.data?.company ?? '');
        return true;
    }
  onClick(){
    let a = confirm("are you sure")
    console.log(this.data)
    if(a){
      this.Http.post(`http://localhost:8080/products/${this.data.id}`, this.data.id).subscribe(()=>{console.log("deleted")})
    }
    else{
      console.log("not")
    }
    window.location.reload();
  }
}
