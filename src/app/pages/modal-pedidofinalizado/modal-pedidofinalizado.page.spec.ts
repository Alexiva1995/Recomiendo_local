import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPedidofinalizadoPage } from './modal-pedidofinalizado.page';

describe('ModalPedidofinalizadoPage', () => {
  let component: ModalPedidofinalizadoPage;
  let fixture: ComponentFixture<ModalPedidofinalizadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPedidofinalizadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPedidofinalizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
