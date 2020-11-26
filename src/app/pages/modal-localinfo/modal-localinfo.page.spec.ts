import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalLocalinfoPage } from './modal-localinfo.page';

describe('ModalLocalinfoPage', () => {
  let component: ModalLocalinfoPage;
  let fixture: ComponentFixture<ModalLocalinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLocalinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalLocalinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
