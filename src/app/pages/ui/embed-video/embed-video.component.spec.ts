import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedVideoComponent } from './embed-video.component';

describe('EmbedVideoComponent', () => {
  let component: EmbedVideoComponent;
  let fixture: ComponentFixture<EmbedVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbedVideoComponent]
    });
    fixture = TestBed.createComponent(EmbedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
