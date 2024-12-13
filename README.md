# Anatomical Structures Explorer

An Angular-based web application designed to display and explore anatomical structures data, featuring an interactive list view and a detailed modal display system.

## Project Overview
This application provides a dynamic platform for viewing and filtering anatomical structures, offering a detailed exploration experience with responsive and interactive features.

## Technical Stack
- **Frontend Framework**: Angular (Latest Version)
- **Language**: TypeScript
- **State Management**: RxJS
- **Styling**: SCSS
- **Testing Framework**: Jasmine/Karma

## Project Structure
### Components
- **StructureListComponent**: Main view displaying the list of anatomical structures.
- **ModalComponent**: Detail view modal for individual structure information.

### Services
- **DataService**: Handles API integration for fetching structure data.
- **ModalService**: Manages modal visibility and interactions.

### Models
- **Structure Interface**: Represents the structure's data model.
- **Row Interface**: Represents rows within the structure list.

### Pipes
- **UniqueStructuresPipe**: Custom filter for extracting unique structures from the data.

## Features
- Interactive list view of anatomical structures.
- Detailed modal view showcasing:
  - Structure Name
  - Description
  - Ontology Link
  - IRI Information
- Custom filtering for unique structures.
- Responsive design optimized for multiple devices.
- Robust error handling for API failures.
- Loading state management for a smoother user experience.

## Setup Instructions
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   ng serve
   ```
3. **Run tests**:
   ```bash
   ng test
   ```

## Development Status
- **Current Status**: Development mode.

### Known Issues:
1. Challenges with API integration using `flatMap` functionality.
2. Data fetching limitations from provided endpoints.
3. Optimization needed for modal visibility state management.

## API Integration
- **Primary API**:
  [Human Atlas API](https://apps.humanatlas.io/asctb-api/v2/1SqNmcPDB8PrZF1BhzgdKBxkfLcCR8VYMAkSIbnK_AXA/949267305)
- **Secondary API**:
  [EBI Ontologies API](https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms)

## Highlights
This project leverages Angular's latest features including:
- Standalone components.
- Modern control flow syntax (`@if`, `@for`).
- Advanced error handling mechanisms.
- An intuitive modal system.

## Acknowledgments
Thank you for the opportunity to work on this project. The challenges encountered during API integration have provided valuable experience in handling complex data structures and exploring Angular's modern capabilities.

## Local Deployment
Visit [http://localhost:4200](http://localhost:4200) to view the application locally.

