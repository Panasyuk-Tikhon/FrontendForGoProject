import { Component } from '@angular/core';
import { ICellEditorRendererAngularComp } from 'ag-grid-angular';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import {RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-link-to-product-page',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './link-to-product-page.component.html',
  styleUrl: './link-to-product-page.component.scss'
})
export class LinkToProductPageComponent implements ICellRendererAngularComp  {
    value = signal('');
    parsedValue = signal('ewewff');
    data:any
    agInit(params: ICellRendererParams): void {
      this.data = params.data;
      this.refresh(params);
      console.log(params)
    }

    refresh(params: ICellRendererParams): boolean {
        this.value.set(`http://localhost:4200/item/${this.data.id}`);
        this.parsedValue.set(params.value);
        return true;
    }
}
