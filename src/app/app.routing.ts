//core stuff
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { AddCacheComponent } from './add-cache/add-cache.component';
import { ListCacheComponent } from './list-cache/list-cache.component';
import { DetailCacheComponent } from './detail-cache/detail-cache.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListCacheComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
