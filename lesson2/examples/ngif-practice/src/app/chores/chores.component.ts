import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work', 'Buy groceries', 'Clean kitchen'];
   finishedChores = [];

   targetImage = 'https://images.pexels.com/photos/10041628/pexels-photo-10041628.jpeg';

   constructor() { }

   ngOnInit() {
   }

}
