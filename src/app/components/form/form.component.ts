import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // public username: any;
  doSubmit() {
    // <input type="text" id = "username" />
    // let usernameDom: any = document.getElementById('username');
    // alert(usernameDom.value);
  }
  public cities = ["北京", "上海", "深圳"]
  public peopleInfo: any = {
    username: "",
    sex: "2",
    city: "",
    hobbies: [{
      title: "eat",
      checked: false
    }, {
      title: "code",
      checked: false
    }, {
      title: "sleep",
      checked: false
    }]
  }
}
