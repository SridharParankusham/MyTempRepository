function square(number) {
  console.log(number * number);
  console.log(fac(number));
  console.log(map(fac,[5,6,7]));
};

function fac(n) 
{ 
  return n < 2 ? 1 : n * fac(n - 1);
};

function map(fn, ar) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != ar.length; i++)
    result[i] = fn(ar[i]);
  return result;
};