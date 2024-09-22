import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisVistosPostsComponent } from './mais-vistos-posts.component';

describe('MaisVistosPostsComponent', () => {
  let component: MaisVistosPostsComponent;
  let fixture: ComponentFixture<MaisVistosPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisVistosPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaisVistosPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
