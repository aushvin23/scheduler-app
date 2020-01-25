import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"*": {"origins": "*"}})


cross_origin(origin='*', headers=['Content-Type', 'Authorization'])

# Create some test data for our catalog in the form of a list of dictionaries.


employeeList = [
    {
        "username": "A",
        "priority": "1",
        "timeRequest": [
            1,2,3,4,5,6,7
        ]
    },
    {
        "username": "B",
        "priority": "2",
        "timeRequest": [
            7,6,5,4,3,2,1
        ]
    },
    {
        "username": "C",
        "priority": "3",
        "timeRequest": [
            4,3,2,1,5,6,7
        ]
    },
    {
        "username": "D",
        "priority": "4",
        "timeRequest": [
            4,6,7,1,3,2,5
        ]
    },
    {
        "username": "E",
        "priority": "5",
        "timeRequest": [
            6,7,1,5,4,3,2
        ]
    },
    {
        "username": "F",
        "priority": "6",
        "timeRequest": [
            7,1,6,2,5,3,4
        ]
    },
    {
        "username": "G",
        "priority": "7",
        "timeRequest": [
            1,2,3,4,5,7,6
        ]
    }
    ]

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

app.run()
