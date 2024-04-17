import { Component, Input, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  auth = inject(AuthService);

  @Input() picture: any;
  @Input() name: any;

  navList = ['Home', 'TV Shows', 'News & Popular', 'My List', 'Brows By Language']
  ngOnInit() {}
}
