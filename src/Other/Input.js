/**
 * Just a simple input box
 * @blackprint node
 */
Blackprint.registerNode('YourModuleName/Other/Input',
class extends Blackprint.Node {
	static output = {
		Value: Number,
	};

	constructor(instance){
		super(instance);

		let iface = this.setInterface('BPIC/YourModuleName/Other/Input');
		iface.title = "Input";
	}

	// Bring value from imported node to handle output
	imported(data){
		let iface = this.iface;
		if(data === undefined) return;

		Object.assign(iface.data, data);
		this.output.Value = data.value;
	}
});

Blackprint.registerInterface('BPIC/YourModuleName/Other/Input',
Context.IFace.Input = class InputIFace extends Blackprint.Interface{
	constructor(node){
		super(node);
		this.data = new ExampleInputData(this);
	}

	changed(text, ev){
		let node = this.node;

		// This node still being imported
		if(this.importing !== false)
			return;

		// iface.data.value === text;
		node.output.Value = this.data.value;
	}
});

class ExampleInputData {
	// Use underscore "_" or "$" to avoid being exported as JSON
	#value = 0;
	#iface = null;

	constructor(iface){
		this.#iface = iface;
	}

	get value(){ return this.#value }
	set value(val){
		if(this.#value === val) return;
		this.#value = val;
		this.#iface.changed(val);
		this.#iface.node.routes.routeOut();
	}
}

Blackprint.utils.setEnumerablePrototype(ExampleInputData, {
	value: true,
});