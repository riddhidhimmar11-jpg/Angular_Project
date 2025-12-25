import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-detail',
  imports: [],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css',
})
export class StudentDetail implements OnInit{
          email!:string;
          private route = inject(ActivatedRoute);
          
          ngOnInit(): void{
            this.email=this.route.snapshot.paramMap.get('email')||'';
            console.log(this.route);
          }
}
