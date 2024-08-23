import sqlite3
db = sqlite3.connect('lumiere.sqlite')

db.execute('DROP TABLE IF EXISTS users')
db.execute('DROP TABLE IF EXISTS orderHistory')
db.execute('DROP TABLE IF EXISTS menu')

db.execute('''CREATE TABLE users(
    userID text PRIMARY KEY,
    name text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL
)''')

db.execute('''CREATE TABLE orderHistory(
    orderID text PRIMARY KEY,
    userID text NOT NULL,
    foodID text NOT NULL,
    date text NOT NULL,
    quantity text NOT NULL
)''')

db.execute('''CREATE TABLE menu(
    foodID text PRIMARY KEY,
    name text NOT NULL,
    category text NOT NULL,
    type text NOT NUll,
    description text NOT NULL,
    image text NOT NULL,
    price numeric(10,2) NOT NULL
)''')

cursor = db.cursor()

cursor.execute('''
    INSERT INTO users(userID,name,phone,password)
    VALUES('01','Choo Jia Zheng','0111111111','CJZ123')
''')

cursor.execute('''
    INSERT INTO users(userID,name,phone,password)
    VALUES('02','Loke Weng Yan','0122222222','LWY123')
''')

cursor.execute('''
    INSERT INTO users(userID,name,phone,password)
    VALUES('03','Leong Ming Shan','0133333333','LMS123')
''')

cursor.execute('''
    INSERT INTO users(userID,name,phone,password)
    VALUES('04','Tin Hui Hui','0144444444','THH123')
''')

cursor.execute('''
    INSERT INTO users(userID,name,phone,password)
    VALUES('05','Apple Pie','0155555555','Apple123')
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('001','Egg croissant sandwich', 'Food', 'Breakfast', 'A delicious Egg Croissant Sandwich is suit for you as a breakfast', '../img/food/FoodEggCroissantSandwich.png', 8.00)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('002','Berry Pancakes', 'Food', 'Dessert', 'Berry Pancakes, a sweet and sour taste sure will make you happy whole day', '../img/food/FoodBerryPancakes.png', 9.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('003','Avocado toast', 'Food', 'Breakfast', 'Avocado Toast, fast prepared breakfast, speed up and save your time', '../img/food/FoodAvocadoToast.png', 8.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('004','Chocolate cake', 'Food', 'Dessert', 'Chocolate Cake, a cake flavored with melted chocolate, and cocoa powder put on top', '../img/food/FoodChocolateCake.png', 15.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('005','New York cheesecake', 'Food', 'Dessert', 'New York Cheesecake, full of cheese taste and smooth texture', '../img/food/FoodNewYorkCheesecake.jpeg', 12.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('006','Tiramisu cake', 'Food', 'Dessert', 'Tiramisu Cake, a vanilla sponge cakes soaked in coffee, frosted with a fluffy mascarpone cream and topped with a dusting of cocoa powder', '../img/food/FoodTiramisuCake.jpg', 13.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('007','Hokkaido Cheese Tart', 'Food', 'Dessert', 'Hokkaido Cheese Tart, delicious cheese tart with full of cheese', '../img/food/FoodHokkaidoCheeseTart.png', 6.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('008','Macarons', 'Food', 'Dessert', 'Macarons, a sweet meringue-based confection dessert', '../img/food/FoodMacarons.jpg', 4.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('009','Americano', 'Drink', 'Coffee', 'Americano, diluting an espresso shot with hot water, have a lighter taste', '../img/drinks/DrinksAmericano.png', 5.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('010','Latte', 'Drink', 'Coffee', 'Latte, made by espresso and steamed milk', '../img/drinks/DrinksLatte.png', 9.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('011','Latte special', 'Drink', 'Coffee', 'Latte, made by espresso and steamed milk, added with chocolate and ice cream', '../img/drinks/DrinksLatteSpecial.png', 12.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('012','Cappuccino', 'Drink', 'Coffee', 'Cappuccino, espresso-based coffee drink with steamed milk including a layer of milk foam', '../img/drinks/DrinksCappuccino.png', 8.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('013','Mocha', 'Drink', 'Coffee', 'Mocha, used good quality coffee that is made from a specific coffee bean', '../img/drinks/DrinksMocha.png', 9.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('014','Matcha Latte', 'Drink', 'Coffee', 'Matcha Latte, Latte with mixing of matcha powder, steaming hot milk and honey', '../img/drinks/DrinksMatchaLatte.jpeg', 12.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('015','Matcha Milk Tea', 'Drink', 'Milk Tea', 'Matcha Milk Tea, mixing of matcha powder and milk, added with boba', '../img/drinks/DrinksMatchaMilkTea.png', 12.90)
''')

cursor.execute('''
    INSERT INTO menu(foodID, name, category, type, description, image, price)
    VALUES('016','Taro Milk Tea', 'Drink', 'Milk Tea', 'Taro Milk Tea, A drink that popular in Taro Lovers', '../img/drinks/DrinksTaroMilkTea.png', 10.90)
''')

cursor.execute('''
    INSERT INTO orderHistory(orderID,userID,foodID,date,quantity)
    VALUES('1','01','002','2024-01-01', 2)
''')

cursor.execute('''
    INSERT INTO orderHistory(orderID,userID,foodID,date,quantity)
    VALUES('2','01','007','2024-01-01', 3)
''')

cursor.execute('''
    INSERT INTO orderHistory(orderID,userID,foodID,date,quantity)
    VALUES('3','03','006','2024-02-16', 1)
''')

cursor.execute('''
    INSERT INTO orderHistory(orderID,userID,foodID,date,quantity)
    VALUES('4','05','014','2024-02-13', 3)
''')

cursor.execute('''
    INSERT INTO orderHistory(orderID,userID,foodID,date,quantity)
    VALUES('5','02','015','2024-03-18', 1)
''')

cursor.execute('''
    INSERT INTO orderHistory(orderID,userID,foodID,date,quantity)
    VALUES('6','04','009','2024-04-02', 1)
''')


db.commit()
db.close()