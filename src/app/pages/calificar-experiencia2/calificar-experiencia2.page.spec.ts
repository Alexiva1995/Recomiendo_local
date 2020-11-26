import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalificarExperiencia2Page } from './calificar-experiencia2.page';

describe('CalificarExperiencia2Page', () => {
  let component: CalificarExperiencia2Page;
  let fixture: ComponentFixture<CalificarExperiencia2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarExperiencia2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalificarExperiencia2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
