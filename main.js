

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

document.getElementById("buy").onclick = () => {
    location.href = "buy.html";
}

document.getElementById("upload").onclick = () => {
    location.href = "upload.html";
}