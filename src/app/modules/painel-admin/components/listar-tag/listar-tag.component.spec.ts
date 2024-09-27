import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTagComponent } from './listar-tag.component';

describe('ListarTagComponent', () => {
  let component: ListarTagComponent;
  let fixture: ComponentFixture<ListarTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
