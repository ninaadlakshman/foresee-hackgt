import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorelistComponent } from './storelist.component';

describe('StorelistComponent', () => {
  let component: StorelistComponent;
  let fixture: ComponentFixture<StorelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
