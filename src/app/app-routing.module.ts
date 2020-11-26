import { AuthGuard } from "./auth.guard";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckTutorial } from "./providers/check-tutorial.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "account",
    loadChildren: () =>
      import("./pages/account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "support",
    loadChildren: () =>
      import("./pages/support/support.module").then((m) => m.SupportModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
    canActivate: [AuthGuard],
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignUpModule),
  },
  {
    path: "app",
    loadChildren: () =>
      import("./pages/tabs-page/tabs-page.module").then((m) => m.TabsModule),
  },
  {
    path: "tutorial",
    loadChildren: () =>
      import("./pages/tutorial/tutorial.module").then((m) => m.TutorialModule),
  },
  {
    path: "rol",
    loadChildren: () =>
      import("./pages/rol/rol.module").then((m) => m.RolPageModule),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/auth/auth.module").then((m) => m.AuthPageModule),
  },
  {
    path: "congratulations",
    loadChildren: () =>
      import("./pages/congratulations/congratulations.module").then(
        (m) => m.CongratulationsPageModule
      ),
  },
  {
    path: "invitations",
    loadChildren: () =>
      import("./pages/invitations/invitations.module").then(
        (m) => m.InvitationsPageModule
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "local",
    loadChildren: () =>
      import("./pages/local/local.module").then((m) => m.LocalPageModule),
  },
  {
    path: "products",
    loadChildren: () =>
      import("./pages/products/products.module").then(
        (m) => m.ProductsPageModule
      ),
  },
  {
    path: "modal-search",
    loadChildren: () =>
      import("./pages/modal-search/modal-search.module").then(
        (m) => m.ModalSearchPageModule
      ),
  },
  {
    path: "my-red3",
    loadChildren: () =>
      import("./pages/my-red3/my-red3.module").then((m) => m.MyRed3PageModule),
  },
  {
    path: "my-red2",
    loadChildren: () =>
      import("./pages/my-red2/my-red2.module").then((m) => m.MyRed2PageModule),
  },

  {
    path: "modal-pedidovacio",
    loadChildren: () =>
      import("./pages/modal-pedidovacio/modal-pedidovacio.module").then(
        (m) => m.ModalPedidovacioPageModule
      ),
  },
  {
    path: "prizes",
    loadChildren: () =>
      import("./pages/prizes/prizes.module").then((m) => m.PrizesPageModule),
  },
  {
    path: "modal-localinfo",
    loadChildren: () =>
      import("./pages/modal-localinfo/modal-localinfo.module").then(
        (m) => m.ModalLocalinfoPageModule
      ),
  },
  {
    path: "recomendados",
    loadChildren: () =>
      import("./recomendados/recomendados.module").then(
        (m) => m.RecomendadosPageModule
      ),
  },

  {
    path: "recomiendo-productos",
    loadChildren: () =>
      import("./pages/recomiendo-productos/recomiendo-productos.module").then(
        (m) => m.RecomiendoProductosPageModule
      ),
  },
  {
    path: "recomiendo-productos-paso1",
    loadChildren: () =>
      import(
        "./pages/recomiendo-productos-paso1/recomiendo-productos-paso1.module"
      ).then((m) => m.RecomiendoProductosPaso1PageModule),
  },
  {
    path: "recomiendo-productos-paso2",
    loadChildren: () =>
      import(
        "./pages/recomiendo-productos-paso2/recomiendo-productos-paso2.module"
      ).then((m) => m.RecomiendoProductosPaso2PageModule),
  },
  {
    path: "recomiendo-productos-paso3",
    loadChildren: () =>
      import(
        "./pages/recomiendo-productos-paso3/recomiendo-productos-paso3.module"
      ).then((m) => m.RecomiendoProductosPaso3PageModule),
  },
  {
    path: "recomiendo-productos-paso4",
    loadChildren: () =>
      import(
        "./pages/recomiendo-productos-paso4/recomiendo-productos-paso4.module"
      ).then((m) => m.RecomiendoProductosPaso4PageModule),
  },
  {
    path: "calificar-experiencia",
    loadChildren: () =>
      import("./pages/calificar-experiencia/calificar-experiencia.module").then(
        (m) => m.CalificarExperienciaPageModule
      ),
  },
  {
    path: "calificar-experiencia2",
    loadChildren: () =>
      import(
        "./pages/calificar-experiencia2/calificar-experiencia2.module"
      ).then((m) => m.CalificarExperiencia2PageModule),
  },
  {
    path: "calificar-experiencia3",
    loadChildren: () =>
      import(
        "./pages/calificar-experiencia3/calificar-experiencia3.module"
      ).then((m) => m.CalificarExperiencia3PageModule),
  },
  {
    path: "calificar-experiencia4",
    loadChildren: () =>
      import(
        "./pages/calificar-experiencia4/calificar-experiencia4.module"
      ).then((m) => m.CalificarExperiencia4PageModule),
  },
  {
    path: "modal-premiosdetails",
    loadChildren: () =>
      import(
        "./pages/modal-premiosdetails/modal-premiosdetails/modal-premiosdetails.module"
      ).then((m) => m.ModalPremiosdetailsPageModule),
  },
  {
    path: "mispedidos",
    loadChildren: () =>
      import("./pages/mispedidos/mispedidos.module").then(
        (m) => m.MispedidosPageModule
      ),
  },
  {
    path: "publicarproductovendedor",
    loadChildren: () =>
      import(
        "./pages/publicarproductovendedor/publicarproductovendedor.module"
      ).then((m) => m.PublicarproductovendedorPageModule),
  },
  {
    path: "misproductosvendedor",
    loadChildren: () =>
      import("./pages/misproductosvendedor/misproductosvendedor.module").then(
        (m) => m.MisproductosvendedorPageModule
      ),
  },
  {
    path: "perfilvendedor",
    loadChildren: () =>
      import("./pages/perfilvendedor/perfilvendedor.module").then(
        (m) => m.PerfilvendedorPageModule
      ),
  },
  {
    path: "dashboardvendedor",
    loadChildren: () =>
      import("./pages/dashboardvendedor/dashboardvendedor.module").then(
        (m) => m.DashboardvendedorPageModule
      ),
  },
  {
    path: "administrarpedidosvendedor",
    loadChildren: () =>
      import(
        "./pages/administrarpedidosvendedor/administrarpedidosvendedor.module"
      ).then((m) => m.AdministrarpedidosvendedorPageModule),
  },
  {
    path: "scanner",
    loadChildren: () =>
      import("./pages/scanner/scanner.module").then((m) => m.ScannerPageModule),
  },
  {
    path: "modal-pedidofinalizado",
    loadChildren: () =>
      import(
        "./pages/modal-pedidofinalizado/modal-pedidofinalizado.module"
      ).then((m) => m.ModalPedidofinalizadoPageModule),
  },
  {
    path: "splash",
    loadChildren: () =>
      import("./pages/splash/splash/splash.module").then(
        (m) => m.SplashPageModule
      ),
  },  {
    path: 'modalpedidos-detail',
    loadChildren: () => import('./pages/modalpedidos-detail/modalpedidos-detail.module').then( m => m.ModalpedidosDetailPageModule)
  },


  // {
  //   path: 'modal-pedido',
  //   loadChildren: () => import('./pages/modal-pedido/modal-pedido.module').then( m => m.ModalPedidoPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
