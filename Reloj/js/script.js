(function() {

    let actualizarHora = function() {
        let fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            año = fecha.getFullYear();

        let pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pdiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pAño = document.getElementById("año");

        //declaramos un arreglo para que nos muestre los dias de la semana     
        let semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
        pdiaSemana.textContent = semana[diaSemana];
        //con este comando mandamos a llamar los dias de la semana 
        pDia.textContent = dia;
        //Declaramos un arreglo de meses para que nos muestre los meses del año
        let meses = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octibre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];

        //con este comando mandamos a llamar al año actual
        pAño.textContent = año;

        //de esta forma estamos transformando al reloj de 24horas a uno de 12
        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        };

        if (horas == 0) {
            horas = 12;
        }
        if (horas < 10) { horas = "0" + horas }
        pHoras.textContent = horas;


        if (minutos < 10) { minutos = "0" + minutos }
        if (segundos < 10) { segundos = "0" + segundos }
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

        pAMPM.textContent = ampm;

    }


    actualizarHora();

    var intervalo = setInterval(actualizarHora, 1000); //con esto hacemos que los segundos se actualicen cada segundo 



}())