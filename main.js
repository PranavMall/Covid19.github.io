function myFunction() {
    var a = Math.floor(Math.random() * 40);
    var b = Math.floor(Math.random() * 40);
    var c = Math.floor(Math.random() * 40);
    var d = Math.floor(Math.random() * 40);
    var e = Math.floor(Math.random() * 40);
    var f = Math.floor(Math.random() * 40);
    var g = Math.floor(Math.random() * 40);
    var h = Math.floor(Math.random() * 40);
    var i = Math.floor(Math.random() * 40);
    var j = Math.floor(Math.random() * 40);

    var myExercise = [
        { "exercise": "Alt Arm Raises", "muscles": "Abs", "img": "images/alt arm raises.gif" },
        { "exercise": "Arm Scissors", "muscles": "Arms", "img": "images/arm scissors.gif" },
        { "exercise": "Bridge", "muscles": "Abs", "img": "images/bridge.gif" },
        { "exercise": "Burpee", "muscles": "Full-body", "img": "images/Burpee.gif" },
        { "exercise": "Butt Kicks", "muscles": "Legs", "img": "images/butt kicks.gif" },
        { "exercise": "Calf Raises", "muscles": "Legs", "img": "images/calf raises.gif" },
        { "exercise": "Chest Expansion", "muscles": "Chest", "img": "images/chest expansion.gif" },
        { "exercise": "Crunches", "muscles": "Abs", "img": "images/crunches.gif" },
        { "exercise": "Elbow To Knee", "muscles": "Abs", "img": "images/elbow to knee.gif" },
        { "exercise": "Flutter Kicks", "muscles": "Abs", "img": "images/flutter kicks.gif" },
        { "exercise": "High Knee", "muscles": "Legs", "img": "images/high-knee.gif" },
        { "exercise": "Plank Shoulder Taps", "muscles": "Abs", "img": "images/plank shoulder taps.gif" },
        { "exercise": "Plank Saw", "muscles": "Abs", "img": "images/plank saw.gif" },
        { "exercise": "Plank Rolls", "muscles": "Abs", "img": "images/plank rolls.gif" },
        { "exercise": "Plank Crunches", "muscles": "Abs", "img": "images/plank crunches.gif" },
        { "exercise": "Plank Alt Leg Raises", "muscles": "Abs", "img": "images/plank alt leg raises.gif" },
        { "exercise": "Plank Alt Hand Raise", "muscles": "Abs", "img": "images/plank alt hand raise.gif" },
        { "exercise": "Mountain Climbers", "muscles": "Full-body", "img": "images/mountain climbers.gif" },
        { "exercise": "Leg Raises", "muscles": "Abs", "img": "images/leg raises.gif" },
        { "exercise": "Lunges", "muscles": "Legs", "img": "images/lunges.gif" },
        { "exercise": "Jumping Jacks", "muscles": "Full-body", "img": "images/jumping-jacks.gif" },
        { "exercise": "Jumping T's", "muscles": "Full-body", "img": "images/jumping-ts.gif" },
        { "exercise": "Knee Extension", "muscles": "Legs", "img": "images/knee extension.gif" },
        { "exercise": "Plank To Push Ups", "muscles": "Upper body", "img": "images/plank to push ups.gif" },
        { "exercise": "Plank", "muscles": "Abs", "img": "images/plank.JPG" },
        { "exercise": "Punches", "muscles": "Arms", "img": "images/punches.gif" },
        { "exercise": "Push-Up", "muscles": "Chest", "img": "images/push-up.gif" },
        { "exercise": "Raised Arm Circles", "muscles": "Arms", "img": "images/raised-arm-circles.JPG" },
        { "exercise": "Raised Leg Circles", "muscles": "Abs", "img": "images/raised-leg-circles.JPG" },
        { "exercise": "Raised Leg Plank", "muscles": "Abs", "img": "images/raised-leg-plank.gif" },
        { "exercise": "Raised Leg Swing", "muscles": "Abs", "img": "images/raised-leg-swing.gif" },
        { "exercise": "Reverse Crunches", "muscles": "Abs", "img": "images/reverse crunches.gif" },
        { "exercise": "Russian Twist", "muscles": "Abs", "img": "images/russian twist.gif" },
        { "exercise": "Scissors", "muscles": "Abs", "img": "images/scissors.gif" },
        { "exercise": "Shoulder Taps", "muscles": "Arms", "img": "images/shoulder taps.gif" },
        { "exercise": "Side Bridges", "muscles": "abs", "img": "images/side bridges.gif" },
        { "exercise": "Side Jacks", "muscles": "Full-body", "img": "images/side jacks.gif" },
        { "exercise": "Side Leg Raises", "muscles": "Legs", "img": "images/side leg raises.gif" },
        { "exercise": "Side-2-Side Jump", "muscles": "Full-body", "img": "images/side-2-side jump.gif" },
        { "exercise": "Sit-Ups", "muscles": "Abs", "img": "images/sit-ups.gif" },
        { "exercise": "Squats", "muscles": "Abs", "img": "images/squats.gif" },
        { "exercise": "T-Rotation", "muscles": "Abs", "img": "images/t-rotation.gif" }
    ]

    // Execise 1
    document.getElementById("exe1").innerHTML = myExercise[a].exercise;
    document.getElementById("mus1").innerHTML = myExercise[a].muscles;
    document.getElementById("img1").src = myExercise[a].img;

    // Execise 2
    document.getElementById("exe2").innerHTML = myExercise[b].exercise;
    document.getElementById("mus2").innerHTML = myExercise[b].muscles;
    document.getElementById("img2").src = myExercise[b].img;

    // Execise 3
    document.getElementById("exe3").innerHTML = myExercise[c].exercise;
    document.getElementById("mus3").innerHTML = myExercise[c].muscles;
    document.getElementById("img3").src = myExercise[c].img;

    // Execise 3
    document.getElementById("exe4").innerHTML = myExercise[d].exercise;
    document.getElementById("mus4").innerHTML = myExercise[d].muscles;
    document.getElementById("img4").src = myExercise[d].img;

    // Execise 3
    document.getElementById("exe5").innerHTML = myExercise[e].exercise;
    document.getElementById("mus5").innerHTML = myExercise[e].muscles;
    document.getElementById("img5").src = myExercise[e].img;

    // Execise 3
    document.getElementById("exe6").innerHTML = myExercise[f].exercise;
    document.getElementById("mus6").innerHTML = myExercise[f].muscles;
    document.getElementById("img6").src = myExercise[f].img;

    // Execise 3
    document.getElementById("exe7").innerHTML = myExercise[g].exercise;
    document.getElementById("mus7").innerHTML = myExercise[g].muscles;
    document.getElementById("img7").src = myExercise[g].img;

    // Execise 3
    document.getElementById("exe8").innerHTML = myExercise[h].exercise;
    document.getElementById("mus8").innerHTML = myExercise[h].muscles;
    document.getElementById("img8").src = myExercise[h].img;

    // Execise 3
    document.getElementById("exe9").innerHTML = myExercise[i].exercise;
    document.getElementById("mus9").innerHTML = myExercise[i].muscles;
    document.getElementById("img9").src = myExercise[i].img;

    // Execise 3
    document.getElementById("exe10").innerHTML = myExercise[j].exercise;
    document.getElementById("mus10").innerHTML = myExercise[j].muscles;
    document.getElementById("img10").src = myExercise[j].img;

}
