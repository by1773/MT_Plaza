import { NgModule } 										from '@angular/core';
import { Routes, RouterModule } 				from '@angular/router';
import { CultureComponent } 						from './culture.component';
// 文创产品管理
// import { WcMaterialLibComponent }       from './wc-material-lib/wc-material-lib.component';
// import { WcMaterialTypeComponent }      from './wc-material-type/wc-material-type.component';
// import { WcMaterialOrderComponent }     from './wc-material-order/wc-material-order.component';
// import { WcProductTypeComponent }       from './wc-product-type/wc-product-type.component';
// import { WcProductComponent }           from './wc-product/wc-product.component';
// import { WcProductOrderComponent }      from './wc-product-order/wc-product-order.component';
// import { WcProductSaleComponent }       from './wc-product-sale/wc-product-sale.component';
// import { WcProductCommentComponent }    from './wc-product-comment/wc-product-comment.component';
// import { WcCrowdfundingTypeComponent }  from './wc-crowdfunding-type/wc-crowdfunding-type.component';
// import { WcCrowdfundingComponent }      from './wc-crowdfunding/wc-crowdfunding.component';
// import { WcCrowdfundingOrderComponent } from './wc-crowdfunding-order/wc-crowdfunding-order.component';
const routes: Routes = [
    {
    	path:'',
        component:CultureComponent,
        children:[
            { path: 'wcMaT', loadChildren:'./wc-material-type/wc-material-type.module#WcMaterialTypeModule'},
            // { path: 'wcMatType', component: WcMaterialTypeComponent, data: { title: '素材类型管理',module: 'culture/wcMaT',power:'SHOW'} },
            { path: 'wcMaL', loadChildren:'./wc-material-lib/wc-material-lib.module#WcMaterialLibModule'},
            // { path: 'wcMatLib', component: WcMaterialLibComponent, data: { title: '素材库管理',module: 'culture/wcMaL',power:'SHOW'} },
            { path: 'wcMaO', loadChildren:'./wc-material-order/wc-material-order.module#WcMaterialOrderModule'},
            // { path: 'wcMatOrder', component: WcMaterialOrderComponent, data: { title: '素材订单管理',module: 'culture/wcMaO',power:'SHOW'} },
            { path: 'wcPr', loadChildren:'./wc-product/wc-product.module#WcProductModule'},
            // { path: 'wcPro', component: WcProductComponent, data: { title: '文创产品管理',module: 'culture/wcPr',power:'SHOW'} },
            { path: 'wcPrT', loadChildren:'./wc-product-type/wc-product-type.module#WcProductTypeModule'},
            // { path: 'wcProType', component: WcProductTypeComponent, data: { title: '文创产品类型管理',module: 'culture/wcPrT',power:'SHOW'} },
            { path: 'wcPrO', loadChildren:'./wc-product-order/wc-product-order.module#WcProductOrderModule'},
            // { path: 'wcProOrder', component: WcProductOrderComponent, data: { title: '文创产品订单',module: 'culture/wcPrO',power:'SHOW'} },
            { path: 'wcPrS', loadChildren:'./wc-product-sale/wc-product-sale.module#WcProductSaleModule'},
            // { path: 'wcProSale', component: WcProductSaleComponent, data: { title: '文创产品售后申请管理',module: 'culture/wcPrS',power:'SHOW'} },
            { path: 'wcPrC', loadChildren:'./wc-product-comment/wc-product-comment.module#WcProductCommentModule'},
            // { path: 'wcProcomt', component: WcProductCommentComponent, data: { title: '文创产品评价',module: 'culture/wcPrC',power:'SHOW'} },
            { path: 'wcCrF', loadChildren:'./wc-crowdfunding/wc-crowdfunding.module#WcCrowdfundingModule'},
            // { path: 'wcCro', component: WcCrowdfundingComponent, data: { title: '文创众筹管理',module: 'culture/wcCrF',power:'SHOW'} },
            { path: 'wcCrT', loadChildren:'./wc-crowdfunding-type/wc-crowdfunding-type.module#WcCrowdfundingTypeModule'},
            // { path: 'wcCroType', component: WcCrowdfundingTypeComponent, data: { title: '文创众筹类型管理',module: 'culture/wcCrT',power:'SHOW'} },
            { path: 'wcCrO', loadChildren:'./wc-crowdfunding-order/wc-crowdfunding-order.module#WcCrowdfundingOrderModule'},
            // { path: 'wcCroOrder', component: WcCrowdfundingOrderComponent, data: { title: '文创众筹订单',module: 'culture/wcCrO',power:'SHOW'} },
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CultureRoutingModule { }
