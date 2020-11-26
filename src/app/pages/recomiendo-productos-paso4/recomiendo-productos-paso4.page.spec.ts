import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomiendoProductosPaso4Page } from './recomiendo-productos-paso4.page';

describe('RecomiendoProductosPaso4Page', () => {
  let component: RecomiendoProductosPaso4Page;
  let fixture: ComponentFixture<RecomiendoProductosPaso4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomiendoProductosPaso4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomiendoProductosPaso4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
