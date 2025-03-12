### **1️⃣ Library Management System**  
Design a **Library Management System** where books can be borrowed and returned. Create a `Book` class with properties such as `title`, `author`, `isbn`, and `available` (defaulting to `true`). Implement methods to borrow (`borrowBook()`) and return (`returnBook()`) books. Next, create a `Library` class that maintains a collection of books. Implement methods to add books (`addBook(book: Book)`) and search for a book by its `isbn` (`findBook(isbn: number)`). Ensure that a book cannot be borrowed if it is already checked out.  

---

### **2️⃣ Type-Safe API Response Handling**  
Develop a **type-safe API response system** using TypeScript's **generics**. Define a **generic type** `ApiResponse<T>` that can store the response status (`"success"` or `"error"`), optional `data` of type `T`, and an optional `message`. Then, implement a function `fetchData<T>()` that simulates an API call and returns an `ApiResponse<T>`. Ensure that the function works for different types of data, such as `string`, `number`, or objects.  

---

### **3️⃣ Banking System**  
Implement a **Banking System** that allows deposits, withdrawals, and interest calculations. Create a `BankAccount` class with properties `accountNumber` and `balance`. Implement methods to deposit (`deposit(amount: number)`) and withdraw (`withdraw(amount: number)`) money, ensuring that a withdrawal does not exceed the available balance. Extend this class with a `SavingsAccount` class, which includes an additional property for `interestRate`. Implement an `applyInterest()` method that adds interest to the account balance based on the stored rate.  

---

### **4️⃣ Task Manager System**  
Build a **Task Manager System** to keep track of tasks with different statuses. Each task should have an `id`, `title`, and `status` (which can be `"todo"`, `"in-progress"`, or `"completed"`). Create a `TaskManager` class that allows adding new tasks (`addTask(title: string)`), updating their status (`updateStatus(id: number, status: "todo" | "in-progress" | "completed")`), and retrieving tasks by status (`getTasksByStatus(status: string)`). Ensure that updates are only allowed for valid task IDs.  

---

### **5️⃣ Role-Based Access Control (RBAC)**  
Implement a **Role-Based Access Control (RBAC) system** to manage user permissions based on roles. Create a `User` interface with properties `id`, `name`, and `role`, where `role` can be `"admin"`, `"editor"`, or `"viewer"`. Define an `AccessControl` class that maintains permissions for each role. Implement methods to check whether a user has permission to perform certain actions (e.g., `"create"`, `"read"`, `"update"`, `"delete"`). Ensure that only `"admin"` users have full access, `"editor"` users can modify content, and `"viewer"` users can only read content.  

---

### **6️⃣ E-Commerce Shopping Cart**  
Design an **E-Commerce Shopping Cart** system using TypeScript interfaces and classes. Define a `Product` interface with properties such as `id`, `name`, `price`, and `category`. Create a `Cart` class that allows users to `addProduct(product: Product)`, `removeProduct(id: number)`, and `calculateTotal()` to compute the total cost. Ensure that duplicate products are counted as multiple quantities instead of separate items.  

---

### **7️⃣ Employee Payroll System**  
Develop an **Employee Payroll System** that calculates employee salaries based on roles. Create an `Employee` interface with properties `id`, `name`, and `baseSalary`. Extend this with two types: `FullTimeEmployee` (with `bonusPercentage`) and `PartTimeEmployee` (with `hourlyRate` and `hoursWorked`). Implement a `Payroll` class that calculates the monthly salary for employees using a `calculateSalary(employee: Employee)` method. Ensure that salaries are calculated differently for full-time and part-time employees.  

---

### **8️⃣ Online Examination System**  
Create an **Online Examination System** where users can take quizzes. Define a `Question` interface with properties `id`, `text`, `options` (an array of possible answers), and `correctAnswer`. Implement a `Quiz` class that stores questions and allows users to `answerQuestion(id: number, selectedAnswer: string)`. Track the user's score and implement a method to `getResult()` showing the total number of correct answers.  

---

### **9️⃣ Inventory Management System**  
Develop an **Inventory Management System** for tracking products in a store. Define a `Product` class with properties such as `id`, `name`, `price`, `quantity`, and `category`. Implement a `Warehouse` class that stores products and provides methods to `addProduct(product: Product)`, `updateStock(id: number, newQuantity: number)`, and `getLowStockProducts(threshold: number)` to retrieve products with low stock levels.  

---

### **🔟 Hotel Room Booking System**  
Build a **Hotel Room Booking System** where customers can book available rooms. Create a `Room` class with properties `roomNumber`, `roomType` (e.g., `"single"`, `"double"`, `"suite"`), and `isBooked` (default: `false`). Implement a `Hotel` class that manages room bookings, allowing customers to `bookRoom(roomNumber: number)`, `cancelBooking(roomNumber: number)`, and `listAvailableRooms()`. Ensure that users cannot book an already reserved room.  

---