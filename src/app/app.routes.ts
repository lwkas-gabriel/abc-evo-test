import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ShowInfoComponent } from './components/show-info/show-info.component';

export const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
  }, {
    path: 'show-info',
    component: ShowInfoComponent
  }
];
