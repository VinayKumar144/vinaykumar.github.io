import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colors',
      },
      {
        path: 'customer',
        component: ColorsComponent,
        data: {
          title: 'Customers',
        },
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
