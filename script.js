function calculate(){

    let price = Number(document.getElementById("price").value);

    let price = Number(document.getElementById("cost").value);

    var education = Number(document.getElementById("education").value);
    price *= education;
    console.log('1',price);
    

    var networth = Number(document.getElementById("networth").value);
    price *= networth;
    console.log('2',price);

    var caste = Number(document.getElementById("caste").value);
    price += caste;
    console.log('3',price);

    var skills = Number(document.getElementsByClassName("myCheck").value);
    price += skills;
    console.log('4',price);

    var age = Number(document.getElementById("myAge").value);
    price *= age;
    console.log('5',price);

    var reputation = Number(document.getElementsByClassName("myReputation"));
    price = getCheckboxValuesForLoop(reputation, price);
    const getCheckboxValuesForLoop = (html_collection, price) => {
        for (let i = 0; i < html_collection.length; i++) {
            if (html_collection[i].checked) {
                price = price + Number(html_collection[i].value)
            }
        }
        return price;
    }

    //const text = document.getElementById("text");

    //document.getElementById("submit").innerHTML = `The price for your bride is ${price}.`;
    console.log(price);
}