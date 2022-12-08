import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos and Images';
  image1 = 'https://images.pexels.com/photos/10041628/pexels-photo-10041628.jpeg';
  image2 = 'https://media1.giphy.com/media/3oKIPnAiaMCws8nOsE/200w.webp?cid=ecf05e47k93ssnydq2joge4iz7rdj2sx3kxhwqdn8eb83xhg&rid=200w.webp&ct=g';
  image3 = 'https://images.pexels.com/photos/4200202/pexels-photo-4200202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  constructor() { }

  ngOnInit() {
  }

}
