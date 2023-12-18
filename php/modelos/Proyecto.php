<?php
    include_once('iORM.php');
    include_once('EntityModel.php');
    
    class Proyecto implements iORM {
        private $nombre;
        private $financiador;
        private $presupuesto;
        private $fechaInicio;
        private $fechaFinal;
        private $investigador;

        public function setNombre($nombre) {
            $this->nombre = $nombre;
        }
        public function setFinanciador($financiador) {
            $this->financiador = $financiador;
        }
        public function setPresupuesto($presupuesto) {
            $this->presupuesto = $presupuesto;
        }
        public function setFechaInicio($fechaInicio) {
            $this->setFechaInicio = $fechaInicio;
        }
        public function setFechaFinal($fechaFinal) {
            $this->setFechaFinal = $fechaFinal;
        }
        public function setInvestigador($investigador) {
            $this->investigador = $investigador;
        }

        public function getNombre() {
            return $this->nombre;
        }
        public function getFinanciador() {
            return $this->financiador;
        }
        public function getPresupuesto() {
            return $this->presupuesto;
        }
        public function getFechaInicio() {
            return $this->fechaInicio;
        }
        public function getFechaFinal() {
            return $this->fechaFinal;
        }
        public function getInvestigador() {
            return $this->investigador;
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