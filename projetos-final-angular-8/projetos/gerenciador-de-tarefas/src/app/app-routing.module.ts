import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const routes = [
    //Lista das rotas da aplicação
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },

    ...TarefaRoutes

];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //forRoot para tornar o módulo de rotas único (Singleton)
    exports: [RouterModule]
})
export class AppRoutingModule {}