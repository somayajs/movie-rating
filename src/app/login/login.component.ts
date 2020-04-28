import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  show: boolean = true;
  accountName: string;
  password: string;
  @Output() notifyParentUsername: EventEmitter<string>= new EventEmitter<string>();
  @Output() notifyParentShow: EventEmitter<boolean> = new EventEmitter<boolean>();
  passData(){
    this.notifyParentUsername.emit(this.accountName);
    this.notifyParentShow.emit(this.show);
}


}
