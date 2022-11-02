import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarlMaisComponent } from './botao-carregarl-mais.component';

describe('BotaoCarregarlMaisComponent', () => {
  let component: BotaoCarregarlMaisComponent;
  let fixture: ComponentFixture<BotaoCarregarlMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarregarlMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregarlMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
