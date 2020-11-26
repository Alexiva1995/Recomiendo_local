import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyRedPage } from './my-red.page';

describe('MyRedPage', () => {
  let component: MyRedPage;
  let fixture: ComponentFixture<MyRedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
