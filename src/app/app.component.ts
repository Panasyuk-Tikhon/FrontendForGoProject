import { Component, ElementRef, ViewChild } from '@angular/core';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from "./delete-button/delete-button.component";

ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, CommonModule, DeleteButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FrontForGo';
}

