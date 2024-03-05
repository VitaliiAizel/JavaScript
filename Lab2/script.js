(function () {
    let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    console.log("This part of the program 'welcomes' all people except people whose names start with 'J'. The program says 'Good Bye' to such people");

    for (var i = 0; i < names.length; i++) {
        let name = names[i];
        let firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            speakGoodBye(name);
        } else {
            speakHello(name);
        }
    }

    console.log("");
    console.log("This part of the program 'welcomes' all people except people whose names have repeated letters. The program says 'Good Bye' to such people");

    for (var i = 0; i < names.length; i++) {
        let name = names[i];

        function isRepetition() {
            for (var i = 0; i < name.length; i++) {
                for(var j = 0; j < name.length; j++){
                    if(name.charAt(i) === name.charAt(j) && i != j) return true;
                }
            }
            return false;   
        } 
        
        if (isRepetition()) {
            speakGoodBye(name);
        } else {
            speakHello(name);
        }
    }
})();
