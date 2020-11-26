import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicarproductovendedorPage } from './publicarproductovendedor.page';

describe('PublicarproductovendedorPage', () => {
  let component: PublicarproductovendedorPage;
  let fixture: ComponentFixture<PublicarproductovendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarproductovendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicarproductovendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
