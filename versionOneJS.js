function pullInformation(){
  // Want to use this function as way to get the information to hoepfully be uploaded in a hidden window
  // Important / Needed to be saveable
  var Account = "";
  var Contact = "";
  var TypeOfWork = "";
  var Employee = "";
  var Item = "";
  var Date = "";
  var TimeStart = "";
  var TimeEnd = "";
  var HoursUnits = "";
  var Description = "";
  // Not important, but should pull for copy to description box
  var Quote = "";
  var EquipmentDeployed = "";
  var Billable = "";
  var BreakTime = "";
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
quote="";
function getQuoteNum(){
  quote = $("#quoteNumber").val();
  fillDescription();
}
equipment="";
function naEquip(){
  equipment = "N/A";
  fillDescription();
}
function yesEquip(){
  equipment = "Yes";
  fillDescription();
}
function noEquip(){
  equipment = "No";
  fillDescription();
}
billable="";
var billCount = 0;
function getBillable(){
  if(billCount%2 == 0){
    billable = "Yes";
  }
  else{
    billable = "No";
  }
  billCount++;
  fillDescription();
}
var texto = "";
function fillDescription(){
  texto = getItem($("#cmtedtdatafldslpitemid_flditmclccodename").val()) + "\nSummary: " + placeHold + "\nQuote Number: " + quote + "\nEquipment Deployed: " + equipment + "\nBillable: " + billable;
  $("#cmtedtdatafldslpdesc").val(texto);
}
var placeHold = "";
function autoFillTech(){
  if(!(placeHold === "Tech Day Summary")){
    placeHold = "Tech Day Summary";
    fillDescription();
  }
}
function autoFillNetwork(){
  if(!(placeHold === "Network TS Summary")){
    placeHold = "Network TS Summary";
    fillDescription();
  }
}
function autoFillLV(){
  if(!(placeHold === "LV Summary")){
    placeHold = "LV Summary";
    fillDescription();
  }
}