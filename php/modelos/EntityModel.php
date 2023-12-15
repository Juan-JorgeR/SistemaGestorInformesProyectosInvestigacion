<?php
    define('DB_HOST', 'localhost:3306');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_DATABASE', 'SistemaGestorInformesProyectosInvestigacion');

    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
?>