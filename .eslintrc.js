module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["airbnb-base", "plugin:prettier/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["prettier"],
	rules: {
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"no-unused-vars": "warn",
		"no-use-before-define": [
			"error",
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: false,
			},
		],
		"prettier/prettier": ["error", { parser: "css" }],
	},
};
