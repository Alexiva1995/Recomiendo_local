import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPedidovacioPage } from './modal-pedidovacio.page';

describe('ModalPedidovacioPage', () => {
  let component: ModalPedidovacioPage;
  let fixture: ComponentFixture<ModalPedidovacioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPedidovacioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPedidovacioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
