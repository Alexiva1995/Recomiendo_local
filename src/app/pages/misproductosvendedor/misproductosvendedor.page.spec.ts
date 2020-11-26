import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisproductosvendedorPage } from './misproductosvendedor.page';

describe('MisproductosvendedorPage', () => {
  let component: MisproductosvendedorPage;
  let fixture: ComponentFixture<MisproductosvendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisproductosvendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisproductosvendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
