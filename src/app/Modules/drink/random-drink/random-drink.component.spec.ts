import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDrinkComponent } from './random-drink.component';

describe('RandomDrinkComponent', () => {
  let component: RandomDrinkComponent;
  let fixture: ComponentFixture<RandomDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
