$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  function open() {
    let name = "Nourane";

    // أول حرف كبير (اختياري)
    name = name.charAt(0).toUpperCase() + name.slice(1);

    // تبديل الاسم
    document.getElementById("name1").innerText = name;
    document.getElementById("name2").innerText = name;

    // فتح الأنفيلوب
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

