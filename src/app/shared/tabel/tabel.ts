import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-tabel',
  imports: [RouterLink],
  templateUrl: './tabel.html',
  styleUrl: './tabel.css',
})
export class Tabel {

          @Input() details: any[] = [];
          @Output() edit = new EventEmitter<number> ();
          @Output() delete = new EventEmitter<number>();
}
