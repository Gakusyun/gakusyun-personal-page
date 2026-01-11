/**
 * Color utility functions for generating theme color variants from a base hex color
 */

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
			}
		: { r: 99, g: 102, b: 241 }; // default to indigo-500
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Convert hex to HSL
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } {
	const { r, g, b } = hexToRgb(hex);
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const max = Math.max(rNorm, gNorm, bNorm);
	const min = Math.min(rNorm, gNorm, bNorm);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case rNorm:
				h = ((gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0)) / 6;
				break;
			case gNorm:
				h = ((bNorm - rNorm) / d + 2) / 6;
				break;
			case bNorm:
				h = ((rNorm - gNorm) / d + 4) / 6;
				break;
		}
	}

	return {
		h: h * 360,
		s: s * 100,
		l: l * 100,
	};
}

/**
 * Adjust the lightness of a hex color
 * @param hex - The base hex color
 * @param percent - Percentage to adjust lightness (-100 to 100)
 */
export function adjustLightness(hex: string, percent: number): string {
	const { h, s, l } = hexToHsl(hex);
	const newL = Math.max(0, Math.min(100, l + percent));
	return hslToHex(h, s, newL);
}

/**
 * Convert HSL to hex
 */
export function hslToHex(h: number, s: number, l: number): string {
	const sNorm = s / 100;
	const lNorm = l / 100;

	const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = lNorm - c / 2;

	let r = 0;
	let g = 0;
	let b = 0;

	if (h >= 0 && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (h >= 60 && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (h >= 120 && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (h >= 180 && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (h >= 240 && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (h >= 300 && h < 360) {
		r = c;
		g = 0;
		b = x;
	}

	const rFinal = Math.round((r + m) * 255);
	const gFinal = Math.round((g + m) * 255);
	const bFinal = Math.round((b + m) * 255);

	return rgbToHex(rFinal, gFinal, bFinal);
}

/**
 * Add opacity to a hex color
 * @param hex - The base hex color
 * @param alpha - Opacity value (0-1)
 */
export function addOpacity(hex: string, alpha: number): string {
	const { r, g, b } = hexToRgb(hex);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Generate CSS custom properties for theme colors from a base hex color
 * This is a JavaScript version that can be used at runtime
 */
export function generateThemeColors(baseColor: string): Record<string, string> {
	const { h, s, l } = hexToHsl(baseColor);

	return {
		"--primary-base": baseColor,
		"--primary-lighter": hslToHex(h, s, Math.min(95, l + 20)),
		"--primary-light": hslToHex(h, s, Math.min(85, l + 10)),
		"--primary": hslToHex(h, s, l),
		"--primary-dark": hslToHex(h, s, Math.max(20, l - 10)),
		"--primary-darker": hslToHex(h, s, Math.max(15, l - 20)),
		"--primary-alpha-20": addOpacity(baseColor, 0.2),
		"--primary-alpha-10": addOpacity(baseColor, 0.1),
	};
}
