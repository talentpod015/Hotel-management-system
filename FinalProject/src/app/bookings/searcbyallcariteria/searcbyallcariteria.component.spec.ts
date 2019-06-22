import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcbyallcariteriaComponent } from './searcbyallcariteria.component';

describe('SearcbyallcariteriaComponent', () => {
  let component: SearcbyallcariteriaComponent;
  let fixture: ComponentFixture<SearcbyallcariteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcbyallcariteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcbyallcariteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
