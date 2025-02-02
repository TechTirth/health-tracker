import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="workoutForm" (ngSubmit)="onSubmit()" class="form-container">
      <div class="form-group">
        <label for="userName">User Name*</label>
        <input id="userName" type="text" formControlName="userName" class="form-control">
      </div>

      <div class="form-group">
        <label for="workoutType">Workout Type*</label>
        <select id="workoutType" formControlName="workoutType" class="form-control">
          <option value="Running">Running</option>
          <option value="Cycling">Cycling</option>
          <option value="Swimming">Swimming</option>
        </select>
      </div>

      <div class="form-group">
        <label for="minutes">Workout Minutes*</label>
        <input id="minutes" type="number" formControlName="minutes" class="form-control">
      </div>

      <div class="ripple-container">
      <button type="submit" class="btn btn-primary">
  <span class="material-icons">add_circle</span> Add Workout
</button>
</div>

    </form>
  `,
  styles: [`
    .form-container {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class WorkoutFormComponent {
  workoutForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService
  ) {
    this.workoutForm = this.fb.group({
      userName: ['', Validators.required],
      workoutType: ['Running', Validators.required],
      minutes: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.workoutForm.valid) {
      this.workoutService.addWorkout(this.workoutForm.value);
      this.workoutForm.reset({
        workoutType: 'Running'
      });
    }
  }
}