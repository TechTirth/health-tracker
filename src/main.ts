import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutFormComponent } from './app/workout-form/workout-form.component';
import { WorkoutListComponent } from './app/workout-list/workout-list.component';
import { WorkoutChartComponent } from './app/workout-chart/workout-chart.component';  // Import the chart component

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        WorkoutFormComponent,
        WorkoutListComponent,
        WorkoutChartComponent // Include the chart component here
    ],
    template: `
    <div class="container">
      <h1>🏃‍♂️ Workout Tracker</h1>
      <app-workout-form></app-workout-form>
      <app-workout-list></app-workout-list>
      <app-workout-chart></app-workout-chart>  <!-- Add the chart component here -->
    </div>
  `
})
export class App {
  name = 'Workout Tracker';
}

bootstrapApplication(App).catch(err => console.error(err));
