import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  // interpolation
  protected name="Contact Us"
  //two way datbinding
   username="abcd";

  //property binding
  
  imgeUrl="/images/wishlist.png"

  
}
