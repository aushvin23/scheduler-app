import json

class employee():
    def __init__(self, username, priority, preference):
        self.username = username
        self.priority = priority
        self.preference=preference

def ReadJson(data): 
    print(data)
    employees=[]
    # with open(file) as json_file:
    #     data = json.load(json_file)
    #     for p in data:
    #         requests = [int(t) for t in p['timeRequest']]
    #         obj = employee(p['username'], int(p['priority']), requests)
    #         employees.append(obj)

    for p in data:
        requests = [int(t) for t in p['timeRequest']]
        obj = employee(p['username'], int(p['priority']), requests)
        employees.append(obj)
    return employees

