import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToProductPageComponent } from './link-to-product-page.component';

describe('LinkToProductPageComponent', () => {
  let component: LinkToProductPageComponent;
  let fixture: ComponentFixture<LinkToProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkToProductPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkToProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
