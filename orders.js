function gotohomepage() {
    sessionStorage.setItem('loggedIn', false);
}




var data; 

var a = new XMLHttpRequest();
a.open('GET', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
a.send();

a.onreadystatechange = function () {
    if (a.readyState == 4 && a.status == 200) {
        data = JSON.parse(a.responseText);
       data.forEach(order => {
            if (!isOrderInTable(order.id)) {
                const row = ordersTable.insertRow();
                row.innerHTML = `
                <td class="styled-cell">${order.id}</td>    
                <td>${order.customerName}</td>
                <td>${order.orderDate}<ti class="styled-cell">${"   " + order.orderTime}</ti></td>
                <td class="styled-cell">${"$" + order.amount}</td>
                <td>${order.orderStatus}</td>
              `;
            }
        });
    
        const totalCount = ordersTable.rows.length - 1; // Exclude header row
        document.getElementById('count').textContent = `Count: ${totalCount}`;
    }
};

function isOrderInTable(orderId) {
    const ordersTable = document.getElementById('ordersTable');
    for (let i = 1; i < ordersTable.rows.length; i++) {
        const orderIdInTable = ordersTable.rows[i].cells[0].textContent;
        if (orderIdInTable === orderId) {
            return true; // Order ID already exists in the table
        }
    }
    return false; // Order ID does not exist in the table
} 
function updateTable() {
    const newCheckbox = document.getElementById('new');
    const packedCheckbox = document.getElementById('packed');
    const inTransitCheckbox = document.getElementById('intransit');
    const deliveredCheckbox = document.getElementById('delivered');

    const selectedStatuses = [];

    if (newCheckbox.checked) selectedStatuses.push('New');
    if (packedCheckbox.checked) selectedStatuses.push('Packed');
    if (inTransitCheckbox.checked) selectedStatuses.push('InTransit');
    if (deliveredCheckbox.checked) selectedStatuses.push('Delivered');

    const filteredOrders = data.filter(order => selectedStatuses.includes(order.orderStatus));

    // Clear existing content in the table
    const ordersTable = document.getElementById('ordersTable');
    ordersTable.innerHTML = '<tr><th>ID</th><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th></tr>';

    // Add filtered orders to the table, avoiding duplicates
    filteredOrders.forEach(order => {
        if (!isOrderInTable(order.id)) {
            const row = ordersTable.insertRow();
            row.innerHTML = `
            <td class="styled-cell">${order.id}</td>
            <td>${order.customerName}</td>
            <td>${order.orderDate}<ti class="styled-cell">${"   " + order.orderTime}</ti></td>
            <td class="styled-cell">${"$" + order.amount}</td>
            <td>${order.orderStatus}</td>
          `;
        }
    });

    const totalCount = ordersTable.rows.length - 1; // Exclude header row
    document.getElementById('count').textContent = `Count: ${totalCount}`;
}