import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs-page";
import { DashboardvendedorPage } from '../dashboardvendedor/dashboardvendedor.page';

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "dashboard",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../administrarpedidosvendedor/administrarpedidosvendedor.module").then(
                (m) => m.AdministrarpedidosvendedorPageModule
              ),
            // component: DasboardPage,
          },
        ],
      },
      {
        path: "speakers",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../perfilvendedor/perfilvendedor.module").then((m) => m.PerfilvendedorPageModule),
          },
          // {
          //   path: '',
          //   loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          // },
          // {
          //   path: 'session/:sessionId',
          //   loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          // },
          // {
          //   path: 'speaker-details/:speakerId',
          //   loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          // }
        ],
      },
      {
        path: "map",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../misproductosvendedor/misproductosvendedor.module").then((m) => m.MisproductosvendedorPageModule),
          },
        ],
      },

      {
        path: "order",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../publicarproductovendedor/publicarproductovendedor.module").then(
                (m) => m.PublicarproductovendedorPageModule
              ),
          },
        ],
      },

      {
        path: "about",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../about/about.module").then((m) => m.AboutModule),
          },
        ],
      },

      {
        path: "home",
        children: [
          {
            path: "",
            component: DashboardvendedorPage,
          },
        ],
      },

      {
        path: "",
        redirectTo: "/app/tabs/home",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
