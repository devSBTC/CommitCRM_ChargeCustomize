var C_BC_STATUS_ACTIVE     = 'A';
var C_BC_STATUS_SUSPEND    = 'S';
var C_BC_STATUS_CANCELED   = 'C';
var C_BC_STATUS_TERMINATE  = 'T';

var C_BC_RECTYPE_CONTRACT  = 'C';
var C_BC_RECTYPE_TEMPLATE  = 'T';

var C_BC_TYPE_GEN          = 'G';
var C_BC_TYPE_HOURS_BANK   = 'H';
var C_BC_TYPE_MONEY_BANK   = 'M';
var C_BC_TYPE_TICKETS_BANK = 'T';
var C_BC_TYPE_WARRANTY     = 'W';

function CmtGetBctStartDate()
{
  return (CmtGetHidenFldStr("cmthidegenfldbctstartdate"))
}

function CmtGetBctEndDate()
{
  return (CmtGetHidenFldStr("cmthidegenfldbctenddate"))
}

function CmtGetBctStatus()
{
  return (CmtGetHidenFldStr("cmthidegenfldbctstatus"))
}

function CmtGetBctType()
{
  return (CmtGetHidenFldStr("cmthidegenfldbctcontracttype"))
}

function CmtGetBctAmountStart()
{
  return (Cmt_StrToFloatDef(CmtGetHidenFldStr("cmthidegenfldbctamountstart"),0))
}

function CmtGetBctAmountUsed()
{
  return (Cmt_StrToFloatDef(CmtGetHidenFldStr("cmthidegenfldbctclcamountused"),0))
}

function cmtIsSesDefBct()
{
  return (CmtHiddenFld2Bool("cmthidegenissysbct"))
}

function CmtBCTType2Unt(xcBctType)
{
  TmpResult = "";

  xcBctType = xcBctType.toUpperCase();

  if (xcBctType ==  C_BC_TYPE_MONEY_BANK   )
  {TmpResult = CmtGetCoinSign()}
  else
  {TmpResult = CmtBCTType2Name(xcBctType)}

  return(TmpResult);
}

function CmtBCTType2Name(xcBctType)
{
  TmpResult = "";

  xcBctType = xcBctType.toUpperCase();

  if (xcBctType ==  C_BC_TYPE_GEN)
  {TmpResult = "";}
  else if (xcBctType ==  C_BC_TYPE_HOURS_BANK   )
  {TmpResult = C_BCT_HOURS_BANK}
  else if (xcBctType ==  C_BC_TYPE_MONEY_BANK   )
  {TmpResult = C_BCT_MONEY_BANK}
  else if(xcBctType ==  C_BC_TYPE_TICKETS_BANK )
  {TmpResult = C_BCT_TKT_BANK}
  else if (xcBctType ==  C_BC_TYPE_WARRANTY     )
  {TmpResult = ""}

  return(TmpResult);
}

function IsExceedBct(xcAmountStart,xcAmountUsed,xcNewAmnt,xcPrvAmnt,xcBctType)
{
  TmpResult = false;
  aDif = 0;

  aDif = (xcAmountUsed-xcPrvAmnt+xcNewAmnt)- xcAmountStart;

//alert('SlpClc3: '+xcAmountUsed+" "+xcNewAmnt+" "+xcPrvAmnt+" "+xcBctType);

   if ((xcBctType == C_BC_TYPE_TICKETS_BANK)&&(aDif == 0))
   {
      TmpResult = confirm(GetTktFullUsed(xcAmountStart))
   }
   else if ( (aDif > 0) && (xcNewAmnt != xcPrvAmnt) )
   {
      TmpResult = confirm(GetBctMsgWillExcced(xcAmountStart,CmtDefFloatToStr(aDif),CmtBCTType2Name(CmtGetBctType()),CmtBCTType2Unt(CmtGetBctType()) ))
   }
   else
   {
      TmpResult = true
   }

  return(TmpResult);
}


function ChkBctCmb(xcInx)
{
  var TmpResult = false;

  if ( !CmtIsInsertMode() )
  {
    TmpResult = true
  }
  else
  if ( xcInx != 0 )
  {
    TmpResult = true
  }

  return(TmpResult);
}

function CanDisplayStrMnBct(xcStr)
{
  var TmpResult = "";  
 
  if (!CmtIsSlpQInsEdtMode())
    TmpResult = xcStr;    
  
  return(TmpResult);
}