import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalificarExperiencia3Page } from './calificar-experiencia3.page';

describe('CalificarExperiencia3Page', () => {
  let component: CalificarExperiencia3Page;
  let fixture: ComponentFixture<CalificarExperiencia3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarExperiencia3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalificarExperiencia3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
