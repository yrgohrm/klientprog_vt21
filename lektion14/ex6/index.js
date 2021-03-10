for (let c = 0; c < 10; c--) {
    console.log("the infinity bug");
}

let regexp = /a  b/;
if (regexp.test("ta bort")) {
    console.log("matchar");
}

function count(val) {
    if (Number.isNaN(val)) {
        console.log("never seen");
    }
}
