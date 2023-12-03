import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'payment',
    loadChildren: () =>
    import('../../../payment/src/app/payment/payment.module').then(m=> m.PaymentModule)
  },
  {
    path: 'billing',
    loadChildren: () =>
    import('../../../billing/src/app/billing/billing.module').then(n => n.BillingModule)
  }
];
