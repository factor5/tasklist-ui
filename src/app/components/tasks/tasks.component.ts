import { Component } from "@angular/core";
import { TaskService } from "../../services/task.service";
import Task from "../../../Task";

@Component({
  selector: "tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent {
  title = "Tasks";
  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      console.log("tasks:", tasks);
      this.tasks = tasks;
    });
  }

  addTask(event) {
    event.preventDefault();
    let newTask = {
      title: this.title,
      isDone: false
    };
    console.log("submiting", newTask);
    this.taskService.addTask(newTask).subscribe((task: Task) => {
      console.log("saved", task);
      this.tasks.push(task);
      this.title = "";
    });
  }

  deleteTask(id) {
    let tasks = this.tasks;
    console.log("delete task:", id);
    this.taskService.deleteTask(id).subscribe(data => {
      console.log("deleted:", data);
      if (data.n === 1) {
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i]._id === id) {
            tasks.splice(i, 1);
          }
        }
      }
    });
  }

  updateStatus(task) {
    let _task = {
      _id: task._id,
      title: task.title,
      isDone: task.isDone
    };
    console.log("update:", _task);

    this.taskService.updateStatus(_task).subscribe(data => {
      console.log("updated:", data);
      task.isDone = !task.isDone;
    });
  }
}
