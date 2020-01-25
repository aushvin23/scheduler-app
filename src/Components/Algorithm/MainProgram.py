import ReadJson
import RunAlgo
import json
import sys

file = sys.argv[1]
file = '../test/' + file
employees = ReadJson.ReadJson(file)
optimalcombo, mincost = RunAlgo.RunAlgo(employees)
data = []
for employee in optimalcombo:
    data.append({
        'username':employee.username,
        'priority':str(employee.priority),
        'timeRequest': employee.preference
    })
outfile = file.split('.json')[0]+'_optimal'+'.json'
with open(outfile, 'w') as out:
    json.dump(data, out, indent=4)
    