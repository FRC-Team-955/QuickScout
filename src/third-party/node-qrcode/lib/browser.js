import { create } from "./core/qrcode";
import { render } from "./renderer/svg-tag.js";

export function toSVGString(text, opts) {
	const data = create(text, opts);
	return render(data, opts);
}
