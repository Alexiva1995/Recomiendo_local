import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRecoverpasswordPage } from './modal-recoverpassword.page';

describe('ModalRecoverpasswordPage', () => {
  let component: ModalRecoverpasswordPage;
  let fixture: ComponentFixture<ModalRecoverpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecoverpasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRecoverpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
