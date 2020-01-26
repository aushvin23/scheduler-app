import itertools

def cost(arr, employees):
    length = len(arr)
    val = 0
    for i in range(0, length):
        employee = employees[arr[i]] #returns employee selected at position i
        priority = employee.priority or 1
        preference = employee.preference
        choice = preference[i] #did he get his top choice? Returns the preference for selected shift
        val = val + priority**choice #incrementing cost function
    return val

def RunAlgo(employees):
    combos = list(itertools.permutations(range(len(employees)),len(employees)))
    mincost = -1
    optimalcombo = None
    for combo in combos:
        val = cost(combo, employees)
        if val<mincost or mincost==-1:
            mincost = val
            optimalcombo = combo
    employeearray = [employees[i] for i in optimalcombo]
    return employeearray, mincost
    