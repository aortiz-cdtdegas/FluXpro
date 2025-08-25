const events = {
    attachFormEvents: function() {
        document.getElementById("condicionesForm").addEventListener("submit", function(event) {
            // Validaciones
            if (!events.validateInputs()) { event.preventDefault(); return; }
            if (!events.validateTemperature()) { event.preventDefault(); return; }
            if (!events.validatePressure()) { event.preventDefault(); return; }
            if (!events.validateAtLeastOneComponent()) { event.preventDefault(); return; }
            if (!events.validateVolumen()) { event.preventDefault(); return; }

            event.preventDefault();

            // Preparar datos y llamar a la API
            let formData = new FormData(this);
            let jsonData = {};
            formData.forEach((value, key) => { jsonData[key] = value; });

            api.sendForm(jsonData);
        });
    },
    validatePressure: function() {
        const pressureInput = document.getElementById("pressure");
        if (pressureInput && (parseFloat(pressureInput.value) <= 0 || isNaN(parseFloat(pressureInput.value)))) {
            ui.showError("Ingrese la Presión de Operación.");
            pressureInput.focus();
            return false;
        }
        return true;
    },
    validateTemperature: function() {
        const temperatureInput = document.getElementById("temperature");
        if (temperatureInput && (isNaN(parseFloat(temperatureInput.value)))) {
            ui.showError("Ingrese la Temperatura de Operación.");
            temperatureInput.focus();
            return false;
        }
        return true;
    },
    validateVolumen: function() {
        const volMedidoInput = document.getElementById("volMedido");
        if (volMedidoInput && (parseFloat(volMedidoInput.value) <= 0 || isNaN(parseFloat(volMedidoInput.value)))) {
            ui.showError("Ingrese el Volumen Medido.");
            volMedidoInput.focus();
            return false;
        }
        return true;
    },
    validateInputs: function() {
        let total = 0;
        let inputs = document.querySelectorAll('input.gas-input[type="number"]');
    
        inputs.forEach(function(input) {
            let value = parseFloat(input.value);
            if (isNaN(value)) {
                value = 0; // Reemplaza valores vacíos, null o no numéricos por 0
                input.value = 0;
            }
            total += value;
        });
    
        if (total !== 100) {
            alert("La suma de la Composición debe ser exactamente 100. Actualmente es: " + total);
            return false;
        }
    
        return true;
    },
    validateAtLeastOneComponent: function() {
        let algunNoCero = false;
        document.querySelectorAll('input.gas-input[type="number"]').forEach(function(input) {
            if (parseFloat(input.value) !== 0 && input.value !== "") {
                algunNoCero = true;
            }
        });
        if (!algunNoCero) {
            ui.showError("Ingrese al menos un Componente.");
            return false;
        }
        return true;
    }
};

document.getElementById("resetInputs").addEventListener("click", function() {
    document.querySelectorAll('input[type="number"], input[type="text"]').forEach(function(input) {
        input.value = "";
    });
});