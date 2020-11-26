import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyRed3Page } from './my-red3.page';

describe('MyRed3Page', () => {
  let component: MyRed3Page;
  let fixture: ComponentFixture<MyRed3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRed3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRed3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
