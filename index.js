
$(".form-select").click(function actHileras() {
    var sistema =  $(".form-select option:checked" ).val();

    if(sistema == 2 || sistema == 5) {
        $(".metrosHileras").removeAttr("disabled", "");
    } else {
        $(".metrosHileras").attr("disabled", "");
    }
});



    $("#enviar").click(function (e) {
        e.preventDefault();
        var distPlantas = $(".metrosPlantas").val();
        var distSurcos = $(".metrosSurcos").val();
        var distHileras = $(".metrosHileras").val();
        var cantPlant = $(".plantasSembradas").val();

        var sistemaSiembra = $(".form-select option:checked" ).val();

        if(sistemaSiembra === "1") {
            var calculoCuadrado = 10000 / (parseFloat(distPlantas) * parseFloat(distSurcos));   
            var calculo = Math.round(calculoCuadrado);
        } else if(sistemaSiembra === "2") {
            var calculoDoble = 10000 / ((((parseFloat(distHileras) + parseFloat(distSurcos))) / 2) * parseFloat(distPlantas));
            var calculo = Math.round(calculoDoble);

        } else if(sistemaSiembra === "3") {
            var calculoRectangulo = 10000 / (parseFloat(distPlantas) * parseFloat(distSurcos));   
            var calculo = Math.round(calculoRectangulo);
        } else if(sistemaSiembra === "4") {
            var calculoTriangulo = 10000 / (0.866 * parseFloat(distPlantas) * parseFloat(distSurcos));
            var calculo = Math.round(calculoTriangulo);
        } else if(sistemaSiembra === "5") {
            var calculoTriple = (10000 * 3) / (((parseFloat(distHileras) + parseFloat(distSurcos))) * parseFloat(distPlantas));
            var calculo = Math.round(calculoTriple);
        };

        var area = parseFloat(cantPlant) / calculo;

        $("#resultado").text("Según los datos seleccionados, la densidad de siembra es de " + calculo + " plantas por hectárea. Y las plantas sembradas corresponden a " + area.toFixed(2) + " hectáreas.");
    });
 
$("#enviar").on("click", function() {
    $("#resultado").removeClass("respuesta");
 });

