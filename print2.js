function printPDF() {
    // Sample dynamic variables
    let logoHeader = document.getElementById("balsigLogoContainer").innerHTML;
    let currentDateStatic = document.getElementById("currentDate").innerHTML;
    let liveStickTitle = document.getElementById("livestickTitleApp").innerHTML;
    
    // Clone the content of the table to avoid affecting the original
    let printTable = document.getElementById("table_placement").cloneNode(true);
    let divCatInput = document.getElementById("divCatInput").cloneNode(true);
    
    // Get all input elements within the cloned table
    let inputs = printTable.querySelectorAll("input");
    let divCatInputs = divCatInput.querySelectorAll("input");
    console.log(divCatInput);
    
    // Loop through the inputs and replace them with their current values
    inputs.forEach(input => {
        let valueSpan = document.createElement("span");
        valueSpan.innerText = input.value; // Use the value of the input
        input.parentNode.replaceChild(valueSpan, input);
    });

    divCatInputs.forEach(input => {
        let valueSpan = document.createElement("span");
        valueSpan.innerText = input.value; // Use the value of the input
        input.parentNode.replaceChild(valueSpan, input);
    });

    // Set up the print window
    var disp_setting = "toolbar=yes,location=no,";
    disp_setting += "directories=yes,menubar=yes,";
    disp_setting += "scrollbars=yes,width=screen.availWidth, height=screen.availHeight, left=100, top=25";
    
    var docprint = window.open("", "_blank", disp_setting);
    
    if (!docprint) {
        alert("Please allow popups for this website");
        return;
    }

    // Write the HTML content with dynamic variables to the new window
    docprint.document.open();
    docprint.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="main.css">
            <style type="text/css">
                @media print {
                    body {
                        margin: 20mm; /* Set margins for the print */
                        font-size: 12pt; /* Adjust font size if necessary */
                    }
                    th, td {
                        border: 1px solid black; /* Add borders to cells */
                        padding: 3px; /* Add padding for better spacing */
                        page-break-inside: avoid; /* Prevent breaks inside cells */
                    }
                    footer {
                        position: fixed;
                        bottom: 5px;
                        left: 0;
                        right: 10px;
                        text-align: end;
                    }
                    footer:after {
                        content: "Page " counter(page);
                    }
                }
                .balsigLogo { width: 140px; height: 125px; }
                .calculateBtn { display: none; }
                #divCatInput span {padding: 10px; text-transform: uppercase; }
            </style>
        </head>
        <body onload="window.print();"><center>
            ${logoHeader} <!-- Insert the logo header -->
            <p> ${liveStickTitle} (${currentDateStatic}) </p>
            ${divCatInput.outerHTML}      
            ${printTable.outerHTML} <!-- Insert the modified print table -->
            <footer class="page-number"></footer>
        </center></body>
        </html>
    `);
    docprint.document.close();
    if (viewHideMatches == 0) {                
        viewMatchBtn.click();
    }
}