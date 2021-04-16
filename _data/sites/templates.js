module.exports = {
	name: "Website Templates", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://logistics-next.netlify.app/",
		"https://realestate-next.netlify.app/",
	]
};
