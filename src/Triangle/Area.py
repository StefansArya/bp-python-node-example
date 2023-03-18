import Blackprint

# The implementation is similar with the JS version
@Blackprint.registerNode('MyCustom/Triangle/Area')
class Area(Blackprint.Node):
	# JS => static input = [ ... ]
	input = {
		'Base': float,
		'Height': float,
	}

	# JS => static output = [ ... ]
	output = {
		'Val': float,
	}

	# JS => constructor(instance){ ... }
	def __init__(this, instance):
		super(Area, this).__init__(instance)

		iface = this.setInterface() # default interface
		iface.title = "Area"

	# JS => update(cable){ ... }
	def update(this, cable):
		Input  = this.ref.Input
		Output = this.ref.Output

		Output['Val'] = Input['Base'] * Input['Height'] / 2