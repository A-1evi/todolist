# React To-Do Application

A simple To-Do application built with ReactJS and Redux, allowing users to add, view, edit, and delete tasks. The application uses local storage to persist tasks between sessions.

## Features

- Add tasks
- View tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Persistent storage using local storage

## Technologies Used

- React
- Redux
- Tailwind CSS

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js and npm installed on your machine
- A web browser

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/react-todo-app.git
    cd react-todo-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Tailwind CSS:**

    Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/guides/create-react-app) for Create React App. Ensure your `tailwind.config.js` and `src/index.css` are properly configured.

### Running the Application

1. **Start the development server:**

    ```bash
    npm start
    ```

2. **Open the application in your browser:**

    The application will automatically open in your default web browser. If it doesn't, navigate to `http://localhost:3000` in your browser.

### Project Structure

- `src/`
  - `components/`
    - `TaskInput.js`: Component for adding new tasks.
    - `TaskList.js`: Component for displaying the list of tasks.
    - `TaskItem.js`: Component for individual task item, including edit and delete functionality.
  - `features/`
    - `taskSlice.js`: Redux slice for managing tasks state.
  - `app/`
    - `store.js`: Redux store configuration.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.

### Usage

- **Add a Task:**
  - Enter the task description in the input field and press Enter or click the "Add Task" button.
- **View Tasks:**
  - All tasks are displayed in a list format.
- **Edit a Task:**
  - Click the "Edit" button next to a task to modify its description.
- **Delete a Task:**
  - Click the "Delete" button next to a task to remove it from the list.
- **Mark a Task as Completed:**
  - Click on the task description to toggle its completed state.

### Screenshots
![alt text](<Screenshot (171).png>)
![alt text](<Screenshot (172).png>)