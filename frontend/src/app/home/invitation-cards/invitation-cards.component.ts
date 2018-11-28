import { Component, OnInit } from '@angular/core';
import { InvitationCardService  } from './service/invitation-card.service';

@Component({
  selector: 'app-invitation-cards',
  templateUrl: './invitation-cards.component.html',
  styleUrls: ['./invitation-cards.component.less'],
  providers: [ InvitationCardService ]
})
export class InvitationCardsComponent implements OnInit {
  cardsData: string;

  constructor(private invitationCardsService : InvitationCardService) { }

  ngOnInit() {
    this.invitationCardsService.getInvitation().subscribe(cards => this.cardsData = cards)
  }

  addInvitee()
  {
    console.log("sefsdx");
  }

}
