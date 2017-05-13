
  var mathCalc = new mathCalcArea();

      /////* Swiching class active*/////

      /* need Code refactoring !!! */
  $('#circle').click(() => {
    $('.elemListAdd').removeClass('active');
    $('#circleList').addClass('active');
  });

  $('#triangle').click(() => {
    $('.elemListAdd').removeClass('active');
    $('#triangleList').addClass('active');
  });

  $('#square').click(() => {
    $('.elemListAdd').removeClass('active');
    $('#squareList').addClass('active');
  });

      //////* Circle  *///////

  /*Area of a Circle*/
  $('#data').keyup( () => {
    let value = $('#data').val();
    let result = mathCalc.circle.calcAreaOfCircle(value);
    $('#result').val(result);
  });

  /*Area of sector of a circle*/
  $('#sectorR, #sectorAlfa').keyup(() => {
    let valueSectorR = $('#sectorR').val();
    let valueSectorAlfa = $('#sectorAlfa').val();
    let result = mathCalc.circle.calcAreaOfSectorOfCircle(valueSectorR, valueSectorAlfa);
    $('#resultSector').val(result);
  });

  /*Ring area*/
  $('#ringRadiusLarge, #ringRadiusSmall').keyup(() => {
    let valueRingRadiusLarge = $('#ringRadiusLarge').val();
    let valueRingRadiusSmall = $('#ringRadiusSmall').val();
    let result = mathCalc.circle.calcRingArea(valueRingRadiusLarge, valueRingRadiusSmall);
    $('#resultRingArea').val(result);
  });

  /* Circle segment area */
  $('#CircleSegmentRadius, #CircleSegmentAngle').keyup(() => {
    let valueCircleSegmentRadius = $('#CircleSegmentRadius').val();
    let valueCircleSegmentAngle = $('#CircleSegmentAngle').val();
    let result = mathCalc.circle.calcCircleSegmentArea(valueCircleSegmentRadius, valueCircleSegmentAngle);
    $('#resultCircleSegment').val(result);
  });

  /*Ring sector area*/
  $('#ringSectorLarge, #ringSectorSmall, #ringSectorAngle').keyup(() => {
    let valueRingSectorLarge = $('#ringSectorLarge').val();
    let valueRingSectorSmall = $('#ringSectorSmall').val();
    let valueRingSectorAngle = $('#ringSectorAngle').val();
    let result = mathCalc.circle.calcRingSectorArea(valueRingSectorLarge, valueRingSectorSmall, valueRingSectorAngle);
    $('#resultRingSector').val(result);
  });

  /*Area of the ellips*/
  $('#ellipseeLargeR, #ellipseeSmallR').keyup(() => {
    let valueEllipseSmallR = $('#ellipseeSmallR').val();
    let valueEllipseLargeR = $('#ellipseeLargeR').val();
    let result = mathCalc.circle.calcAreaOfTheEllips(valueEllipseSmallR, valueEllipseLargeR);
    $('#resultEllipsee').val(result);
  });


      //////* Triangle  *///////

  /*Area of the versatile triangle*/
  $('#versatileTriangleHeight, #versatileTriangleBase').keyup(() => {
    let valueVersatileTriangleHeight = $('#versatileTriangleHeight').val();
    let valueVersatileTriangleBase = $('#versatileTriangleBase').val();
    let result = mathCalc.triangle.calcAreaOfVersatileTriangle(valueVersatileTriangleHeight, valueVersatileTriangleBase);
    $('#resultVersatileTriangle').val(result);
  });

  /*Area of a right triangle*/
  $('#rightTriangleLeg1, #rightTriangleLeg2').keyup(() => {
    let valueRightTriangleLeg1 = $('#rightTriangleLeg1').val();
    let valueRightTriangleLeg2 = $('#rightTriangleLeg2').val();
    let result = mathCalc.triangle.calcAreaOfVersatileTriangle(valueRightTriangleLeg1, valueRightTriangleLeg2);
    $('#resultRightTriangle').val(result);
  });

  /* Area of an isosceles triangle */
  $('#isoscelesTriangleBase, #isoscelesTriangleHeight').keyup(() => {
    let valueIsoscelesTriangleBase = $('#isoscelesTriangleBase').val();
    let valueIsoscelesTriangleHeight = $('#isoscelesTriangleHeight').val();
    let result = mathCalc.triangle.calcAreaOfIsoscelesTriangle(valueIsoscelesTriangleBase, valueIsoscelesTriangleHeight);
    $('#resultIsoscelesTriangle').val(result);
  });

  /* Area of an equilateral triangle */
  $('#equilateralTriangleSide, #equilateralTriangleHeight').keyup(() => {
    let valueEquilateralTriangleSide = $('#equilateralTriangleSide').val();
    let valueEquilateralTriangleHeight = $('#equilateralTriangleHeight').val();
    let result = mathCalc.triangle.calcAreaOfEquilateralTriangle(valueEquilateralTriangleSide, valueEquilateralTriangleHeight);
    $('#resultEquilateralTriangle').val(result);
  });

        //////* Polygons  *///////

  /*Square of a square*/
  $('#squareSide').keyup(() => {
    let valueSquareSide = $('#squareSide').val();
    let result = mathCalc.polygons.calcSquareOfSquare(valueSquareSide);
    $('#resultSquare').val(result);
  });

  /*Area of the rectangle*/
  $('#rectangleLength, #rectangWidth').keyup(() => {
    let valueRectangleLength = $('#rectangleLength').val();
    let valueRectangWidth = $('#rectangWidth').val();
    let result = mathCalc.polygons.calcAreaOfRectangle(valueRectangleLength, valueRectangWidth);
    $('#resultrectang').val(result);
  });

  /*Parallelogram area through sides and angles*/

  $('#parallelogramSideA, #parallelogramSideB, #parallelogramAngles').keyup(() => {
    let valueParallelogramSideA = $('#parallelogramSideA').val();
    let valueParallelogramSideB = $('#parallelogramSideB').val();
    let valueParallelogramAngles = $('#parallelogramAngles').val();
    let result = mathCalc.polygons.calcParallelogramAreaThroughSidesAndAngles(valueParallelogramSideA, valueParallelogramSideB, valueParallelogramAngles);
    $('#resultParallelogram').val(result);
  });

  /*Diamond Square*/
  $('#diamondLarge, #diamondSmaller').keyup(() => {
    let valueDiamondLarge = Number($('#diamondLarge').val());
    let valueDiamondSmaller = Number($('#diamondSmaller').val());
    let result = mathCalc.polygons.calcDiamondSquare(valueDiamondLarge, valueDiamondSmaller);
    $('#resultDiamond').val(result);
  });

  /*Trapezoid area through the bases and height*/
  $('#trapezoidA, #trapezoidB, #trapezoidHeight').keyup(() => {
    let valueTrapezoidA = Number($('#trapezoidA').val());
    let valueTrapezoidB = Number($('#trapezoidB').val());
    let valueTrapezoidHeight = Number($('#trapezoidHeight').val());
    let result = mathCalc.polygons.calcTrapezoidAreaThroughBasesAndHeight(valueTrapezoidA, valueTrapezoidB, valueTrapezoidHeight);
    $('#resultTrapezoid').val(result);
  });

  /*Area of a regular polygon*/
  $('#regularPolygonSide, #regularPolygonNumber').keyup(() => {
    let valueRegularPolygonSide = Number($('#regularPolygonSide').val());
    let valueRegularPolygonNumber = Number($('#regularPolygonNumber').val());
    let result =  mathCalc.polygons.calcAreaOfRegularPolygon(valueRegularPolygonSide, valueRegularPolygonNumber);
    $('#resultRegularPolygon').val(result);
  });

  function mathCalcArea (){
      /* circle */
    function calcAreaOfCircle (val){
      return val ** 2 * Math.PI;
    }

    function calcAreaOfSectorOfCircle(sectorR, sectorAlfa){
      return (Math.PI * sectorAlfa * ( sectorR ** 2))/360;
    }

    function calcRingArea(ringRadiusLarge, ringRadiusSmall){
      return Math.PI * ( (ringRadiusLarge ** 2) - (ringRadiusSmall**2) );
    }

    function calcCircleSegmentArea(CircleSegmentRadius, CircleSegmentAngle){
      return 0.5 * (CircleSegmentRadius**2) * Math.PI * CircleSegmentAngle /180 - Math.sin(CircleSegmentAngle);
    }

    function calcRingSectorArea(ringSectorLarge, ringSectorSmall, ringSectorAngle){
      return Math.PI * ringSectorAngle / 360 * ( (ringSectorLarge**2) - (ringSectorSmall**2) );
    }

    function calcAreaOfTheEllips(ellipseeSmallR, ellipseeLargeR){
      return ellipseeSmallR * ellipseeLargeR * Math.PI;
    }

       /* triangle */
    function calcAreaOfVersatileTriangle(versatileTriangleHeight, versatileTriangleBase){
      return 0.5 * versatileTriangleHeight * versatileTriangleBase;
    }

    function calcAreaOfIsoscelesTriangle(isoscelesTriangleBase, isoscelesTriangleHeight){
      return 0.5 * isoscelesTriangleBase * isoscelesTriangleHeight;
    }

    function calcAreaOfEquilateralTriangle(equilateralTriangleSide, equilateralTriangleHeight){
      return 0.5 * equilateralTriangleSide * equilateralTriangleHeight;
    }

      /* polygons */
    function calcSquareOfSquare(squareSide){
      return squareSide ** 2;
    }

    function calcAreaOfRectangle(rectangleLength, rectangWidth){
      return rectangleLength * rectangWidth;
    }

    function calcParallelogramAreaThroughSidesAndAngles(parallelogramSideA, parallelogramSideB, parallelogramAngles){
      return parallelogramSideA * parallelogramSideB * Math.sin(parallelogramAngles);
    }

    function calcDiamondSquare(diamondLarge, diamondSmaller){
      return (diamondLarge * diamondSmaller) / 2;
    }

    function calcTrapezoidAreaThroughBasesAndHeight(trapezoidA, trapezoidB, trapezoidHeight){
      let length = trapezoidA + trapezoidB;
      let area = length / 2 * trapezoidHeight;
      return area;
    }

    function calcAreaOfRegularPolygon(regularPolygonSide, regularPolygonNumber){
      let squa = regularPolygonSide * regularPolygonNumber ** 2;
      let tan = 4 * Math.tan( 180 / regularPolygonNumber );
      let area = squa / tan;
      return area;
    }

    return{
      circle: {
        calcAreaOfCircle: calcAreaOfCircle,
        calcAreaOfSectorOfCircle: calcAreaOfSectorOfCircle,
        calcRingArea: calcRingArea,
        calcCircleSegmentArea: calcCircleSegmentArea,
        calcRingSectorArea: calcRingSectorArea,
        calcAreaOfTheEllips: calcAreaOfTheEllips
      },
      triangle: {
        calcAreaOfVersatileTriangle: calcAreaOfVersatileTriangle,
        calcAreaOfIsoscelesTriangle: calcAreaOfIsoscelesTriangle,
        calcAreaOfEquilateralTriangle: calcAreaOfEquilateralTriangle
      },
      polygons: {
        calcSquareOfSquare: calcSquareOfSquare,
        calcAreaOfRectangle: calcAreaOfRectangle,
        calcParallelogramAreaThroughSidesAndAngles: calcParallelogramAreaThroughSidesAndAngles,
        calcDiamondSquare: calcDiamondSquare,
        calcTrapezoidAreaThroughBasesAndHeight: calcTrapezoidAreaThroughBasesAndHeight,
        calcAreaOfRegularPolygon: calcAreaOfRegularPolygon
      }
    }
  }
