import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';  
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-addtrade',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],  
  templateUrl: './addtrade.component.html',
  styleUrls: ['./addtrade.component.css']
})
export class AddtradeComponent {
  trade = {
    entryPrice: null,
    target: null,
    stopLoss: null
  };
  submitted = false;
  apiUrl = 'https://your-api-url.com/add-trade';  

  constructor(private http: HttpClient) {}  

  onSubmit(form: any): void {
    if (form.valid) {
      this.submitted = true;
      console.log('Trade submitted:', this.trade);

      // Call the API with trade details
      this.http.post(this.apiUrl, this.trade)
        .pipe(
          catchError((error) => {
            console.error('Error occurred while submitting trade:', error);
            return of(null);  // Handle error appropriately
          })
        )
        .subscribe(response => {
          console.log('Trade saved successfully:', response);
        });
    }
  }
}
