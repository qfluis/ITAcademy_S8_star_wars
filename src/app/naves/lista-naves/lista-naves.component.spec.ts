import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNavesComponent } from './lista-naves.component';

describe('ListaNavesComponent', () => {
  let component: ListaNavesComponent;
  let fixture: ComponentFixture<ListaNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
