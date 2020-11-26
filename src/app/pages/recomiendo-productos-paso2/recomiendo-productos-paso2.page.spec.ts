import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomiendoProductosPaso2Page } from './recomiendo-productos-paso2.page';

describe('RecomiendoProductosPaso2Page', () => {
  let component: RecomiendoProductosPaso2Page;
  let fixture: ComponentFixture<RecomiendoProductosPaso2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomiendoProductosPaso2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomiendoProductosPaso2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
