import { Routes } from '@angular/router';

import {ListComponent} from '@products/pages/list/list.component';
import {ShowComponent} from '@products/pages/show/show.component';
import {CreateComponent} from '@products/pages/create/create.component';
import { RegisterComponent } from '@inventory/pages/register/register.component';

export const routes: Routes = [
    {
      path: 'list',
      component: ListComponent
    },
    {
      path: '',
      component: ListComponent
    },
    {
      path: 'show/:id',
      component: ShowComponent,
    },
    {
      path: 'create',
      component: CreateComponent
    },
    {
      path: 'register/:id',
      component: RegisterComponent
    }
];
