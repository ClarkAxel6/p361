class Food{
    constructor(){
        this.foodStock = null;
        this.image = loadImage('Images/Milk.png');
    }

    getFoodStock(){
        var foodStockRef = database.ref('Food');
        foodStockRef.on('value', (data)=>{
            this.foodStock = data.val();
        });
        console.log(this.foodStock);
    }

    updateFoodStock(foodS){
        database.ref('/').update({
            Food: foodS
        })
    }

    display(){
        var foodStockRef = database.ref('Food');
        foodStockRef.on('value', (data)=>{
            this.foodStock = data.val();
        });

        console.log('display: ' + this.foodStock);

        var x = 80, y = 100;

        //imageMode(CENTER);
        //image(this.image, 720, 220, 70, 70);

        if(this.foodStock > 0){
            console.log('1');

            for(var i = 0; i < this.foodStock; i ++){
                console.log('2');
                if(i%10 == 0){
                    console.log('3');
                    x = 80;
                    y = y + 50;
                }
                console.log('4');
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }
}