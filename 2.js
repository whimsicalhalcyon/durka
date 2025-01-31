let svgWR = document.querySelector('.svg-wr');
    let svgElement = document.querySelector('.svg-wr svg');
    let imageElement = document.querySelector('.svg-wr image');
    let maskedElement = document.querySelector('#mask-circle');
    let circleFeedback = document.querySelector('#circle-shadow');
    let svgPoint = svgElement.createSVGPoint();
    function cursorPoint(e, svg) {
        svgPoint.x = e.clientX;
        svgPoint.y = e.clientY;
        return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
    }
    function update(svgCoords) {
        maskedElement.setAttribute('cx', svgCoords.x);
        maskedElement.setAttribute('cy', svgCoords.y);
        circleFeedback.setAttribute('cx', svgCoords.x);
        circleFeedback.setAttribute('cy', svgCoords.y);
    }
    window.addEventListener('resize', function() {
        imageElement.style.width = svgWR.offsetWidth; 
        imageElement.style.height = svgWR.offsetHeight;
    });
    window.addEventListener('mousemove', function(e) {
        update(cursorPoint(e, svgElement));
    }, false);
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        let touch = e.targetTouches[0];
        if (touch) {
            update(cursorPoint(touch, svgElement));
        }
    }, false);



    