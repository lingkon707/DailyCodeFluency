function foodBills(amout) {

    // thamao jodi
    if (amout > 800){
        return;
    }


    console.log(amout+"$$")

    // recursive cycle
    foodBills(amout+50)
}

foodBills(500)