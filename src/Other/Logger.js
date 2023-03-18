Blackprint.registerNode('MyCustom/Other/Logger',
class extends Blackprint.Node {
	static input = {
		Any: Blackprint.Port.ArrayOf(Blackprint.Types.Any)
	};

	constructor(instance){
		super(instance);

		let iface = this.setInterface('BPIC/YourModuleName/Other/Logger');
		iface.title = "Logger";
		iface.description = 'Print anything into text';
	}

	_refreshLogger(val){
		this.iface.log = JSON.stringify(val);
		console.log(this.iface.log);
	}

	update(){
		let { Input } = this.ref;

		this._refreshLogger(Input.Any);
	}
});

Blackprint.registerInterface('BPIC/YourModuleName/Other/Logger',
Context.IFace.Logger = class extends Blackprint.Interface {
	get log(){ return this._log }
	set log(val){ this._log = val }
});