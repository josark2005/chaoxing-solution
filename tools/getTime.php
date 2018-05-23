<?php
$file = file_get_contents("../docs/resources/3870748.ini");
$file = explode(PHP_EOL, $file);
$t = 0;
for ($i=0; $i < count($file); $i++) {
  $j = json_decode($file[$i], true);
  $t += $j['duration'];
}
var_dump($t);
?>
