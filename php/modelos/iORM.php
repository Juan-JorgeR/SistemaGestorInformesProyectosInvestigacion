<?php
    interface iORM {
        function create();
        function read($clausula);
        function update($clausula);
        function delete($clausula);
    }
?>