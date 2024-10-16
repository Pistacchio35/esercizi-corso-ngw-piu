import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraBottoneComponent } from './mostra-bottone.component';

describe('MostraBottoneComponent', () => {
  let component: MostraBottoneComponent;
  let fixture: ComponentFixture<MostraBottoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostraBottoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostraBottoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
