import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCockTailComponent } from './search-cock-tail.component';

describe('SearchCockTailComponent', () => {
  let component: SearchCockTailComponent;
  let fixture: ComponentFixture<SearchCockTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCockTailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCockTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
