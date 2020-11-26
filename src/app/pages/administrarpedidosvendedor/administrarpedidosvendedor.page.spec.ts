import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministrarpedidosvendedorPage } from './administrarpedidosvendedor.page';

describe('AdministrarpedidosvendedorPage', () => {
  let component: AdministrarpedidosvendedorPage;
  let fixture: ComponentFixture<AdministrarpedidosvendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarpedidosvendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrarpedidosvendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
