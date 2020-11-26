import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomiendoProductosPaso1Page } from './recomiendo-productos-paso1.page';

describe('RecomiendoProductosPaso1Page', () => {
  let component: RecomiendoProductosPaso1Page;
  let fixture: ComponentFixture<RecomiendoProductosPaso1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomiendoProductosPaso1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomiendoProductosPaso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
