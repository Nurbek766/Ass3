

  calculate = () => {

    let price = Number(document.getElementById("cost").value);

    const education = Number(document.getElementById("education").value);
    price *= education;
    console.log(price);
    

    const networth = Number(document.getElementById("networth").value);
    price *= networth;
    console.log(price);

    const caste = Number(document.getElementById("caste").value);
    price += caste;
    console.log(price);

    const skills = Number(document.getElementsByClassName("myCheck").value);
    price += skills;
    console.log(price);

    const age = Number(document.getElementById("myAge").value);
    price *= age;
    console.log(price);

    const reputation = Number(document.getElementsByClassName("myReputation"));
    price = getCheckboxValuesForLoop(reputation, price);
    const getCheckboxValuesForLoop = (html_collection, price) => {
        for (let i = 0; i < html_collection.length; i++) {
            if (html_collection[i].checked) {
                price = price + Number(html_collection[i].value)
            }
        }
        return price;
    }

    const text = document.getElementById("text");

    document.getElementById("submit").innerHTML = `The price for your bride is ${price}.`;
    console.log(price);
}