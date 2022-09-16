console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function printOdds(count)
{
    for (let i =1; i <= count; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i);
        }
    }
}

printOdds(15);
printOdds(80);

//////////Ex-2

function checkAge(name, age)
{
    let oldEnoughMsg = 'Congrats ${userName}, you can drive!';
    let tooYoungMsg = "Sorry ${userName}, but you need to wait until you're 16.";
  
 if (age < 16 )
 {
    console.log(tooYoungMsg)
 }
 else 
 {
    console.log(oldEnoughMsg)
 }

}

checkAge("Bob", 10);
checkAge("Ashley", 16);



///////Ex-3

function checkQuadrant(x, y){
    if(x > 0 && y > 0){
    return 1;
    } else if (x < 0 && y > 0){
    return 2; 
    } else if (x < 0 && y > 0){
    return 3;
    } else if (x > 0 && y > 0){
    return 4;
    }
    }


console.log(checkQuadrant(0,-3));
console.log(checkQuadrant(2,4));

///////Ex-4

function checkValidity(a, b, c)
{
    // check condition
    if (a + b <= c || a + c <= b || b + c <= a)
        return false;
    else
        return true;
}

let a = 2, b = 2, c = 1;
if (checkValidity(a, b, c))
    console.log("Valid");
else
console.log("InValid");


function dataUsageFeedback ( planLimit , day , usage ) {
    let periodLength = 30 ;
    let currentAvg = usage / day ;
    let projectedAvg = planLimit / periodLength ;
    let remainingDays =  periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = Math.abs(planLimit - (averageDailyUse * 30));
    let statusMsg ;


    if ( currentAvg > projectedAvg )
     {
       statusMsg = " EXCEEDING ";
    } 
    else if ( currentAvg < projectAvg)
    {
        statusMsg = "UNDER"
    }
     else {
        statusMsg = "AT";
    }

    console.log(' you are ${day} days used, ${remainingDays}days remaining,\
    average use ${CurrentAvg} GB per day,\
    ${ planLimit - (usage + projectedUsage)}\
    To stay below your data plan, use no more than ${remainingData /remainingDays }');

    dataUsageFeedback(15, 15, 25);
}