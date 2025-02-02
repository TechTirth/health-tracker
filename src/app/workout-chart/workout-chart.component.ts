import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutService } from '../workout.service';
import { Chart, registerables } from 'chart.js';
import { trigger, style, animate, transition } from '@angular/animations';


Chart.register(...registerables);

@Component({
  selector: 'app-workout-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chart-container" @fadeIn>
  <canvas #chartCanvas></canvas>
</div>

  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  
  styles: [`
    .chart-container {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-top: 20px;
    }
  `]
})
export class WorkoutChartComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  private chart: Chart | undefined;

  constructor(private workoutService: WorkoutService) {}

  ngAfterViewInit() {
    this.createChart();
    this.workoutService.getWorkouts().subscribe(() => {
      this.updateChart();
    });
  }

  private createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
  
    // Create a gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(54, 162, 235, 0.9)');
    gradient.addColorStop(1, 'rgba(54, 162, 235, 0.1)');
  
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Workout Minutes',
          data: [],
          backgroundColor: gradient,
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Minutes'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Workout Progress',
            font: {
              size: 18,
              family: 'Poppins'
            }
          },
          legend: {
            labels: {
              font: {
                size: 14,
                family: 'Poppins'
              }
            }
          }
        }
      }
    });
  }
  

  private updateChart() {
    this.workoutService.getWorkouts().subscribe(workouts => {
      if (this.chart) {
        const workoutsByType = workouts.reduce((acc: {[key: string]: number}, workout) => {
          acc[workout.workoutType] = (acc[workout.workoutType] || 0) + workout.minutes;
          return acc;
        }, {});

        this.chart.data.labels = Object.keys(workoutsByType);
        this.chart.data.datasets[0].data = Object.values(workoutsByType);
        this.chart.update();
      }
    });
  }
}