function alterarLetra () {
    document.getElementById("C").innerHTML = "K";
    document.getElementById("C").style.color = 'green';

}

function alterarDeNovo () {
    document.getElementById("C").innerHTML = "C";
    document.getElementById("C").style.color = 'rgb(135, 20, 20)'
}

$(document).ready(function()

{ 
    $("#btnSim").on("click", function(){
        swal("","Ok Te Vejo La ;D", "success")
    })

    $("#btnNao").hover(
        function () {
            let posTop = Math.floor(Math.random() * (300 - 10) + 10);
            let posLeft = Math.floor(Math.random() * (300 - 10) + 10);

            $(this).css({ top: posTop + "px", left: posLeft + "px" });
        }
    );
})