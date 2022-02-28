import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNaveComponent } from './detalle-nave.component';

describe('DetalleNaveComponent', () => {
  let component: DetalleNaveComponent;
  let fixture: ComponentFixture<DetalleNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleNaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
