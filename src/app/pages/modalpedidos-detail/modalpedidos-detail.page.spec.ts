import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalpedidosDetailPage } from './modalpedidos-detail.page';

describe('ModalpedidosDetailPage', () => {
  let component: ModalpedidosDetailPage;
  let fixture: ComponentFixture<ModalpedidosDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalpedidosDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalpedidosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
