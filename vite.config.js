import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue({ version: 3 }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
    ],
    // resolve: {
    //     alias: [{
    //         find: '@',
    //         replacement: path.resolve(__dirname, '/resources/js/admin')
    //     }]
    // }
});