import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor(private router: Router) { }

  login() {
    // Perform login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/component1']); 
    }else{
      alert('Invalid credentials');
    }
  }
}
