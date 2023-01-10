import slugify from "slugify";

const props = {
	replacement: "_",
	lower: true,
	strict: true,
	trim: true,
};

export function generateSlug(str) {
	const res = slugify(str, props);

	return res;
}
