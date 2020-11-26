import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomiendoProductosPaso3Page } from './recomiendo-productos-paso3.page';

describe('RecomiendoProductosPaso3Page', () => {
  let component: RecomiendoProductosPaso3Page;
  let fixture: ComponentFixture<RecomiendoProductosPaso3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomiendoProductosPaso3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomiendoProductosPaso3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
