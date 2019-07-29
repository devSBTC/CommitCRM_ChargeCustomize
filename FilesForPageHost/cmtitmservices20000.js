var C_CMT_ITM_FIX_PRICE     = "F";
var C_CMT_ITM_FIX_BY_WORKER = "W";

var C_CMT_ITM_PRICE_SRC     = "PS";
var C_CMT_ITM_PRICE         = "PR";
var C_CMT_ITM_IS_HOUR       = "IH";
var C_CMT_ITM_NAME          = "N";
var C_CMT_ITM_DESC_BY_NAME  = "DN";
var C_CMT_ITM_DESC          = "D";
var G_SUS_INX               = -1;

var C_CMT_ITM_F        = "F";
var C_CMT_ITM_X        = "X";
var C_CMT_ITM_P        = "P";

var C_CMT_GEN_NONE     = "N";
var C_CMT_GEN_DISCOUNT = "D";
var C_CMT_GEN_MARKUP   = "M";

var C_CMT_ITM_FIX_PRICE     = "F";
var C_CMT_ITM_FIX_BY_WORKER = "W";

var C_CMT_GEN_ADJUST_P = "P";
var C_CMT_GEN_ADJUST_A = "A";
var C_CMT_GEN_ADJUST_U = "U";

var CmtItemsPriceSrcArr   = [];
var CmtItemsPriceArr      = [];
var CmtItemsIsHourArr     = [];
var CmtItemsNameArr       = [];
var CmtItemsCodesArr      = [];
var CmtItemsDescByNameArr = [];
var CmtItemsDescArr       = [];
var CmtItemsRecIdArr      = [];
  
function CmtGetValFromItemArr(xcInx,xcKind,xcRecTpe)
{
var  TmpResult = "";

  xcInx = xcInx -1;
  if (xcInx >= 0)
    if (!CmtCurItmSuspended(xcInx,xcRecTpe))
    {    
      if ((xcKind == C_CMT_ITM_PRICE_SRC)  && (xcInx <= CmtItemsPriceSrcArr.length) && (CmtItemsPriceSrcArr.length > 0) )
      {TmpResult = CmtItemsPriceSrcArr[xcInx]}
      else
      if ((xcKind == C_CMT_ITM_PRICE)       && (xcInx <= CmtItemsPriceArr.length) && (CmtItemsPriceArr.length > 0) )
      {TmpResult = CmtItemsPriceArr[xcInx]}
      else
      if ((xcKind == C_CMT_ITM_IS_HOUR)     && (xcInx <= CmtItemsIsHourArr.length) && (CmtItemsIsHourArr.length > 0) )
      {TmpResult = CmtItemsIsHourArr[xcInx]}
      else
      if ((xcKind == C_CMT_ITM_NAME)        && (xcInx <= CmtItemsNameArr.length) && (CmtItemsNameArr.length > 0) )
      {TmpResult = CmtItemsNameArr[xcInx]}
      else
      if ((xcKind == C_CMT_ITM_DESC_BY_NAME)&& (xcInx <= CmtItemsDescByNameArr.length) && (CmtItemsDescByNameArr.length > 0) )
      {TmpResult = CmtItemsDescByNameArr[xcInx]}
      else
      if ((xcKind == C_CMT_ITM_DESC)        && (xcInx <= CmtItemsDescArr.length)   && (CmtItemsDescArr.length > 0) )
      {TmpResult = CmtItemsDescArr[xcInx]}
    }
    else
    {              
      if ((xcKind == C_CMT_ITM_PRICE_SRC))
      {TmpResult = CmtGetHidenFldStr("cmthidesusflditmpricesource"+xcRecTpe+"edit")}
      else
      if ((xcKind == C_CMT_ITM_PRICE)       )
      {TmpResult = CmtGetHidenFldStr("cmthidesusflditmunitprice"+xcRecTpe+"edit")}
      else
      if ((xcKind == C_CMT_ITM_IS_HOUR)     )
      {TmpResult = CmtGetHidenFldStr("cmthidesusflditmunitishour"+xcRecTpe+"edit")}
      else
      if ((xcKind == C_CMT_ITM_NAME)        )
      {TmpResult = CmtGetHidenFldStr("cmthidesusflditmname"+xcRecTpe+"edit")}
      else
      if ((xcKind == C_CMT_ITM_DESC_BY_NAME))
      {TmpResult = "Y"}
      else
      if ((xcKind == C_CMT_ITM_DESC)        )
      {TmpResult = ""}
    }
            
  return(TmpResult);
}

function CmtCurItmSuspended(xcInx,xcRecTpe)
{
  return ( (G_SUS_INX == xcInx)  && (CmtHasSuspendedItm(xcRecTpe)) )
}

function CmtHasSuspendedItm(xcRecTpe)
{
  return(CmtHiddenFld2Bool_YN("cmthideflditmsuspended"+xcRecTpe+"edit"));
}

function GetAdjustByKind(xcCmtGetAdjustType,xcBillTotal,xcAjustAnount,xcClcamount)
{
  var TmpResult = 0;

  switch(xcCmtGetAdjustType)
  {
    case C_CMT_GEN_ADJUST_P :
             TmpResult = ((parseFloat(xcBillTotal) * parseFloat(xcAjustAnount))/100);;
             break;
    case C_CMT_GEN_ADJUST_A :
             TmpResult = xcAjustAnount;
             break;
    case C_CMT_GEN_ADJUST_U :
             TmpResult = xcAjustAnount * xcClcamount;
             break;
  }

  return (TmpResult);
}

function CmtGetAdjustType(xcInx)
{
  var TmpResult = C_CMT_GEN_NONE;

  switch(xcInx)
  {
//    case 0 :
//             TmpResult = C_CMT_GEN_NONE;
//             break;
    case 0 :
             TmpResult = C_CMT_GEN_ADJUST_P;
             break;
    case 1 :
             TmpResult = C_CMT_GEN_ADJUST_A;
             break;
    case 2 :
             TmpResult = C_CMT_GEN_ADJUST_U;
             break;
  }

  return (TmpResult);
}

function CmtGetIfDisCountOrMarkUp(xcInx)
{
  var TmpResult = C_CMT_GEN_NONE;
                                                           
  switch(xcInx)
  {
    case 0 :
             TmpResult = C_CMT_GEN_NONE;
             break;
    case 1 :
             TmpResult = C_CMT_GEN_DISCOUNT;
             break;
    case 2 :
             TmpResult = C_CMT_GEN_MARKUP;
             break;
  }
  return (TmpResult);
}

function CmtSetGenItmArrF()
{
 CmtItemsPriceSrcArr   = CmtItemsPriceSrcArrF.slice();
 CmtItemsPriceArr      = CmtItemsPriceArrF.slice();
 CmtItemsIsHourArr     = CmtItemsIsHourArrF.slice();
 CmtItemsNameArr       = CmtItemsNameArrF.slice();
 CmtItemsCodesArr      = CmtItemsCodesArrF.slice();
 CmtItemsDescByNameArr = CmtItemsDescByNameArrF.slice();
 CmtItemsDescArr       = CmtItemsDescArrF.slice();
 CmtItemsRecIdArr      = CmtItemsRecIdArrF.slice();
}

function CmtSetGenItmArrX()
{
 CmtItemsPriceSrcArr   = CmtItemsPriceSrcArrX.slice();
 CmtItemsPriceArr      = CmtItemsPriceArrX.slice();
 CmtItemsIsHourArr     = CmtItemsIsHourArrX.slice();
 CmtItemsNameArr       = CmtItemsNameArrX.slice();
 CmtItemsCodesArr      = CmtItemsCodesArrX.slice();
 CmtItemsDescByNameArr = CmtItemsDescByNameArrX.slice();
 CmtItemsDescArr       = CmtItemsDescArrX.slice();
 CmtItemsRecIdArr      = CmtItemsRecIdArrX.slice(); 
}

function CmtSetGenItmArrP()
{
 CmtItemsPriceSrcArr   = CmtItemsPriceSrcArrP.slice();
 CmtItemsPriceArr      = CmtItemsPriceArrP.slice();
 CmtItemsIsHourArr     = CmtItemsIsHourArrP.slice();
 CmtItemsNameArr       = CmtItemsNameArrP.slice();
 CmtItemsCodesArr      = CmtItemsCodesArrP.slice();
 CmtItemsDescByNameArr = CmtItemsDescByNameArrP.slice();
 CmtItemsDescArr       = CmtItemsDescArrP.slice();
 CmtItemsRecIdArr      = CmtItemsRecIdArrP.slice(); 
}

function CmtSetGenItmArr(xcCode)
{
  if (xcCode ==  C_CMT_ITM_F)
    CmtSetGenItmArrF()
  else
  if (xcCode ==C_CMT_ITM_X)
    CmtSetGenItmArrX()
  else
  if (xcCode ==C_CMT_ITM_P)
    CmtSetGenItmArrP()
}