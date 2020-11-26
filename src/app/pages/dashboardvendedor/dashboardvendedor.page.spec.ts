import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardvendedorPage } from './dashboardvendedor.page';

describe('DashboardvendedorPage', () => {
  let component: DashboardvendedorPage;
  let fixture: ComponentFixture<DashboardvendedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardvendedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardvendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
