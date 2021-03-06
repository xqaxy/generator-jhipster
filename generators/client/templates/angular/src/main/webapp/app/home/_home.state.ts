import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { HomeComponent } from './';

export const homeRoute: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: []
  },
  canActivate: [UserRouteAccessService]
};
