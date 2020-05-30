import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  codebreaker: String;
  responseCB = '';
  state ='';

  constructor(private cb: ApiService) {}
  tryFind() {
    this.cb.guest(this.codebreaker).subscribe(res => {
      this.responseCB = res.result
    })
  }

  setSecretC() {
    let secret = this.generateRandom();
    this.cb.setSecret(secret).subscribe(res => {
      this.state = res.result
    });
  }

  generateRandom() {
    let secret = []
    for (let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], i = a.length; i--;) {
      let random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
      secret.push(random)
    }
    secret = secret.splice(6, 4);
    console.log(secret.join(''))
    return secret.join('');
  }
}
