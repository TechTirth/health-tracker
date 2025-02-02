import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [
    { id: 1, userName: 'John Doe', workoutType: 'Running', minutes: 30 },
    { id: 2, userName: 'Jane Smith', workoutType: 'Cycling', minutes: 45 },
    { id: 3, userName: 'Mike Johnson', workoutType: 'Running', minutes: 25 }
  ];

  private workoutsSubject = new BehaviorSubject<Workout[]>(this.workouts);

  getWorkouts(): Observable<Workout[]> {
    return this.workoutsSubject.asObservable();
  }

  addWorkout(workout: Omit<Workout, 'id'>): void {
    const newWorkout = {
      ...workout,
      id: this.workouts.length + 1
    };
    this.workouts.push(newWorkout);
    this.workoutsSubject.next(this.workouts);
  }
}