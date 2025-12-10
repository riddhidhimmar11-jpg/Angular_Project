import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-default',
  imports: [RouterLink],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default {
  constructor (private router : Router){}
  gotohome()
  {
    //this.router.navigate(['home']);
  }

}
