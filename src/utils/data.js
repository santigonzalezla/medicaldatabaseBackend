const purchaseOrder = [
    {
        "orderId": "PO123",
        "providerId": "PRV456",
        "state": "pending",
        "date": "2023-01-15T12:30:00Z"
    },
    {
        "orderId": "PO124",
        "providerId": "PRV457",
        "state": "shipped",
        "date": "2023-02-10T15:45:00Z"
    },
    {
        "orderId": "PO125",
        "providerId": "PRV458",
        "state": "delivered",
        "date": "2023-03-05T08:00:00Z"
    },
    {
        "orderId": "PO126",
        "providerId": "PRV459",
        "state": "pending",
        "date": "2023-04-20T10:30:00Z"
    },
    {
        "orderId": "PO127",
        "providerId": "PRV460",
        "state": "shipped",
        "date": "2023-05-15T14:15:00Z"
    }
]

const product = [
    {
        "productId": "PROD321",
        "providerId": "PRV456",
        "name": "Widget X",
        "type": "gadget",
        "dueDate": "2023-02-28T00:00:00Z"
    },
    {
        "productId": "PROD322",
        "providerId": "PRV457",
        "name": "Tech Gizmo",
        "type": "electronics",
        "dueDate": "2023-03-15T00:00:00Z"
    },
    {
        "productId": "PROD323",
        "providerId": "PRV458",
        "name": "Product ABC",
        "type": "miscellaneous",
        "dueDate": "2023-04-10T00:00:00Z"
    },
    {
        "productId": "PROD324",
        "providerId": "PRV459",
        "name": "Gizmo 123",
        "type": "electronics",
        "dueDate": "2023-05-25T00:00:00Z"
    },
    {
        "productId": "PROD325",
        "providerId": "PRV460",
        "name": "Essential Item",
        "type": "essential",
        "dueDate": "2023-06-10T00:00:00Z"
    }
]


const provider = [
    {
        "providerId": "PRV456",
        "name": "ABC Supplies",
        "phone": "123-456-7890",
        "address": "123 Main St, Cityville"
    },
    {
        "providerId": "PRV457",
        "name": "XYZ Tech",
        "phone": "987-654-3210",
        "address": "456 Tech Blvd, Tech City"
    },
    {
        "providerId": "PRV458",
        "name": "GHI Products",
        "phone": "555-123-4567",
        "address": "789 Commerce Ave, Market Town"
    },
    {
        "providerId": "PRV459",
        "name": "LMN Suppliers",
        "phone": "777-888-9999",
        "address": "101 Trade Street, Business City"
    },
    {
        "providerId": "PRV460",
        "name": "PQR Distributors",
        "phone": "333-444-5555",
        "address": "202 Distribution Lane, Supply Town"
    }
]
const inventory = [
    {
        "inventoryId": "INV987",
        "productId": "PROD321",
        "quantity": 50
    },
    {
        "inventoryId": "INV988",
        "productId": "PROD322",
        "quantity": 75
    },
    {
        "inventoryId": "INV989",
        "productId": "PROD323",
        "quantity": 100
    },
    {
        "inventoryId": "INV990",
        "productId": "PROD324",
        "quantity": 30
    },
    {
        "inventoryId": "INV991",
        "productId": "PROD325",
        "quantity": 60
    }
]

const datasecurity = [
    {
        "registerId": "REG789",
        "type": "access",
        "description": "User login",
        "employeeId": "EMP101",
        "dateTime": "2023-01-20T08:45:00Z"
    },
    {
        "registerId": "REG790",
        "type": "modification",
        "description": "Updated customer records",
        "employeeId": "EMP102",
        "dateTime": "2023-02-12T11:20:00Z"
    },
    {
        "registerId": "REG791",
        "type": "access",
        "description": "Admin login",
        "employeeId": "EMP103",
        "dateTime": "2023-03-08T09:10:00Z"
    },
    {
        "registerId": "REG792",
        "type": "deletion",
        "description": "Deleted outdated data",
        "employeeId": "EMP104",
        "dateTime": "2023-04-25T13:40:00Z"
    },
    {
        "registerId": "REG793",
        "type": "access",
        "description": "Employee login",
        "employeeId": "EMP105",
        "dateTime": "2023-05-18T16:55:00Z"
    }
]


