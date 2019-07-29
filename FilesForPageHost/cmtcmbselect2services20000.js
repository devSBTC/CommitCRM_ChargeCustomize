$(document).ready(function(){
  //CmtFillSetCrdCmbByLclStrgS2('',true,true);
  var $example =  $(".C_SCR_CARDNO_SELECT").select2(
	{
    width: '100%',
    theme: "bootstrap",
    placeholder: PLC_HLDR_CRD
    //data: G_CmtGenCrdArr_S2
  }
);
});

var G_CMB_DIC_ID_ARR = [];

var C_SUFX = "_chosen";

function CmtCmbRec(xRecId, xInx, xVal)
{
  this.RecId = xRecId;
  this.Inx = xInx;
  this.Val = xVal;
}

function CmtAddVal2CmbIfNeedGV(xId)
{
  //if()
  //alert("CHK BY DIC")
  
  if (CmtHasClassById(CmtGetStrUntilSep(xId,C_SUFX), "CmtVlvAddVals"))  
    I_CmtAddVal2CmbIfNeedGV(xId)
}

function I_CmtAddVal2CmbIfNeedGV(xId)
{
  var TmpResult = null;
  var aCtrl = null;
  var aTxtVal = "";  
  var i = 0;
  var aGoOn = false;
  var aRepItm = null;
  var aArr = $('.chosen-search input[type="text"]');
  
  while( (i < aArr.length) && (TmpResult == null) )
  {
    aGoOn = false;
    if (aArr[i].parentNode != null)
      aCtrl = aArr[i].parentNode;

    if (aCtrl != null)
      aCtrl = aCtrl.parentNode;

    if (aCtrl != null)
      aCtrl = aCtrl.parentNode;
    
    if (aCtrl != null)
    {
      if ((aCtrl.id != "") && (aCtrl.id == xId))
      {
        TmpResult = document.getElementById(CmtGetStrUntilSep(xId,C_SUFX));
        aTxtVal = CmtTrim(aArr[i].value);
      }
    }
    i = i + 1;
  }
  
  if ((TmpResult != null) && (aTxtVal != ""))
  {
    //aRepItm =  CmtGenGetItmFromArrByFld(G_CMB_DIC_ID_ARR, C_CMT_FLD_REC_ID, TmpResult.id , "Inx", TmpResult.options.length);
    //  CmtGenDelFromArrByRecId(G_CMB_DIC_ID_ARR, TmpResult.id);
    //if (aRepItm != null)
    //  aRepItm.Val = aTxtVal;
    //else
    
    G_CMB_DIC_ID_ARR.push(new CmtCmbRec(TmpResult.id,TmpResult.options.length,aTxtVal));
      
    CmtThirdPartyCmbAddItemEx(TmpResult,TmpResult.id+TmpResult.id+TmpResult.options.length,aTxtVal,"",true,true)
  }
}