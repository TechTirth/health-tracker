# Workout Tracker

Live Deployment: [Insert GitHub Pages link here]

A simple Angular application for tracking workout activities. Users can log their workouts with details like name, type of workout, and duration.

## Features

- Add new workout entries with user name, workout type, and duration
- View all workout entries in a clean, tabulated format
- Responsive design with a modern UI
- Form validation to ensure data quality

## Tech Stack

- Angular 18
- RxJS
- TypeScript
- CSS3

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development Server

Run the development server:
```bash
npm start
```
Navigate to the provided URL in your browser. The application will automatically reload if you change any of the source files.

### Build

Build the project for production:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── workout-form/      # Workout entry form component
│   ├── workout-list/      # Workout list display component
│   ├── workout.model.ts   # Workout interface definition
│   └── workout.service.ts # Service for workout data management
├── global_styles.css      # Global CSS styles
├── index.html            # Main HTML file
└── main.ts              # Application entry point
```

## Features

### Workout Form
- User name input (required)
- Workout type selection (Running, Cycling, Swimming)
- Duration input in minutes (required, minimum 1 minute)
- Form validation with visual feedback

### Workout List
- Displays all workouts in a table format
- Shows user name, workout type, and duration
- Responsive design for all screen sizes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

