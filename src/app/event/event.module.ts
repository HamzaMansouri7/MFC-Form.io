import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from '@formio/angular/resource';
import { ResourceComponent } from './resource/resource.component';

const eventRoutes: Routes = FormioResourceRoutes();
eventRoutes[2].children.push({
  path: 'registrations',
  loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
});



@NgModule({
  declarations: [
    ResourceComponent
  ],
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes()),
    RouterModule.forChild(eventRoutes)
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventModule { }
