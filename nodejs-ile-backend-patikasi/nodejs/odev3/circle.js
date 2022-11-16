
const circleArea = (r) => console.log(`Circle Area: ${(Math.PI * r * r).toFixed(2)}`);

const circleCircumference = (r) => console.log(`Circle Circumference: ${(2 * Math.PI * r).toFixed(2)}`);


module.exports = {
	  circleArea,
	  circleCircumference,
};