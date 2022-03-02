function read_display_Quote(){
    //console.log("inside the function")
    
    db.collection("Quotes").doc("Tuesday")
    .onSnapshot(function(TuesdayDoc) {
        console.log(TuesdayDoc.data());
        document.getElementById("quote-goes-here").innerHTML=TuesdayDoc.data().quote;
    })
}
read_display_Quote();

function insertName(){
    firebase.auth().onAuthStateChanged(user =>{
        if (user){
            console.log(user.uid);
            currentUser = db.collection("users").doc(user.uid);
            currentUser.get().then(userDoc => {
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                $("#name-goes-here").text(user_Name);
            })
        }
    })
}

insertName();