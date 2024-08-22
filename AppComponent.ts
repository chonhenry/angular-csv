import { Component } from '@angular/core';
import { CsvService } from './csv.service'; // Adjust the path according to your project structure

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private csvService: CsvService) {}

  downloadCsvFile(): void {
    const jsonData = [
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Jane', age: 25, city: 'San Francisco' },
    ];

    const csvString = this.csvService.jsonToCsv(jsonData);
    this.csvService.downloadCsv(csvString, 'data.csv');
  }
}
