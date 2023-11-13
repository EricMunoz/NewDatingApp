import { Component } from '@angular/core';
import { Member } from 'app/_models/members';
import { MembersService } from 'app/_services/members.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  members$: Observable<Member[]> | undefined;

  constructor(private memberService: MembersService) {
    
  }

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }

}
