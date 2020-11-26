import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomendadosPage } from './recomendados.page';

describe('RecomendadosPage', () => {
  let component: RecomendadosPage;
  let fixture: ComponentFixture<RecomendadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomendadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
