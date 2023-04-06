import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyeriaComponent } from './joyeria.component';

describe('JoyeriaComponent', () => {
  let component: JoyeriaComponent;
  let fixture: ComponentFixture<JoyeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoyeriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoyeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
