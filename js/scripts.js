
$(document).ready(function() {
    $("form#triangle").submit(function() {
        event.preventDefault();
        var side1 = $("#input1").val();
        var side2 = $("#input2").val();
        var side3 = $("#input3").val();

        if (side1 === side2 && side1 === side3) {
            $(".equilateral-triangle").show();
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
            $(".isosceles-triangle").show();
        } else if ((side1 + side2 >= side3) || (side1 + side3 >= side2) || (side2 + side3 >= side1)) {
            $(".scalene-triangle").show();
        } else {
            $(".no-triangle").show();
        }
    });
});