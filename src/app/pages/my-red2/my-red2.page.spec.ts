import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyRed2Page } from './my-red2.page';

describe('MyRed2Page', () => {
  let component: MyRed2Page;
  let fixture: ComponentFixture<MyRed2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRed2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRed2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
