function transferControl(){

	var reload =function(){
		populate_and_open_modal(event, 'reload-content');
	};

	var bankTransfers = function(){
		populate_and_open_modal(event, 'bankAccount-content');
	};

	var payPalPayments =function(){
		populate_and_open_modal(event, 'payPal-content');
	};

	var electricityBillPayments = function(){
		populate_and_open_modal(event, 'electricityBill-content');
	};

	var waterBillPayments =function(){
		populate_and_open_modal(event, 'waterBill-content');
	};

	var telephoneBillPayments = function(){
		populate_and_open_modal(event, 'telephoneBill-content');
	};

	$("#reload").on("click",reload);
	$("#bankAccount").on("click",bankTransfers);
	$("#payPal").on("click",payPalPayments);
	$("#electricityBill").on("click",electricityBillPayments);
	$("#waterBill").on("click",waterBillPayments);
	$("#telephoneBill").on("click",telephoneBillPayments);
}



$(window).load(function()
{
    transferControl();
});