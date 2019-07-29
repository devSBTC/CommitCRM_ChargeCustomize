//slp SLP

 $(document).ready(function(){
//  $("#cmtedtdatafldslpitemid_flditmclccodename").blur(function(){
  
  var $example =  $("#cmtedtdatafldslpitemid_flditmclccodename").select2(
	{
    width: '100%',
    theme: "bootstrap",
    placeholder: PLC_HLDR_ITM
  }).on('select2:open', function (e) {
    CmtCtrlflditmclccodenameFocus(this)
  }).on('select2:close', function (e) {
    CmtCtrlflditmclccodenameBlur(this)
  });
  $("#cmtedtdatafldslpitemid_flditmclccodename").change(function(){
    CmtCtrlflditmclccodenameChange(this)
  });  
  $("#cmtedtdatafldslpcardid_fldcrdfullname").change(function(){
    CmtGENCtrlfldcrdfullnameChange(this)
  });
  $("#cmtedtdatafldslpclcgenqtimeslct").change(function(){
    CmtCtrlFLDSLPCLCGENQTIMESLCTChange(this)
  });
});

var G_CMT_PRV_ITM_DESC_BY_NAME = false;
var G_CMT_PRV_ITM__DESC        = "";
var G_CMT_PRV_ITM_IS_HOUR      = false;
var G_CMT_PRV_ITM_PRICE_SRC    = "";

var G_CMT_CUR_ITM_DESC_BY_NAME = false;
var G_CMT_CUR_ITM__DESC        = "";
var G_CMT_CUR_ITM_IS_HOUR      = false;
var G_CMT_CUR_ITM_PRICE_SRC    = "";

var G_CMT_BY_QUICK             = false;

var G_PRV_flditmclccodename_Inx = 0;
var G_flditmclccodename_Inx    = -1;
var G_flditmclccodename_PrvValByChEvt = false;//prev val will be taken by on change evt and not by onFocus evt
var G_SRC_HOURS_AMNT           = -1;
var G_SRC_BILL_TOTAL           = -1;
var G_CUR_BILL_TOTAL           = -1;
var G_SRC_PRICE                = 0.0;

var C_CMT_DRAFT_STAGE   = "D";
var C_CMT_BILLED_STAGE  = "B";

var C_CMT_BILL_KIND_B = "B";
var C_CMT_BILL_KIND_N = "N";
var C_ITM_GRP = 'ItmGrp';

var G_CMT_ITM_WAS_CHANGED = false;
var C_CMT_SlpQFrToTime_GEN_LD_TMPL = "CmtSlpQFrToTimeGenLdTmplCmb";

function CmtslpeditOnLoad()
{
  CmtSetGenItmArr(CmtslpGetItemKind());

  if (CmtIsSlpQInsEdtMode())
  {
    document.forms[0].cmtedtdatafldslpdesc.value = "";
    CmtHideElmByIdCnd("Spncmtedtdatafldslpbcrecid_fldbctclccodename",true);
    CmtHideElmByIdCnd(CmtGetParentNodeId(CmtGetParentNodeId("cmtedtdatafldslpstarttime")),true);
    CmtHideElmByIdCnd(CmtGetParentNodeId(CmtGetParentNodeId("cmtedtdatafldslpendtime")),true);
    CmtHideElmByIdCnd(CmtGetParentNodeId("cmtedtdatafldslptimespentinmin"),true);
    CmtSetItemRecId();
    CmtSetEdtFrmGuiOnLoadGenByGenRecType("slp");
    CmtShowElmByIdCnd("cmtlblerrmsgevtedit", (CmtGetInnerHTMLById("cmtlblerrmsgevtedit") != "") );
    CmtSetItmInxOfThirdPartCmbEx("cmtedtdatafldslpclcgenqtimeslct",0);
    document.getElementById("CmtDrpDnBtnslctslp").tabIndex = 1;
    document.getElementById("customop_qaddslp").tabIndex = 8;
    document.getElementById("BtnCmtqSlpCancel").tabIndex = 9;
  }  
  else	  
  {
    CmtAddClsByCnd("CmtLblDescQFrToTimeGenLdTmplCmbDiv", "CmtDisplayNone", CmtIsCpCMode());
    CmtAddClsByCnd("CmtSlpTimeFrmGrg", "CmtDisplayNone", CmtIsCpCMode());
    CmtAddClsByCnd("CmtSlpTimeSpntFrmGrg", "CmtDisplayNone", CmtIsCpCMode());
    CmtSetEdtFrmGuiOnLoadGen();
    CmtShowElmByIdCnd("cmtlblerrmsgevtedit", (CmtGetInnerHTMLById("cmtlblerrmsgevtedit") != "") );
    ShowHideLinkRecidIncDec();
    var aCanSet = false;
    
    aCanSet = CmtCanEditByPriv();

    if (!CmtIsSlpQInsEdtMode())
      CmtSetCrdSlct("cmtseldatafldslpcardid_fldcrdfullname","cmtedtdatafldslpcardid_fldcrdfullname", "HIDDEN_cmthidegencardid","HIDDEN_cmthidegencrdstatus", "HIDDEN_cmthidegencrdfullname", CmtHiddenFld2Bool("cmthidegenwa_crd_cmb_with_subcards"), false);
    
    if (aCanSet)
      aCanSet = CmtCanEditByApp();
    
    if (aCanSet)
    {
//      CmtSlpBldQTimePopup();
//      document.forms[0].cmbslpeditClcFrToTime.selectedIndex = document.forms[0].cmbslpeditClcFrToTime.length -1;
      G_SUS_INX = document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex-1;
      SetStTimeToTime(false,CanSetQty());
      EnabDisAdjustCtrls();
      SetCurItm();
    
      G_SRC_HOURS_AMNT = Cmt_StrToFloatDef(CmtGetHidenFldStr("cmthidefldslpclcamountslpedit"),0);
      G_SRC_BILL_TOTAL = Cmt_StrToFloatDef(CmtGetHidenFldStr("cmthidefldslpbilltotalslpedit"),0);
      G_CUR_BILL_TOTAL = G_SRC_BILL_TOTAL;
      SetIfCrdOrBctChanged();
    
      if ( CmtGetHidenFldObj("cmtedtdatafldslpprice") != null)
        G_SRC_PRICE = document.forms[0].cmtedtdatafldslpprice.value;
    }
    
    CmtHideGuiCtrlSctOnPriv();
    CmtAddClsByCnd("fldslpworkerid_fldwrknicknameData", "CmtEditEmpPriv",  !CmtIsElmExists("cmtedtdatafldslpworkerid_fldwrknickname") );
  }
}

function CmtslpChkCanSetHideFld(xcObj,xCtrl)
{
  var TmpResult = false;

       //alert(xcObj.name);
   if (CmtIsSlpQInsEdtMode())
   {
     if (xcObj.name == "cmthideedtdatafldslpitemid_flditmclccodename")
     {
       xcObj.value = ConcatCmbInxAndVal(C_FICT_MMB_INX, xCtrl.value);       
       TmpResult = false;
     }  
     else
//     if (((xcObj.name == "cmthideedtdatafldslpstarttime")||(xcObj.name == "cmthideedtdatafldslpendtime")) && (CmtHiddenFld2Bool("cmthidequickchargesethoursamountonlyslpedit")))
//     {//cmthideedtdatafldslptimespentinmin
//       xcObj.value = "";       
//       TmpResult = false;
//     }  
//     else
     {
       TmpResult = true;            
     }
   } 
   else   
   if (!CmtIsCpCMode())
   {
     TmpResult = true;
   }
   else
   if ( (xcObj.name == "cmthideedtdatafldslpbcrecid_fldbctclccodename")||
        (xcObj.name == "cmthideedtdatafldslptimespentinmin")||
        (xcObj.name == "cmthideedtdatafldslpstarttime")||
        (xcObj.name == "cmthideedtdatafldslpendtime") )
   {
//      alert(1+" "+xcObj.name);
      TmpResult = false;
   }
   else
   {
//     alert(2+" "+xcObj.name);
     TmpResult = true;
   }

  if (TmpResult)
    TmpResult = CmtgenChkCanSetHideFld(xcObj,xCtrl);   
   
  return(TmpResult);
}

function CmtslpSetCtrls2HiddenFlds()
{
  CmtGetHidenFldObj("cmthideflditmunitishourslpedit").value = G_CMT_CUR_ITM_IS_HOUR;
}

function CmtSlpIsMakeFinPrivLimt()
{
  return (CmtGetHidenFldStr("cmthideprivfieldsslpedit") == "true")
}


function CmtslpGetItemKind()
{
  var TmpResult = "";

  TmpResult = CmtGetHidenFldStr("cmthideflditmitemtypegroupslpedit");

  TmpResult = TmpResult.toUpperCase();

  return(TmpResult);
}

function CmtslpChkEdtMode()
{
  aBctType = "";
  aNewAmt = 0;
  aSrcAmt = 0;
  var TmpResult = false;
  
  
  if (!CmtIsCpCMode())
  {
    aStTimeEmpty = (CmtIsBlank(document.forms[0].cmtedtdatafldslpstarttime.value));
    aEnTimeEmpty = (CmtIsBlank(document.forms[0].cmtedtdatafldslpendtime.value));
    aCanTimebeEmpty = ( (!aStTimeEmpty) || (!aEnTimeEmpty) );
  }
  
    if ( !CmtChkSlpSetCstmBct_GenSave() )
      CmtSetFocusThrdPrtyCmb(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.id)
    else    
    if ( !CmtChkCrd() ) 
    {
      CmtSetFocusThrdPrtyCmb("cmtedtdatafldslpcardid_fldcrdfullname");
      TmpResult = false
    }
    else
    if (!CmtChkSlpBct())
    {
      CmtSetFocusThrdPrtyCmb(document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.id);
    }
    else
    if ( !CmtSlpChkDate() )
    {
      document.forms[0].cmtedtdatafldslpslipdate.focus();
    }
    else if (!CmtChkComboVals(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex,C_ITM_FLD,true,true))
    {
      CmtSetFocusThrdPrtyCmb(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.id); 
    }            
    else if ( !CmtSlpChkAmnt1() )
    {
      if (!CmtIsSlpQInsEdtMode())
        document.forms[0].cmtedtdatafldslpclcamount.focus();
    }
    else if ( !CmtSlpChkAmnt2() )
    {
       document.forms[0].cmtedtdatafldslpclcamount.focus();
    }
//    else if (!CmtChkComboVals(document.forms[0].cmtedtdatafldslpbcrecid_fldbctclctypestatus.selectedIndex,C_BCT_FLD,true,true))
//    {
//      document.forms[0].cmtedtdatafldslpbcrecid_fldbctclctypestatus.focus();
//    }
    else if (!CmtChkGui_spentinminEx()) 
      document.getElementById("cmtedtdatafldslptimespentinmin").focus()
    else
    if (!CmtIsCpCMode())
    {
      if (!CmtSlpMakeChkFrToTime())
        TmpResult = true
      else
      if (Cmt_isEarlierOrEqual(document.forms[0].cmtedtdatafldslpstarttime.value,
                                document.forms[0].cmtedtdatafldslpendtime.value,
                                C_BY_TIME,
                                C_GEN_START_TIME_FIELD,
                                C_GEN_END_TIME_FIELD,
                                aCanTimebeEmpty,
                                aCanTimebeEmpty,
                                true,
                                true,
                                GetMsgRange(C_GEN_START_TIME_FIELD,C_GEN_END_TIME_FIELD) ))
      {
        TmpResult = true
      }
      else
      {
        TmpResult = false;
        if (aStTimeEmpty)
          {document.forms[0].cmtedtdatafldslpstarttime.focus();}
        else
          {document.forms[0].cmtedtdatafldslpendtime.focus();}
      }
    }
    else  // chk cpc mode
    {
      if(!ChkItmOnCpcMode())
      {
        TmpResult = false;
        CmtSetFocusThrdPrtyCmb(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.id);
      }
      else
      {
        TmpResult = true;
      }
    }
               
    if (CmtSlpIsMakeFinPrivLimt() == false)
      if ( (TmpResult) && (!CmtIsSlpQInsEdtMode()) )
      {
        TmpResult = false;
        if ( !CmtChkEmptyVals(document.forms[0].cmtedtdatafldslpprice.value,C_SLP_PRICE_FIELD,false,true ) )
        {
          document.forms[0].cmtedtdatafldslpprice.focus();
        }
       else if ( !CmtIzZero(document.forms[0].cmtedtdatafldslpprice.value,C_SLP_PRICE_FIELD,true,'' ) )
       {
          document.forms[0].cmtedtdatafldslpprice.focus();
        }
        else
        {
          TmpResult = true;
        }
      }
               
    if ( (TmpResult) && (!CmtIsCpCMode()) )
    {
      aBctType = CmtGetBctType();
    
      if (aBctType == C_BC_TYPE_HOURS_BANK)
      {
        if (!CmtIsSlpQInsEdtMode()) 
          aNewAmt = Cmt_StrToFloatDef(document.forms[0].cmtedtdatafldslpclcamount.value,0)
        else
          aNewAmt = CmtGENGetCalcHoursAmount();
        aSrcAmt = G_SRC_HOURS_AMNT;
      }
      else if (aBctType == C_BC_TYPE_MONEY_BANK)
      {
        aNewAmt = G_CUR_BILL_TOTAL;
        aSrcAmt = G_SRC_BILL_TOTAL;
      }
//      alert('SlpClc1: '+aNewAmt+' '+aSrcAmt+' '+aBctType)
      if ((aBctType == C_BC_TYPE_HOURS_BANK)||(aBctType == C_BC_TYPE_MONEY_BANK))
      {
        if (! ChkBctByItemType(aBctType,G_CMT_CUR_ITM_IS_HOUR))
        {TmpResult = true}
        else
        {TmpResult = IsExceedBct(CmtGetBctAmountStart(),CmtGetBctAmountUsed(),aNewAmt,aSrcAmt,aBctType)};
      }
    }

  return (TmpResult);
}

function CmtslpBeforeSave(xcSender)
{
  if ( CmtGetHidenFldObj("btnslpeditFLDSLPSTAGE") != null)
  {
    aInx = xcSender.indexOf("btnslpeditFLDSLPSTAGE");

    //alert(4); alert(xcSender);alert(aInx);

    if (aInx > -1)
    {                  //alert(5);
      CmtGetHidenFldObj("cmthidefldslpstageslpedit").value = GetStage(); // tkt 4699
    }
  }
//alert(xcSender);
  //alert(6);

  CmtGetHidenFldObj("cmthideflditmpricesourceslpedit").value = CmtGetITM_PRICE_SRC(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex);
  CmtGetHidenFldObj("cmthideflditmunitpriceslpedit").value = CmtGetITM_PRICE(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex);

  if (xcSender == 'customop_qaddslp')
  {
    document.getElementById("customop_qaddslp").disabled = true;
    document.getElementById("BtnCmtqSlpCancel").disabled = true;
  }

}
                   
function CmtslpGetWorkerTrf()
{
  var TmpResult = 0;   
  if (CmtIsSlpQInsEdtMode())
    {TmpResult = Cmt_StrToFloatDef(CmtGetHidenFldStr("trfslpedit0"),0);}    
  else  
  if (CmtIsMakePrivLimtCurUserOnly())
  {
    if (CmtSlpIsMakeFinPrivLimt())
      {TmpResult = 0;}
    else
      {TmpResult = Cmt_StrToFloatDef(CmtGetHidenFldStr("trfslpedit0"),0);}
  }
  else
  {                                                                                            
      TmpResult = Cmt_StrToFloatDef(CmtGetHidenFldStr("trfslpedit"+document.forms[0].cmtedtdatafldslpworkerid_fldwrknickname.selectedIndex),0);
  }

  return (TmpResult);
}

function CmtslpGetIfDisCountOrMarkUp()
{
  var TmpResult = C_CMT_GEN_NONE;   
  
  if (CmtSlpIsMakeFinPrivLimt() == false)
    if (CmtIsSlpQInsEdtMode())
      TmpResult = C_CMT_GEN_NONE
  else
    TmpResult = (CmtGetIfDisCountOrMarkUp(document.forms[0].cmtedtdatafldslpadjust.selectedIndex));

  return (TmpResult);
}

function CmtSlpMainCalc()
{
  var aBillTotal          = 0;
  var aBillTotalTmp       = 0;  
  var aClcamount          = "";
  var aSrcadjustamount    = "";
  var aIfDisCountOrMarkUp = "";
  var aAdjustType         = "";
  var aprice              = "";
  var aBillTotalNoAdj     = 0;
  var aClcadjustamount    = 0;
  
  if (true)
  {	  
    if ( (CmtIsSlpQInsEdtMode()) )
    {
      aClcamount          = CmtGENGetCalcHoursAmount();
      aClcamount          = aClcamount.toString();
      aSrcadjustamount    = 0;
      aIfDisCountOrMarkUp = C_CMT_GEN_NONE;
      aAdjustType         = CmtGetAdjustType(-1);
      aprice              = CmtGenGetPrice();
      aprice              = aprice.toString();      
    } 
    else     
    if ( (CmtSlpIsMakeFinPrivLimt()) )
    {
      aClcamount          = document.forms[0].cmtedtdatafldslpclcamount.value;
      aSrcadjustamount    = CmtGetHidenFldStr("cmthidefldslpclcadjustamountslpedit");
      aIfDisCountOrMarkUp = CmtGetHidenFldStr("cmthidefldslpadjustslpedit");
      aAdjustType         = CmtGetHidenFldStr("cmthidefldslpadjusttypeslpedit");
      aprice              = CmtGetHidenFldStr("cmthidefldslppriceslpedit");
    }
    else
    {
       aClcamount          = document.forms[0].cmtedtdatafldslpclcamount.value;
       aSrcadjustamount    = document.forms[0].cmtedtdatafldslpclcadjustamount.value;
       aIfDisCountOrMarkUp = CmtslpGetIfDisCountOrMarkUp();
       aAdjustType         = CmtGetAdjustType(document.forms[0].cmtedtdatafldslpadjusttype.selectedIndex);
       aprice              = document.forms[0].cmtedtdatafldslpprice.value;
    }
    
//  alert('SlpClc2: '+aClcamount+' '+aSrcadjustamount+' '+aIfDisCountOrMarkUp+' '+aAdjustType+' '+aprice);
    aBillTotal = CmtSlpCalcAmountByPrice(aClcamount,aprice);
    aBillTotalNoAdj = aBillTotal; 
    aClcadjustamount = CmtSlpCalcAdjust(aBillTotal,aIfDisCountOrMarkUp,aAdjustType,aSrcadjustamount,aClcamount);
    aBillTotalTmp = aBillTotal;
    
    if (Math.abs(aClcadjustamount) >= aBillTotalNoAdj )
      if (CmtslpGetIfDisCountOrMarkUp() == C_CMT_GEN_DISCOUNT)
        if ( (CmtGetAdjustType(document.forms[0].cmtedtdatafldslpadjusttype.selectedIndex) == C_CMT_GEN_ADJUST_A) ||
             (CmtGetAdjustType(document.forms[0].cmtedtdatafldslpadjusttype.selectedIndex) == C_CMT_GEN_ADJUST_P) ||
             (CmtGetAdjustType(document.forms[0].cmtedtdatafldslpadjusttype.selectedIndex) == C_CMT_GEN_ADJUST_U) )
             {
               aBillTotalTmp = 0;
               aClcadjustamount = 0;
             }
          
    aBillTotal = aBillTotalTmp + aClcadjustamount;
          
    G_CUR_BILL_TOTAL = aBillTotal;

    if ((!CmtIsSlpQInsEdtMode())&&(!CmtSlpIsMakeFinPrivLimt())) 
      document.forms[0].cmtedtdatafldslpbilltotal.value = CmtGetCoinSign() + CmtDefFloatToStr(aBillTotal);
//   alert(CmtGetCoinSign());
    if (!CmtIsSlpQInsEdtMode())
      CmtFixAdjst(aBillTotalNoAdj, aClcadjustamount);
  }	
}

function CmtFixAdjst(aBillTotalNoAdj, xClcadjustamount)
{
  if (CmtslpGetIfDisCountOrMarkUp() == C_CMT_GEN_NONE)
  {
    if (CmtSlpIsMakeFinPrivLimt() == false)	  
      document.forms[0].cmtedtdatafldslpclcadjustamount.value    = "0";
  }
  else
  {
    if (CmtslpGetIfDisCountOrMarkUp() == C_CMT_GEN_DISCOUNT)
      if (CmtGetAdjustType(document.forms[0].cmtedtdatafldslpadjusttype.selectedIndex) == C_CMT_GEN_ADJUST_P)
      {
         if (Cmt_StrToFloatDef(document.forms[0].cmtedtdatafldslpclcadjustamount.value,0)> 100)
           document.forms[0].cmtedtdatafldslpclcadjustamount.value = "100.00"
      }
      else
      if ( (CmtGetAdjustType(document.forms[0].cmtedtdatafldslpadjusttype.selectedIndex) == C_CMT_GEN_ADJUST_A) ||
           (CmtGetAdjustType(document.forms[0].cmtedtdatafldslpadjusttype.selectedIndex) == C_CMT_GEN_ADJUST_U) )
      {
         if (Cmt_StrToFloatDef(document.forms[0].cmtedtdatafldslpclcadjustamount.value,0)> aBillTotalNoAdj)
         {
           document.forms[0].cmtedtdatafldslpclcadjustamount.value = CmtDefFloatToStr(aBillTotalNoAdj)
         }
      }

  }
}

function CmtSlpCalcAmountByPrice(xcAmnt,xcPrice)
{
var TmpResult = 0.0;
var aAmnt    = 0.0;
var aPrice   = 0.0;

  aAmnt  = Cmt_StrToFloatDef(xcAmnt ,0);
  aPrice = Cmt_StrToFloatDef(xcPrice,0);
  TmpResult = (aPrice * aAmnt);
  return(TmpResult);
}

function CmtSlpCalcAdjust(xcTotal,xcCountOrMarkUp,xcAdjustType,xcAdjustAmount,xcClcamount)
{
var TmpResult = 0.0;
var aAjustAnount = 0;
var aBillTotal = 0;
var aCalcedAnount = 0;
var aCmtslpGetIfDisCountOrMarkUp = 0;
var aCmtGetAdjustType = 0;

  aCmtslpGetIfDisCountOrMarkUp = xcCountOrMarkUp;
  aCmtGetAdjustType = xcAdjustType;

  if ((aCmtslpGetIfDisCountOrMarkUp != C_CMT_GEN_NONE)&&(aCmtGetAdjustType != C_CMT_GEN_NONE))
  {
//     aBillTotal   = Cmt_StrToFloatDef(xcTotal,0);
     aBillTotal   = xcTotal;
     aAjustAnount = Cmt_StrToFloatDef(xcAdjustAmount,0);

     if ((aBillTotal != 0)&&(aAjustAnount != 0))
     {
        aCalcedAnount = GetAdjustByKind(aCmtGetAdjustType,aBillTotal,aAjustAnount,xcClcamount);
        if (aCmtslpGetIfDisCountOrMarkUp == C_CMT_GEN_DISCOUNT)
          aCalcedAnount = parseFloat(aCalcedAnount) * -1;
//        aBillTotal = parseFloat(aBillTotal) + parseFloat(aCalcedAnount);
        TmpResult = aCalcedAnount;
     }
  }
  return(TmpResult);
}

function CmtCtrlFLDSLPADJUSTChange(xThis)
{
  switch(CmtslpGetIfDisCountOrMarkUp())
  {
    case  C_CMT_GEN_NONE:
                         document.forms[0].cmtedtdatafldslpclcadjustamount.value    = "";
                         document.forms[0].cmtedtdatafldslpadjusttype.selectedIndex = 0;
                         CmtSlpMainCalc();
                         break;
    case C_CMT_GEN_DISCOUNT:
                            CmtSlpMainCalc();
                            break;
    case C_CMT_GEN_MARKUP :
                           CmtSlpMainCalc();
                           break;
  }

  EnabDisAdjustCtrls();
}

function CmtCtrlFLDSLPADJUSTTYPEChange(xThis)
{
  document.forms[0].cmtedtdatafldslpclcadjustamount.value    = "0";
  CmtSlpMainCalc();
}

function CmtCtrlFLDSLPCLCADJUSTAMOUNTFocus(xThis)
{
CmtSlpMainCalc();
}

function CmtCtrlFLDSLPCLCADJUSTAMOUNTChange(xThis)
{
  CmtSlpMainCalc();
}

function CmtCtrlFLDSLPCLCADJUSTAMOUNTBlur(xThis)
{

}

function SetPrvItm()
{
  G_CMT_PRV_ITM_DESC_BY_NAME = CmtGetITM_DESC_BY_NAME(G_flditmclccodename_Inx);
  G_CMT_PRV_ITM__DESC        = CmtGetITM_DESC(G_flditmclccodename_Inx,G_CMT_PRV_ITM_DESC_BY_NAME);
  G_CMT_PRV_ITM_IS_HOUR      = CmtGetITM_IsHour(G_flditmclccodename_Inx);
  G_CMT_PRV_ITM_PRICE_SRC    = CmtGetITM_PRICE_SRC(G_flditmclccodename_Inx);
}

function SetCurItm()
{                 
  G_CMT_CUR_ITM_DESC_BY_NAME = CmtGetITM_DESC_BY_NAME(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex);
  G_CMT_CUR_ITM__DESC        = CmtGetITM_DESC(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex,G_CMT_CUR_ITM_DESC_BY_NAME);
  G_CMT_CUR_ITM_IS_HOUR      = CmtGetITM_IsHour(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex);
  G_CMT_CUR_ITM_PRICE_SRC    = CmtGetITM_PRICE_SRC(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex);
}

function CmtSetPriceToWin()
{                    //alert(708);
  if ( CanChangePrice() )
  {                             //alert(709);      
   document.forms[0].cmtedtdatafldslpprice.value = CmtGenGetPrice();
  }
}

function CmtSetDesc()
{
  var aInx = 0;
  var aDesc = CmtTrim(document.forms[0].cmtedtdatafldslpdesc.value);
  aInx = aDesc.indexOf(G_CMT_PRV_ITM__DESC);
  if (aInx == 0)
    document.forms[0].cmtedtdatafldslpdesc.value = aDesc.slice(G_CMT_PRV_ITM__DESC.length);
  aDesc = CmtTrim(document.forms[0].cmtedtdatafldslpdesc.value);

  if (!CmtIsBlank(aDesc))
    if((aDesc.charAt(0)!="\n")&&(aDesc.charAt(0)!="\r"))
      aDesc = "\n"+aDesc;

 document.forms[0].cmtedtdatafldslpdesc.value = CmtTrim(G_CMT_CUR_ITM__DESC + aDesc);
}

function SetWinOnItemChange()
{
  var aGoOn = false;

  if (!CmtIsSlpQInsEdtMode())
  {
    if (G_CMT_ITM_WAS_CHANGED)
    {
      if ( (G_CMT_PRV_ITM_IS_HOUR != G_CMT_CUR_ITM_IS_HOUR) || ( (!G_CMT_CUR_ITM_IS_HOUR && G_CMT_BY_QUICK) ) )
        aGoOn = true;
    }
    else
    {
      if (!G_CMT_CUR_ITM_IS_HOUR && G_CMT_BY_QUICK) 
        aGoOn = true;
    }
    
      if (aGoOn)
      {
        document.forms[0].cmtedtdatafldslpclcamount.value = "0";
        G_CMT_BY_QUICK = false;
      }
    
    if (! CmtSlpIsMakeFinPrivLimt())
    {  CmtSetPriceToWin(); }
  }
  
  CmtSetDesc();
  
  G_CMT_ITM_WAS_CHANGED = true; //alert(4);
}

function CmtCtrlflditmclccodenameBlur(xThis)
{
  G_flditmclccodename_Inx = -1;
  G_flditmclccodename_PrvValByChEvt = false;
}

function CmtCtrlflditmclccodenameFocus(xThis)
{
  G_PRV_flditmclccodename_Inx = document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex;
  G_flditmclccodename_Inx = document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex;
  SetPrvItm();
}

function CmtGetCstmBctErrMsg()
{
  var TmpResult = "";

  if (CmtHiddenFld2Bool("cmthidebctprivslpedit"))
    TmpResult = C_SLP_TheItemNotAllowed_Error
  else
    TmpResult = C_SLP_TheItemNotAllowed_Continue

  return(TmpResult);
}

function CmtCtrlflditmclccodenameChange(xThis)
{
  //alert("CmtCtrlflditmclccodenameChange");
  CmtSlpSetCstmBct();
  
  if (G_flditmclccodename_PrvValByChEvt)
    {SetPrvItm()}//the combo is still on focus
  SetCurItm();
  SetWinOnItemChange();
  CmtSlpMainCalc();
  
  G_flditmclccodename_Inx = document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex;
  G_flditmclccodename_PrvValByChEvt = true;
  G_PRV_flditmclccodename_Inx  = document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex;
}

function CmtCtrlFLDSLPCLCAMOUNTChange(xThis)
{  
  if (CmtIsElmExists("cmtedtdatafldslptimespentinmin"))
    if ( (Cmt_StrToIntDef(document.forms[0].cmtedtdatafldslpclcamount.value,0) >= 0) && (Cmt_StrToIntDef(document.forms[0].cmtedtdatafldslpclcamount.value,0) < 24) )
      if ( (G_CMT_CUR_ITM_IS_HOUR) && ( (document.forms[0].cmtedtdatafldslptimespentinmin.value == "") || (document.forms[0].cmtedtdatafldslptimespentinmin.value == "0") ) )
        document.forms[0].cmtedtdatafldslptimespentinmin.value = CmvMinToTimeStr(CmvHoursToMin(document.forms[0].cmtedtdatafldslpclcamount.value));
     
  CmtSlpMainCalc()
}

function CmtCtrlFLDWRKNICKNAMEChange(xThis)
{ //alert("505-1");
  if (document.forms[0].cmtedtdatafldslpworkerid_fldwrknickname.selectedIndex > 0)
  {            //alert("505-2");
    if (G_CMT_CUR_ITM_PRICE_SRC == C_CMT_ITM_FIX_BY_WORKER)
     CmtSetPriceToWin();
    CmtSlpMainCalc();
  }
}

function CmtCtrlFLDSLPPRICEChange(xThis)
{
CmtSlpMainCalc()
}

function CmtGetCalcHoursAmount(xcRound, xcHoursAmount)
{

var aHour = CmtExtractTimeHours(parseFloat(xcHoursAmount));
var aMin  = CmtExtractTimeMin(parseFloat(xcHoursAmount));
var aSlpDelta = CmtGetHidenFldObj("cmthidedeltaslpedit").value;
var TmpResult = 0;

    if ( xcRound && (aSlpDelta != 0) && ( (aMin % Math.floor(60 * aSlpDelta) ) != 0) )
    {
       TmpResult = (Math.floor( ((aHour * 60) + parseInt(aMin)) / parseFloat(60 * aSlpDelta)) + 1) * aSlpDelta;
//        aResult := (     Trunc( ((Hour  * 60) +        Minutes) /           (60 * xc Charge)) + 1) * xcSlipDeltaForCharge
    }
    else
    {
      TmpResult = ((aHour * 60) + parseInt(aMin)) / 60
    }

  TmpResult = CmtDefFloatToStr(TmpResult);;
  return (TmpResult);

}


function SetStTimeToTime(xcNotify,xcOverrideUser)
{
  var aSlpIsRoundAmount = 0; 
  //if ( CmtGetHidenFldObj("btnslpeditFLDSLPCLCFROMTOTIME") != null)
  if (CmtIsElmExists("cmtedtdatafldslpstarttime"))
  {
    //document.forms[0].btnslpeditFLDSLPCLCFROMTOTIME.value = "0:00";
    if (!CmtChkValidTimeVal(document.forms[0].cmtedtdatafldslpstarttime.value,C_GEN_START_TIME_FIELD,true,xcNotify))
    {
      if (xcNotify) document.forms[0].cmtedtdatafldslpstarttime.focus();
    }
    else
     if (!CmtChkValidTimeVal(document.forms[0].cmtedtdatafldslpendtime.value,C_GEN_END_TIME_FIELD,true,xcNotify))
    {
     if (xcNotify) document.forms[0].cmtedtdatafldslpendtime.focus();
    }
    else if (!Cmt_isEarlierOrEqual(document.forms[0].cmtedtdatafldslpstarttime.value,
                                   document.forms[0].cmtedtdatafldslpendtime.value,
                                   C_BY_TIME,
                                   C_GEN_START_TIME_FIELD,
                                   C_GEN_END_TIME_FIELD,
                                   xcNotify,
                                   xcNotify,
                                   xcNotify,
                                   true,
                                   GetMsgRange(C_GEN_START_TIME_FIELD,C_GEN_END_TIME_FIELD) ))
      {
         document.forms[0].cmtedtdatafldslpendtime.focus();
      }
      else
      {
        //document.forms[0].btnslpeditFLDSLPCLCFROMTOTIME.value = CmtDefFloatToStr(CmtGetTimesDif(document.forms[0].cmtedtdatafldslpstarttime.value,document.forms[0].cmtedtdatafldslpendtime.value,false));;
        aSlpIsRoundAmount = CmtHiddenFld2Bool("cmthideisroundamountslpedit");
        CmtAutoCmplteFrToFLDSLPTIMESPENTINMIN(1);
        if (!CmtIsSlpQInsEdtMode())
          if (xcOverrideUser)
            document.forms[0].cmtedtdatafldslpclcamount.value = CmtGetCalcHoursAmount(aSlpIsRoundAmount,CmtGetTimesDif(document.forms[0].cmtedtdatafldslpstarttime.value,document.forms[0].cmtedtdatafldslpendtime.value,true));
      }

    //if (document.forms[0].btnslpeditFLDSLPCLCFROMTOTIME.value == "")
    //  document.forms[0].btnslpeditFLDSLPCLCFROMTOTIME.value = "0:00";
  }    
}

function CmtCtrlFLDSLPSTARTTIMEChange(xThis)
{
//  CmtFixAmPmEditIfNeed(document.forms[0].cmtedtdatafldslpstarttime);
  SetStTimeToTime(false,false);
  CmtAutoCmplteFrToFLDSLPTIMESPENTINMIN(1);
}

function CmtCtrlFLDSLPENDTIMEChange(xThis)
{
//  CmtFixAmPmEditIfNeed(document.forms[0].cmtedtdatafldslpendtime);
  SetStTimeToTime(false,false);
  CmtAutoCmplteFrToFLDSLPTIMESPENTINMIN(2);  
}

function cmtmakeFLDSLPCLCFROMTOTIMEclick()
{
  var aSlpIsRoundAmount = 0;
  if ((!G_CMT_CUR_ITM_IS_HOUR) && ( document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex > 0))
  {
    alert(C_CMT_MSG_SLP_COPY_HOUR)
  }
  else
  {
    //SetStTimeToTime(true,true);
    aSlpIsRoundAmount = CmtHiddenFld2Bool("cmthideisroundamountslpedit");
    document.forms[0].cmtedtdatafldslpclcamount.value = CmtGetCalcHoursAmount(aSlpIsRoundAmount,CmtGetTimeAsMin(document.forms[0].cmtedtdatafldslptimespentinmin.value));

    CmtSlpMainCalc()
 }
}

function CmtGetITM_PRICE_SRC(xcInx)
{
  var  TmpResult = "";
  TmpResult = CmtGetValFromItemArr(xcInx,C_CMT_ITM_PRICE_SRC,CmtGenGetRecType());
  TmpResult = TmpResult.toUpperCase();
  return(TmpResult);
}

function CmtGetITM_PRICE(xcInx)
{
  var  TmpResult = "";
  TmpResult = CmtGetValFromItemArr(xcInx,C_CMT_ITM_PRICE,CmtGenGetRecType());

  return(Cmt_StrToFloatDef(TmpResult,0));
}

function CmtGetITM_IsHour(xcInx)
{
  var  TmpResult = "";

  TmpResult = CmtGetValFromItemArr(xcInx,C_CMT_ITM_IS_HOUR,CmtGenGetRecType());

  TmpResult = TmpResult.toUpperCase();

  return(TmpResult == C_CMT_TRUE);
}

function CmtGetITM_NAME(xcInx)
{
  var  TmpResult = "";
  TmpResult = CmtGetValFromItemArr(xcInx,C_CMT_ITM_NAME,CmtGenGetRecType());

  return(TmpResult);
}

function CmtGetITM_DESC_BY_NAME(xcInx)
{
  var  TmpResult = "";         
  TmpResult = CmtGetValFromItemArr(xcInx,C_CMT_ITM_DESC_BY_NAME,CmtGenGetRecType());

  TmpResult = TmpResult.toUpperCase();
                              
  return(TmpResult == C_CMT_TRUE);
}


function CmtGetITM_DESC(xcInx,xcByName)
{
  var  TmpResult = "";

  if (xcByName)
  { TmpResult = CmtGetITM_NAME(xcInx); }
  else
  { TmpResult = CmtGetValFromItemArr(xcInx,C_CMT_ITM_DESC,CmtGenGetRecType()); }

  return(TmpResult);
}

function GetOppositeStage()
{
  TmpResult = "";
  if ( CmtGetHidenFldStr("cmthidefldslpstageslpedit") == C_CMT_BILLED_STAGE )
  {
    TmpResult =  C_CMT_DRAFT_STAGE;
  }
  else if ( CmtGetHidenFldStr("cmthidefldslpstageslpedit") == C_CMT_DRAFT_STAGE)
  {
    TmpResult = C_CMT_BILLED_STAGE ;
  }
  return(TmpResult);
}

function GetStage()
{
  if ( CmtGetHidenFldObj("cmtedtdatafldslpclcbillkind") != null)
  {
    TmpResult = C_CMT_BILLED_STAGE;
  }
  else
  {               
    TmpResult =  C_CMT_DRAFT_STAGE;
  }
  return(TmpResult);
}


function cmtmakeFLDSLPSTAGEclick()
{
  var aStage = "";
  var aXTrns = "";
  var aGoOn = false;

  aXTrns = CmtGetHidenFldStr("cmthidefldslpxtransrecidslpedit");

  if ( (aXTrns == "") || (aXTrns == CmtGetHidenFldStr("cmthiderecid_do_not_add_to_invoiceslpedit")) )
  {            //alert(aXTrns);alert(CmtGetHidenFldStr("cmthiderecid_do_not_add_to_invoiceslpedit"));
    aGoOn = true
  }
  else
  {
    aGoOn = confirm(C_SLP_IS_MODIFY_3RD_INV)
  }

  if (aGoOn)
  {
    aStage = CmtGetHidenFldStr("cmthidefldslpstageslpedit");

//    CmtGetHidenFldObj("cmthidefldslpstageslpedit").value = GetStage(); close line tkt 4699

    if ((aStage  == C_CMT_DRAFT_STAGE )|| (CmtIsInsertMode()) )
    {
      CmtMakeSave(document.forms[0].btnslpeditFLDSLPSTAGE.name+C_CMT_NORMAL_SAVE)
    }
    else
    if (aStage  == C_CMT_BILLED_STAGE )
    {
      CmtCallToSrv(document.forms[0].btnslpeditFLDSLPSTAGE.name,false)
    }
  }
}

function CmtCtrlfldslpclcbillkindClick(xThis)
{
  if (document.forms[0].cmtedtdatafldslpclcbillkind.checked)
  {
    document.forms[0].btnslpeditFLDSLPSTAGE.value = C_SLP_BILLABLE_KIND;
    document.forms[0].btnslpeditFLDSLPSTAGE.disabled = false;
  }
  else
  {
    document.forms[0].btnslpeditFLDSLPSTAGE.value = C_SLP_NO_CHARGE_KIND;
    document.forms[0].btnslpeditFLDSLPSTAGE.disabled = true;
  }
}

function ChkBctByItemType(xcBctType,xcItemIsHour)
{
  TmpResult = true;

  if ((aBctType == C_BC_TYPE_HOURS_BANK)&&(!xcItemIsHour))
    TmpResult = false;

  return(TmpResult);
}

function EnabDisAdjustCtrls()
{    
  if (CmtSlpIsMakeFinPrivLimt() == false)
    if (document.forms[0].cmtedtdatafldslpadjust.selectedIndex == 0)
    {
      document.forms[0].cmtedtdatafldslpadjusttype.disabled      = true;
      document.forms[0].cmtedtdatafldslpclcadjustamount.disabled = true;
      CmtAddClassById(document.forms[0].cmtedtdatafldslpadjusttype.id,"CmtDisplayNone");    
      CmtAddClassById(document.forms[0].cmtedtdatafldslpclcadjustamount.id,"CmtDisplayNone");    
    }
    else
    {
      document.forms[0].cmtedtdatafldslpadjusttype.disabled      = false;
      document.forms[0].cmtedtdatafldslpclcadjustamount.disabled = false;
      CmtRemoveClassById(document.forms[0].cmtedtdatafldslpadjusttype.id,"CmtDisplayNone");    
      CmtRemoveClassById(document.forms[0].cmtedtdatafldslpclcadjustamount.id,"CmtDisplayNone");    
    }
}

function CmtCtrlcmtedtdatafldslpbcrecid_fldbctclccodenameChange(xThis)
{
  if (ChkBctCmb(document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.selectedIndex))
  {
//    CmtSlpSetCstmBct();
    CmtCallToSrv(document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.name,true);
  }
}


function CmtChkSlpBct()
{
  var TmpResult=false;

  if (CmtIsCpCMode())
  {
    TmpResult=true
  }
  else
  if (ChkBctCmb(document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.selectedIndex))
  {
    TmpResult=true
  }
  else
  {
    TmpResult=(CmtChkComboVals(document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.selectedIndex,C_BCT_FLD,true,true));
  }

  return(TmpResult);
}


function CanSetQty()
{
  var TmpResult=false;

  if ( CmtIsInsertMode() )
    //if ( CmtGetHidenFldObj("btnslpeditFLDSLPCLCFROMTOTIME") != null)
    if (CmtIsElmExists("cmtedtdatafldslpstarttime"))
      if ((Cmt_StrToIntDef(CmtGetHidenFldStr("cmthidegenfreturnfromhtmlcount_gen"),0) == 0)&&(CmtHiddenFld2Bool("cmthidegenisurlmode")))
      {  TmpResult=false }
      else
      if ( (!CmtIsBlank(document.forms[0].cmtedtdatafldslpstarttime.value)) &&
           (!CmtIsBlank(document.forms[0].cmtedtdatafldslpendtime.value)) )
      {
        TmpResult=true
      }

  return(TmpResult);
}

function SetIfCrdOrBctChanged()
{
  var aPrice = 0;

  if (CmtSlpIsMakeFinPrivLimt() == false)
    if ( CmtChkRecIdWasSel("cmthidegencardid",C_CARD_FLD,true,false) )
      if (
           (CmtGetHidenFldStr("cmthidegencrdrecidwaschanged") == "true")
           ||
           (CmtGetHidenFldStr("cmthidegenbctrecidwaschanged") == "true")
         )
      {
        if ( CmtGetITM_PRICE_SRC(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex)  == C_CMT_ITM_FIX_BY_WORKER )
        {
//          alert("BY W TRF");
          aPrice = CmtDefFloatToStr(CmtslpGetWorkerTrf())
        }
        else
        {
//          alert("FIX PRICE");
          aPrice = CmtGetITM_PRICE(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex);
        }

//        alert(73);
//        alert(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex);
//        alert(aPrice);

        if ( CanChangePrice() )
          document.forms[0].cmtedtdatafldslpprice.value = aPrice;
        CmtSlpMainCalc();
      }
}

function CmtIsCpCMode()
{
  return (CmtHiddenFld2Bool("cmthideiscpcmodeslpedit"))
}

function ChkItmOnCpcMode()
{
  var TmpResult = false;

  if (!G_CMT_CUR_ITM_IS_HOUR)
  {
    TmpResult = true;
  }
  else
  {
    TmpResult = true;
//    alert(C_SLP_CPC_ITM_IS_HOUR);
  }

  return(TmpResult);
}

function CanChangePrice()
{
  var TmpResult = false;
  var aPrice = 0.0;

  if (CmtExtractRecType(CmtGetHidenFldStr("cmthidefldslpsourcerecidslpedit")) != C_ASSETS_RECTYPE)
  {
    //alert(1);
    TmpResult = true;
  }
  else
  if (CmtExtractRecType(CmtGetHidenFldStr("cmthidefldslpsourcerecidslpedit")) == C_ASSETS_RECTYPE)
  {
//  alert(11);
    if ( CmtGetHidenFldObj("cmtedtdatafldslpprice") != null)
    {
//     alert(12);alert(G_SRC_PRICE);
     aPrice = Cmt_StrToFloatDef(document.forms[0].cmtedtdatafldslpprice.value,0);
//     alert(aPrice);
     if ( (G_SRC_PRICE != aPrice) || (aPrice == 0) )
     {
       TmpResult = true;
//         alert(132);
     }
     else
     {
       TmpResult = false;
//       alert(142);
     }

    }
  }

  return(TmpResult);
}


function SetTimeToEdt(xTime, aAmnt,edtFr,edtTo,aSgn)
{
  //var aVal = (1000*60*Cmt_StrToIntDef(aAmnt,0))*aSgn;
  //var xTime1 = xTime.getTime() + aVal;
  //  alert(79);
  //$('#'+edtFr.id).data("DateTimePicker").minDate(xTime1);    
  //  alert(89);
  //$('#'+edtFr.id).data("DateTimePicker").setDate(xTime1);
  //$('#').data("DateTimePicker").minDate(e.date);
  //alert(99);
  var aVal = (1000*60*Cmt_StrToIntDef(aAmnt,0))*aSgn;
  var xTime1 = xTime.getTime() + aVal;
  edtFr.value = CmtGetTimeAsStr(xTime);
  xTime.setTime( xTime1 );
  edtTo.value = CmtGetTimeAsStr(xTime);
}

function cmtmakeClcFrToTimeclick(xId)
{
  var aVal = CmtGetHidenFldStr("cmthideclcfrtotimeslpedit");
  var aArr = aVal.split(",");
  var aAmnt = aArr[xId];

  if ( (xId <= aArr.length-1) )
    if ( (xId >= 0) && (xId <= aArr.length) )
    {
      var now = new Date();
      SetTimeToEdt(now,aAmnt,document.forms[0].cmtedtdatafldslpendtime,document.forms[0].cmtedtdatafldslpstarttime,-1)

      if (!Cmt_isEarlierOrEqual(document.forms[0].cmtedtdatafldslpstarttime.value,
                                document.forms[0].cmtedtdatafldslpendtime.value,
                                C_BY_TIME,
                                C_GEN_START_TIME_FIELD,
                                C_GEN_END_TIME_FIELD,
                                true,
                                true,
                                false,
                                true,
                                ""))
      {
        now.setHours(0);
        now.setMinutes(1);                                      
        SetTimeToEdt(now,aAmnt,document.forms[0].cmtedtdatafldslpstarttime,document.forms[0].cmtedtdatafldslpendtime,1)
      }

      if (document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex == 0)
      {
        G_CMT_BY_QUICK = true;
      }
      else
      {
        G_CMT_BY_QUICK = false;
      }

      SetStTimeToTime(false,G_CMT_CUR_ITM_IS_HOUR || G_CMT_BY_QUICK);
      CmtSlpMainCalc();
//      ShowHideByOp('cmbslpeditClcFrToTimeId','none');
    }
}


function CmtslpeditOnB4UnLoad(e)
{

}

function CmtSlpBldQTimePopup()
{
  CmtGenBldSlpQFrToTimeCmb();
}

//bld popup
function CmtGenBldSlpQFrToTimeCmb()
{
  document.getElementById(C_CMT_SlpQFrToTime_GEN_LD_TMPL).innerHTML = C_SLP_Q_FR_TO_TIME_LNK_NAME;
  CmdAddImgToLnk(document.getElementById(C_CMT_SlpQFrToTime_GEN_LD_TMPL), C_CMT_GEN_BLACK_TRNG);
  document.getElementById("CmtSlpQFrToTimeGenLdTmplCmbImg").style.borderWidth = 0;

  var aH = 0;
  var aIsEmpty = false;

  if (G_CmtSlpQFrToTimeArr.length >= 1)
    if(G_CmtSlpQFrToTimeArr[0][C_CMT_FLD_REC_ID] == "")
      aIsEmpty = true;

  if (aIsEmpty)
    aH = 1
  else
  if (G_CmtSlpQFrToTimeArr.length <= 7)
    aH = G_CmtSlpQFrToTimeArr.length
  else
    aH = G_CmtSlpQFrToTimeArr.length-1;

  CmtGenSlpQFrToTimeSlct.style.height = ((aH * 23)-10)+"px";
  CmtGenSlpQFrToTimeSlct.style.width  = "200px";
  CmtDataSlpQFrToTimeSlct.style.height = CmtGenSlpQFrToTimeSlct.style.height;
  CmtDataSlpQFrToTimeSlct.style.width  = CmtGenSlpQFrToTimeSlct.style.width;

  var aLnk = null;
  var aRow = null;
  var aCol = null;
  var tbl  = document.getElementById("CmtGenSlpQFrToTimeSlctTBL");

  tbl.style.border = "0";
  tbl.cellPadding = "2";
  tbl.cellSpacing = "0";

  if (tbl.rows.length == 0)
  {
    if (aIsEmpty)
    {
      aRow = tbl.insertRow(0);
      aRow.style.height = "21px";
      aCol = aRow.insertCell(0);
      aCol.innerHTML = C_CMT_GEN_TDT_NO_TMPL;
      aCol.style.textAlign = "center";
    }
    else
    for(var i = 0; i < G_CmtSlpQFrToTimeArr.length; i++)
    {

      aRow = tbl.insertRow(i);
      aRow.setAttribute("id","Row"+G_CmtSlpQFrToTimeArr[i][C_CMT_FLD_REC_ID] ,0);
      aRow.style.height = "21px";
      aCol = aRow.insertCell(0);
      aCol.style.whiteSpace = "nowrap"; //G_CmtSlpQFrToTimeArr[i][C_CMT_FLD_REC_ID]
      aLnk = CmtCreateLnkClick(aCol,i, G_CmtSlpQFrToTimeArr[i][C_CMT_FLD_NAME], "CmtSlpQFrToTimeLnkGenLdTmplClick(this);",false,"");

      aLnk.style.textDecoration = "none";
      aLnk.style.cursor = "pointer";
      aLnk.style.fontSize = "10pt";

      if (!CmtCanMakeByBrw())
      {
        aCol.classname = "CmtGenLangDir";
        aLnk.classname = "CmtTdtSlctLnk";
        aLnk.onclick = function(){CmtSrNtLnkGenLdTmplClick(this);};
//        aRow.onmousemove = function(){CmtTdtOnMouseOver(this);};
        aRow.onmouseover = function(){CmtGenPopupOnMouseOver(this);};
        aRow.onmouseout  = function(){CmtGenPopupOnMouseOut(this);};

      }
      else
      {
        aCol.setAttribute("class", "CmtGenLangDir");
        aLnk.setAttribute("class", "CmtTdtSlctLnk");
//        aRow.setAttribute ("onmousemove", "CmtTdtOnMouseOver(this);");
        aRow.setAttribute ("onmouseover", "CmtGenPopupOnMouseOver(this);");
        aRow.setAttribute ("onmouseout",  "CmtGenPopupOnMouseOut(this);");
      }
    }
  }
}


function CmtSlpQFrToTimeCmbGenLdTmplClick(xThis)
{
//alert(xThis.id)
  Popup.show("CmtGenSlpQFrToTimeSlct","CmtSlpQFrToTimeGenLdTmplCmb",'below left',{'constrainToScreen':true});//good  cmmtSlctLblWin = link
}


function CmtSlpQFrToTimeLnkGenLdTmplClick(xThis)
{
 // Popup.hide("CmtGenSlpQFrToTimeSlct")
  cmtmakeClcFrToTimeclick(xThis)
}

function CmtSlpIsAlwItmByBct()
{
  var TmpResult=false;
  var aBctObj = null;
  var aItmObj = null;

//{"RecId":"BCTH6C8OD9F5PBW7B6AF","Type":"G","DEFAULTITEM":"ITM6VMUXCQECMGTP74BU","ALLOWITM":"true","BILLABLEFLAG":"Y"},
//{"BctRecId":"BCTH6C8OD9F5PBW7B6AF","RecId":"ITMF3N2Q1WJYIJ7KZ2L6","Allow":true,"BillableFlag":"N"},
  if (CmtIsCpCMode())
    TmpResult = true
  else
  if ( (document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex <= 0) || (document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.selectedIndex <= 0) )
    TmpResult=true
  else
  {
    aBctObj = CmtGenGetItmFromArrByFld(G_CmtCstmBctArr, C_CMT_FLD_REC_ID, document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.value,C_ITM_GRP, CmtslpGetItemKind());
    aItmObj = CmtGenGetItmFromArrByFld(G_CmtExcptItmOfBctArr, "BctRecId", document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.value, C_CMT_FLD_REC_ID, document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.value);
    if (aBctObj == null)
      TmpResult = true
    else
    if (aItmObj == null)
      TmpResult = aBctObj.ALLOWITM
    else
      TmpResult = aItmObj.Allow;
  }

  return(TmpResult);
}

function CmtChkSlpSetCstmBct_GenSave()
{
 var aGoOn = false;
 var TmpResult = false;

  if (!CmtIsSlpQInsEdtMode())
    aGoOn = true
  else
  {
    CmtSlpSetCstmBct();    
    //aGoOn = (document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex != -1);
    aGoOn = (CmtChkComboVals(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex,C_ITM_FLD,true,true));
  }  
 
  if (aGoOn)
    if (CmtSlpIsAlwItmByBct())
      TmpResult = true
    else
    if (!CmtHiddenFld2Bool("cmthidebctprivslpedit"))
      TmpResult = true
    else
    {
      TmpResult = false;
      alert(CmtGetCstmBctErrMsg());
    }

  return(TmpResult);
}

function CmtGetCstmBctErrMsgCnt()
{
  var TmpResult = false;

  if (!CmtHiddenFld2Bool("cmthidebctprivslpedit"))
    TmpResult = confirm(CmtGetCstmBctErrMsg())
  else
    alert(CmtGetCstmBctErrMsg());

  return(TmpResult);
}

function CmtSlpSetCstmBct()
{
  CmtSlpSetBillKind();

  if (!CmtSlpIsAlwItmByBct() && (!CmtGetCstmBctErrMsgCnt()) )
  {
    if (document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex != G_PRV_flditmclccodename_Inx)
    {
//      $("#cmtedtdatafldslpitemid_flditmclccodename").prop("selectedIndex",G_PRV_flditmclccodename_Inx);
//      $("#cmtedtdatafldslpitemid_flditmclccodename").trigger("chosen:updated");
      CmtSetSlectedInxThirdPartyCmbEx("cmtedtdatafldslpitemid_flditmclccodename",G_PRV_flditmclccodename_Inx,true);      
    }
  }
}

function CmtSlpSetBillKind()
{
  if ( CmtGetHidenFldObj("cmtedtdatafldslpclcbillkind") != null)
    document.forms[0].cmtedtdatafldslpclcbillkind.checked = CmtSlpIGwtBillKindByBct();
}


function CmtSlpIGwtBillKindByBct()
{
  var TmpResult=false;

  if (_CmtSlpIGwtBillKindByBct() == C_CMT_BILL_KIND_B )
    TmpResult=true;

  return(TmpResult);
}

function _CmtSlpIGwtBillKindByBct()
{
  var TmpResult = C_CMT_BILL_KIND_N;
  var aBctObj = null;
  var aItmObj = null;

//{"RecId":"BCTH6C8OD9F5PBW7B6AF","Type":"G","DEFAULTITEM":"ITM6VMUXCQECMGTP74BU","ALLOWITM":"true","BILLABLEFLAG":"Y"},
//{"BctRecId":"BCTH6C8OD9F5PBW7B6AF","RecId":"ITMF3N2Q1WJYIJ7KZ2L6","Allow":true,"BillableFlag":"N"},

  if (CmtIsCpCMode())
    TmpResult = C_CMT_BILL_KIND_B
  else
  if ( (document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex <= 0) || (document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.selectedIndex <= 0) )
    TmpResult=C_CMT_BILL_KIND_N
  else
  {
    aBctObj = CmtGenGetItmFromArrByFld(G_CmtCstmBctArr, C_CMT_FLD_REC_ID, document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.value,C_ITM_GRP, CmtslpGetItemKind());
    aItmObj = CmtGenGetItmFromArrByFld(G_CmtExcptItmOfBctArr, "BctRecId", document.forms[0].cmtedtdatafldslpbcrecid_fldbctclccodename.value, C_CMT_FLD_REC_ID, document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.value);

    if (aBctObj == null)
      TmpResult = C_CMT_BILL_KIND_N
    else
    {
      if ( CmtGetBctType() == C_BC_TYPE_GEN )
      {
        if ( (aBctObj.BILLABLEFLAG == C_CMT_TRUE) && (aItmObj == null) )
          TmpResult = C_CMT_BILL_KIND_B
        else
        if (aItmObj != null)
          if (aItmObj.BillableFlag == C_CMT_TRUE)
            TmpResult = C_CMT_BILL_KIND_B
      }
      else
      if (CmtslpGetItemKind() == C_CMT_ITM_F)
        TmpResult = C_CMT_BILL_KIND_N
      else
      if ( (CmtGetBctType() == C_BC_TYPE_MONEY_BANK ) || ( CmtGetBctType() == C_BC_TYPE_TICKETS_BANK) )
        TmpResult = C_CMT_BILL_KIND_N
      else
        TmpResult = C_CMT_BILL_KIND_B
    }
  }
  return(TmpResult);
}

function CmtGENCtrlfldcrdfullnameChange(xThis)
{
  CmtSetCmbCrdSelect("cmtedtdatafldslpcardid_fldcrdfullname")
}

function CmtChkFLDSLPTIMESPENTINMIN(xVal)
{
  var TmpResult= false;
  var aVal  = "";
  
  if (xVal.indexOf(":") >= 0)
  {
    aVal  = xVal.split(":");
    var aFrom = CmtGetStrUntilSep(xVal,":");
    var aTo   = CmtGetStrFromSep(xVal,":");
  
    if ( Cmt_I_ChkValidInt(aFrom) && Cmt_I_ChkValidInt(aTo)  )
    {
      if ( (aFrom >= 0) && (aFrom <= 23) )
        if ( (aTo >= 0) && (aTo <= 59) )
          TmpResult = true;
    }
  }  
 
  return(TmpResult);
}
function CmtChkGui_spentinminEx()
{ 
  var aGoOn = false;
  var TmpResult= false;

  if (!CmtIsElmExists("cmtedtdatafldslptimespentinmin"))
    TmpResult = true
  else
  {
    if (!CmtIsSlpQInsEdtMode())
      aGoOn = true
    else
    {
      if (CmtHiddenFld2Bool("cmthidequickchargesethoursamountonlyslpedit"))
        aGoOn = true
      else
        TmpResult = true        
    }  

    if (aGoOn)   
      TmpResult = CmtChkGui_spentinmin(document.getElementById("cmtedtdatafldslptimespentinmin").value);    
  }  
 
  return(TmpResult);  
}

function CmtChkGui_spentinmin(xVal)
{
  var TmpResult= false;
  
  xVal = CmtTrim(xVal);
  
  if ( CmtChkFLDSLPTIMESPENTINMIN(xVal) || (xVal == "") )
    TmpResult= true
  else
  {
    alert(GetIlLegalMsg("",0));
  }

  return(TmpResult);  
}
  
function CmtCtrlFLDSLPTIMESPENTINMINChange(xThis)
{ 
  CmtFixTimeFmtEditIfNeed(xThis,false);
  xThis.value = CmtTrim(xThis.value);
//  if (xThis.value == "") 
//    xThis.value = "0"
//  else  
  CmtChkGui_spentinmin(xThis.value);
  CmtAutoCmplteFrToFLDSLPTIMESPENTINMIN(3);
}

function CmtAutoCmplteFrToFLDSLPTIMESPENTINMIN(xcNo)
{
  var TmpResult= false;
  
  aFrom = document.getElementById("cmtedtdatafldslpstarttime");
  aTo   = document.getElementById("cmtedtdatafldslpendtime");
  aMin  = document.getElementById("cmtedtdatafldslptimespentinmin");
  
  if ( (aFrom != null) && (aTo != null) && (aMin != null) )
  {
    aFrom.value = CmtTrim(aFrom.value);
    aTo.value   = CmtTrim(aTo.value);
    aMin.value  = CmtTrim(aMin.value);
   
    if ( xcNo == 3 )
    {
      if ( (aFrom.value != "") )
      {
        aTo.value = CmtAddMinutesTimeStr(aFrom.value,CmtGetTimeAsMin(aMin.value));
      }
      else
      if ( (aTo.value != "") )
      {
        aFrom.value = CmtAddMinutesTimeStr(aTo.value,CmtGetTimeAsMin(aMin.value)*-1);
      }
    }
    else
    if ( (xcNo == 1) && (aTo.value == "") )
      aMin.value = ""
    else
    if ( (xcNo == 2) && (aFrom.value == "") )    
      aMin.value = ""
    else  
    if (!Cmt_isEarlierOrEqual(document.forms[0].cmtedtdatafldslpstarttime.value,
                              document.forms[0].cmtedtdatafldslpendtime.value,
                              C_BY_TIME,
                              C_GEN_START_TIME_FIELD,
                              C_GEN_END_TIME_FIELD,
                              false,
                              false,
                              false,
                              true,
                              GetMsgRange(C_GEN_START_TIME_FIELD,C_GEN_END_TIME_FIELD) ))    
      aMin.value =  ""
    else  
      aMin.value = CmvMinToTimeStr(CmtGetTimesDif(aFrom.value, aTo.value, true));
    //if (xcNo == 2)
    //if (xcNo == 3)     
    
    if ( (aFrom.value != "") && (aTo.value != "") && (aMin.value != "") )    
      if (((CmtGetTimesDif(aFrom.value, aTo.value, true)) >= 60*24))
        aTo.value = "";
            
    if ( (aFrom.value != "") && (aTo.value != "") && (aMin.value != "") )
      if (!Cmt_isEarlierOrEqual(document.forms[0].cmtedtdatafldslpstarttime.value,
                                document.forms[0].cmtedtdatafldslpendtime.value,
                                C_BY_TIME,
                                C_GEN_START_TIME_FIELD,
                                C_GEN_END_TIME_FIELD,
                                false,
                                false,
                                false,
                                true,
                                GetMsgRange(C_GEN_START_TIME_FIELD,C_GEN_END_TIME_FIELD) ))    
        aTo.value = "";

  }

  return(TmpResult);  
}

function CmtCntItmCodeNameByPrf(xcCode, xcName)
{
  var TmpResult= "";
  
  if (document.getElementById("HIDDEN_cmthidegenc_wa_items_order_by").value == "0")
    TmpResult = xcCode +" - "+ xcName
   else
    TmpResult = xcName +" - "+ xcCode;
  
  return(TmpResult);  
}

function CmtFillItmCmb()
{
  var aCmb = document.getElementById("cmtedtdatafldslpitemid_flditmclccodename");

  for(var i = 0; i < CmtItemsNameArr.length; i++)
  {
    CmtThirdPartyCmbAddItemEx(aCmb, CmtItemsRecIdArr[i][C_CMT_FLD_REC_ID], CmtCntItmCodeNameByPrf(CmtItemsCodesArr[i],CmtItemsNameArr[i]),C_COMBO_GEN_S2_ITEM_HINT,i == 0,i == CmtItemsNameArr.length-1)
  }  
  
}

function cmtlbldatacustomop_slctslpClk(xcSbmtName,xcHideFldName,xcCtrlName)
{
//  if (xcCtrlName != "")
//    alert(xcCtrlName[xcCtrlName.length-1]);
  var aFirstItm = "";
  var aItmKind = "";
    
  if (xcCtrlName != "")
  {
    aItmKind = xcCtrlName[xcCtrlName.length-1];  
    aItmKind = aItmKind.toUpperCase();
    if (aItmKind  != "")
    {
      SetPrvItm();
      CmtSetHidenFldStrVal("cmthideflditmitemtypegroupslpedit",aItmKind);
      CmtSetGenItmArr(aItmKind);   
      CmtRbldAndFillItmCmb();
      CmtSetItmInxOfThirdPartCmbEx("cmtedtdatafldslpitemid_flditmclccodename",-1);      
      G_flditmclccodename_Inx = -1;
//      SetPrvItm();
      if (G_CMT_PRV_ITM__DESC == "")
        document.forms[0].cmtedtdatafldslpdesc.value = "";//make q slp f  goto to opp list. rurn to tkt dtl. make new q slp chane slp kind to X. not clear the memo
      SetCurItm();
      CmtSetDesc();      
      aItmKind = "cmtlbldatacustomop_" + CmtGetStrFromSep(xcCtrlName,"_");
      CmtSetInnerHTMLById(aItmKind, "SpnCmtDrpDnBtnslctslp");      
      CmtSetDrp_LI_ByHref("cmtlbldatacustomop_slctslp",aItmKind);
    }  
  }  
}

function CmtIsSlpQInsEdtMode()
{
  return (CmtHiddenFld2Bool("cmthideqinseditmodeslpedit"))
}

function CmtslpChk()
{
  var TmpResult = false;
  
  if (CmtIsSlpQInsEdtMode())
    TmpResult = CmtslpChkQInsEdtMode()  
  else	  
    TmpResult = CmtslpChkEdtMode();
  
  return(TmpResult);
}

function CmtslpChkQInsEdtMode()
{
  var TmpResult = false;

  TmpResult = CmtslpChkEdtMode();
  
  return(TmpResult);
}

function CmtSlpQFrToTimeLnkGenLdTmplQSlpClick(xInx,xThis)
{ 
 // alert(xThis+" "+CmtHiddenFld2Bool("cmthidequickchargesethoursamountonlyslpedit"));
 
  if (xInx == '-2')
  {
    if (CmtHiddenFld2Bool("cmthidequickchargesethoursamountonlyslpedit"))
    {
      CmtShowElmByIdCnd("cmtedtdatafldslptimespentinmin",true);
	  }
    else
    {
      CmtShowElmByIdCnd(CmtGetParentNodeId("cmtedtdatafldslpstarttime"),true);
      CmtShowElmByIdCnd(CmtGetParentNodeId("cmtedtdatafldslpendtime"),true);
	  }      
  }  
  else
  {
    CmtHideElmByIdCnd(CmtGetParentNodeId("cmtedtdatafldslpstarttime"),true);
    CmtHideElmByIdCnd(CmtGetParentNodeId("cmtedtdatafldslpendtime"),true);
    CmtHideElmByIdCnd("cmtedtdatafldslptimespentinmin",true);    
    CmtSlpQFrToTimeLnkGenLdTmplClick(xInx);
    cmtmakeClcFrToTimeclick(xInx);    
  }  
  CmtSetDrp_LI_ByHref("CmtLblDescQFrToTimeGenLdTmplCmbDiv",xThis);
  CmtSetInnerHTMLById(xThis, "CmtLblDescQFrToTimeGenLdTmplCmbBtnSpn");
}

function CmtSetItemRecId()
{
  var aCmbInx = -1;   
  var aInx = -1;
  CmtRbldAndFillItmCmb();
  aInx = CmtGenGetInxFromArrByRecId(CmtItemsRecIdArr, CmtGetHidenFldStr("cmthideedtdatafldslpitemid_flditmclccodename"));
  if (aInx == -1)
    aCmbInx = 0
  else
  {
    aInx = aInx + 1;    
    aCmbInx = aInx;
  }    
  
  CmtSetItmInxOfThirdPartCmbEx("cmtedtdatafldslpitemid_flditmclccodename", aCmbInx );
  
  if (aInx != -1)  
  {
    SetPrvItm();
    SetCurItm();
    CmtSetDesc();      
  }
}

function CmtRbldAndFillItmCmb()
{
  $('#cmtedtdatafldslpitemid_flditmclccodename').empty();
  CmtThirdPartyCmbAddItemEx(document.getElementById("cmtedtdatafldslpitemid_flditmclccodename"),"X",C_COMBO_FIRST_ITEM,C_COMBO_GEN_S2_ITEM_HINT,true,true)
  CmtFillItmCmb();
}

function CmtSlpChkDate()
{
  var TmpResult = false;
  
  if (CmtIsSlpQInsEdtMode())
    TmpResult = true
  else	  
    TmpResult =  CmtChkEmptyVals(document.forms[0].cmtedtdatafldslpslipdate.value,C_DATE_FIELD,true,true );
  
  return(TmpResult);
}

function CmtSlpChkAmnt1()
{
  var TmpResult = false;
  
  if (CmtIsSlpQInsEdtMode())
    TmpResult = CmtSlpMakeChkAmntQMode()
  else	  
    TmpResult =  (CmtChkEmptyVals(document.forms[0].cmtedtdatafldslpclcamount.value,C_SLP_AMOUNT_FIELD,false,true ));
  
  return(TmpResult);
}

function CmtSlpChkAmnt2()
{
  var TmpResult = false;
  
  if (CmtIsSlpQInsEdtMode())
    TmpResult = true
  else	  
    TmpResult =  (CmtIzZero(document.forms[0].cmtedtdatafldslpclcamount.value,C_SLP_AMOUNT_FIELD,true,'' ));
  
  return(TmpResult);
}

function CmtSlpMakeChkFrToTime()
{
  var TmpResult = false;
  
  if (CmtIsSlpQInsEdtMode())
    TmpResult = (!CmtHiddenFld2Bool("cmthidequickchargesethoursamountonlyslpedit"))
  else	  
    TmpResult = true;
  
  return(TmpResult);
}    
//cmthidequickchargesethoursamountonlyslpedit  (y Min)(n from\to)

function CmtSlpMakeChkAmntQMode()
{
  var TmpResult = false;
  
  if (!CmtIsSlpQInsEdtMode())
    TmpResult = true
  else
  if (!G_CMT_CUR_ITM_IS_HOUR) 
    TmpResult = true
  else
  if (!CmtHiddenFld2Bool("cmthidequickchargesethoursamountonlyslpedit"))  
    TmpResult = true
  else  
  if ( !CmtChkEmptyVals(document.getElementById("cmtedtdatafldslptimespentinmin").value,C_SLP_HOURS_AMNT,false,true ) )
  { 
    //document.getElementById("CmtSlpQckTimEnrty").focus();
    //CmtAddClsByCnd("CmtLblDescQFrToTimeGenLdTmplCmbDivDrpDn","open",true)
    CmtSetFocusThrdPrtyCmb(document.forms[0].cmtedtdatafldslpclcgenqtimeslct.id);
  }
  else if ( !CmtIzZero(document.getElementById("cmtedtdatafldslptimespentinmin").value,C_SLP_HOURS_AMNT,true,'' ) )
  {
    //document.getElementById("CmtSlpQckTimEnrty").focus()
    //CmtAddClsByCnd("CmtLblDescQFrToTimeGenLdTmplCmbDivDrpDn","open",true)    
    CmtSetFocusThrdPrtyCmb(document.forms[0].cmtedtdatafldslpclcgenqtimeslct.id);    
  }
  else
    TmpResult = true;
  
  return(TmpResult);
}

function CmtGENGetCalcHoursAmount()
{
  var TmpResult = 0;
  var aSlpIsRoundAmount = 0;

  aSlpIsRoundAmount = CmtHiddenFld2Bool("cmthideisroundamountslpedit");
  TmpResult = CmtGetCalcHoursAmount(aSlpIsRoundAmount,CmtGetTimeAsMin(document.forms[0].cmtedtdatafldslptimespentinmin.value));
 
  return(TmpResult);  
}

function CmtGenGetPrice()
{
  var TmpResult = "";
   
  if (G_CMT_CUR_ITM_PRICE_SRC == C_CMT_ITM_FIX_BY_WORKER)
  { TmpResult = CmtDefFloatToStr(CmtslpGetWorkerTrf());; }
  else
  { TmpResult = CmtDefFloatToStr(CmtGetITM_PRICE(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex));; }
 
  return(TmpResult);  
}

function CmtCtrlFLDSLPCLCGENQTIMESLCTChange(xThis)
{
  var aInx = "";

  if (xThis.selectedIndex == 0)
    aInx = "-1"
  else
  if (xThis.selectedIndex == xThis.options.length-1)
    aInx = "-2"    
  else
  {
    aInx = xThis.selectedIndex -1;    
    aInx = aInx.toString();   
  }  

  CmtSlpQFrToTimeLnkGenLdTmplQSlpClickCMB(aInx)
}

function CmtSlpQFrToTimeLnkGenLdTmplQSlpClickCMB(xInx,xThis)
{ 
 // alert(xThis+" "+CmtHiddenFld2Bool("cmthidequickchargesethoursamountonlyslpedit"));
 
  if (xInx == '-2')
  {
    if (CmtHiddenFld2Bool("cmthidequickchargesethoursamountonlyslpedit"))
    {
      CmtShowElmByIdCnd("CmtSlpTimeRow",true);
      CmtShowElmByIdCnd(CmtGetParentNodeId("cmtedtdatafldslptimespentinmin"),true);
	  }
    else
    {
      CmtShowElmByIdCnd("CmtSlpTimeRow",true);
      CmtShowElmByIdCnd(CmtGetParentNodeId(CmtGetParentNodeId("cmtedtdatafldslpstarttime")),true);
      CmtShowElmByIdCnd(CmtGetParentNodeId(CmtGetParentNodeId("cmtedtdatafldslpendtime")),true);
	  }      
  }  
  else
  {
    CmtHideElmByIdCnd("CmtSlpTimeRow",true);
    CmtHideElmByIdCnd(CmtGetParentNodeId(CmtGetParentNodeId("cmtedtdatafldslpstarttime")),true);
    CmtHideElmByIdCnd(CmtGetParentNodeId(CmtGetParentNodeId("cmtedtdatafldslpendtime")),true);
    CmtHideElmByIdCnd(CmtGetParentNodeId("cmtedtdatafldslptimespentinmin"),true);    
    CmtSlpQFrToTimeLnkGenLdTmplClick(xInx);
    cmtmakeClcFrToTimeclick(xInx);    
  }  
  //CmtSetDrp_LI_ByHref("CmtLblDescQFrToTimeGenLdTmplCmbDiv",xThis);
  //CmtSetInnerHTMLById(xThis, "CmtLblDescQFrToTimeGenLdTmplCmbBtnSpn");
}

function CmtSetQSlpStFcs()
{
  CmtSetFocusThrdPrtyCmb(document.forms[0].cmtedtdatafldslpclcgenqtimeslct.id);
//  if (document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.selectedIndex == -1)  
//    CmtSetFocusThrdPrtyCmb(document.forms[0].cmtedtdatafldslpitemid_flditmclccodename.id)
//  else
//   document.forms[0].cmtedtdatafldslpdesc.focus()
}


function CmtChkCrd()
{
  var TmpResult = false;
  
  if (CmtIsSlpQInsEdtMode())
    TmpResult = true
  else	  
    TmpResult = (CmtChkRecIdWasSel("cmthidegencardid",C_CARD_FLD,true,true));
  
  return(TmpResult);
}

function CmtCanMakeCancel_slp_QSlp()
{
  return true;
}

function CmtCanMakeCancel_slp()
{
  return true;
}