let countDownDate = new Date("May 22, 2023 23:59:59").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = "이벤트 종료까지 ~ " + days + "일 " +
  hours + "시간 " + minutes + "분 " + seconds + "초 ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

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