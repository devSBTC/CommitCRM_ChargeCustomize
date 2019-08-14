function clearValues(){
  sessionStorage.removeItem('quoteStore');
  sessionStorage.removeItem('equipmentStore');
  sessionStorage.removeItem('billableStore');
  sessionStorage.removeItem('descriptionStore');
  sessionStorage.removeItem('chosenJobStore');
  sessionStorage.removeItem('BreakLengthStore');
  sessionStorage.removeItem('hoursUnitsStore');
  sessionStorage.removeItem('dateStore');
  sessionStorage.removeItem('itemStore');
}
var Account = "";
var Contract = "--- Select Value ---";
var Dateo = "";
var Item = "--- Select Value ---";
var TimeStart = "";
var TimeEnd = "";
var BreakLength = "";
var HoursUnits = "";
function pullInformation(){
  Account = $("#select2-cmtedtdatafldslpcardid_fldcrdfullname-container").text();
  Contract = $("#cmtedtdatafldslpbcrecid_fldbctclccodename_chosen").text();
  Dateo = $("#cmtedtdatafldslpslipdate").val();
  Item = $("#cmtedtdatafldslpitemid_flditmclccodename").val();
  TimeStart = $("#cmtedtdatafldslpstarttime").val();
  TimeEnd = $("#cmtedtdatafldslpendtime").val();
  HoursUnits = $("#cmtedtdatafldslpclcamount").val();
  if((Account !== "") && (Contract !== "--- Select Value ---") && (Dateo !== "") && (Item !== "--- Select Value ---") && (TimeStart !== "") && (TimeEnd !== "") && (HoursUnits !== "")){
    document.getElementById("successBTN").style.display = "block";
    document.getElementById("dangerBTN").style.display = "none";
  }
  else{
    document.getElementById("dangerBTN").style.display = "block";
    document.getElementById("successBTN").style.display = "none";
  }
}
function times(){
  setTimeout(function(){
    var startTimePart = ($("#cmtedtdatafldslpstarttime").val()).substring(6,8);
    var startTimeHours = parseInt(((($("#cmtedtdatafldslpstarttime").val()).substring(0,2)) * 60),10)
    if((startTimePart === "AM")&&(startTimeHours === 720)){
      startTimeHours = 0;
    }
    if((startTimePart === "PM")&&(startTimeHours !== 720)){
      startTimeHours += 720;
    }
    var startTimeMinutes = parseInt((($("#cmtedtdatafldslpstarttime").val()).substring(3,5)),10);
    var startTime =  startTimeHours + startTimeMinutes;
    var endTimePart = ($("#cmtedtdatafldslpendtime").val()).substring(6,8);
    var endTimeHours = parseInt(((($("#cmtedtdatafldslpendtime").val()).substring(0,2)) * 60),10);
    if((endTimePart === "AM")&&(endTimeHours === 720)){
      endTimeHours = 0;
    }
    if((endTimePart === "PM")&&(endTimeHours !== 720)){
      endTimeHours += 720;
    }
    var endTimeMinutes = parseInt((($("#cmtedtdatafldslpendtime").val()).substring(3,5)),10);
    var endTime = endTimeHours + endTimeMinutes;
    var breakLength = parseInt($("#breakLengtho").val(),10);
    var total = ((endTime - startTime) - breakLength) / 60;
    $("#cmtedtdatafldslpclcamount").val(total);
  }, 100);  
}
function CmtCreateGen(xcInx) { 
  getSubmitForm().cmthidecmbslplistcrg.value = xcInx; 
  getSubmitForm().cmthidegenslplist.value = "cmbgengencrg"; 
  SubmitClickConfirm("lnkgenslplist","", true,""); 
} 
function getItem(weirdWord){
  if(weirdWord === "--- Select Value ---"){
    // --- Select Value ---
    return "";
  }
  if(weirdWord === "ITMMLPS0M8OR6KKK8A4S"){
    // Admin - Admin Work
    return "Admin Work";
  }
  if(weirdWord === "ITMVQ7MARCLKMTZSS59R"){
    // Bench Repair - Bench Repair
    return "Bench Repair";
  }
  if(weirdWord === "ITMIVM8MZFOLLDETWOLK"){
    // Cabling - Cabling Work
    return "Cabling Work";
  }
  if(weirdWord === "ITMX6BR0K40DBTL2LGOJ"){
    // Computer Setup - Computer Setup 
    return "Computer Setup";
  }
  if(weirdWord === "ITMWQYN7Y267YCH845P4"){
    // Emergency <24 - Emergency <24
    return "Emergency <24";
  }
  if(weirdWord === "ITMDHRI7O4Y2ZY4MY4LL"){
    // Emergency <48 - Emergency <48
    return "Emergency <48";
  }
  if(weirdWord === "ITMM5517G1FAUKWK9F6Q"){
    // Network Work - Network Work
    return "Network Work";
  }
  if(weirdWord === "ITMIJEFT8P43GYQHR4T8"){
    // Project Management - Project Management
    return "Includes, but not limited to project time involving: consultations, meetings, scheduling, ordering parts, adjusting schedules, and tracking the project.";
  }
  if(weirdWord === "ITMGGUT7P5KC6FBRA2B0"){
    // Tech1 - Technician Level 1 Work
    return "Technician Level 1 Work";
  }
  if(weirdWord === "ITMO16PAZ8GGRNKWYZN8"){
    // Tech2 - Technician Level 2 Work
    return "Technician Level 2 Work";
  }
  if(weirdWord === "ITMMBOPR4913EEMLIP7Q"){
    // Training - Training and Professional Development
    return "Training and Professional Development";
  }
  if(weirdWord === "ITM3HA1A5DR9QYWO67SU"){
    // WebDesign - Web Design Work
    return "Web Design Work";
  }
  if(weirdWord === "ITMCCRM123VGCZ0PV3MY"){
    // yCMT-ContractFee. - Contract Fee
    return "Contract Fee";
  }
  if(weirdWord === "ITMCCRM123ZDICOADTGP"){
    // yCMT-MngPC. - Managed Workstation
    return "Managed Workstation";
  }
  if(weirdWord === "ITMCCRM1230CDJDOQJWC"){
    // yCMT-MngSrv. - Managed Server
    return "Managed Server";
  }
  if(weirdWord === "ITMTAL5TGM28381RNS2J"){
    // yManaged Services - Managed Services
    return "Managed Services";
  }
  if(weirdWord === "ITMIYUN84E0RU5RPXV9Z"){
    // zConsultation - Consultation
    return "Consultation";
  }
  if(weirdWord === "ITM50K7SNL0RANKAOF5S"){
    // zNetworkResearch - Network Research-DHCP Scope Expansion
    var zNetworkResearch = "1) Check current scope and see how big it is, what is excluded, what is reserved.\n" + 
    "2) IP scan of the network and see what has a web facing, ssh facing device and see if I have access to it. Third party systems need to be discussed to ensure third party knows and willing to make change on schedule day. Match what is web facing and ssh facing to anything that has a reservation or has an IP address in the excluded range." + 
    "\n3) Ensure access to firewall, wireless controller(if APs are static), printers, and servers.(Phone system would require advance notice to school and ensure you get vendor info)";
    return zNetworkResearch;
  }
} 
var quote="";
function getQuoteNum(){
  quote = $("#quoteNumber").val();
  sessionStorage.setItem('quoteStore', quote);
  fillDescription();
}
var equipment="";
function naEquip(){
  equipment = "N/A";
  sessionStorage.setItem('equipmentStore', equipment);
  fillDescription();
}
function yesEquip(){
  equipment = "Yes";
  sessionStorage.setItem('equipmentStore', equipment);
  fillDescription();
}
function noEquip(){
  equipment = "No";
  sessionStorage.setItem('equipmentStore', equipment);
  fillDescription();
}
var ticketNum="";
function getTicketNum(){
  ticketNum=$("#cmtedtdatafldslpticketid_fldtktclclnkrecidshort").val();
}
var billable="";
var billCount = 0;
function getBillable(){
  if(billCount%2 === 0){
    billable = "Yes";
  }
  else{
    billable = "No";
  }
  billCount++;
  sessionStorage.setItem('billableStore', billCount);
  fillDescription();
}
var placeHoldz = "";
function autoFillTech(){
  if(!(placeHoldz === "Tech Day Summary")){
    placeHoldz = "Tech Day Summary";
    fillDescription();
  }
}
function autoFillNetwork(){
  if(!(placeHoldz === "Network TS Summary")){
    placeHoldz = "Network TS Summary";
    fillDescription();
  }
}
function autoFillLV(){
  if(!(placeHoldz === "LV Summary")){
    placeHoldz = "LV Summary";
    fillDescription();
  }
}
var texto = "";
function fillDescription(){
  texto = getItem($("#cmtedtdatafldslpitemid_flditmclccodename").val()) + "\nSummary: " + placeHoldz + "\nTicket Number: " + ticketNum + "\nQuote Number: " + quote + "\nEquipment Deployed: " + equipment + "\nBillable: " + billable;
  document.getElementById("cmtedtdatafldslpdesc").rows = "6"; 
  $("#cmtedtdatafldslpdesc").val(texto);
  sessionStorage.setItem('descriptionStore',texto);
  pullInformation();
}
var chosenJob = 0;
function buttonStart(){
  if(chosenJob === 0){
    document.getElementById("technicians").style.backgroundColor = "";
    document.getElementById("technicians").style.color = "";
    document.getElementById("techsasa").style.display = "none";
    document.getElementById("supports").style.backgroundColor = "";
    document.getElementById("supports").style.color = "";
    document.getElementById("supportsasa").style.display = "none";
    hideGeneral();
  }
  if(chosenJob === 1){
    document.getElementById("supports").style.backgroundColor = "";
    document.getElementById("supports").style.color = "";
    document.getElementById("technicians").style.backgroundColor = "#3e4444";
    document.getElementById("technicians").style.color = "#F7F7F7";
    document.getElementById("supportsasa").style.display = "none";
    document.getElementById("techsasa").style.display = "block";
    showGeneral();
    showTechDescription();
  }
  if(chosenJob === 2){
    document.getElementById("technicians").style.backgroundColor = "";
    document.getElementById("technicians").style.color = "";
    document.getElementById("supports").style.backgroundColor = "#3e4444";
    document.getElementById("supports").style.color = "#F7F7F7";
    document.getElementById("techsasa").style.display = "none";
    document.getElementById("supportsasa").style.display = "block";
    showGeneral();
    showSupportDescription();
  }
}
function unhideTechs(){
  if(chosenJob === 1){
      document.getElementById("technicians").style.backgroundColor = "";
      document.getElementById("technicians").style.color = "";
      chosenJob = 0;
      sessionStorage.setItem('chosenJobStore', chosenJob);
      document.getElementById("techsasa").style.display = "none";
      hideGeneral();
  }
  else {
      document.getElementById("supports").style.backgroundColor = "";
      document.getElementById("supports").style.color = "";
      document.getElementById("technicians").style.backgroundColor = "#3e4444";
      document.getElementById("technicians").style.color = "#F7F7F7";
      chosenJob = 1;
      sessionStorage.setItem('chosenJobStore', chosenJob);
      document.getElementById("supportsasa").style.display = "none";
      document.getElementById("techsasa").style.display = "block";
      showGeneral();
      showTechDescription();
  }
}
function unhideSupports(){
  if(chosenJob === 2){
      document.getElementById("supports").style.backgroundColor = "";
      document.getElementById("supports").style.color = "";
      chosenJob = 0;
      sessionStorage.setItem('chosenJobStore', chosenJob);
      document.getElementById("supportsasa").style.display = "none";
      hideGeneral();
  }
  else {
      document.getElementById("technicians").style.backgroundColor = "";
      document.getElementById("technicians").style.color = "";
      document.getElementById("supports").style.backgroundColor = "#3e4444";
      document.getElementById("supports").style.color = "#F7F7F7";
      chosenJob = 2;
      sessionStorage.setItem('chosenJobStore', chosenJob);
      document.getElementById("techsasa").style.display = "none";
      document.getElementById("supportsasa").style.display = "block";
      showGeneral();
      showSupportDescription();
  }
}
function showSupportDescription(){
  document.getElementById("descriptionasa").style.display = "block";
}
function showTechDescription(){
  document.getElementById("descriptionasa").style.display = "block";
}
function showGeneral(){
  document.getElementById("generalasa").style.display = "block";
}
function hideGeneral(){
  document.getElementById("descriptionasa").style.display = "none";
  document.getElementById("generalasa").style.display = "none";
}