import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    this.authenticateUser(this.username, this.password).then(role => {
      if (role === 'alumno') {
        this.router.navigate(['/alumno-dashboard']);
      } else if (role === 'profesor') {
        this.router.navigate(['/profesor-dashboard']);
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }

  authenticateUser(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (username === 'alumno1' && password === '1234') {
        resolve('alumno');
      } else if (username === 'profesor1' && password === '1234') {
        resolve('profesor');
      } else {
        resolve('invalid'); // Devolver 'invalid' en lugar de `null`
      }
    });
  }
}
