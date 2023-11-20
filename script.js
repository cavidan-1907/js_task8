const boxes = document.querySelectorAll(".box");

// let func = function (boxs) {
//     for (let i = 0; i < boxs.length; i++) {
//         const box = boxs[i];

//         if ((i + 1) % 5 === 0) {
//             box.style.backgroundColor = "green";
//         } else if ((i+1) % 2 === 0) {
//             box.style.backgroundColor = "navy";
//         } else {
//             box.style.backgroundColor = "yellow";
//         }
//     }
// };

// func(boxes);
//foreachla

boxes.forEach((box, i) => {
    if ((i + 1) % 5 === 0) {
        box.style.backgroundColor = "green";
        box.innerHTML="5"
    } else if ((i + 1) % 2 === 0) {
        box.style.backgroundColor = "navy";
        box.innerHTML="2"
    } else {
        box.style.backgroundColor = "yellow";
        box.innerHTML="1"
    }
});
