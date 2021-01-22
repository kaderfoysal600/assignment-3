//** kilometer to Meter*/
function kilometerToMeter(kilo) {
    meter = kilo * 1000;
    return meter;
}
result = kilometerToMeter(3);
console.log(result);


//*budget calculator**//
function budgetCalculator(watch, phone, laptop) {
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 500;
    var totalprice = watchTotal + phoneTotal + laptopTotal
    return (totalprice)
}
result2 = budgetCalculator(2, 2, 2);
console.log(result2);


//**hotel cost */
function hotelCost(cost) {
    if (cost <= 10) {
        TotalCost = cost * 100;
    }
    else if (10<cost <= 20) {
        TotalCost = cost * 80;
    }
    else {
        TotalCost = cost * 50;
    }
    return TotalCost
}
result4 = hotelCost(15);
console.log(result4);


//***MegaFriend*****//
function megaFriend(friends) {
    var maxword = friends[0]
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length > maxword.length) {
            maxword = element;
            return (element)
        }
    }
}
var result3 = megaFriend(["kader", "foysal", "jon"])
console.log(result3)



