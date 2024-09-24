import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTagComponent } from './criar-tag.component';

describe('CriarTagComponent', () => {
  let component: CriarTagComponent;
  let fixture: ComponentFixture<CriarTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
