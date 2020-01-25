import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Create some test data for our catalog in the form of a list of dictionaries.
employeeList= []

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
        <p>A prototype API for distant reading of science fiction novels.</p>'''


@app.route('/api/v1/resources/books/all', methods=['GET'])
def api_all():
    return jsonify(employeeList)



@app.route('/api/v1/resources/books/all', methods=['POST'])
def create_player():
    #employeeList = []
    employee = {
        "username": request.json.get('username',''),
        "priority": request.json.get('priority',''),
        "timeRequest": request.json.get('timeRequest','')
    }
    employeeList.append(employee)
    return jsonify(employeeList), 201

app.run()
