import flask

# creating new flask app
app = flask.Flask(__name__)

#function declarator: routes to "/"
@app.route('/')
def home():
    return flask.send_file('static/index.html')

@app.route('/about')
def about():
    return flask.send_file('static/about.html')

@app.route('/credits')
def credits():
    return flask.send_file('static/credits.html')

@app.route('/vars')
def vars():
    return flask.send_file('static/vars.html')

@app.route('/jquery')
def query():
    return flask.send_file('static/jquery.html')

@app.route('/vars/<num>')
def routenumber(num):
    output = "You chose the number " + str(num) + ", which is 1 more than " + str(int(num) - 1)
    output += "<br><a href= '/vars'>Return</a>"
    return output

app.run()