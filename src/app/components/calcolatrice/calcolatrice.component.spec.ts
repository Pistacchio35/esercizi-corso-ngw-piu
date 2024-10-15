import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcolatriceComponent } from './calcolatrice.component';

describe('CalcolatriceComponent', () => {
  let component: CalcolatriceComponent;
  let fixture: ComponentFixture<CalcolatriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcolatriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcolatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
