<?php
$target_dir = "../sharex/text/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
$target_file = str_replace(" ","%20",$target_file);
$target_file = str_replace("../","",$target_file);
echo "https://machinecraft.space/$target_file";
?>

