# python ./init.py

import sys
import os
import Blackprint
sys.tracebacklimit = 2

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from src import * # Register our nodes from src folder


# == Import JSON after all nodes was registered ==
# You can import the JSON to Blackprint Sketch if you want to view the nodes visually
instance = Blackprint.Engine()
instance.importJSON('{"instance":{"MyCustom/Other/Input":[{"i":0,"x":120,"y":100,"z":1,"id":"myInput1","data":{"value":4},"output":{"Value":[{"i":2,"name":"Base"}]}},{"i":3,"x":120,"y":159,"z":2,"id":"myInput2","data":{"value":8},"output":{"Value":[{"i":2,"name":"Height"}]}}],"MyCustom/Other/Logger":[{"i":1,"x":581,"y":107,"z":3,"id":"myLogger"}],"MyCustom/Triangle/Area":[{"i":2,"x":371,"y":105,"z":0,"output":{"Val":[{"i":1,"name":"Any"}]}}]},"moduleJS":["http://localhost:6791/dist/nodes-yourmodulename.mjs"]}')

# You will see this number in the console: 16
# myInput1 = 4 (Base)
# myInput2 = 8 (Height)
# myLogger = 16 (base * height / 2)