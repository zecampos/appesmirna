import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MembrosPage } from '../pages/membros/membros';
import { AdicionarMembrosPage } from '../pages/adicionar-membros/adicionar-membros';
import { MembroPage } from '../pages/membro/membro';
import { CLulasPage } from '../pages/c-lulas/c-lulas';
import { CadastrarCLulaPage } from '../pages/cadastrar-clula/cadastrar-clula';
import { CLulaPage } from '../pages/c-lula/c-lula';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
import { Back4Provider } from '../providers/back4/back4';
import {HttpModule} from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    MembrosPage,
    AdicionarMembrosPage,
    MembroPage,
    CLulasPage,
    CadastrarCLulaPage,
    CLulaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MembrosPage,
    AdicionarMembrosPage,
    MembroPage,
    CLulasPage,
    CadastrarCLulaPage,
    CLulaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Back4Provider,
    HttpModule
  ]
})
export class AppModule {}
