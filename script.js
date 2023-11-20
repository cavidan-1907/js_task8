const boxes = document.querySelectorAll(".box");

let func = function (boxs) {
    for (let i = 0; i < boxs.length; i++) {
        const box = boxs[i];

        if ((i + 1) % 5 === 0) {
            box.style.backgroundColor = "green";
        } else if ((i+1) % 2 === 0) {
            box.style.backgroundColor = "navy";
        } else {
            box.style.backgroundColor = "yellow";
        }
    }
};

func(boxes);
