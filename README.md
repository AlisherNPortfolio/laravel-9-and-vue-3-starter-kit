# Laravel 9 and Vue 3 starter kit

## Installation

In order to run the project do the followings:

1.  Run `composer install`
2.  Run `php artisan key:generate`
3.  Run `php artisan jwt:secret`
4.  Run `php artisan migrate`
5.  Add `VITE_BASE_URL="${APP_URL}"` into `.env` file
6.  Run `npm run dev`
7.  Run `php artisan serve`

## Adding roles and permissions

Update `database/seeders/RolePermissionSeeder.php` file content. To get more information about roles and permissions go to spatie laravel permissions [documentation](https://spatie.be/docs/laravel-permission/v5/introduction).
