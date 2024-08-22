import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  constructor() {}

  jsonToCsv(jsonData: any[]): string {
    // Get the keys (header) from the JSON
    const keys = Object.keys(jsonData[0]);

    // Create a CSV string with the headers
    let csvString = keys.join(',') + '\n';

    // Append each row of data
    jsonData.forEach((row) => {
      const values = keys.map((key) => row[key]);
      csvString += values.join(',') + '\n';
    });

    return csvString;
  }

  downloadCsv(csvString: string, filename: string): void {
    // Create a Blob from the CSV string
    const blob = new Blob([csvString], { type: 'text/csv' });

    // Create a link element
    const link = document.createElement('a');

    // Create a URL for the Blob and set it as the href attribute
    link.href = URL.createObjectURL(blob);

    // Set the download attribute to the filename
    link.download = filename;

    // Append the link to the document body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  }
}
