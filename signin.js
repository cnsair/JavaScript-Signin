document.getElementById('dlogin-form').onsubmit = function(e)
{

  var loginresp = null;

  if (window.XMLHttpRequest) {
    loginresp = new XMLHttpRequest();
    document.getElementById('signin').style.display = "none";
    document.getElementById('loader1').style.display = "inline";
    } else {
    loginresp = new ActiveXObject("Microsoft.XMLHTTP");
    document.getElementById('signin').style.display = "none";
    document.getElementById('loader1').style.display = "inline";
  }

  loginresp.onreadystatechange = function() {

          if (this.readyState == 4 && this.status == 200) {

            if(this.responseText == "success")
            {
              document.getElementById("dloginerror").innerHTML = "";
              document.getElementById("dloginerror").style.display = "none";
              document.getElementById('logusername').setAttribute('readonly',true);
              document.getElementById('logpassword').setAttribute('readonly',true);
              document.getElementById('signin').style.display = "none";
              document.getElementById('loader1').style.display = "inline";
              window.location.href = "membersarea/";

            }
            else if(this.responseText == "invalidusername")
            {
              document.getElementById("dloginerror").innerHTML = "Username combination error";
              $("#dloginerror").slideDown("slow");
              document.getElementById('signin').style.display = "inline";
              document.getElementById('loader1').style.display = "none";
              document.getElementById('logusername').focus();
            }
            else if(this.responseText == "invalidpassword")
            {
              document.getElementById("dloginerror").innerHTML = "Password combination error";
              $("#dloginerror").slideDown("slow");
              document.getElementById('signin').style.display = "inline";
              document.getElementById('loader1').style.display = "none";
              document.getElementById('logpassword').focus();
            }
          }

        };

        loginresp.open("POST", "ajax-php/loginuser.php", true);
        loginresp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        loginresp.send("username="+document.getElementById('logusername').value +"&password="+document.getElementById('logpassword').value);

  return false;

};