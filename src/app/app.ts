import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Home,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
  //template:
  //`<h1>Good morning</h1>`,
  //styles:'h1{color:red;}'
  
  

})
export class App {
  protected readonly title = signal('Agproject');
}
