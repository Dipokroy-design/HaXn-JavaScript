function countList() {
  let _count = 0;

  this.addNumber = function (num) {
    if (num > 0) {
      _count += num;
      return `Your count number is ${_count}`;
    } else {
      return `please provide a valid number to add`;
    }
  };
  this.getCount = function () {
    return _count;
  };
}

let CountNum = new countList();

console.log(CountNum.addNumber(1000));//this will add the number in your code 
console.log(CountNum._count);// this will through you an error becouse it hidden and you can not see or change the value 
