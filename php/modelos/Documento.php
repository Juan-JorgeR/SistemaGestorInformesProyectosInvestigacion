<?php
    include_once('iORM.php');
    include_once('EntityModel.php');

    class Documento implements iORM {
        private $nombre;
        private $size;
        private $proyecto;

        public function setNombre($nombre) {
            $this->nombre = $nombre;
        }
        public function setSize($size) {
            $this->size = $size;
        }
        public function setProyecto($proyecto) {
            $this->proyecto = $proyecto;
        }

        public function getNombre() {
            return $this->nombre;
        }
        public function getSize() {
            return $this->size;
        }
        public function getProyecto() {
            return $this->proyecto;
        }

        public function create() {

        }
        public function read($clausula) {

        }
        public function update($clausula) {

        }
        public function delete($clausula) {
                
        }
    }
?>