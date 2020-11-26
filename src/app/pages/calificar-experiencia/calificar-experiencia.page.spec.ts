import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalificarExperienciaPage } from './calificar-experiencia.page';

describe('CalificarExperienciaPage', () => {
  let component: CalificarExperienciaPage;
  let fixture: ComponentFixture<CalificarExperienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarExperienciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalificarExperienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
