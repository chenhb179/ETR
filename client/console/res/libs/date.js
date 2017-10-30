
//获取当前日期前N天的日期（包括当前日期）
function getPreDates(n){
	var myDate = new Date(); //获取今天日期
	myDate.setDate(myDate.getDate() - n+1);
	var dateArray = []; 
	var dateTemp; 
	var flag = 1; 
	for (var i = 0; i < n; i++) {
		dateTemp = (myDate.getMonth()+1)+"-"+myDate.getDate();
		dateArray.push(dateTemp);
		myDate.setDate(myDate.getDate() + flag);
	}
	return dateArray;
}