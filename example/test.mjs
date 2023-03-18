// node ./init.mjs

import Blackprint from '@blackprint/engine';
import '../dist/nodes-yourmodulename.mjs'; // Import our compiled node

// === Import JSON after all nodes was registered ===
// You can import this to Blackprint Sketch if you want to view the nodes visually
let instance = new Blackprint.Engine();
await instance.importJSON('{"instance":{"YourModuleName/Other/Input":[{"i":0,"x":120,"y":100,"z":1,"id":"myInput1","data":{"value":4},"output":{"Value":[{"i":2,"name":"Base"}]}},{"i":3,"x":120,"y":159,"z":2,"id":"myInput2","data":{"value":8},"output":{"Value":[{"i":2,"name":"Height"}]}}],"YourModuleName/Other/Logger":[{"i":1,"x":581,"y":107,"z":3,"id":"myLogger"}],"YourModuleName/Triangle/Area":[{"i":2,"x":371,"y":105,"z":0,"output":{"Val":[{"i":1,"name":"Any"}]}}]},"moduleJS":["http://localhost:6791/dist/nodes-yourmodulename.mjs"]}', {
	noModuleJS: true, // Avoid importing module from URL
});

// You will see this number in the console: 16
// myInput1 = 4 (Base)
// myInput2 = 8 (Height)
// myLogger = 16 (base * height / 2)