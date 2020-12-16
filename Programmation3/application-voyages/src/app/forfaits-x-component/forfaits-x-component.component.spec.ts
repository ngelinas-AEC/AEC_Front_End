import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsXComponentComponent } from './forfaits-x-component.component';

describe('ForfaitsXComponentComponent', () => {
  let component: ForfaitsXComponentComponent;
  let fixture: ComponentFixture<ForfaitsXComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsXComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsXComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
