import "./styles.css";
import * as Papa from "papaparse";

document.getElementById("app").innerHTML = `
<h1>DEALS DASHBOARD</h1>
<div>
 
</div>
`;

let file = "";

// Parse local CSV file
Papa.parse(file, {
  complete: function (results) {
    console.log("Finished:", results.data);
  }
});
