import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { MessageService } from 'primeng/api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    AppComponent,



    // Ajoutez d'autres composants si nécessaire
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppLayoutModule,
    DynamicDialogModule
    // Importez d'autres modules nécessaires à votre application
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, MessageService, DialogService
    // Ajoutez d'autres services si nécessaire
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
