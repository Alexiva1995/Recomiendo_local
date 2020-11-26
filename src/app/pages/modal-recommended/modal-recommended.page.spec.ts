import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalRecommendedPage } from './modal-recommended.page';

describe('ModalRecommendedPage', () => {
  let component: ModalRecommendedPage;
  let fixture: ComponentFixture<ModalRecommendedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecommendedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalRecommendedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
