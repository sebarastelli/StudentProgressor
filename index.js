    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'patg653ew163q8eSu'}).base('appPrawYL2Z5EIpRn');

    // Función para autenticar al usuario
    function authenticate() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Realiza una consulta a la tabla 'Test' en Airtable
        base('Test').select({
            filterByFormula: `{Email} = '${email}'`,
            maxRecords: 1
        }).firstPage(function(err, records) {
            if (err) {
                console.error(err);
                alert('Error: Could not authenticate user');
                return;
            }

            // Verifica si se encontró un registro con el correo electrónico proporcionado
            if (records.length > 0 && records[0].get('Password') === password) {
                // Si las credenciales son válidas, muestra el formulario de progreso
                displayForm();
            } else {
                // Si las credenciales no son válidas, muestra un mensaje de error
                alert('Authentication failed. Please check your credentials.');
            }
        });
    }

    // Función para mostrar el formulario de progreso
 

    // Función para enviar el progreso del estudiante a AirTable
    function submitProgress() {
        var studentName = document.getElementById('studentName').value;
        var hours = document.getElementById('hours').value;
        var progress = document.getElementById('progress').value;

        // Aquí debes enviar estos datos a AirTable para almacenarlos
        // Después de enviar los datos, muestra el mensaje de agradecimiento
        // Puedes usar la función displayThankYouMessage() para cambiar entre los formularios
    }

    // Función para mostrar el formulario de progreso después de la autenticación
    function displayForm() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('progressForm').style.display = 'block';
    }

    // Función para mostrar el mensaje de agradecimiento después de enviar el progreso
    function displayThankYouMessage() {
        document.getElementById('progressForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
    }