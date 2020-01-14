function dataChecker (string,rank){
    
    if(string.toLowerCase() === "codenation" && rank == 1){
        console.log("both are correct")
    }else if (string.toLowerCase()=== "codenation" && rank != 1) {
        console.log("String is correct but rank is wrong")
    }else {
        console.log(" string was not equal to codenation")
    }
}

dataChecker("Codenation",3)