import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin
import ReadJson
import RunAlgo
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True
headers=['Content-Type', 'Authorization','Access-Control-Allow-Headers', 'Origin', 'X-Requested-With', 'Accept','Access-Control-Allow-Origin']
app.config['CORS_HEADERS'] = headers
cors = CORS(app, resources={r"*": {"origins": "*"}})
cross_origin(origin='*', headers=headers)

employeeList = []

# curl -i -H "Content-Type: application/json" -X GET http://localhost:5000/api/v1/schedule
@app.route('/api/v1/employee/all/schedule', methods=['GET'])
def api_schedule():
    # optimalcombo, mincost = RunAlgo.RunAlgo(employeeList)
    # data = []
    # for employee in optimalcombo:
    #     data.append({
    #         'username':employee.username,
    #         'priority':str(employee.priority),
    #         'timeRequest': employee.preference
    #     })
    # return jsonify(employeeList)
    return 0

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Employee List Archive</h1>
              <p>A prototype API for Employee List - Delta Hacks</p>'''

@app.route('/api/v1/employee/all', methods=['GET'])
def api_all():
    return jsonify(employeeList)

# curl -i -H "Content-Type: application/json" -X POST -d '{"username":"Aushvin Vasanth"}' http://localhost:5000/api/v1/employee/all
@app.route('/api/v1/employee/all', methods=['POST'])
def create_employee():
    employee = {
        "username": request.json.get('username',''),
        "priority": request.json.get('priority',''),
        "timeRequest": request.json.get('timeRequest','')
    }
    employeeList.append(employee)
    return jsonify(employeeList), 201

# $ curl -i -H "Content-Type: application/json" -X PUT -d '{"username":"aushvin","priority":5}' http://localhost:5000/api/v1/employee/all
@app.route('/api/v1/employee/all', methods=['PUT'])
def update_employee():
    employee = {
        "username": request.json.get('username',''),
        "priority": request.json.get('priority',''),
    }
    for i in employeeList:
        if i['username'] == employee['username']:
            i['priority'] = employee['priority']
    return jsonify(employeeList)

app.run()
