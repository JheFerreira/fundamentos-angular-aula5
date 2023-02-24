import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent, 
    PrimeiraPaginaComponent
  ],
  imports: [
    RouterModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
