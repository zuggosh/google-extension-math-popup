document.addEventListener("DOMContentLoaded", function(event) {
  console.log("dom ready");

      /////* Swiching class active*/////


      //////* Circle  *///////

  /*Area of a Circle*/
  $('#data').keyup(function(){
    let value = $(this).val() ** 2 * 3.14;
    $('#result').val(value);
  });

  /*Area of sector of a circle*/
  $('#sectorR, #sectorα').keyup(function(){
    let value = (3.14 * ($('#sectorR').val() ** 2) * $('#sectorα').val()) / 360;
    $('#resultSector').val(value);
  });

  /*Ring area*/
  $('#ringRadiusLarge, #ringRadiusSmall').keyup(function(){
    let value = 3.14 * ( ( $('#ringRadiusLarge').val() ** 2 ) - ( ( $('#ringRadiusSmall').val() ** 2 ) ) )
    $('#resultRingArea').val(value);
  });

  /* Circle segment area */
  $('#CircleSegmentRadius, #CircleSegmentAngle').keyup(function(){
    let value = 0.5 * ( $('#CircleSegmentRadius').val() ** 2 ) * ( 3.14 * $('#CircleSegmentAngle').val() / 180 - Math.sin($('#CircleSegmentAngle').val())  );
    $('#resultCircleSegment').val(value);
  });

  /*Ring sector area*/
  $('#ringSectorLarge, #ringSectorSmall, #ringSectorAngle').keyup(function(){
    let value = 3.14 * $('#ringSectorAngle').val() / 360 * ( ( $('#ringSectorLarge').val()**2 ) - ( $('#ringSectorSmall').val()**2 ) )
    $('#resultRingSector').val(value);
  });

  /*Area of the ellips*/
  $('#ellipseeLargeR, #ellipseeSmallR').keyup(function(){
    let value = $('#ellipseeSmallR').val() * $('#ellipseeLargeR').val() * 3.14;
    $('#resultEllipsee').val(value);
  });

  /* Triangle */

  $('#heightBase, #heightTriangle').keyup(function(){
    let value = $('#heightBase').val() * $('#heightTriangle').val() * 0.5;
    $('#resultTriangle').val(value);
  });

  /* */


});
