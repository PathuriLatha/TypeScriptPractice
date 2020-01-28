var checkLeafYear = function (year) {
    if ((year % 4) == 0) {
        return year + " Leap Year";
    }
    else {
        return year + " Not a Leap Year";
    }
};
console.log(checkLeafYear(2020));
console.log(checkLeafYear(2019));
console.log(checkLeafYear(2024));
console.log(checkLeafYear(2016));
