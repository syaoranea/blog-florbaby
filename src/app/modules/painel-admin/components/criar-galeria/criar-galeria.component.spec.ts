import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarGaleriaComponent } from './criar-galeria.component';

describe('CriarGaleriaComponent', () => {
  let component: CriarGaleriaComponent;
  let fixture: ComponentFixture<CriarGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarGaleriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
