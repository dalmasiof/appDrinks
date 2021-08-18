import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIngredientComponent } from './details-ingredient.component';

describe('DetailsIngredientComponent', () => {
  let component: DetailsIngredientComponent;
  let fixture: ComponentFixture<DetailsIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
