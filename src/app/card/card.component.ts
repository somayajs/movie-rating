import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie;
  showText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  readMore() {
    this.showText = !this.showText;
  }
}
