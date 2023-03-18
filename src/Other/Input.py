import Blackprint
import types

@Blackprint.registerNode('MyCustom/Other/Input')
class Simple(Blackprint.Node):
	output = {
		'Value': float,
	}

	def __init__(this, instance):
		Blackprint.Node.__init__(this, instance)

		iface = this.setInterface('BPIC/YourModuleName/Other/Input')
		iface.title = "Input"

	# Bring value from imported iface to node output
	def imported(this, data):
		if data == None: return

		val = data['value']
		this.iface.data.value = val
		this.output.Value = val

	# Remote sync in
	def syncIn(this, id, data):
		if(id == 'data'):
			this.iface.data.value = data.value
			this.iface.changed(data.value)

class InputIFaceData:
	def __init__(this, iface):
		this._iface = iface
		this._data = {"value": '...'}

	@property
	def value(this):
		return this._data['value']

	@value.setter
	def value(this, val):
		this._data['value'] = val
		this._iface.changed(val)

@Blackprint.registerInterface('BPIC/YourModuleName/Other/Input')
class InputIFace(Blackprint.Interface):
	def __init__(this, node):
		super(InputIFace, this).__init__(node)
		this.data = InputIFaceData(this)

	def changed(this, val):
		node = this.node

		# This node still being imported
		if(this.importing != False):
			return

		node.output['Value'] = float(val)
		node.syncOut('data', {'value': this.data.value})