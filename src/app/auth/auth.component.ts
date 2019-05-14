import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(
      fragments => {
        let res = new URLSearchParams(fragments);
        this.authService.saveToken(res);
        this.router.navigate(['/']);
      }
    )
  }

}
