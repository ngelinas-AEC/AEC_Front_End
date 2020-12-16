import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsYComponentComponent } from './forfaits-y-component.component';

describe('ForfaitsYComponentComponent', () => {
  let component: ForfaitsYComponentComponent;
  let fixture: ComponentFixture<ForfaitsYComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsYComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsYComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
