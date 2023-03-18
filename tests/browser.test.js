/**
 * @jest-environment jsdom
 */

// === For Browser Environment ===
window.ResizeObserver = class{};

// This will automatically load ScarletsFrame + Engine + Sketch
require("@blackprint/sketch");

// Disable loader for browser, because we're testing with Node.js
sf.loader.turnedOff = true;
sf.loader.task = false;

// If you're ready to create unit test for your module
// Please change `test.only()` into `test()`

let instance = null;
test.only('Blackprint.Sketch does exist on window', async () => {
	expect(window.Blackprint.Sketch).toBeDefined();

	// Create an instance where we can create nodes or import JSON
	instance = new Blackprint.Sketch();
});

jest.setTimeout(60e3); // 1 minute

// This may took longer to finish if also loading additional modules
test("Load required modules", async () => {
	// Force to load module from node_modules
	Blackprint.Environment.loadFromURL = false;

	// Force to browser environment
	Blackprint.Environment.isBrowser = true;
	Blackprint.Environment.isNode = false;

	// Alternative for Blackprint.loadModuleFromURL(...);
	await import("../dist/nodes-yourmodulename.mjs"); // For Browser/Node.js
	await import("../dist/nodes-yourmodulename.sf.mjs"); // For Browser UI

	// Wait and avoid Jest's test environment being torn down
	await Blackprint.getContext('YourModuleName');
	await new Promise(resolve => setTimeout(resolve, 1000));

	// Check if the nodes has been registered
	expect(Blackprint.nodes['YourModuleName']).toBeDefined();
});

test("Create a node", async () => {
	instance.createNode('YourModuleName/FeatureName/Template', {id: 'The_ID'});
	expect(instance.iface.The_ID).toBeDefined();
});