document.addEventListener("DOMContentLoaded", function(event) {
  console.log("dom ready");

  $('#data').keyup(function(){
    let value = $(this).val() ** 2 * 3.14;
    console.log(value);
    $('#result').val(value);
  });

  $('#heightBase, #heightTriangle').keyup(function(){
    let value = $('#heightBase').val() * $('#heightTriangle').val() * 0.5;
    $('#resultTriangle').val(value);
  });

  $('#ellipseeLargeR, #ellipseeSmallR').keyup(function(){
    let value = $('#ellipseeSmallR').val() * $('#ellipseeLargeR').val() * 3.14;
    $('#resultEllipsee').val(value);
  });

});
