import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelAboutComponent } from './components/tel-about/tel-about.component';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { Test1Component } from './components/test1/test1.component';
import { ContentComponent } from './components/content/content.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [
  // 在线书城
  // 在路由配置中如何制定默认显示组件
  // 用 path 的匹配方式进行默认定义
  // ***** 在定义路由时  同级路由中 有且仅有一个默认路由
  // {path:"",component:MainComponent}, 
  // ----------
  // redirectTo 重定向到某个路由  取值  是 非当前路由地址的其它其它路由
  // pathMatch  路由匹配原则
  //  例如 ：  127.0.0.1：4200/aaa/log
  //                      ==>  一个按钮  /ccc
  //    ==>  prefix  ==> (匹配前缀) 替换前缀访问  ==> 127.0.0.1：4200/ccc/log
  //    ==>  full    ==> （完全匹配）新路径访问   ==> 127.0.0.1：4200/ccc
  // {path:"ccc",redirectTo:"bbb",pathMatch:}, 
  {path:"",redirectTo:"/book",pathMatch:"full"},
  {path:"book",component:MainComponent,children:[
    // 默认的子路主页
    {path:"",component:ContentComponent},
    // {path:"detail",component:BookDetailComponent},
    // :bookId 定义的为  rest 风格传递参数是  参数的 变量名
    {path:"detail/:bookId",component:BookDetailComponent},
  ]},
  // 联系我们
  {path:"telAbout",component:TelAboutComponent},
  // 关于我们
  {path:"about",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
