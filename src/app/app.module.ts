import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TableModule  } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './ui/users/components/users-list/users-list.component';
import { UsersComponent } from './ui/users/pages/users/users.component';
import { UserGateway } from './domain/models/user/gateway/user-gateway';
import { UserService } from './infraestructure/driven-adapter/user-api/user.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './ui/store/app.state';
import { usersEffects } from './ui/store/users/effects/users.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserDelayService } from './infraestructure/driven-adapter/user-api/user-delay.service';

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
    TableModule,
    ButtonModule,
    StoreModule.forRoot( ROOT_REDUCERS ),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([usersEffects])
  ],
  providers: [{provide: UserGateway, useClass: UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
