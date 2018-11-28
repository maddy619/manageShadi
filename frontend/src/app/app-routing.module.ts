import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitationCardsComponent } from './home/invitation-cards/invitation-cards.component';

const routes: Routes = [
  { path : 'invitationCards', component : InvitationCardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

