$(document).ready(function () {
    load();
    $(document).on("keyup press", function (event) {
      event.preventDefault();
      var key = event.keyCode;
      var key_pos = event.code;
      if (key_pos == "NumpadEnter") {
        $(".keyPos" + key_pos).removeClass("press");
        $(".keyPos" + key_pos).addClass("active");
        keyNameDisplay(KeyNamelist(key_pos));
      } else if (key_pos == "ShiftRight") {
        $(".keyPos" + key_pos).removeClass("press");
        $(".keyPos" + key_pos).addClass("active");
        keyNameDisplay(KeyNamelist(key_pos));
      } else if (key_pos == "ControlRight") {
        $(".keyPos" + key_pos).removeClass("press");
        $(".keyPos" + key_pos).addClass("active");
        keyNameDisplay(KeyNamelist(key_pos));
      } else if (key_pos == "AltRight") {
        $(".keyPos" + key_pos).removeClass("press");
        $(".keyPos" + key_pos).addClass("active");
        keyNameDisplay(KeyNamelist(key_pos));
      } else {
        $(".key" + key).removeClass("press");
        $(".key" + key).addClass("active");
        keyNameDisplay(KeyNamelist(key));
      }
    });
    $(document).on("keydown", function (event) {
      event.preventDefault();
      var key = event.keyCode;
      var key_pos = event.code;
      if (key_pos == "NumpadEnter") {
        $(".keyPos" + key_pos).removeClass("active");
        $(".keyPos" + key_pos).addClass("press");
      } else if (key_pos == "ShiftRight") {
        $(".keyPos" + key_pos).removeClass("active");
        $(".keyPos" + key_pos).addClass("press");
      } else if (key_pos == "ControlRight") {
        $(".keyPos" + key_pos).removeClass("active");
        $(".keyPos" + key_pos).addClass("press");
      } else if (key_pos == "AltRight") {
        $(".keyPos" + key_pos).removeClass("active");
        $(".keyPos" + key_pos).addClass("press");
      } else {
        $(".key" + key).removeClass("active");
        $(".key" + key).addClass("press");
      }
    });
    $(document).on("mouseup", function (event) {
      event.preventDefault();
      var key = event.button;
      $(".key" + key).removeClass("press");
      $(".key" + key).addClass("active");
      keyNameDisplay(KeyNamelist(key));
    });
    $(document).on("mousedown", function (event) {
      event.preventDefault();
      var key = event.button;
      $(".key" + key).removeClass("active");
      $(".key" + key).addClass("press");
    });
  
    $(document).bind("contextmenu", function (event) {
      return false;
    });
  
    $(document).mousemove(function (event) {
      $("x").text(event.pageX + ", " + event.pageY);
    });
  
    $(document).keydown(function (event) {
      event.preventDefault();
      var key1 = event.code;
      $("y").text(key1);
    });
  });
  
  $(window).on("wheel", function (event) {
    event.preventDefault();
    var delta = event.originalEvent.deltaY;
    if (delta > 0) {
      $(".scrollDown").removeClass("active");
      $(".scrollDown").addClass("press");
      $(".scrollDown").removeClass("press");
      $(".scrollDown").addClass("active");
    } else {
      $(".scrollUp").removeClass("active");
      $(".scrollUp").addClass("press");
      $(".scrollUp").removeClass("press");
      $(".scrollUp").addClass("active");
    }
  });
  
  function keyNameDisplay(keyName) {
    var str =
      '&nbsp;&nbsp;&nbsp;&nbsp;<div class="keyOutput"><p>' +
      keyName +
      "</p></div>";
    $(".keyboard-header").prepend(str);
  }
  function load() {
    Swal.fire({
      title: "로딩 중...",
      html:
        '<i class="fa fa-cog fa-spin" aria-hidden="true"></i> Online Keyboard & Mouse Tester',
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }
  function KeyNamelist(keyCode) {
    switch (keyCode) {
      case "NumpadEnter":
        return "키패드 Enter";
        break;
      case "ShiftRight":
        return "오른쪽 Shift";
        break;
      case "ControlRight":
        return "오른쪽 CTRL";
        break;
      case "AltRight":
        return "오른쪽 ALT";
        break;
      case 27:
        return "ESC";
        break;
      case 112:
        return "F1";
        break;
      case 113:
        return "F2";
        break;
      case 114:
        return "F3";
        break;
      case 115:
        return "F4";
        break;
      case 116:
        return "F5";
        break;
      case 117:
        return "F6";
        break;
      case 118:
        return "F7";
        break;
      case 119:
        return "F8";
        break;
      case 120:
        return "F9";
        break;
      case 121:
        return "F10";
        break;
      case 122:
        return "F11";
        break;
      case 123:
        return "F12";
        break;
      case 145:
        return "Scr Lk";
        break;
      case 19:
        return "Pause break";
        break;
      case 45:
        return "Ins";
        break;
      case 46:
        return "Del";
        break;
      case 36:
        return "Home";
        break;
      case 35:
        return "End";
        break;
      case 33:
        return "페이지 업";
        break;
      case 34:
        return "페이지 다운";
        break;
      case 192:
        return "`";
        break;
      case 49:
        return "1";
        break;
      case 50:
        return "2";
        break;
      case 51:
        return "3";
        break;
      case 52:
        return "4";
        break;
      case 53:
        return "5";
        break;
      case 54:
        return "6";
        break;
      case 55:
        return "7";
        break;
      case 56:
        return "8";
        break;
      case 57:
        return "9";
        break;
      case 48:
        return "0";
        break;
      case 189:
        return "-";
        break;
      case 187:
        return "=";
        break;
      case 8:
        return "백 스페이스";
        break;
      case 144:
        return "넘버락";
        break;
      case 111:
        return "키패드 /";
        break;
      case 106:
        return "키패드 *";
        break;
      case 109:
        return "키패드 -";
        break;
      case 9:
        return "탭";
        break;
      case 81:
        return "Q";
        break;
      case 87:
        return "W";
        break;
      case 69:
        return "E";
        break;
      case 82:
        return "R";
        break;
      case 84:
        return "T";
        break;
      case 89:
        return "Y";
        break;
      case 85:
        return "U";
        break;
      case 73:
        return "I";
        break;
      case 79:
        return "O";
        break;
      case 80:
        return "P";
        break;
      case 219:
        return "[";
        break;
      case 221:
        return "]";
        break;
      case 220:
        return "\\";
        break;
      case 103:
        return "키패드 7";
        break;
      case 104:
        return "키패드 8";
        break;
      case 105:
        return "키패드 9";
        break;
      case 107:
        return "키패드 +";
        break;
      case 20:
        return "캡스락";
        break;
      case 65:
        return "A";
        break;
      case 83:
        return "S";
        break;
      case 68:
        return "D";
        break;
      case 70:
        return "F";
        break;
      case 71:
        return "G";
        break;
      case 72:
        return "H";
        break;
      case 74:
        return "J";
        break;
      case 75:
        return "K";
        break;
      case 76:
        return "L";
        break;
      case 59:
        return ";:";
        break;
      case 186:
        return ";";
        break;
      case 100:
        return "키패드 4";
        break;
      case 101:
        return "키패드 5";
        break;
      case 102:
        return "키패드 6";
        break;
      case 90:
        return "Z";
        break;
      case 88:
        return "X";
        break;
      case 67:
        return "C";
        break;
      case 86:
        return "V";
        break;
      case 66:
        return "B";
        break;
      case 78:
        return "N";
        break;
      case 77:
        return "M";
        break;
      case 188:
        return ",<";
        break;
      case 190:
        return ".>";
        break;
      case 191:
        return "/?";
        break;
      case 96:
        return "키패드 0";
        break;
      case 32:
        return "스페이스 바";
        break;
      case 93:
        return "menu";
        break;
      case 38:
        return "\u2191";
        break;
      case 40:
        return "\u2193";
        break;
      case 37:
        return "\u2190";
        break;
      case 39:
        return "\u2192";
        break;
      case 110:
        return "키패드 .";
        break;
      case 97:
        return "키패드 1";
        break;
      case 98:
        return "키패드 2";
        break;
      case 99:
        return "키패드 3";
        break;
      case 0:
        return "왼쪽 클릭";
        break;
      case 1:
        return "가운데 클릭";
        break;
      case 2:
        return "오른쪽 클릭";
        break;
      case 16:
        return "왼쪽 Shift";
        break;
      case 18:
        return "왼쪽 ALT";
        break;
      case 17:
        return "왼쪽 CTRL";
        break;
      case 91:
        return "윈도우 키";
        break;
      case 13:
        return "Enter";
        break;
      case 44:
        return "Prt Sc";
        break;
    }
  }
  