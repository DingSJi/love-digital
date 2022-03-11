$(function(){
	let n1 = $('#num1').val();
	let n2 = $('#num2').val();
	let num1 = parseInt(n1,10);
	let num2 = parseInt(n2,10);

	$('tbody .btn').eq(0).on('click',function(){
		if(num1 > 0){
			num1--;
			$('#num1').val(num1);
			$('#price1').val(7999*num1)
		};
		countTatal();
	});
	$('tbody .btn').eq(1).on('click',function(){
		num1++;
		$('#num1').val(num1);
		$('#price1').val(7999*num1);
		countTatal();
	});
	$('tbody .btn').eq(2).on('click',function(){
		if(num2 > 0){
			num2--;
			$('#num2').val(num2);
			$('#price2').val(9999*num2);
		};
		countTatal();
	});
	$('tbody .btn').eq(3).on('click',function(){
		num2++;
		$('#num2').val(num2);
		$('#price2').val(9999*num2);
		countTatal();
	});
	function countTatal(){
		let total = parseInt($('#price1').val(),10) + parseInt($('#price2').val(),10);
		$('#total').val(total);
	}
	$('#pay').click(function(){
		let pay = $("#total").val();
		alert("已支付 "+ pay +" 元，谢谢惠顾！");
	})

})
