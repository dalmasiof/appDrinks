import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCockTailComponent } from './random-cock-tail.component';

describe('RandomCockTailComponent', () => {
  let component: RandomCockTailComponent;
  let fixture: ComponentFixture<RandomCockTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCockTailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCockTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
