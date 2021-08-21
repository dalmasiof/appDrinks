import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RandomDrinkComponent } from "./random-drink/random-drink.component";

const routes:Routes=[
    {path:'Random',component:RandomDrinkComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DrinkRoutingModule{}
