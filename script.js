function showEpisodeCount() {
    
    $("#output").html( "Number of Episodes (should be 79): " + db["prodnums"].length );
    
}

function createTable() {
    
    var table = document.createElement("table");
    var headingRow = document.createElement("tr");
    
    for(let i = 0; i < db["colheadings"].length; i++){
        var header = document.createElement("th");
        header.innerHTML = db["colheadings"][i];
        headingRow.appendChild(header);
        table.appendChild(headingRow);
    }
    
    for(let i = 0; i < db["prodnums"].length; i++){
        
        var rows = document.createElement("tr");
        var dataProdnums = document.createElement("td");
        dataProdnums.innerHTML = db["prodnums"][i];
        rows.appendChild(dataProdnums);
        
        for (let j = 0; j < db["data"][i].length; j++) {
            
            var data = document.createElement("td");
            data.innerHTML = db["data"][i][j];
            rows.appendChild(data);
        }
        
        table.appendChild(rows);
    }
    
    document.getElementById("output").appendChild(table);
    
}