import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${this.apiServiceUrl}/employee/add`,
      employee
    );
  }

  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServiceUrl}/employee/find/${id}`);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.apiServiceUrl}/employee/update`,
      employee
    );
  }

  public deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiServiceUrl}/employee/delete/${id}`);
  }
}
