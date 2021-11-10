function calculateRectangleArea(length, width) {
  if (length >= 0 && width >= 0) {
    let area = length * width;
    return area;
  } else if (length < 0 || width < 0) {
    return undefined;
  }
}

function calculateTriangleArea(base, height) {
  let h = height / 2;
  if (h >= 0 && base >= 0) {
    let area = base * h;
    return area;
  } else if (h < 0 || base < 0) {
    return undefined;
  }
}

function calculateCircleArea(radius) {
  let pi = Math.PI;
  if (radius < 0) {
    return undefined;
  } else {
    let r = pi * radius * radius;
    return r;
  }
}
