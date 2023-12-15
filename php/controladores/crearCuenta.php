<?php
    include_once('../modelos/Investigador.php');

    $investigador = new Investigador();

    function inicializarInvestigador() {
        global $investigador;
        global $nombre;
        global $apellido;
        global $cedula;
        global $telefono;
        global $direccion;
        global $correoElectronico;
        global $cuenta;
        global $password;

        $investigador->setNombre($nombre);
        $investigador->setApellido($apellido);
        $investigador->setCedula($cedula);
        $investigador->setTelefono($telefono);
        $investigador->setDireccion($direccion);
        $investigador->setCorreoElectronico($correoElectronico);
        $investigador->setCuenta($nombre,$apellido);
        $investigador->setPassword($password);
    }

    function ejecutar() {
        global $investigador;

        $investigador->create();
    }

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $cedula = $_POST['cedula'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];
    $correoElectronico = $_POST['correoElectronico'];
    $password = $_POST['password'];

    inicializarInvestigador();
    ejecutar();
?>