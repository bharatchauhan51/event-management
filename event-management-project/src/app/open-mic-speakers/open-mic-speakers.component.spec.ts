import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMicSpeakersComponent } from './open-mic-speakers.component';

describe('OpenMicSpeakersComponent', () => {
  let component: OpenMicSpeakersComponent;
  let fixture: ComponentFixture<OpenMicSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMicSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMicSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
