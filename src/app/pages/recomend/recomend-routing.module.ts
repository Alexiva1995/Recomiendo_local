import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecomendPage } from "./recomend.page";
import { RecommendCongratulationsComponent } from "./recommend-congratulations/recommend-congratulations.component";
import { RecommendStartComponent } from "./recommend-start/recommend-start.component";

const routes: Routes = [
  {
    path: "",
    component: RecomendPage,
    children: [
      {
        path: "start",
        component: RecommendStartComponent,
      },
      {
        path: "end",
        component: RecommendCongratulationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendPageRoutingModule {}
