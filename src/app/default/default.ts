import { Component, inject } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
//import { Router } from 'express';

@Component({
  selector: 'app-default',
  imports: [],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default {

  // constructor (private router : Router){}
  protected readonly router = inject(Router);
  gotohome()
  {
    this.router.navigate(['home']);
  }
  
}
