import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ThemesComponent } from "./themes/themes.component";
import { MarriageComponent } from "./marriage/marriage.component";

const routes: Routes = [
  {
    path: "birthday",
    component: ThemesComponent
  },
  {
    path: "marriage",
    component: MarriageComponent
  },
  {
    path: "",
    redirectTo: "/birthday",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/birthday"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
