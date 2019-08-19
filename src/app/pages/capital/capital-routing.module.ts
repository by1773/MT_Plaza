import { NgModule } 									from '@angular/core';
import { Routes, RouterModule } 			from '@angular/router';
import { TraFlowingComponent }        from './tra-flowing/tra-flowing.component';
import { CapitalComponent }           from './capital.component';

const routes: Routes = [
	{
		path:'',
		component:CapitalComponent,
		children:[
    	{ path: 'traFlow', component: TraFlowingComponent, data: { title: '交易流水',module: 'capital/traFlow',power:'SHOW'} },
    ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapitalRoutingModule { }
