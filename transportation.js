function rentalCarCost(d) {
    let t=d*40;
    if(d>=7){
      t= t - 50;
    }
    else if(d>=3){
      t=t-20;
    }
    return t;
  }