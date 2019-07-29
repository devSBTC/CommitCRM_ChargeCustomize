//https://select2.org/programmatic-control/events   
//https://github.com/select2/select2/releases/tag/4.0.0
var C_LFD_CRD_RECID        = "R";
var C_LFD_CRD_ENT_KIND     = "E";
var C_LFD_CRD_SBS_STS_KIND = "S";
var C_LFD_CRD_NAME         = "N";
var G_CmtGenCrdArr_S2      = [];

function CanRepArr()
{
  var TmpResult = false;

  var aG_CMT_ARR_ID = "";

  if (sessionStorage.length > 0)
    aG_CMT_ARR_ID = sessionStorage.getItem("G_CMT_ARR_ID");

  if (G_CMT_ARR_ID != aG_CMT_ARR_ID)
    TmpResult = true;

  //console.log("CanRepArr"+" "+TmpResult+" "+G_CMT_ARR_ID +" "+ aG_CMT_ARR_ID);

  return(TmpResult);
}

function CmtIsEmptyCrdArr()
{
  var TmpResult = false;

  if (G_CmtGenCrdArr.length == 1)
    TmpResult = (G_CmtGenCrdArr[0][C_LFD_CRD_RECID] == "");
 
 //console.log("CmtIsEmptyCrdArr"+" "+TmpResult+" "+G_CmtGenCrdArr.length+" "+xGetZINX);

  return(TmpResult);
}

function CmtCmpFunc(a,b) {
  var aA = "";
  var aB = "";

  aA = a.N.toUpperCase();
  aB = b.N.toUpperCase();

  if (aA.indexOf("*") == 0)
    aA = aA.substring(1,aA.length);

  if (aB.indexOf("*") == 0)
    aB = aB.substring(1,aB.length);

  aA = CmtTrim(aA);
  aB = CmtTrim(aB);

  if (aA < aB)
     return -1;

  if (aA > aB)
    return 1;

  return 0;
}

function CmtSetCrdLclStrg()
{

  var aQbj = null;

  //alert("l " + sessionStorage.length);
  //alert("c " + G_CmtGenCrdArr.length);
  //alert("E " + CmtIsEmptyCrdArr());

  //console.log("CmtSetCrdLclStrg-BOF " + G_CMT_ARR_ID +" "+ sessionStorage.length+" "+G_CmtGenCrdArr.length);
//if (G_CmtGenCrdArr.length ==1)
    //console.log("CmtSetCrdLclStrg-xxBOF " + G_CmtGenCrdArr[0]["N"]);

  if (! CmtIsEmptyCrdArr() && CanRepArr())
  {
     G_CmtGenCrdArr.sort(CmtCmpFunc);
    sessionStorage.clear();
    sessionStorage.setItem("G_CmtGenCrdArr", JSON.stringify(G_CmtGenCrdArr));
    sessionStorage.setItem("G_CMT_ARR_ID", G_CMT_ARR_ID);
    //alert("l*l " + sessionStorage.length);
   //console.log("CmtSetCrdLclStrg-REPLACE");
  }

  //alert("ll " + sessionStorage.length);
//  CmtFillSetCrdCmbByLclStrg();
  //console.log("CmtSetCrdLclStrg-EOF " + G_CMT_ARR_ID +" "+sessionStorage.length+" "+G_CmtGenCrdArr.length);
}

function CmtFillSetCrdCmbByLclStrgCsn(xId, xDef, xSub, xEmp)
{
  //console.log("CmtFillSetCrdCmbByLclStrg-BOF "+ document.getElementById(xId).options.length);

  //https://developer.tizen.org/documentation/articles/html5-session-storage
  var aGoOn = false;
  var aCmtGenCrdArr = [];
  var aCrdCtrl = null;
  var aCrdObj  = null;
  var aCrdCtrl = document.getElementById(xId);
  var aXCmtGenCrdArr = sessionStorage.getItem("G_CmtGenCrdArr");
  var aUpd = false;
  var aDef = false;
  var aSelInx = -1;
  var aItmCount = 0;

  if (aXCmtGenCrdArr)
  {
    aCmtGenCrdArr = JSON.parse(aXCmtGenCrdArr);

    if (aCrdCtrl != null)
    for ( var i = 0, len = aCmtGenCrdArr.length; i < len; ++i )
    {
      aDef = false;
      aGoOn = false;
      aCrdObj = aCmtGenCrdArr[i];

      if (aCrdObj.E == C_CRD_ENT_KIND_EMP)
        aGoOn = xEmp
      else
      if (aCrdObj.E == C_CRD_ENT_KIND_SUB)
        aGoOn = xSub
      else
      if (aCrdObj.E == C_CRD_ENT_KIND_GEN)
        aGoOn = true;

      if (i == len-1)
      {
        aUpd = true;
      }

      if (aGoOn)
      {
        if ((aSelInx == -1)&&(aCrdObj.R == xDef))
        {
          aDef  = true;
          aSelInx = aItmCount;
        }
        aItmCount = aItmCount + 1;
    //      if ((i <= 20) || (aUpd))
        CmtThirdPartyCmbAddItemEx(aCrdCtrl, aCrdObj.R, aCrdObj.N,C_COMBO_GEN_S2_ITEM_HINT, false ,false)
      }
//      else
      if (aUpd)
      {
//        if (aSelInx == -1)
//          if (document.getElementById(xId).length > 0)
//            if (document.getElementById(xId).options[0].value == xDef)
//              aSelInx = 0;

        CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,false);

//        if (aSelInx == -1)
//          CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,false);
//        else
//          CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,false);
//          CmtThirdPartyCmbSetSlectedKeyEx(xId,xDef,false);

        CmtThirdPartyCmbTrgUpd(xId);
      }
    }
  }
  //console.log("CmtFillSetCrdCmbByLclStrg-EOF " + document.getElementById(xId).options.length);
}

function CmtSetCmbCrdSelect(xId)
{
  var aCrdCtrl = document.getElementById(xId);
  if (aCrdCtrl != null)
  {
    CmtDisplayPmsgIfNeed(aCrdCtrl.value);
    CmtCallToSrv(C_CRD_SELECT +" "+ aCrdCtrl.value, true)
  }
}

function CmtSetCrdSlct(xChkId, xId, xHideFld, xStsFld, xCrdFld, xSub, xEmp)
{

//console.log(xId+" "+"A " + sessionStorage.length);

var aDef = document.getElementById(xHideFld).value;

  CmtSetCrdLclStrg();

  var aCrdCtrl = document.getElementById(xChkId);

  if (aCrdCtrl != null)
  {
    CmtAddInActive(xId, xHideFld, xStsFld, xCrdFld);
    CmtFillSetCrdCmbByLclStrg(xId, aDef, xSub, xEmp);
//    CmtThirdPartyCmbSetSlectedKeyHdn(xId, xHideFld);
    CmtThirdPartyCmbSetWith(xId);
  }

//console.log(xId+" "+"X " + sessionStorage.length);

}

function CmtAddInActive(xId, xHideFld, xStsFld, xCrdFld)
{
  //console.log(xId+" "+"CmtAddInActive B");

  var aHideFld = document.getElementById(xHideFld);
  var aStsFld = document.getElementById(xStsFld);
  var aCrdNameFld = document.getElementById(xCrdFld);

  if ( (aStsFld != null) && (aCrdNameFld != null) && (aHideFld != null) )
  if ( (aHideFld.value != "") && (aStsFld.value != "") && (aStsFld.value != CMT_STATUS_ACTIVE) )
  {
    //console.log(xId+" "+aHideFld.value+" "+aStsFld.value+" "+aCrdNameFld.value+" "+"CmtAddInActive O");

    //console.log(xId+" XCmbBF "+ document.getElementById(xId).options.length);

// no need - add to arr    CmtThirdPartyCmbAddItemEx(document.getElementById(xId), aHideFld.value, aCrdNameFld.value ,true, false);

    //console.log(xId+" XCmAF "+ document.getElementById(xId).options.length);

    CmtAddToArr(aHideFld.value, aCrdNameFld.value);
    CmtThirdPartyCmbAddItemEx(document.getElementById(xId), aHideFld.value, aCrdNameFld.value,C_COMBO_GEN_S2_ITEM_HINT ,true, false);
  }

  //console.log(xId+" "+"CmtAddInActive E");
}

function CmtGenCrdFromArrByRecId(xCmtGenCrdArr, xRecId)
{
  var TmpResult = -1;

  var i = xCmtGenCrdArr.length-1;

  while( (i <= xCmtGenCrdArr.length) && (TmpResult == -1) && (i >= 0) )
  {
     if (xCmtGenCrdArr[i][C_LFD_CRD_RECID] == xRecId)
     {
        TmpResult = i;
     }
     i = i - 1;
  }
  return ( TmpResult );
}

function CmtDisplayPmsgIfNeed(xRecId)
{
  var aCrdObj = null;
  var aInx = -1;

  var aXCmtGenCrdArr = sessionStorage.getItem("G_CmtGenCrdArr");
  aCmtGenCrdArr = JSON.parse(aXCmtGenCrdArr);

  aInx = CmtGenCrdFromArrByRecId(aCmtGenCrdArr, xRecId);

  if (aInx != -1)
    aCrdObj = aCmtGenCrdArr[aInx];

  if (aCrdObj != null)
    if (aCrdObj.E == C_CRD_ENT_KIND_SUB)
    {
      aInx = CmtGenCrdFromArrByRecId(aCmtGenCrdArr, aCrdObj.P);
      if (aInx != -1)
        aCrdObj = aCmtGenCrdArr[aInx];
    }

  if (aCrdObj != null)
    if (aCrdObj.M != "")
      alert(aCrdObj.M)

}

function CmtCrdItm(xR,
                   xE,
                   xP,
                   xS,
                   xN,
                   xM)
{
  this.R = xR;
  this.E = xE;
  this.P = xP;
  this.S = xS;
  this.N = xN;
  this.M = xM;
}

function CmtAddToArr(xcKey, xcVal)
{
  //console.log("CmtFillSetCrdCmbByLclStrg-BOF");

  //https://developer.tizen.org/documentation/articles/html5-session-storage

  var aXCmtGenCrdArr = sessionStorage.getItem("G_CmtGenCrdArr");
  var aCrdObj = null;
  var aInx = -1;
  var aCmtGenCrdArr = [];

  if (aXCmtGenCrdArr)
  {
    aCmtGenCrdArr = JSON.parse(aXCmtGenCrdArr);

    aInx = CmtGenCrdFromArrByRecId(aCmtGenCrdArr, xcKey);

    if (aInx == -1)
    {

      //console.log("Arr-BOF " + aCmtGenCrdArr.length);

      aCrdObj = new CmtCrdItm(xcKey,
                              C_CRD_ENT_KIND_GEN,
                              "",
                              CMT_STATUS_NOT_ACTIVE,
                              xcVal,
                              "Account not active");

      aCmtGenCrdArr.unshift(aCrdObj);

      //console.log("Arr-EOF " + aCmtGenCrdArr.length);

      sessionStorage.clear();
      sessionStorage.setItem("G_CmtGenCrdArr", JSON.stringify(aCmtGenCrdArr));
    }
  }    
}

function xGetZINX()
{
  var TmpResult = "xNone";  
  
  if (G_CmtGenCrdArr.length == 1) 
    TmpResult = G_CmtGenCrdArr[0][C_LFD_CRD_RECID];
  
  return(TmpResult);  
}

function CmtCrdItmS2(xRecId,
                     xName )
{
  this.id         =  xRecId;
  this.text       =  xName;
}

function CmtFillSetCrdCmbByLclStrg119(xId, xDef, xSub, xEmp)
{
  var aCrdCtrl = document.getElementById(xId);
  
  if ( (aCrdCtrl != null) && (xDef != "") )
  {
    $("#"+aCrdCtrl.id).val(xDef).trigger("change.select2");    
    //https://github.com/select2/select2/issues/4159
    //https://stackoverflow.com/questions/17819709/clear-select2-without-triggering-change-event#31856728
  } 
}

function CmtFillSetCrdCmbByLclStrgS2(xDef, xSub, xEmp){}

function CmtFillSetCrdCmbByLclStrgS21(xDef, xSub, xEmp)
{
  //console.log("CmtFillSetCrdCmbByLclStrg-BOF "+ document.getElementById(xId).options.length);

  //https://developer.tizen.org/documentation/articles/html5-session-storage
  var aGoOn = false;
  var aCmtGenCrdArr = [];
  //var aCrdCtrl = null;
  var aCrdObj  = null;
  //var aCrdCtrl = document.getElementById(xId);
  var aXCmtGenCrdArr = sessionStorage.getItem("G_CmtGenCrdArr");
  var aUpd = false;
  var aDef = false;
  var aSelInx = -1;
  var aItmCount = 0;
  var aItm = null;
 // var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
 

  if (aXCmtGenCrdArr)
  {
    aCmtGenCrdArr = JSON.parse(aXCmtGenCrdArr);
    G_CmtGenCrdArr_S2.length = 0;
    
    //if (aCrdCtrl != null)
    for ( var i = 0, len = aCmtGenCrdArr.length; i < len; ++i )
    {
      aDef = false;
      aGoOn = false;
      aCrdObj = aCmtGenCrdArr[i];

      if (aCrdObj.E == C_CRD_ENT_KIND_EMP)
        aGoOn = xEmp
      else
      if (aCrdObj.E == C_CRD_ENT_KIND_SUB)
        aGoOn = xSub
      else
      if (aCrdObj.E == C_CRD_ENT_KIND_GEN)
        aGoOn = true;

      if (i == len-1)
      {
        aUpd = true;
      }

      if (aGoOn)
      {
        if ((aSelInx == -1)&&(aCrdObj.R == xDef))
        {
          aDef  = true;
          aSelInx = aItmCount;
        }
        aItmCount = aItmCount + 1;
    //      if ((i <= 20) || (aUpd))
        //*CmtThirdPartyCmbAddItemEx(aCrdCtrl, aCrdObj.R, aCrdObj.N, false ,false)
       
        //aItm = new CmtCrdItmS2(aItmCount-1, aCrdObj.N);
        G_CmtGenCrdArr_S2.push({id: aCrdObj.R, text: aCrdObj.N});
      }
//      else
      if (aUpd)
      {
                //G_CmtGenCrdArr_S2 = data.slice();
//        if (aSelInx == -1)
//          if (document.getElementById(xId).length > 0)
//            if (document.getElementById(xId).options[0].value == xDef)
//              aSelInx = 0;

        //*CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,false);

//        if (aSelInx == -1)
//          CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,false);
//        else
//          CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,false);
//          CmtThirdPartyCmbSetSlectedKeyEx(xId,xDef,false);

        //*CmtThirdPartyCmbTrgUpd(xId);
      }
    }
  }
  //console.log("CmtFillSetCrdCmbByLclStrg-EOF " + document.getElementById(xId).options.length);
}

function CmtFillSetCrdCmbByLclStrg(xId, xDef, xSub, xEmp)
{
  //console.log("CmtFillSetCrdCmbByLclStrg-BOF "+ document.getElementById(xId).options.length);

  //https://developer.tizen.org/documentation/articles/html5-session-storage
  var aGoOn = false;
  var aCmtGenCrdArr = [];
  var aCrdCtrl = null;
  var aCrdObj  = null;
  var aCrdCtrl = document.getElementById(xId);
  var aXCmtGenCrdArr = sessionStorage.getItem("G_CmtGenCrdArr");
  var aUpd = false;
  var aDef = false;
  var aSelInx = -1;
  var aItmCount = 0;

  if (aXCmtGenCrdArr)
  {
    aCmtGenCrdArr = JSON.parse(aXCmtGenCrdArr);

    if (aCrdCtrl != null)
    for ( var i = 0, len = aCmtGenCrdArr.length; i < len; ++i )
    {
      aDef = false;
      aGoOn = false;
      aCrdObj = aCmtGenCrdArr[i];

      if (aCrdObj.E == C_CRD_ENT_KIND_EMP)
        aGoOn = xEmp
      else
      if (aCrdObj.E == C_CRD_ENT_KIND_SUB)
        aGoOn = xSub
      else
      if (aCrdObj.E == C_CRD_ENT_KIND_GEN)
        aGoOn = true;

      if (i == len-1)
      {
        aUpd = true;
      }

      if (aGoOn)
      {
        if ((aSelInx == -1)&&(aCrdObj.R == xDef))
        {
          aDef  = true;
          aSelInx = aItmCount;
        }
        aItmCount = aItmCount + 1;
    //      if ((i <= 20) || (aUpd))
        CmtThirdPartyCmbAddItemEx(aCrdCtrl, aCrdObj.R, aCrdObj.N,C_COMBO_GEN_S2_ITEM_HINT, false ,false)
      }
//      else
      if (aUpd)
      {
//        if (aSelInx == -1)
//          if (document.getElementById(xId).length > 0)
//            if (document.getElementById(xId).options[0].value == xDef)
//              aSelInx = 0;

        CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,true);

//        if (aSelInx == -1)
//          CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,false);
//        else
//          CmtSetSlectedInxThirdPartyCmbEx(xId,aSelInx,false);
//          CmtThirdPartyCmbSetSlectedKeyEx(xId,xDef,false);

        //CmtThirdPartyCmbTrgUpd(xId);
      }
    }
  }
  //console.log("CmtFillSetCrdCmbByLclStrg-EOF " + document.getElementById(xId).options.length);
}