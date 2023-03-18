// Blackprint compiler will extract comments with /** ... */ for the editor automatically from .js file

/**
 * Calculate the area of a triangle
 * @summary Triangle (base * height / 2)
 * @blackprint node
 */
Blackprint.registerNode("YourModuleName/Triangle/Area",
class Node extends Blackprint.Node {
	static input = {
		/** The width of the triangle (left to right) */
		Base: Number,
		/** The height of the triangle (bottom to top) */
		Height: Number,
	};
	static output = {
		/** The triangle's area */
		Val: Number,
	};

	constructor(instance){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Area";
	}

	update(cable){
		let { Input, Output } = this.ref;

		// value = base * height / 2
		Output.Val = Input.Base * Input.Height / 2;
	}
});