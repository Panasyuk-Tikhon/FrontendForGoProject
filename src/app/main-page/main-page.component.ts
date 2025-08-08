import { Component, Input } from '@angular/core';
import { ProductDto } from '../dto/products.dto';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef, SizeColumnsToFitGridStrategy } from 'ag-grid-community'; // Column Definition Type Interface
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { HttpClient } from '@angular/common/http';
import { LinkToProductPageComponent } from '../link-to-product-page/link-to-product-page.component';

// Register all Community features


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AgGridAngular, DeleteButtonComponent, LinkToProductPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
//@Input()
public products: ProductDto[] = [];
//public products: ProductDto[] = [];
public userName = "jafgioudfshgvys"
constructor(private readonly Http: HttpClient){
  this.Http.get<ProductDto[]>("http://localhost:8080/ping").subscribe((result) => {
    this.products = result
    console.log(this.products)
  })
}

colDefs: ColDef[] = [
    {headerName: 'Name', field: "Name", suppressSizeToFit: true, sortable: true,cellStyle:{'display': 'flex', 'justify-content': 'stretch'}, cellRenderer:LinkToProductPageComponent},
    {headerName: 'Description', field: "Description"},
    {headerName: 'Price', field: "Price", suppressSizeToFit: true },
    {headerName: 'StockQuantity', field: "StockQuantity",suppressSizeToFit: true},
    {colId: 'actions', headerName:"",cellRenderer: DeleteButtonComponent}
  ];
  autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: 'fitGridWidth'
  };
}
