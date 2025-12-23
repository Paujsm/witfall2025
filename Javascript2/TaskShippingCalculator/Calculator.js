const { rate } = require("./config");

function calculateCost(weight) {
    return rate.standard + (rate.perDistance + weight)
}