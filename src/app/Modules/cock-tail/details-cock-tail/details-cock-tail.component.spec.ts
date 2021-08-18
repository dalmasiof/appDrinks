import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCockTailComponent } from './details-cock-tail.component';

describe('DetailsCockTailComponent', () => {
  let component: DetailsCockTailComponent;
  let fixture: ComponentFixture<DetailsCockTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCockTailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCockTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
