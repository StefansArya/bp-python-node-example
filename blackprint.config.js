module.exports = {
	name: "nodes-yourmodulename",

	// If this set to true, the compiler will skip this config/module
	disabled: false,

	// Uncomment this if you want to copy /dist/... files to current folder
	// Especially if you want to publish it to NPM Registry
	// hardlinkTo: "./dist",

	// Unique prefix for .html or .sf template
	// Please use format 'BPIC/YourModuleName'
	templatePrefix: "BPIC/YourModuleName",

	// Optional: Add header to every combined file
	header: "/* Your Nodes \n MIT Licensed */",

	// Optional: Extract registerNode's JSDocs
	bpDocs: '@cwd/dist/nodes-yourmodulename.docs.json',

	hotReload: {
		sf: true,
		js: true,
	},

	// (Required)
	// The .js file probably can be imported for non-browser too
	// Maybe you want to write Node.js compatible node on ".js"
	// and browser compatible node on ".sf" file extension
	js:{
		file:'@cwd/dist/nodes-yourmodulename.mjs', // @cwd = directory where you start the Node.js
		wrapped: 'async-mjs', // Wrap the entire .js to .mjs

		combine:[ // Relative to this config's directory
			'src/_init.js', // Rule order/index may have different priority
			'src/**/*.js',
		],
	},

	// (Optional)
	// This extension can contain html, scss, and js
	// But only use this if you only develop for browser API
	sf:{
		file:'@cwd/dist/nodes-yourmodulename.sf', // will have sf.css and sf.mjs

		// Use `async-mjs` if we want to use `await imports.task()` to avoid waiting this module
		wrapped: 'async-mjs', // Wrap the entire .js in async IIFE to .mjs file

		combine:[ // Relative to this config's directory
			'src/_init.sf', // Rule order/index may have different priority
			'src/**/*.sf',
		],
	}
}