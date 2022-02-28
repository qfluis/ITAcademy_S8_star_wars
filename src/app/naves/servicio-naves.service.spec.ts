import { TestBed } from '@angular/core/testing';

import { ServicioNavesService } from './servicio-naves.service';

describe('ServicioNavesService', () => {
  let service: ServicioNavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioNavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
