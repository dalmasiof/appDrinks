import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDrinkComponent } from './search-drink.component';

describe('SearchDrinkComponent', () => {
  let component: SearchDrinkComponent;
  let fixture: ComponentFixture<SearchDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
