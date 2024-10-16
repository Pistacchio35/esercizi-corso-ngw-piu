import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneRuoloComponent } from './gestione-ruolo.component';

describe('GestioneRuoloComponent', () => {
  let component: GestioneRuoloComponent;
  let fixture: ComponentFixture<GestioneRuoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestioneRuoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioneRuoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
