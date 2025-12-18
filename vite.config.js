import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
        {
            name: 'watch-public',
            configureServer(server) {
                server.watcher.add('public/blog-content/**');
            },
            handleHotUpdate({ file, server }) {
                if (file.includes('public/blog-content')) {
                    server.ws.send('blog-update', { file });
                    return []; // Prevent full reload
                }
            }
        },
    ],
    base: "/",
    server: {
        watch: {
            usePolling: true,
        },
    },
});


