import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalQrPremiosPage } from './modal-qr-premios.page';

describe('ModalQrPremiosPage', () => {
  let component: ModalQrPremiosPage;
  let fixture: ComponentFixture<ModalQrPremiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalQrPremiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalQrPremiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
