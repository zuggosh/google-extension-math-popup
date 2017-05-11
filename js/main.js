document.addEventListener("DOMContentLoaded", function(event) {
  console.log("dom ready");

      /////* Swiching class active*/////



      /* need Code refactoring !!! */
  $('#circle').click(function(){
    $('.elemListAdd').removeClass('active');
    $('#circleList').addClass('active');
  });

  $('#triangle').click(function(){
    $('.elemListAdd').removeClass('active');
    $('#triangleList').addClass('active');
  });

  $('#square').click(function(){
    $('.elemListAdd').removeClass('active');
    $('#squareList').addClass('active');
  });





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




      //////* Triangle  *///////

  /*Area of the versatile triangle*/
  $('#versatileTriangleHeight, #versatileTriangleBase').keyup(function(){
    let value = 0.5 * $('#versatileTriangleHeight').val() * $('#versatileTriangleBase').val();
    $('#resultVersatileTriangle').val(value);
  });

  /*Area of a right triangle*/
  $('#rightTriangleLeg1, #rightTriangleLeg2').keyup(function(){
    let value = 0.5 * $('#rightTriangleLeg1').val() * $('#rightTriangleLeg2').val();
    $('#resultRightTriangle').val(value);
  });

  /*Area of the triangle according to Heron's formula*/
  // $('#HeronA, #HeronB, #HeronC').keyup(function(){
  //   let semiperimeter = $('#HeronA').val() + $('#HeronB').val() + $('#HeronC').val()
  //
  //   console.log(semiperimeter);
  //   let value = Math.sqrt( );
  //   $('#resultHeron').val(value);
  // });

  /* Area of an isosceles triangle */
  $('#isoscelesTriangleBase, #isoscelesTriangleHeight').keyup(function(){
    let value = 0.5 * $('#isoscelesTriangleBase').val() * $('#isoscelesTriangleHeight').val();
    $('#resultIsoscelesTriangle').val(value);
  });

  /* Area of an equilateral triangle */
  $('#equilateralTriangleSide, #equilateralTriangleHeight').keyup(function(){
    let value = 0.5 * $('#equilateralTriangleSide').val() * $('#equilateralTriangleHeight').val();
    $('#resultEquilateralTriangle').val(value);
  });




        //////* Polygons  *///////

  /*Square of a square*/
  $('#squareSide').keyup(function(){
    let value = $('#squareSide').val() ** 2;
    $('#resultSquare').val(value);
  });

  /*Area of the rectangle*/
  $('#rectangleLength, #rectangWidth').keyup(function(){
    let value = $('#rectangleLength').val() * $('#rectangWidth').val();
    $('#resultrectang').val(value);
  });

  /*Parallelogram area through sides and angles*/
  $('#parallelogramSideA, #parallelogramSideB, #parallelogramAngles').keyup(function(){
    let value = $('#parallelogramSideA').val() * $('#parallelogramSideB').val() * Math.sin( $('#parallelogramAngles').val() )
    $('#resultParallelogram').val(value);
  });

  /*Diamond Square*/
  $('#diamondLarge, #diamondSmaller').keyup(function(){
    let value = ( $('#diamondLarge').val() * $('#diamondSmaller').val() ) / 2;
    $('#resultDiamond').val(value);
  });

  /*Trapezoid area through the bases and height*/
  $('#trapezoidA, #trapezoidB, #trapezoidHeight').keyup(function(){
    let sum = Number($('#trapezoidA').val()) + Number($('#trapezoidB').val());
    let value = sum / 2 * Number($('#trapezoidHeight  ').val());
    $('#resultTrapezoid').val(value);
  });

  /*Area of a regular polygon*/
  $('#regularPolygonSide, #regularPolygonNumber').keyup(function(){
    let clr = Number($('#regularPolygonNumber').val()) * ( Number($('#regularPolygonSide').val()) ** 2 );
    let tan = 4 * Math.tan( (180 / Number($('#regularPolygonNumber').val())) );
    let value = clr / tan;
    $('#resultRegularPolygon').val(value);
  });



});
