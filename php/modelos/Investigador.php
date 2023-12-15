<?php
    include_once('iORM.php');
    include_once('EntityModel.php');

    class Investigador implements iORM {
        private $id;
        private $nombre;
        private $apellido;
        private $cedula;
        private $telefono;
        private $direccion;
        private $correoElectronico;
        private $cuenta;
        private $password;

        public function setId($id) {
            $this->id = $id;
        }
        public function setNombre($nombre) {
            $this->nombre = $nombre;
        }
        public function setApellido($apellido) {
            $this->apellido = $apellido;
        }
        public function setCedula($cedula) {
            $this->cedula = $cedula;
        }
        public function setTelefono($telefono) {
            $this->telefono = $telefono;
        }
        public function setDireccion($direccion) {
            $this->direccion = $direccion;
        }
        public function setCorreoElectronico($correoElectronico) {
            $this->correoElectronico = $correoElectronico;
        }
        public function setCuenta($nombre,$apellido) {
            $obtenerid = "select max(id) as id from Investigadores";
            $result = $GLOBALS['mysqli']->query($obtenerid);
            $row = $result->fetch_array(MYSQLI_ASSOC);
            $this->id = $row['id'] + 1;

            $this->cuenta = trim($this->getNombre().$this->getApellido().$this->id."@investigador");
        }
        public function setPassword($password) {
            $this->password = $password;
        }

        public function getId() {
            return $this->id;
        }
        public function getNombre() {
            return $this->nombre;
        }
        public function getApellido() {
            return $this->apellido;
        }
        public function getCedula() {
            return $this->cedula;
        }
        public function getTelefono() {
            return $this->telefono;
        }
        public function getDireccion() {
            return $this->direccion;
        }
        public function getCorreoElectronico() {
            return $this->correoElectronico;
        }
        public function getCuenta() {
            return $this->cuenta;
        }
        public function getPassword() {
            return $this->password;
        }

        public function create() {
            $query = "insert into Investigadores("
                . "nombre,"
                . "apellido,"
                . "cedula,"
                . "telefono,"
                . "direccion,"
                . "correoElectronico,"
                . "cuenta,"
                . "password)"
            . " value("
                . "\"" . $this->nombre . "\", "
                . "\"" . $this->apellido . "\", "
                . "\"" . $this->cedula . "\", "
                . "\"" . $this->telefono . "\", "
                . "\"" . $this->direccion . "\", "
                . "\"" . $this->correoElectronico . "\", "
                . "\"" . $this->cuenta . "\", "
                . "\"" . $this->password . "\")";

            $result = $GLOBALS['mysqli']->query($query);
        }
        public function read() {
            $query = "select * from Investigadores";
            $result = $GLOBALS['mysqli']->query($query);
            $investigadores = array();
            $i = 0;

            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                // extract user id and name
                $id = $row['id'];
                $nombre = $row['nombre'];
                $apellido = $row['apellido'];
                $cedula = $row['cedula'];
                $telefono = $row['telefono'];
                $direccion = $row['direccion'];
                $correoElectronico = $row['correoElectronico'];
                $cuenta = $row['cuenta'];
                $password = $row['password'];

                $investigador = new Investigador();

                $investigador->setId($id);
                $investigador->setNombre($nombre);
                $investigador->setApellido($apellido);
                $investigador->setCedula($cedula);
                $investigador->setTelefono($telefono);
                $investigador->setDireccion($direccion);
                $investigador->setPassword($password);

                $investigadores[$i++] = $investigadores;
            }
            return json_encode($investigadores);
        }
        public function update() {

        }
        public function delete() {

        }
    }
?>