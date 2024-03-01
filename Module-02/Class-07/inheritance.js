class Vehicle {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log("gari cholena cholena cholena re.")
    }
}

// vehicle er jei exmaple same bus er oo aki example ase. so vehicle er example bus nam er class er moddhe add korte ...
class Bus extends Vehicle{
    constructor(name, price, seat, tickerPrice){
        super(name, price);     // super mane ager class a name and price perameter er value jai akta class create hoia asbe.
        this.seat = seat;
        this.tickerPrice = tickerPrice;   // ar jei perameter gulo veichle er moddhe nei,, tader k this er maddhome new kore create korte hobe.
    }
}


// Track er jonno 
class Track extends Vehicle{
    constructor(name , price, load){
        super(name, price);  // jeheto name and price Vehicle er asei,, so super er maddhome name, price k pathia dilam Vehicle er moddhe.
        this.load = load;    // load aita new kore create korte hobe.
    }
}