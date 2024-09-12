# Todo App

This is a simple, fully functional Todo app built using React, Tailwind CSS, and Firebase. The app allows users to create, edit, and delete tasks while managing user authentication and persistent data through Firebase.

Check it out at:

https://basic-todo-app-3334a.web.app/

## Features

- **Add, Edit, and Delete Todos**: Manage your tasks with ease. You can add new tasks, edit existing ones, and delete completed or unneeded tasks.
- **User Authentication**: Sign in with Google using Firebase Authentication.
- **Cloud Storage**: Todos are stored securely in Firestore, ensuring data is accessible across devices.
- **Responsive Design**: Built with Tailwind CSS to ensure a seamless experience on all screen sizes.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Firebase**: Used for authentication and Firestore database.
- **Vite**: Fast and modern build tool for the development environment.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (or yarn)

### Installation

1.  Clone the repository:

    ```
    bash git clone https://github.com/yourusername/todo-app.git
    ```

2.  Navigate to the project directory:

    ```
    cd todo-app
    ```

3.  Install dependencies:

    ```
    npm install
    ```

4.  Create a .env file in the root of your project and add your Firebase configuration:

    ```
    VITE_FIREBASE_API_KEY=your-api-key
    VITE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id
    VITE_MEASURMENT_ID=your-measurement-id
    ```

5.  Start the development server:

    ```
    npm run dev
    ```

6.  Open your browser and go to http://localhost:5173 to view the app.
