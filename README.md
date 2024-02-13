# React Challenge Project

This is a React with TypeScript project developed for the React Challenge.

## How to start the System

### Using npm (Local)

Make sure you have Node.js(>=14.0.0) installed on your machine.

1. **Installation of Dependencies:**

   ```
   npm install
   ```

2. **Start the Development Server:**

```
npm start
```

3. **The application will be available at http://localhost:3000.**

### Using Docker

**Make sure you have Docker installed on your machine.**

1. Build the Image and Start the Container:

```
docker-compose up --build
```

- This will create the container image, start the container, and your React app will be accessible at http://localhost:3000.

- To terminate the container, you can press Ctrl + C in the terminal where the container is running, or run:

```
docker-compose down
```

- This will terminate the container.

# Project Structure

- src/: Contains the React project source code files.
- public/: Contains the public files of the React project.
- docker-compose.yml: Docker Compose configuration file to run the application with Docker.
- Dockerfile: Docker configuration file to build the container image.
