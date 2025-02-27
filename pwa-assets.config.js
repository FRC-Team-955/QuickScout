import { defineConfig, minimalPreset as preset } from "@vite-pwa/assets-generator/config";

export default defineConfig({
	preset,
	images: [
		"src/assets/logo.png",
		"src/assets/starting-position-blue.png",
		"src/assets/starting-position-red.png",
		"src/assets/text-logo-removebg.png",
	],
});
