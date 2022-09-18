

 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from 'src/app/main/main.component';
import { CardComponent } from '../card/card.component';


 const routes: Routes = [{
 path:'' ,component:MainComponent
},{path:'table',component:CardComponent}]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting{}
