const menu = {
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },

    addDishToCourse(courseName,dishName,dishPrice){
      const dish={
        name:dishName,
        price:dishPrice
      }
      return this._courses[courseName].push(dish);

    },
    getRandomDishFromCourse(courseName)
    {
      const dishes=this._courses[courseName];
      const randomIndex=Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex];
    },
    generateRandomMeal()
    {
      const appetizer=this.getRandomDishFromCourse('appetizers')
       const main =this.getRandomDishFromCourse('mains')
        const dessert=this.getRandomDishFromCourse('desserts')
        const totalPrice=appetizer.price+main.price+dessert.price;
        return `your meal is ${appetizer.name},${main.name},and ${dessert.name},and the total price is${totalPrice}`;
    }
    };
    menu.addDishToCourse('appetizers','salad', 40)
    menu.addDishToCourse('appetizers','wings', 50)
    menu.addDishToCourse('appetizers','fries', 60)
    menu.addDishToCourse('mains','steak', 40)
    menu.addDishToCourse('mains','salmon', 80)
    menu.addDishToCourse('mains','tofu', 30)
    menu.addDishToCourse('desserts','ice cream', 20)
    menu.addDishToCourse('desserts','coffee', 90)
    menu.addDishToCourse('desserts','cake', 70)
  const meal=menu.generateRandomMeal();
  console.log(meal);

