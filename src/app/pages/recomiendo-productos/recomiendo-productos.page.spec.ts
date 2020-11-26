import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomiendoProductosPage } from './recomiendo-productos.page';

describe('RecomiendoProductosPage', () => {
  let component: RecomiendoProductosPage;
  let fixture: ComponentFixture<RecomiendoProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomiendoProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomiendoProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
