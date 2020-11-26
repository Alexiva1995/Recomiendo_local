import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPedidoaceptadoPage } from './modal-pedidoaceptado.page';

describe('ModalPedidoaceptadoPage', () => {
  let component: ModalPedidoaceptadoPage;
  let fixture: ComponentFixture<ModalPedidoaceptadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPedidoaceptadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPedidoaceptadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
