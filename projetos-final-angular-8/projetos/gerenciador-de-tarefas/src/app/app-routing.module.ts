import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes = [
    //Lista das rotas da aplicação

];

@NgModule({
    imports: [RouterModule.forRoot(routes)], //forRoot para tornar o módulo de rotas único (Singleton)
    exports: [RouterModule]
})
export class AppRoutingModule {}