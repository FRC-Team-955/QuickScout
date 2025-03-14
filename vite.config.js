import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";
import { execSync } from "child_process";

const branch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF.replace("refs/heads/", "") || "main";
console.log(`Branch: ${branch}`);
const commitHash = execSync(`git rev-parse --short ${branch}`).toString().trim();
const commitNumber = execSync(`git rev-list --count ${branch}`).toString().trim();

// https://vite.dev/config/
export default defineConfig({
	define: {
		__COMMIT_HASH__: JSON.stringify(commitHash),
		__COMMIT_NUMBER__: JSON.stringify(commitNumber),
	},
	base: "./",
	build: {
		outDir: "dist",
		rollupOptions: {
			output: {
				assetFileNames: "assets/[name][extname]", // No hash in the filename
			},
		},
	},
	plugins: [
		svelte(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: false,
			filename: "service-worker.js",
			manifestFilename: "manifest.json",
			workbox: {
				globPatterns: ["**/*.{js,css,html,ico,png,svg,svelte}"],
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
						src: "/QuickScout/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "/QuickScout/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
						purpose: "any",
					},
				],
			},
			injectManifest: false,
		}),
	],
});
