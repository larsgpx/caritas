<?php
if (isset($_POST['Email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    // $email_to = "huachumahealing@gmail.com";
    $email_to = "larsgpx@gmail.com";
    $email_subject = "Contacto desde pagina web - Huachuma Healing";

    function problem($error)
    {
        echo "Ups! algo ha sucedido";
        echo "Han aparecido estos errores.<br><br>";
        echo $error . "<br><br>";
        echo "Por favor regresa y arregla los errores.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['full_name']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['Email']) ||
        !isset($_POST['Message'])
    ) {
        problem('Lo sentimos, pero parece haber un problema con el formulario que envió.');
    }

    $name = $_POST['Name']; // required
    $phone = $_POST['phone']; // required
    $email = $_POST['Email']; // required
    $message = $_POST['Message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'La dirección de correo electrónico que ingresó no parece ser válida.<br>';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'El nombre que ingresó no parece ser válido.<br>';
    }
    if (!preg_match($string_exp, $phone)) {
        $error_message .= 'Debe acceder un telefono <br>';
    }

    if (strlen($message) < 2) {
        $error_message .= 'El mensaje que ingresó no parece ser válido.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Nombre: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Mensaje: " . clean_string($message) . "\n";
}
?>