import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  // protected readonly router = inject(Router);
  // gotoprofile()
  // {
  //   this.router.navigate(['admin'])
  // }

}
