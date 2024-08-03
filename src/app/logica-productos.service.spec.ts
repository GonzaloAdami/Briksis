import { TestBed } from '@angular/core/testing';

import { LogicaProductosService } from './logica-productos.service';

describe('LogicaProductosService', () => {
  let service: LogicaProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicaProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
