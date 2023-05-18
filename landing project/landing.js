const countDownTimer = function (id, date) {
    var _vDate = new Date(date);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distDt = _vDate - now;

        var days = Math.floor(distDt / _day);
        var hours = Math.floor((distDt % _day) / _hour);
        var minutes = Math.floor((distDt % _hour) / _minute);
        var seconds = Math.floor((distDt % _minute) / _second);

        document.getElementById(id).textContent = '이벤트 종료까지 ~ ';
        document.getElementById(id).textContent += hours + ': ';
        document.getElementById(id).textContent += minutes + ': ';
        document.getElementById(id).textContent += seconds;
    }

    timer = setInterval(showRemaining, 1000);
}

var dateObj = new Date();
dateObj.setDate(dateObj.getDate() + 1);

countDownTimer('timer', 29/05/2023);

const input = function() {
    let email = document.querySelector("#user_email").value ;
    let name = document.querySelector("#user_name").value ;
    let pasw1 = document.querySelector("#user_pasw1").value ;
    let pasw2 = document.querySelector("#user_pasw2").value ;
    let ratePlan = document.querySelector("select").value ;

    let gender = document.querySelector(".gender_f").checked;
  
    if (gender) {
        gender="여성"
    } else {
        gender="남성"
    };
    
    let phonenumber = document.querySelector("#phone1").value+"-"+document.querySelector("#phone2").value+"-"+document.querySelector("#phone3").value        
   
    let signup2 = {
        email: email,
        name: name,
        pasw1: pasw1,
        pasw2: pasw2,
        phonenumber: phonenumber,
        ratePlan: ratePlan,
        gender: gender
    };

    console.log(signup2);

}