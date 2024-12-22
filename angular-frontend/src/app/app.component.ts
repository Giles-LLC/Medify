import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatToolbarModule,MatFormFieldModule,MatInputModule,MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Medify';

  onLogin(): void {
    console.log('Login button clicked');
    // Add logic for navigating to the login page or handling authentication
    // Example: this.router.navigate(['/login']);
  }

  onSignup(): void {
    console.log('Sign Up button clicked');
    // Add logic for navigating to the sign-up page or handling user registration
    // Example: this.router.navigate(['/signup']);
  }
}
