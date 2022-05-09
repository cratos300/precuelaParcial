import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPeliculaComponent } from './checkout-pelicula.component';

describe('CheckoutPeliculaComponent', () => {
  let component: CheckoutPeliculaComponent;
  let fixture: ComponentFixture<CheckoutPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
