import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MapPoolEditComponent } from './map-pool-edit/map-pool-edit.component';
import { MapEditComponent } from './map-edit/map-edit.component';
import { IconsModule } from '@app/icons/icons.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { AdminItemListComponent } from './admin-item-list/admin-item-list.component';
import { PlayerSkillTableComponent } from './player-skill-table/player-skill-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ForceCreatePlayerAccountComponent } from './force-create-player-account/force-create-player-account.component';
import { WhitelistEditComponent } from './whitelist-edit/whitelist-edit.component';
import { DefaultPlayerSkillEditComponent } from './default-player-skill-edit/default-player-skill-edit.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { MarkdownModule } from 'ngx-markdown';
import { EditPageWrapperComponent } from './edit-page-wrapper/edit-page-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MarkdownModule,

    IconsModule,
    SharedModule,

    AdminRoutingModule,
  ],
  declarations: [
    MapPoolEditComponent,
    MapEditComponent,
    AdminItemListComponent,
    PlayerSkillTableComponent,
    ForceCreatePlayerAccountComponent,
    WhitelistEditComponent,
    DefaultPlayerSkillEditComponent,
    DocumentEditComponent,
    EditPageWrapperComponent,
  ],
})
export class AdminModule { }
