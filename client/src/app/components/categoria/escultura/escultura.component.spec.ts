import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsculturaComponent } from './escultura.component';

describe('EsculturaComponent', () => {
  let component: EsculturaComponent;
  let fixture: ComponentFixture<EsculturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsculturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsculturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
