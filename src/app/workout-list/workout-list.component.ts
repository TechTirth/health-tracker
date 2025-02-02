import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>User Name</th>
          <th>Workout Type</th>
          <th>Minutes</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let workout of workouts$ | async">
          <td>{{ workout.userName }}</td>
          <td>{{ workout.workoutType }}</td>
          <td>{{ workout.minutes }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class WorkoutListComponent {
  workouts$ = this.workoutService.getWorkouts();

  constructor(private workoutService: WorkoutService) {}
}