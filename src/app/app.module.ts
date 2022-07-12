import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TableModule  } from 'primeng/table';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './ui/users/components/users-list/users-list.component';
import { UsersComponent } from './ui/users/pages/users/users.component';
import { UserGateway } from './domain/models/user/gateway/user-gateway';
import { UserService } from './infraestructure/driven-adapter/user-api/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [{provide: UserGateway, useClass: UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
