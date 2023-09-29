//function prints out string
const DataRep = ()=>{
    var data ="Data Representation & Querying";
    console.log(data)
}
DataRep();
//function for adding numbers together
const Numbers = ()=>{
    var num1 = 44;
    var num2 = 33;

    console.log(num1+num2)
}
Numbers();
//creating array for ages
const ages = [25, 31, 42, 77];

//function for doubling the number
function doubleTheNumber(age)
{
    if(age<70)
    {
        return age*2;
    }
    else{
        return age;
    }
}

//using map
const doubleAges = ages.map(doubleTheNumber);
//print to console
console.log(doubleAges);