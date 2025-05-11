# PlaneNote

PlaneNote is a full-stack application built with Laravel, React, Tailwind CSS, and Vite. It supports separate login systems for staff and customers, offering a modern, responsive UI.

## Features

- **Staff Authentication:** Utilizes the `users` table.
- **Customer Authentication:** Uses a dedicated customer login credentials table.
- **React UI:** Clean, responsive interface developed with React and styled using Tailwind CSS.
- **Modern Build Process:** Powered by Vite for fast and efficient development.

## Requirements

- **PHP:** 8.0+
- **Composer**
- **Node.js & npm**

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd PlaneNote
```

### 2. Install Dependencies

#### PHP Dependencies

```bash
composer install
```

#### Node Dependencies

```bash
npm install
```

### 3. Configure the Environment

Copy the example environment file and generate an application key:

```bash
cp .env.example .env
php artisan key:generate
```

> **Note:**
> Ensure your `.env` file has the correct database settings. By default, the project uses SQLite.

### 4. Run Migrations

```bash
php artisan migrate
```

### 5. Start the Development Servers

#### Laravel Backend

```bash
php artisan serve
```

- The backend will be available at [http://localhost:8000](http://localhost:8000).

#### React Frontend via Vite

```bash
npm run dev
```

- The React app will be served on [http://localhost:5173](http://localhost:5173).

## Routing

- **Staff Login:** [http://localhost:8000/staff/login](http://localhost:8000/staff/login)
- **Customer Login:** [http://localhost:8000/customer/login](http://localhost:8000/customer/login)
  (This route loads the React page.)

## Project Structure

- **Laravel Backend:**
  Located in the root along with `routes/` and `app/` directories.
- **React Frontend:**
  Main entry point is at `resources/js/index.tsx` with page components in `resources/js/Pages/`.
- **Styles:**
  Global styles are managed in `resources/css/app.css`.
- **Blade SPA Shell:**
  The SPA shell is defined in `resources/views/app.blade.php`.

## Customization

- **React Components:**
  Customize or add new page components in `resources/js/Pages/`.
- **Backend Logic:**
  Update application logic and routes in Laravel (`routes/web.php`, `routes/auth.php`).
- **Styling:**
  Modify Tailwind CSS or add additional style rules in `resources/css/app.css`.

## Troubleshooting

- **Undefined Variable Issues:**
  Ensure that any Inertia or unused directives are removed from the Blade layout.
- **UI Problems:**
  Confirm that the Vite development server is running and that routes are correctly configured.
- **Cache Issues:**
  If changes are not reflecting, clear your caches:
  ```bash
  php artisan config:clear
  php artisan view:clear
  ```
- **SPA Shell Verification:**
  The `resources/views/app.blade.php` file should have the following minimal content:
  ```html
  <div id="app"></div>
  @viteReactRefresh
  @vite('resources/js/index.tsx')
  ```

## License

This project is open source. Contributions are welcome!
