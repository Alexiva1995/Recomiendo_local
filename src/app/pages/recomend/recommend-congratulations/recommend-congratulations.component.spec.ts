import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendCongratulationsComponent } from './recommend-congratulations.component';

describe('RecommendCongratulationsComponent', () => {
  let component: RecommendCongratulationsComponent;
  let fixture: ComponentFixture<RecommendCongratulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendCongratulationsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendCongratulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
