import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilvendedorPage } from './perfilvendedor.page';

describe('PerfilvendedorPage', () => {
  let component: PerfilvendedorPage;
  let fixture: ComponentFixture<PerfilvendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilvendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilvendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
