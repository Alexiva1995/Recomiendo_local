import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalificarExperiencia4Page } from './calificar-experiencia4.page';

describe('CalificarExperiencia4Page', () => {
  let component: CalificarExperiencia4Page;
  let fixture: ComponentFixture<CalificarExperiencia4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarExperiencia4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalificarExperiencia4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
