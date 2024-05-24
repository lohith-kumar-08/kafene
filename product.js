function gotohomepage() {
    sessionStorage.setItem('loggedIn', false);
}

var data;
var a=new XMLHttpRequest();
a.open('GET','https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products',true)
a.send();

a.onreadystatechange=function(){
    if (a.readyState == 4 && a.status == 200) {
        data = JSON.parse(a.responseText);
    }
    var currentDate = new Date();

    var notExpiredData = data.filter(function (product) {
        // Convert expiryDate from string to Date object
        var expiryDate = new Date(product.expiryDate);

        // Compare with current date
        return expiryDate > currentDate && product.stock>=100;
    });
    var table = document.getElementById('ordersTable');

        // Iterate through the filtered data and populate the table
        notExpiredData.forEach(function (product) {
            var row = table.insertRow(-1); // Append row to the end of the table

            // Insert cells in the row
            var idCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            var brandCell = row.insertCell(2);
            var expiryCell = row.insertCell(3);
            var priceCell = row.insertCell(4);
            var stockCell = row.insertCell(5);

            // Populate cells with product data
            idCell.innerHTML = product.id;
            idCell.style.font = '14px Poppins, sans-serif';
            idCell.style.color = '#8c8c8c';
            
            nameCell.innerHTML = product.medicineName;
            
            brandCell.innerHTML = product.medicineBrand;
            brandCell.style.font = '14px Poppins, sans-serif';
            brandCell.style.color = '#8c8c8c';
            
            expiryCell.innerHTML = product.expiryDate;
            
            priceCell.innerHTML = "$" + product.unitPrice;
            priceCell.style.font = '14px Poppins, sans-serif';
            priceCell.style.color = '#8c8c8c';
            
            stockCell.innerHTML = product.stock;
            stockCell.style.font = '14px Poppins, sans-serif';
            stockCell.style.color = '#8c8c8c';
        });
};

function updateTable() {
    // Get reference to the table and checkbox
    var table = document.getElementById('ordersTable');
    var expiredCheckbox = document.getElementById('expired');

    // If the checkbox is checked, filter and display all data (including expired)
    if (expiredCheckbox.checked) {
        // Clear the existing rows from the table
        // table.innerHTML = "<tr><th>ID</th><th>Product Name</th><th>Product Brand</th><th>Expiry Date</th><th>Unit Price</th><th>Stock</th></tr>";
        var currentDate = new Date();

        var ExpiredData = data.filter(function (product) {
            // Convert expiryDate from string to Date object
            var expiryDate = new Date(product.expiryDate);
    
            // Compare with current date
            return expiryDate < currentDate && product.stock >=100;
        });
        // Populate the table with all data
        ExpiredData.forEach(function (product) {
            var row = table.insertRow(-1);
            var idCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            var brandCell = row.insertCell(2);
            var expiryCell = row.insertCell(3);
            var priceCell = row.insertCell(4);
            var stockCell = row.insertCell(5);

            idCell.innerHTML = product.id;
            idCell.style.font = '14px Poppins, sans-serif';
            idCell.style.color = '#8c8c8c';
            
            nameCell.innerHTML = product.medicineName;
            
            brandCell.innerHTML = product.medicineBrand;
            brandCell.style.font = '14px Poppins, sans-serif';
            brandCell.style.color = '#8c8c8c';
            
            expiryCell.innerHTML = product.expiryDate;
            
            priceCell.innerHTML = "$" + product.unitPrice;
            priceCell.style.font = '14px Poppins, sans-serif';
            priceCell.style.color = '#8c8c8c';
            
            stockCell.innerHTML = product.stock;
            stockCell.style.font = '14px Poppins, sans-serif';
            stockCell.style.color = '#8c8c8c';
            const totalCount = ordersTable.rows.length - 1; // Exclude header row
            document.getElementById('count').textContent = `Count: ${totalCount}`;
        });
    } else {
        // If the checkbox is unchecked, filter and display only non-expired data
        var currentDate = new Date();
        var nonExpiredData = data.filter(function (product) {
            var expiryDate = new Date(product.expiryDate);
            return expiryDate > currentDate && product.stock>=100;
        });

        // Clear the existing rows from the table
        table.innerHTML = "<tr><th>ID</th><th>Product Name</th><th>Product Brand</th><th>Expiry Date</th><th>Unit Price</th><th>Stock</th></tr>";

        // Populate the table with the non-expired data
        nonExpiredData.forEach(function (product) {
            var row = table.insertRow(-1);
            var idCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            var brandCell = row.insertCell(2);
            var expiryCell = row.insertCell(3);
            var priceCell = row.insertCell(4);
            var stockCell = row.insertCell(5);

            idCell.innerHTML = product.id;
            idCell.style.font = '14px Poppins, sans-serif';
            idCell.style.color = '#8c8c8c';
            
            nameCell.innerHTML = product.medicineName;
            
            brandCell.innerHTML = product.medicineBrand;
            brandCell.style.font = '14px Poppins, sans-serif';
            brandCell.style.color = '#8c8c8c';
            
            expiryCell.innerHTML = product.expiryDate;
            
            priceCell.innerHTML = "$" + product.unitPrice;
            priceCell.style.font = '14px Poppins, sans-serif';
            priceCell.style.color = '#8c8c8c';
            
            stockCell.innerHTML = product.stock;
            stockCell.style.font = '14px Poppins, sans-serif';
            stockCell.style.color = '#8c8c8c';
            const totalCount = ordersTable.rows.length - 1; // Exclude header row
            document.getElementById('count').textContent = `Count: ${totalCount}`;
        });
    }
}



function updateTable2() {
    // Get reference to the table and checkbox
    var table = document.getElementById('ordersTable');
    var expiredCheckbox1=document.getElementById('expired')
    var expiredCheckbox = document.getElementById('lowstock');

    // If the checkbox is checked, filter and display all data (including expired)
    if (expiredCheckbox.checked) {
        // Clear the existing rows from the table
        // table.innerHTML = "<tr><th>ID</th><th>Product Name</th><th>Product Brand</th><th>Expiry Date</th><th>Unit Price</th><th>Stock</th></tr>";
     

        var lowstockData = data.filter(function (product) {
            // Convert expiryDate from string to Date object
           
            // Compare with current date
            return product.stock < 100;
        });
        // Populate the table with all data
        lowstockData.forEach(function (product) {
            var row = table.insertRow(-1);
            var idCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            var brandCell = row.insertCell(2);
            var expiryCell = row.insertCell(3);
            var priceCell = row.insertCell(4);
            var stockCell = row.insertCell(5);

            idCell.innerHTML = product.id;
            idCell.style.font = '14px Poppins, sans-serif';
            idCell.style.color = '#8c8c8c';
            
            nameCell.innerHTML = product.medicineName;
            
            brandCell.innerHTML = product.medicineBrand;
            brandCell.style.font = '14px Poppins, sans-serif';
            brandCell.style.color = '#8c8c8c';
            
            expiryCell.innerHTML = product.expiryDate;
            
            priceCell.innerHTML = "$" + product.unitPrice;
            priceCell.style.font = '14px Poppins, sans-serif';
            priceCell.style.color = '#8c8c8c';
            
            stockCell.innerHTML = product.stock;
            stockCell.style.font = '14px Poppins, sans-serif';
            stockCell.style.color = '#8c8c8c';
            const totalCount = ordersTable.rows.length - 1; // Exclude header row
            document.getElementById('count').textContent = `Count: ${totalCount}`;
        });
    } else {
        // If the checkbox is unchecked, filter and display only non-expired data
        var currentDate = new Date();
        var nonExpiredData = data.filter(function (product) {
            var expiryDate = new Date(product.expiryDate);
            if(expiredCheckbox1.checked){
            return (expiryDate < currentDate || expiryDate > currentDate ) && product.stock >=100;
            }
            else{
                return expiryDate > currentDate && product.stock>=100;
            }
        });

        // Clear the existing rows from the table
        table.innerHTML = "<tr><th>ID</th><th>Product Name</th><th>Product Brand</th><th>Expiry Date</th><th>Unit Price</th><th>Stock</th></tr>";

        // Populate the table with the non-expired data
        nonExpiredData.forEach(function (product) {
            var row = table.insertRow(-1);
            var idCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            var brandCell = row.insertCell(2);
            var expiryCell = row.insertCell(3);
            var priceCell = row.insertCell(4);
            var stockCell = row.insertCell(5);

            idCell.innerHTML = product.id;
idCell.style.font = '14px Poppins, sans-serif';
idCell.style.color = '#8c8c8c';

nameCell.innerHTML = product.medicineName;

brandCell.innerHTML = product.medicineBrand;
brandCell.style.font = '14px Poppins, sans-serif';
brandCell.style.color = '#8c8c8c';

expiryCell.innerHTML = product.expiryDate;

priceCell.innerHTML = "$" + product.unitPrice;
priceCell.style.font = '14px Poppins, sans-serif';
priceCell.style.color = '#8c8c8c';

stockCell.innerHTML = product.stock;
stockCell.style.font = '14px Poppins, sans-serif';
stockCell.style.color = '#8c8c8c';

            const totalCount = ordersTable.rows.length - 1; // Exclude header row
            document.getElementById('count').textContent = `Count: ${totalCount}`;
        });
    }
}
