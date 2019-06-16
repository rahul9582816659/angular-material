import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './app-material.module';
import {NavigationComponent} from './component/navigation/navigation.component';
import {HomeComponent} from './component/home/home.component';
import {CardComponent} from './component/card/card.component';
import {ListComponent} from './component/list/list.component';
import {ExpansionPannelComponent} from './component/expansion-pannel/expansion-pannel.component';
import {GridListComponent} from './component/grid-list/grid-list.component';
import {ListItemComponent} from './component/list-item/list-item.component';
import {StepperComponent} from './component/stepper/stepper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TabsComponent} from './component/tabs/tabs.component';
import {TreeComponent} from './component/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CardComponent,
    ListComponent,
    ExpansionPannelComponent,
    GridListComponent,
    ListItemComponent,
    StepperComponent,
    TabsComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
