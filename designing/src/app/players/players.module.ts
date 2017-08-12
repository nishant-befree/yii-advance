import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { SharedModule } from '../shared/shared.module';
import { PlayersRoutingModule } from './players.routing';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
    declarations: [
        PlayerListComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, PlayersRoutingModule]
})
export class PlayersModule { }