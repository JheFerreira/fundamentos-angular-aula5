import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
declarations: [
AppComponent,
PrimeiraPaginaComponent,
SegundaPaginaComponent,
PaginaNaoEncontradaComponent,
PaginaComParametrosComponent,
PaginaProtegidaComponent,
LoginComponent
],
imports: [

AppRoutingModule,
RouterModule,
BrowserModule,
FormsModule


],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
