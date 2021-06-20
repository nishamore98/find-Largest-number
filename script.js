
var a = [1,56,87,8.9,99.7];
if(a.length !== 0) {
    var LargeNum = a[0];
    for(var i = 1; i < a.length; i++) {
        if(LargeNum < a[i]){
            LargeNum = a[i];
        }
    }
    document.getElementById('givenArr').innerHTML= 'Given Array is : <b>' + a + '</b>';
    document.getElementById('LargeNumber').innerHTML= 'Large Number from given Array is <b>' + LargeNum + '</b>';
} else {
    document.getElementById('givenArr').innerHTML= 'Oops!! <br /> Given Array is empty!';
}