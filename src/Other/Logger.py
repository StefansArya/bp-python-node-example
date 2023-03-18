import json
import Blackprint

@Blackprint.registerNode('MyCustom/Other/Logger')
class Logger(Blackprint.Node):
	iface: 'LoggerIFace' = None
	input = {
		'Any': Blackprint.Port.ArrayOf(Blackprint.Types.Any)
	}

	def __init__(this, instance):
		super(Logger, this).__init__(instance)

		iface = this.setInterface('BPIC/YourModuleName/Other/Logger')
		iface.title = "Logger"

	def refreshLogger(this, val):
		if(val == None):
			val = 'None'
		else:
			val = json.dumps(val)

		this.iface.log = val
		print(this.iface.log)

	def update(this, cable):
		# Let's take all data from all connected nodes
		# Instead showing new single data-> val
		this.refreshLogger(this.input['Any'])

	# Remote sync in
	def syncIn(this, id, data):
		if(id == 'log'): this.iface.log = data


@Blackprint.registerInterface('BPIC/YourModuleName/Other/Logger')
class LoggerIFace(Blackprint.Interface):
	_log = '...'

	@property
	def log(this):
		return this._log

	@log.setter
	def log(this, val):
		this._log = val