var headers = ['id', 'food', 'recipe', 'taste', 'restrictions', 'meal_type', 'cuisine', 'difficulty'];

//Create the database
        var db = {
          id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
          "food": ["Chocolate Chip Cookie", "Cheese Pizza", "Fried Rice", "Beef Burrito", "Cheesecake", "Ramen Noodles", "Dumplings", "Curry Rice", "Couscous", "Salmon", "Gyro", "Hamburger", "Spaghetti", "Apple Salad", "Lasagna", "Vanilla Ice Cream"];
          "recipie": ['http://allrecipes.com/recipe/10813/best-chocolate-chip-cookies/', "http://www.food.com/recipe/basic-cheese-pizza-194593", "http://www.seriouseats.com/recipes/2016/02/easy-vegetable-fried-rice-recipe.html", ,"http://www.foodnetwork.com/recipes/ree-drummond/beef-and-bean-burritos-recipe.html", "http://www.foodnetwork.com/recipes/tyler-florence/the-ultimate-cheesecake-recipe.html", "http://www.chowhound.com/recipes/slow-cooker-pork-ramen-31178", "http://allrecipes.com/recipe/228052/chinese-pork-dumplings/", "http://allrecipes.com/recipe/166678/easy-curry-rice/", "http://www.myrecipes.com/recipe/quick-parmesan-couscous", "http://allrecipes.com/recipe/189058/super-simple-salmon/", "http://allrecipes.com/recipe/220274/easy-chicken-gyro/", "http://allrecipes.com/recipe/25473/the-perfect-basic-burger/", "http://allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/", "http://www.epicurious.com/recipes/food/views/apple-celery-and-walnut-salad-351449", "http://allrecipes.com/recipe/23600/worlds-best-lasagna/", "http://allrecipes.com/recipe/8314/vanilla-ice-cream/"];
          "taste" : ["Sweet", "Savory", "Savory", "Savory", "Sweet", "Savory", "Savory", "Savory", "Savory", "Savory", "Savory", "Savory", "Savory", "Sweet", "Savory", "Sweet"];
          "restrictions": ["Gluten", "Gluten", "Optional Meat", "Meat", "Lactose", "Gluten", "Gluten, Meat", "Optional Meat", "Gluten", "Seafood", "Meat", "Gluten, Meat", "Gluten, Meat", " ", "Meat", "Dairy"];
          "meal_type": ["Dessert", "Lunch/Dinner", "Lunch/Dinner", "Lunch/Dinner", "Dessert", "Lunch/Dinner", "Lunch/Dinner", "Lunch/Dinner", "Lunch/Dinner", "Lunch/Dinner", "Lunch/Dinner", "Lunch, Dinner", "Lunch, Dinner", "Anything", "Dinner", "Dessert"];
          "cuisine": ["American", "American", "Chinese", "Mexican", "American", "Japanese", "Chinese", "Thai/Indian", "African", "International", "Greek", "American", "Italian", "American", "Italian", "Italian"];
          "difficulty": ["Medium", "Easy", "Easy", "Medium", "Hard", "Easy", "Medium", "Hard", "Easy", "Easy", "Medium", "Easy", "Easy", "Easy", "Medium", "Medium"];
        };
  
  var stmt = db.prepare("SELECT * FROM test where taste = 'Sweet' or cuisine = 'Italian' ");
    stmt.getAsObject(); // {col1:1, col2:111}
  
   // var stmt = db.prepare("SELECT * FROM test");
   // stmt.getAsObject(); // {col1:1, col2:111}

    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var header = tbl.createTHead();
    var row = header.insertRow(0);
    
    for (var i = 0; i < 8; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = headers[i];
    }
    
    var tbdy = document.createElement('tbody');
    
     stmt.bind();
        while(stmt.step()) { //
            var row = stmt.getAsObject();

           
            console.log(row);
            var tr = document.createElement('tr');
            for (var j = 0; j < 8; j++) {
               
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(row[headers[j]]))
                    tr.appendChild(td)
                
            }
            tbdy.appendChild(tr);
        }
    

    tbl.appendChild(tbdy);
    body.appendChild(tbl)
