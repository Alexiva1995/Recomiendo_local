import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomendPage } from './recomend.page';

describe('RecomendPage', () => {
  let component: RecomendPage;
  let fixture: ComponentFixture<RecomendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
