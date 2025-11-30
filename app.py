from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def MainPage():
    return render_template ('MainPage.html')

@app.route('/whatsProgram')
def whatsProgram():
    return render_template ('whatsProgram.html')

@app.route('/Magale2')
def Magale2():
    return render_template ('Magale2.html')

@app.route('/Magale3')
def Magale3():
    return render_template ('Magale3.html')

@app.route('/Moshavereh')
def Moshavereh():
    return render_template ('Moshavereh.html')

@app.route('/PythonMogademati')
def PythonMogademati():
    return render_template ('PythonMogademati.html')

@app.route('/CSS')
def CSS():
    return render_template ('CSS.html')

@app.route('/HTML')
def HTML():
    return render_template ('HTML.html')

@app.route('/HTMLandCSS')
def HTMLandCSS():
    return render_template ('HTMLandCSS.html')

@app.route('/Poshtibani')
def Poshtibani():
    return render_template ('Poshtibani.html')

if __name__ == '__main__':

    app.run(debug=True,host="0.0.0.0")

