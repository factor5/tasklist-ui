import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { httpFactory } from "@angular/http/src/http_module";
import { map } from "rxjs/operators";
import Task from "../../Task";

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {
    console.log("TaskService initialized!");
  }

  getTasks() {
    return this.http.get("http://localhost:3000/api/tasks").pipe(
      map(res => {
        console.log("responce", res);
        return res;
      })
    );
  }

  addTask(task: Task) {
    console.log("adding task", task);
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/api/task", task, {
        headers: headers
      })
      .pipe(
        map(res => {
          console.log("responce task:", res);
          return res;
        })
      );
  }

  deleteTask(id) {
    return this.http
      .delete(`http://localhost:3000/api/task/${id}`)
      .pipe(map(res => res));
  }

  updateStatus(task) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .put(`http://localhost:3000/api/task/${task._id}`, task, {
        headers: headers
      })
      .pipe(map(res => res));
  }
}
