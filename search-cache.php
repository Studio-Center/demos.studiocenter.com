<?php 
// start session
session_start();

switch($_POST['action']){
	case 'save':
	case 'update':
		$_SESSION['search-cache'] = $_POST['dataSave'];
		echo $_SESSION['search-cache'];
	break;
	case 'clear':
		$_SESSION['search-cache'] = '';
	break;
	case 'print':
	default:
		echo $_SESSION['search-cache'];
	break;
	case 'clear':
}
