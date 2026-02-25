from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# کد ورود دوره پایتون
CORRECT_CODE = "PythonVIP2026"


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
        return redirect("/course/python-vip?error=کد+اشتباه+است")


@app.route("/course/python-vip-content")
def python_vip_content():
    return render_template("python_vip_content.html")


# ========== مسیر جلسات ۱ تا ۲۸ ==========

@app.route("/course/session/1")
def session_1():
    return render_template("session-1.html")


@app.route("/course/session/2")
def session_2():
    return render_template("session-2.html")


@app.route("/course/session/3")
def session_3():
    return render_template("session-3.html")


@app.route("/course/session/4")
def session_4():
    return render_template("session-4.html")


@app.route("/course/session/5")
def session_5():
    return render_template("session-5.html")


@app.route("/course/session/6")
def session_6():
    return render_template("session-6.html")


@app.route("/course/session/7")
def session_7():
    return render_template("session-7.html")


@app.route("/course/session/8")
def session_8():
    return render_template("session-8.html")


@app.route("/course/session/9")
def session_9():
    return render_template("session-9.html")


@app.route("/course/session/10")
def session_10():
    return render_template("session-10.html")


@app.route("/course/session/11")
def session_11():
    return render_template("session-11.html")


@app.route("/course/session/12")
def session_12():
    return render_template("session-12.html")


@app.route("/course/session/13")
def session_13():
    return render_template("session-13.html")


@app.route("/course/session/14")
def session_14():
    return render_template("session-14.html")


@app.route("/course/session/15")
def session_15():
    return render_template("session-15.html")


@app.route("/course/session/16")
def session_16():
    return render_template("session-16.html")


@app.route("/course/session/17")
def session_17():
    return render_template("session-17.html")


@app.route("/course/session/18")
def session_18():
    return render_template("session-18.html")


@app.route("/course/session/19")
def session_19():
    return render_template("session-19.html")


@app.route("/course/session/20")
def session_20():
    return render_template("session-20.html")


@app.route("/course/session/21")
def session_21():
    return render_template("session-21.html")


@app.route("/course/session/22")
def session_22():
    return render_template("session-22.html")


@app.route("/course/session/23")
def session_23():
    return render_template("session-23.html")


@app.route("/course/session/24")
def session_24():
    return render_template("session-24.html")


@app.route("/course/session/25")
def session_25():
    return render_template("session-25.html")


@app.route("/course/session/26")
def session_26():
    return render_template("session-26.html")


@app.route("/course/session/27")
def session_27():
    return render_template("session-27.html")


@app.route("/course/session/28")
def session_28():
    return render_template("session-28.html")


# ========== مسیرهای پشتیبانی ==========

@app.route("/support/one-month")
def one_month_support():
    return render_template("one_month_support.html")


@app.route("/guide")
def guide():
    return render_template("guide.html")


# ========== اجرای برنامه ==========

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")