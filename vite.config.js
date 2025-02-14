import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
	base: "./",
	build: {
		outDir: "dist",
		rollupOptions: {
			output: {
			  assetFileNames: 'assets/[name][extname]', // No hash in the filename
			}
		}
	},
	plugins: [
		svelte(),
		VitePWA({
			registerType: 'autoUpdate',
			injectRegister: "auto",
			filename: 'service-worker.js',
			manifestFilename: 'manifest.json',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,svelte}']
			},
			manifest: {
				name: "QuickScout",
				short_name: "QuickScout",
				start_url: "/QuickScout/",
				scope: "/QuickScout/",
				display: "fullscreen",
				description: "A scouting app for the 2025 FRC Season for teams 955, 749, and 997",
				lang: "en",
				dir: "auto",
				theme_color: "#000000",
				background_color: "#000000",
				orientation: "portrait",
				icons: [
					{
						"src": "https://www.pwabuilder.com/assets/icons/icon_512.png",
						"sizes": "512x512",
						"type": "image/png",
						"purpose": "maskable"
					},
					{
						"src": "https://www.pwabuilder.com/assets/icons/icon_192.png",
						"sizes": "192x192",
						"type": "image/png",
						"purpose": "any"
					}
				]
			},
			injectManifest: false,
		})
	]
});
