import { Routes } from '@angular/router';
import { NewtradeComponent } from '../comp/newtrade/newtrade.component';
import { AddtradeComponent } from '../comp/addtrade/addtrade.component';
import { DashboardComponent } from '../comp/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'Newtrade', component: NewtradeComponent },
    { path: 'Addtrade', component: AddtradeComponent },
    { path: 'Dashboard', component: DashboardComponent },
];
