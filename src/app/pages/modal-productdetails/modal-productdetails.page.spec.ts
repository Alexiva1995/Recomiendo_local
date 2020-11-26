import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalProductdetailsPage } from './modal-productdetails.page';

describe('ModalProductdetailsPage', () => {
  let component: ModalProductdetailsPage;
  let fixture: ComponentFixture<ModalProductdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProductdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProductdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
