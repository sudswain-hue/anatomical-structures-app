import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Row } from '../models/row.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://apps.humanatlas.io/asctb-api/v2/1SqNmcPDB8PrZF1BhzgdKBxkfLcCR8VYMAkSIbnK_AXA/949267305';

  constructor(private http: HttpClient) {}

  getData(): Observable<Row[]> {
    return this.http.get<Row[]>(this.apiUrl);
  }

  getStructureDetails(id: string): Observable<any> {
    const url = `https://www.ebi.ac.uk/ols4/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/UBERON_0002302`;
    return this.http.get(url);
  }
}