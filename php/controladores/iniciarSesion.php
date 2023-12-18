<?php
    include_once('../modelos/Investigador.php');

    $investigador = new Investigador();

    function verificar() {
        global $cuenta,$password,$investigador;
        $clausula = "cuenta = \"" . $cuenta . "\" and  password = \"" . $password . "\"";

        if(($result = $investigador->read($clausula)) != null) {
            echo json_encode($result[0]->getCuenta());
        }
        else {
            echo "password o cuenta equivocada";
        }
    }

    $cuenta = $_POST['cuenta'];
    $password = $_POST['password'];

    verificar();
?>