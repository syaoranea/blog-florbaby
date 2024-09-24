import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCategoriasComponent } from './criar-categorias.component';

describe('CriarCategoriasComponent', () => {
  let component: CriarCategoriasComponent;
  let fixture: ComponentFixture<CriarCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarCategoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
