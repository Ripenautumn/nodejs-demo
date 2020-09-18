const pi = Math.PI;

module.exports = (radius) => {
  function diameter() {
    return 2 * radius;
  }

  function circumference() {
    return pi * 2 * radius;
  }

  function area() {
    return pi * radius * radius;
  }

  return {
    area,
    diameter,
    circumference
  };
};

console.log(module);
