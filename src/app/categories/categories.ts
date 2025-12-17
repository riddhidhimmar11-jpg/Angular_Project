import { Component } from '@angular/core';
import { RouteConfigLoadEnd,RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

}
