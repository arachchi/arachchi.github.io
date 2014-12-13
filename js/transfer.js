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

	var currentBillPayments = function(){
		populate_and_open_modal(event, 'waterBill-content');
	};

	var waterBillPayments =function(){
		populate_and_open_modal(event, 'currentBill-content');
	};

	var otherBillPayments = function(){
		populate_and_open_modal(event, 'otherBill-content');
	};

	$("#reload").on("click",reload);
	$("#bankAccount").on("click",bankTransfers);
	$("#payPal").on("click",payPalPayments);
	$("#currentBill").on("click",currentBillPayments);
	$("#waterBill").on("click",waterBillPayments);
	$("#otherBills").on("click",otherBillPayments);
}



$(window).load(function()
{
    transferControl();
});