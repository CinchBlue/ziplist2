const testList0 = [1, 2, 3];
const testList1 = ['foo', 'bar', 'baz'];

const zipList = function zipList(list0, list1) {
  const result = [];
  for (let i = 0; i < list0.length; ++i) {
    result.push(list0[i]);
    result.push(list1[i]);
  }
  return result;
};

const zipListTheSimpleWay = function zipListTheSimpleWay(list0, list1) {
  return _.flatten(_.zip(list0, list1));
};

console.log(zipList(testList0, testList1));
console.log(zipListTheSimpleWay(testList0, testList1));
