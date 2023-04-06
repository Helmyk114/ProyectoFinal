import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TejidoComponent } from './tejido.component';

describe('TejidoComponent', () => {
  let component: TejidoComponent;
  let fixture: ComponentFixture<TejidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TejidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TejidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
