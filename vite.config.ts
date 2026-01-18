import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
    plugins: [
        sveltekit(),
        Icons({
            compiler: "svelte",
            autoInstall: true, // experimental
        }),
    ],
    base: process.env.NODE_ENV === "production" ? "/sonivoapp-main/" : "/",
});
