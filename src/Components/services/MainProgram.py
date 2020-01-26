import ReadJson
import RunAlgo
import json
import sys
import requests


file = requests.get('http://localhost:5000/api/v1/employee/all')
x=file.json()

#print(x[0]['priority'])
if len(x)==0:
    #print('nothing here')
    exit()
elif x[0]['priority'] == "":
    #print('nothing here also')
    print(x)
    exit()

employees = ReadJson.ReadJson(x)
optimalcombo, mincost = RunAlgo.RunAlgo(employees)
data = []
for employee in optimalcombo:
    data.append({
        'username':employee.username,
        'priority':str(employee.priority),
        'timeRequest': employee.preference
    })
#outfile = file.split('.json')[0]+'_optimal'+'.json'
outfile='outfile.json'
with open(outfile, 'w') as out:
    json.dump(data, out, indent=4)
    