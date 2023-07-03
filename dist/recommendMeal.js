"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recommendMeal = void 0;
const meals_1 = require("./meals");
const recommendMeal = () => {
    const randomIndex = Math.floor(Math.random() * meals_1.meals.length);
    return meals_1.meals[randomIndex];
};
exports.recommendMeal = recommendMeal;
//# sourceMappingURL=recommendMeal.js.map