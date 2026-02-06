from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# کد ورود دوره پایتون
CORRECT_CODE = "PyTh0n-V1P-2024-F4T3H1"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/consultation")
def free_consultation():
    return render_template("free_consultation.html")


@app.route("/course/python-vip")
def python_vip_course():
    return render_template("python_vip_course.html")


@app.route("/verify-code", methods=["POST"])
def verify_code():
    user_code = request.form.get("code", "").strip()

    if user_code == CORRECT_CODE:
        return redirect("/course/python-vip-content")
    else:
        return redirect("/course/python-vip?error=کد اشتباه است")


@app.route("/course/python-vip-content")
def python_vip_content():
    return render_template("python_vip_content.html")


@app.route("/support/one-month")
def one_month_support():
    return render_template("one_month_support.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
