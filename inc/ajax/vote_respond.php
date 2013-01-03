<?php

session_start();

/**
* Vote respond - responds to votes made via the Kaplan international facebook app.
*/
if(!empty($_POST) && $_POST['v'])
{

	$photo_id = $_POST['v'];

	/**
	* Process
	*/

	if(!$_SESSION['photo_selection'])
		$_SESSION['photo_selection'] = array();

	/**
	* 1. Query the database and find photo row by $photo_id (recommend escaping $photo_id first)
	* 2. If row is found and picture exists continue else respond with json response:fail
	* 3. Now find the column (or category) this photo represents and load into variable $column.
	*    Ensure you also respond with json response:complete, column: $column
	*/

	$column = 1;

	$_SESSION['photo_selection'][$column] = $photo_id;

	echo json_encode(array("response" => "complete", "column" => rand(1,6)));

}