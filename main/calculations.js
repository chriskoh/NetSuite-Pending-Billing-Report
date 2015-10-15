function calculate() 
{
	
	// Create storage Locations for files from file cabinet
	var SOtrandate = new Array();
	var SOstatus = new Array();
	var SOtranid = new Array();
	var SOentity = new Array();
	var SOdatecreated = new Array();
	var SOamount = new Array();
	var SOamountbilled = new Array();
	var SOamountremaining = new Array();
	var SOpaymentmethod = new Array();
	var SOcreatedfrom = new Array();
	
	var IFtrandate = new Array();
	var IFstatus = new Array();
	var IFtranid = new Array();
	var IFentity = new Array();
	var IFdatecreated = new Array();
	var IFamount = new Array();
	var IFamountbilled = new Array();
	var IFamountremaining = new Array();
	var IFpaymentmethod = new Array();
	var IFcreatedfrom = new Array();

	// Load SO and IF Data from file cabinet
	var accfileTransferIn 			= nlapiLoadFile(440683);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOtrandate 				= SOtrandate.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440684);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOstatus 				= SOstatus.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440685);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOtranid 				= SOtranid.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440686);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOentity 				= SOentity.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440687);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOdatecreated 				= SOdatecreated.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440688);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOamount 				= SOamount.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440689);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOamountbilled 				= SOamountbilled.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440688);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOamountremaining 			= SOamountremaining.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440691);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOpaymentmethod 			= SOpaymentmethod.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440806);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	SOcreatedfrom 				= SOcreatedfrom.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440583);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFtrandate 				= IFtrandate.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440584);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFstatus 				= IFstatus.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440585);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFtranid 				= IFtranid.concat(accountarrayTransferIn);

	var accfileTransferIn 			= nlapiLoadFile(440586);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFentity 				= IFentity.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440587);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFdatecreated 				= IFdatecreated.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440588);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFamount 				= IFamount.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440589);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFamountbilled 				= IFamountbilled.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440590);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFamountremaining 			= IFamountremaining.concat(accountarrayTransferIn);
	
	var accfileTransferIn 			= nlapiLoadFile(440591);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFpaymentmethod 			= IFpaymentmethod.concat(accountarrayTransferIn);
		
	var accfileTransferIn 			= nlapiLoadFile(440907);
	var accountfileTransferIn 		= accfileTransferIn.getValue();
	var accountarrayTransferIn 		= accountfileTransferIn.split(",");
	IFcreatedfrom 				= IFcreatedfrom.concat(accountarrayTransferIn);
	
	// Create variables to hold calculated values based on Sales Order #
	w = window;
	for(var x = 0; x < SOtranid.length; x++){
		
		var cf = 'Sales Order #' + SOtranid[x];
		
		w['sonumber' + cf] = '';
		w['sostatus' + cf] = '';
		w['socdate' + cf] = Number(0);
		w['sofdate' + cf] = Number(0);
		w['sopayment' + cf] = '';
		w['soamt' + cf] = Number(0);
		w['sounbilledamt' + cf] = Number(0);
		w['soremainingamt' + cf] = Number(0);
		w['compdateSO' + cf] = Number(0);
		w['compdateIF' + cf] = Number(0);
		w['socreatedfrom' + cf] = '';
		w['ifcdate' + cf] = Number(0);
		w['ifcreatedfrom' + cf] = '';
	}
	
	// Assign pre-calculated Sales Order data to variables
	for(var x = 0; x < SOtranid.length; x++){
		
		var cf = 'Sales Order #' + SOtranid[x];
		
		w['compdateSO' + cf] = new Date(SOtrandate[x]);
		w['sopayment' + cf] = SOpaymentmethod[x];
		w['sonumber' + cf] = SOtranid[x];
		w['sostatus' + cf] = SOstatus[x];
		w['socdate' + cf] = new Date(SOtrandate[x]);
		w['soamt' + cf] = Number(SOamount[x]);	
		w['sounbilledamt' + cf] = Number(SOamountbilled[x]);
		w['socreatedfrom' + cf] = SOcreatedfrom[x];
	}
	
	// Assign pre-calculated Item Fulfillment data to variables
	for(var x = 0; x < IFcreatedfrom.length; x++){
		
		// if statment to override current variable if new item fulfillments are dated earlier than the current values.
		if(w['ifcdate' + IFcreatedfrom[x]] == Number(0)){		// if there has been no values assigned to the Item Fulfillment creation date variable yet number will == 0
			
			w['compdateIF' + IFcreatedfrom[x]] = new Date(IFtrandate[x]);
			w['ifcdate' + IFcreatedfrom[x]] = new Date(IFtrandate[x]);	
			w['ifcreatedfrom' + IFcreatedfrom[x]] = IFcreatedfrom[x];	
			
		}else{
			
			if(new Date(w['ifcdate' + IFcreatedfrom[x]]) > new Date(IFtrandate[x])){  // if the current Item Fulfillment creation date is greater than the next item, override the current values.
				
				w['compdateIF' + IFcreatedfrom[x]] = new Date(IFtrandate[x]);
				w['ifcdate' + IFcreatedfrom[x]] = new Date(IFtrandate[x]);	
				w['ifcreatedfrom' + IFcreatedfrom[x]] = IFcreatedfrom[x];	
			}
		}
	}
	
	// Create arrays to store data in to file cabinet
	var sonumberArray = new Array();
	var statusArray = new Array();
	var socreationArray = new Array();
	var datefulfilledArray = new Array();
	var paymentArray = new Array();
	var soamountArray = new Array();
	var unbilledamountArray = new Array();
	
	// msDay used to calculate time difference between two dates
    var msDay = 60*60*24*1000;
    
	// Start Calculations for each Sales Order
	for(var x = 0; x < SOtranid.length; x++){
		
		var cf = 'Sales Order #' + SOtranid[x];	// used to call variables

		if(w['sopayment' + cf] == '7'){ // Payment method is PayPal
			
			try{
				
				if(Number(IFcreatedfrom.indexOf(cf)) == Number(-1)){	// if sales order is not in the list of item fulfillments

					// calculate date difference between SO and today
					var b = new Date()
					var a = new Date(w['compdateSO' + cf]);
					var diff = Math.floor((b - a) / msDay);
					
					if(Number(diff) > Number(3)){	// if there is more than 3 days between SO date and today
												
						sonumberArray = sonumberArray.concat(w['sonumber' + SOentity[x]]);
						statusArray = statusArray.concat(w['sostatus' + SOentity[x]]);
						socreationArray = socreationArray.concat(w['socdate' + SOentity[x]]);
						datefulfilledArray = datefulfilledArray.concat('N/A');
						paymentArray = paymentArray.concat(w['sopayment' + SOentity[x]]);
						soamountArray = soamountArray.concat(w['soamt' + SOentity[x]]);
						unbilledamountArray = unbilledamountArray.concat(w['sounbilledamt' + SOentity[x]]);	
						continue;						
					}
				}
				
				// calculate date difference between SO and IF date
				var b =  new Date(w['compdateIF' + cf]);
				var a = new Date(w['compdateSO' + cf]);
				var diff = Math.floor((b - a) / msDay);
				
				if(Number(diff) > Number(3)){ // if so is greater than 3 days after IF
					
					sonumberArray = sonumberArray.concat(w['sonumber' + cf]);
					statusArray = statusArray.concat(w['sostatus' + cf]);
					socreationArray = socreationArray.concat(w['socdate' + cf]);
					datefulfilledArray = datefulfilledArray.concat(w['compdateIF' + cf]);
					paymentArray = paymentArray.concat(w['sopayment' + cf]);
					soamountArray = soamountArray.concat(w['soamt' + cf]);
					unbilledamountArray = unbilledamountArray.concat(w['sounbilledamt' + cf]);
					continue;

				}else if(Number(diff) <= Number(3)){ // if so is less than than 3 days after IF
					
					var b =  new Date(w['compdateIF' + cf]);
					var a = new Date(w['compdateSO' + cf]);
					continue;
					
				}
			}catch(e){
			
			}
			
		}else if(w['sopayment' + cf] == '4' || w['sopayment' + cf] == '5' || w['sopayment' + cf] == '6' || w['sopayment' + cf] == '3'){ // Payment method is Credit Card (Amex, Visa, MasterCard, Discover)
			
			try{
				
				if(Number(IFcreatedfrom.indexOf(cf)) == Number(-1)){	// if sales order is not in the list of item fulfillments
					
					// calculate date difference between SO and today
					var b = new Date()
					var a = new Date(w['compdateSO' + cf]);
					var diff = Math.floor((b - a) / msDay);
					
					if(Number(diff) > Number(31)){	// if there is more than 31 days between SO date and today
						
						sonumberArray = sonumberArray.concat(w['sonumber' + SOentity[x]]);
						statusArray = statusArray.concat(w['sostatus' + SOentity[x]]);
						socreationArray = socreationArray.concat(w['socdate' + SOentity[x]]);
						datefulfilledArray = datefulfilledArray.concat('N/A');
						paymentArray = paymentArray.concat(w['sopayment' + SOentity[x]]);
						soamountArray = soamountArray.concat(w['soamt' + SOentity[x]]);
						unbilledamountArray = unbilledamountArray.concat(w['sounbilledamt' + SOentity[x]]);	
						continue;						
					}
				}
				
				// calculate date difference between SO and IF date
				var b =  new Date(w['compdateIF' + cf]);
				var a = new Date(w['compdateSO' + cf]);
				var diff = Math.floor((b - a) / msDay);
				
				if(Number(diff) > Number(31)){ // if so is greater than 31 days after IF
					
					sonumberArray = sonumberArray.concat(w['sonumber' + cf]);
					statusArray = statusArray.concat(w['sostatus' + cf]);
					socreationArray = socreationArray.concat(w['socdate' + cf]);
					datefulfilledArray = datefulfilledArray.concat(w['compdateIF' + cf]);
					paymentArray = paymentArray.concat(w['sopayment' + cf]);
					soamountArray = soamountArray.concat(w['soamt' + cf]);
					unbilledamountArray = unbilledamountArray.concat(w['sounbilledamt' + cf]);
					continue;

				}else if(Number(diff) <= Number(31)){ // if so is less than than 31 days after IF
					
					var b =  new Date(w['compdateIF' + cf]);
					var a = new Date(w['compdateSO' + cf]);
					continue;
					
				}
			}catch(e){
			
			}
		}
	}

	// store calculated values in to file cabinet
	var trandateFile = nlapiCreateFile('Data SO Number.txt', 'PLAINTEXT', sonumberArray);
	trandateFile.setFolder(363770);
	nlapiSubmitFile(trandateFile);
	
	var typeFile = nlapiCreateFile('Data Status.txt', 'PLAINTEXT', statusArray);
	typeFile.setFolder(363770);
	nlapiSubmitFile(typeFile);
	
	var accountFile = nlapiCreateFile('Data SO Creation.txt', 'PLAINTEXT', socreationArray);
	accountFile.setFolder(363770);
	nlapiSubmitFile(accountFile);
	
	var amountFile = nlapiCreateFile('Data IF Creation.txt', 'PLAINTEXT', datefulfilledArray);
	amountFile.setFolder(363770);
	nlapiSubmitFile(amountFile);
	
	var statusrefFile = nlapiCreateFile('Data Payment.txt', 'PLAINTEXT', paymentArray);
	statusrefFile.setFolder(363770);
	nlapiSubmitFile(statusrefFile);
	
	var statusrefFile = nlapiCreateFile('Data Amount.txt', 'PLAINTEXT', soamountArray);
	statusrefFile.setFolder(363770);
	nlapiSubmitFile(statusrefFile);
	
	var statusrefFile = nlapiCreateFile('Data Amount Unbilled.txt', 'PLAINTEXT', unbilledamountArray);
	statusrefFile.setFolder(363770);
	nlapiSubmitFile(statusrefFile);

}
