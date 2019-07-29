//gen GEN

var C_BY_GEN_FLD   = -1;
var C_BY_INT       = 0;
var C_BY_FLOAT     = 1;
var C_BY_DATE      = 2;
var C_BY_TIME      = 3;
var C_BY_DATE_TIME = 4;
var C_BY_RECID     = 5;

var C_BY_EDIT_RQR = 100;
var C_BY_MEMO_RQR = 101;
var C_BY_CMB_RQR  = 102;
var C_BY_INT_RQR  = 103;
var C_BY_DATE_RQR = 104;
var C_BY_TIME_RQR = 105;



function CmtChkValidStrVal(xcVal)
{
  return true;
}

function CmtEmptyObj()
{
this.IsEmpty = false;
return this;
}


function CmtChkEmptyVals(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
var aObj = new CmtEmptyObj();
aObj.IsEmpty = false;
return (I_CmtChkEmptyVals(C_BY_GEN_FLD,xcVal,xcFldName,xcRequireVal,aObj,xcIsNotify4EmptyVal));
}

function I_CmtChkEmptyVals(xcKind, xcVal,xcFldName,xcRequireVal,Obj,xcIsNotify4EmptyVal)
{
var TmpResult = false;
var aGoOn  = false;
Obj.IsEmpty = false;

//alert(888+" BOF CmtChkEmptyVals");
 
  if ((xcKind == C_BY_EDIT_RQR)||(xcKind == C_BY_MEMO_RQR)||(xcKind == C_BY_CMB_RQR)||(xcKind == C_BY_INT_RQR)||(xcKind == C_BY_DATE_RQR)||(xcKind == C_BY_TIME_RQR))
  {
    Obj.IsEmpty = true;
    TmpResult = ChkEmtyValByKindRqr(xcKind, xcVal);    
  }  
  else
  if (CmtIsBlank(xcVal))
    TmpResult = false
  else
    TmpResult = true;
  
  if (!TmpResult) 
  {
    Obj.IsEmpty = true;
    if (!xcIsNotify4EmptyVal)
    {
      TmpResult = (!xcRequireVal);
    }
    else
    {
      if (xcRequireVal)
      {
        alert(GetFldMustHasValMsg(xcFldName));
      }
      else
      {
        TmpResult = confirm(GetFldHasNoValMsg(xcFldName));
      }
    }
  }

//alert(888+" EOF CmtChkEmptyVals "+"TmpResult "+TmpResult+" "+xcRequireVal+" "+xcFldName+" "+xcIsNotify4EmptyVal+" "+Obj.IsEmpty);

  return (TmpResult);
}

function CmtChkComboVals(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
var TmpResult = false;

//alert(888+" BOF CmtChkComboVals");

  if (xcVal>0)
  {
    TmpResult = true;
  }
  else
  {
    if (!xcIsNotify4EmptyVal)
    {
      TmpResult = (!xcRequireVal);
    }
    else
    {
      if (xcRequireVal)
      {
        alert(GetFldMustHasValMsg(xcFldName));
      }
      else
      {
        TmpResult = confirm(GetFldHasNoValMsg(xcFldName));
      }
    }
  }

//alert(888+" EOF CmtChkComboVals "+TmpResult+" "+xcRequireVal+" "+xcFldName+" "+xcIsNotify4EmptyVal);

  return (TmpResult);
}

function ChkByKind(xcKind, xcVal)
{
  var TmpResult = false;

  xcVal = CmtTrim(xcVal);

   switch(xcKind)
  {
    case C_BY_INT :
             TmpResult = Cmt_I_ChkValidInt(xcVal);
             break;
    case C_BY_FLOAT:
             TmpResult = Cmt_I_ChkValidFloat(xcVal);
             break;
    case C_BY_DATE:
             TmpResult = Cmt_I_isValidDate(xcVal,false);
             break;
    case C_BY_TIME:
             TmpResult = Cmt_I_isValidTime(xcVal);
             break;
    case C_BY_DATE_TIME:
             TmpResult = Cmt_I_isValidDateTime(xcVal);
             break;
    case C_BY_RECID:
             TmpResult = true;
             break;
  }

//alert(888+"ChkByKind "+TmpResult+" "+xcKind+" "+"ByKind");
  return (TmpResult);
}

function CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,xcKind,xcIsNotify4EmptyVal)
{
    var TmpResult = false;
    var aObj = new CmtEmptyObj();
    aObj.IsEmpty = false;
    if (!I_CmtChkEmptyVals(xcKind,xcVal,xcFldName,xcRequireVal,aObj,xcIsNotify4EmptyVal)){return false;}
    else
    {
      if (aObj.IsEmpty)
      {TmpResult = true;}
      else
      {
        if (ChkByKind(xcKind, xcVal))
          {TmpResult = true;}
        else
          {alert(GetIlLegalMsg(xcFldName,xcKind));}
      }
    }

//alert(888+" EOF CmtMainChkValidation" +xcVal+" "+TmpResult+" "+xcFldName+" "+xcRequireVal+" "+xcKind+" "+aObj.IsEmpty);
    return (TmpResult);
}

function CmtIzZero(xcVal,xcFldName,xcNotify,xcMsg)
{
    var TmpResult = false;

    if (Cmt_StrToFloatDef(xcVal,-1) == 0)
    {
      TmpResult = false;
      if (xcNotify)
        TmpResult = confirm(GetFldHasNoValMsg(xcFldName));
    }
    else
    {
      TmpResult = true;
    }

//alert(888+" EOF CmtIzZero"+xcVal+" "+xcFldName+" "+xcNotify+" "+xcMsg);
    return (TmpResult);
}


function CmtChkValidIntegerVal(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_INT,xcIsNotify4EmptyVal));
}

function CmtChkValidFloatVal(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_FLOAT,xcIsNotify4EmptyVal));
}

function CmtChkValidDateVal(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_DATE,xcIsNotify4EmptyVal));
}

function CmtChkValidTimeVal(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_TIME,xcIsNotify4EmptyVal));
}

function CmtChkValidDateTimeVal(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{                                                         
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_DATE_TIME,xcIsNotify4EmptyVal));
}

function CmtChkRecIdWasSel(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(CmtGetHidenFldStr(xcVal),xcFldName,xcRequireVal,C_BY_RECID,xcIsNotify4EmptyVal));
}

function Cmt_isEarlyByKind(xcKind,start,end,xcCanBeEqual)
{
  var TmpResult = false;

//alert(888 +"BOF Cmt_isEarlyByKind "+TmpResult+" "+xcKind+" "+start+" "+end);

  if (xcKind == C_BY_DATE)
    {TmpResult = Cmt_I_isDateEarlierOrEqual(start,end,xcCanBeEqual)}
  else if (xcKind == C_BY_TIME)
    { TmpResult = Cmt_I_isTimeEarlierOrEqual(start,end,xcCanBeEqual)}
  else if (xcKind == C_BY_DATE_TIME)
    { TmpResult = Cmt_I_isDateTimeEarlierOrEqual(start,end,xcCanBeEqual)}

//alert(888 +"EOF Cmt_isEarlyByKind "+TmpResult+" "+xcKind+" "+start+" "+end);

  return (TmpResult);
}

function Cmt_isEarlierOrEqual(start,end,xcKind,xcFldName1,xcFldName2,xcRequireVal1,xcRequireVal2,xcIsNotify,xcCanBeEqual,xcMsg)
{
  var TmpResult = false;
  var aObj1 = new CmtEmptyObj();
  aObj1.IsEmpty = false;
  var aObj2 = new CmtEmptyObj();
  aObj2.IsEmpty = false;

//alert(888+" BOF Cmt_isEarlierOrEqual "+"TmpResult "+TmpResult+" "+xcFldName1+" "+xcFldName2+" "+xcRequireVal1+" "+xcRequireVal2+" "+xcIsNotify+" "+xcMsg);

  if ( !I_CmtChkEmptyVals(C_BY_GEN_FLD,start,xcFldName1,xcRequireVal1,aObj1,xcRequireVal1) )
  {
    TmpResult = (!xcRequireVal1);
  }
  else
  if ( !I_CmtChkEmptyVals(C_BY_GEN_FLD,end,xcFldName2,xcRequireVal2,aObj2,xcRequireVal2) )
  {
    TmpResult = (!xcRequireVal2);
  }
  else
  if (aObj1.IsEmpty)
  {
    TmpResult = (!xcRequireVal1);
  }
  else
  if (aObj2.IsEmpty)
  {
    TmpResult = (!xcRequireVal2);
  }
  else
  {
    if ( Cmt_isEarlyByKind(xcKind,start,end,xcCanBeEqual) )
    {
      TmpResult = true;
    }
    else
    {
      if ((xcMsg !=  "")&&(xcIsNotify))
        alert(xcMsg);
      TmpResult = false;
    }
  }

//alert(888+" EOF Cmt_isEarlierOrEqual "+"TmpResult "+TmpResult+start+" "+end+" "+xcKind+" "+xcFldName1+" "+xcFldName2+" "+xcRequireVal1+" "+xcRequireVal2+" "+xcIsNotify+" "+xcMsg  +" "+aObj1.IsEmpty+" "+aObj2.IsEmpty);
//alert(888+" EOF Cmt_isEarlierOrEqual "+"TmpResult "+TmpResult+start+" "+end+" "+xcKind+" "+xcRequireVal1+" "+xcRequireVal2+" "+xcIsNotify+" "+" "+aObj1.IsEmpty+" "+aObj2.IsEmpty);

  return (TmpResult);
}

function CmtNumToString(number)
{
  number += "";
  return number;
}


function Cmt_StrToFloatDef(xcVal,xcDefVal)
{
  var TmpResult = 0;

  xcVal = CmtTrim(xcVal);

  if (!Cmt_I_ChkValidFloat(xcVal))
    {TmpResult = xcDefVal;}
  else
    {TmpResult = parseFloat(xcVal);}

  return(TmpResult);
}

function CmtDefFloatToStr(xcDif)
{
  return(CmtFloatToStr(xcDif,2))
}

function xxoldCmtFloatToStr(xcDif,xcPrecision)
{
var TmpResult = "";

  if (typeof(xcDif) == "number")
    {aDif = CmtNumToString(xcDif)}
  else
    {aDif = xcDif}

  aDif = CmtTrim(aDif);

  if  ( aDif.indexOf(".") == -1 )
  {
    TmpResult = aDif +"." + CmtStringOfChar("0",xcPrecision);
  }
  else
  {
    aDif = aDif.split(".");

    aInt  = aDif[0];
    aFrac = aDif[1];

    aFrac = CmtNumToString(aFrac);

    if (xcPrecision > 0)
      if (aFrac.length < xcPrecision )
         {aFrac = aFrac + CmtStringOfChar("0",xcPrecision - aFrac.length);}
      else if( aFrac.length >= xcPrecision )
       {aFrac = aFrac.substr(0,xcPrecision) };


    if(aFrac.length > 0)
      aFrac = "."+aFrac ;

    TmpResult = aInt+ aFrac;
  }
return ( TmpResult );

}

function CmtFloatToStr(value, precision)
{
    var power = Math.pow(10, precision  );
    return (Math.round(value * power) / power);
}

function CmtConcatDateTime(xcDate,xcTime)
{
  var TmpResult = CmtTrim(CmtTrim(xcDate)+" "+CmtTrim(xcTime));
  return(TmpResult);
}

//---- Time
function CmtGetTimesDif(xcFrom,xcTo,xcAsMin)
{
  var TmpResult = 0;

//alert(xcFrom);
//alert(xcTo);
//alert(xcAsMin);

  if (CmtIsAmPmTime())
  {
    xcFrom = Cmt_I_CnvAmPm2Miltary(xcFrom);
    xcTo = Cmt_I_CnvAmPm2Miltary(xcTo);
  }

//alert(xcFrom);
//alert(xcTo);
//alert(xcAsMin);

  var aFrom = xcFrom.split(":");
  var aTo   = xcTo.split(":");

  TmpResult = ( ( ( (parseFloat(aTo[0])*60)  + parseFloat(aTo[1])   ) - ( parseFloat((aFrom[0])*60)+ parseFloat(aFrom[1]) ) ) );

  if (!xcAsMin)
    TmpResult = TmpResult / 60;

  return(TmpResult);
}

function CmtExtractTimeHours(xcTime)
{
  return (Math.floor( xcTime / 60 ));
}

function CmtExtractTimeMin(xcTime)
{
  return (Math.floor( xcTime % 60 ));
}

function CmtRemoveDateTimeSpaces(strDateTime)
{
  var TmpResult = "";
  var aWasSp = false;

   strDateTime = CmtTrim(strDateTime);
   for(var i = 0; i < strDateTime.length; i++)
   {
     var c = strDateTime.charAt(i);
       if ( (c == ' ')&&(aWasSp) )
       {
         TmpResult = TmpResult + "";
       }
       else
       {
         if ((c == ' ')&&(!aWasSp))
           aWasSp = true;
         TmpResult = TmpResult + c;
       }
    }


  return(TmpResult);
}

function CmtTrimDateTime(strDateTime)
{
  strDateTime = CmtRemoveDateTimeSpaces(strDateTime);

  if ((strDateTime.indexOf(" ")> -1))
  {
    var  strDateTime1 = strDateTime.split(" ");
    strDateTime = CmtTrim(strDateTime1[0])+" "+CmtTrim(strDateTime1[1]);
  }
  return(strDateTime)
}

function CmtGetCurDateAsStr()
{
  var diff=new Date();
  return(CmtGetGenDateAsStr(diff))
}

function CmtGetGenDateAsStr(xDt)
{
  var TmpResult = "";

  var y  = CmtNumToString(xDt.getFullYear());
  var mo = CmtNumToString(xDt.getMonth()+1);
  var d  = CmtNumToString(xDt.getDate());

  mo = CmtStringOfChar("0",2 - mo.length) + mo;
  d  = CmtStringOfChar("0",2 - d.length)  + d;

  if (CmtFormatDateName == "EU")
  {
    TmpResult = d + CmtDateSep + mo + CmtDateSep + y
  }
  else
  {
    TmpResult = mo + CmtDateSep + d + CmtDateSep + y
  }

  return(TmpResult);
}

function CmtGetCurTimeAsStr()
{
  var diff=new Date();
  return(CmtGetGenTimeAsStr(diff))
}

function CmtGetGenTimeAsStr(xDt)
{
  var aVal = CmtGetTimeAsStr(xDt);
  return(aVal);
}

function CmtGetCurTimeMS() {
  var my_current_timestamp;
  my_current_timestamp = new Date();		//stamp current date & time
  return my_current_timestamp.getTime();
}

function CmtGetTimeAsStr(xTime)
{
  var TmpResult = "";

  var h  = CmtNumToString(xTime.getHours());
  var mi = CmtNumToString(xTime.getMinutes());

  h  = CmtStringOfChar("0",2 - h.length)  + h;
  mi = CmtStringOfChar("0",2 - mi.length) + mi;

  TmpResult = h+":"+mi;

//alert("CmtDebug CmtGetCurTimeAsStr "+TmpResult)

  if (CmtIsAmPmTime())
    TmpResult = Cmt_I_CnvMiltary2AmPm(TmpResult);

//alert("CmtDebug1 CmtGetCurTimeAsStr "+TmpResult)

  return(TmpResult);
}

function CmtGetCurDateTimeAsStr()
{
  var diff=new Date();
  return(CmtGetGenDateTimeAsStr(diff));
}

function CmtGetGenDateTimeAsStr(xDt)
{
  return(CmtTrim(CmtTrim(CmtGetGenDateAsStr(xDt))+" "+CmtTrim( CmtGetGenTimeAsStr(xDt))))
}

//-----------------INTERNAL----------------

function Cmt_I_ChkValidFloat(xcVal)
{
  var TmpResult = false;

  if (CmtTrim(xcVal) != "")
  {
    var myRegExp = new RegExp("^[/+|/-]?[0-9]*[/.]?[0-9]*$");
    TmpResult = (myRegExp.test(xcVal));
  }

  return(TmpResult);
}

function Cmt_I_isValidTime(strTime)
{
  var TmpResult = false;

  if (CmtIsAmPmTime())
  { TmpResult = Cmt_I_isValidAmPmTime(strTime) }
  else
  { TmpResult = Cmt_I_isValidMiltaryTime(strTime) }

  return(TmpResult);
}


function CmtIsHasAm(xcStrTime)
{
  var aStrTime;
  var TmpResult = false;
  aStrTime = xcStrTime;
  aStrTime = CmtTrim(aStrTime.toUpperCase());

  if ((aStrTime  == "AM")||(aStrTime  == "A"))
    TmpResult = true;

  if ( !TmpResult )
  {
    if ( (aStrTime.substr(aStrTime.length-2,2)== "AM" ) )
    {  TmpResult = true; }
    else
    { if ( (aStrTime.substr(aStrTime.length-1,1)== "A" ) )
        TmpResult = true;
    }
  }

  return ( TmpResult )
}

function CmtIsHasPm(xcStrTime)
{
  var aStrTime;
  var TmpResult = false;
  aStrTime = xcStrTime;
  aStrTime = CmtTrim(aStrTime.toUpperCase());

  if ((aStrTime  == "PM")||(aStrTime  == "P"))
    TmpResult = true;

  if ( !TmpResult )
  {
    if ( (aStrTime.substr(aStrTime.length-2,2)== "PM" ) )
    {  TmpResult = true; }
    else
    { if ( (aStrTime.substr(aStrTime.length-1,1)== "P" ) )
        TmpResult = true;
    }
  }

  return ( TmpResult )
}

//function CmtFixAmPmEditIfNeed(xcEdt)
function CmtFixTimeFmtEditIfNeed(xcEdt, xAlwAmPm)
{
  var aStrTime = xcEdt.value;
  var aVal = "";
  var aVld = false;
  aStrTime = CmtAutoCpltTimeEdtfNeedBf(aStrTime);
  aVal = aStrTime;  //alert(aVal);


    if ( (xAlwAmPm)&&((CmtIsAmPmTime()))&&( Cmt_I_isValidAmPmTime(aStrTime)) )
    {
        aVld = true;    //alert(5); alert(aStrTime);
        aStrTime = CmtFixAmPmIfNeed(aStrTime);
        if ((aStrTime == "")&&(aVal != ""))
        {
//        alert(800);
        aStrTime = aVal;
        }
    }
    else
    {
      if (Cmt_I_isValidMiltaryTime(aStrTime))
      {
        aVld = true;
        if ( (xAlwAmPm) && (CmtIsAmPmTime()) )
          aStrTime = Cmt_I_CnvMiltary2AmPm(aStrTime);
//       alert(6); alert(aStrTime);
      }
    }

 if (aVld)
   if ( (aStrTime != "")&& (aStrTime != xcEdt.value) )
   {xcEdt.value = aStrTime}
   else
   {CmtAutoCpltTimeEdtfNeed(xcEdt)}
}

function CmtFixAmPmIfNeed(xcStrTime)
{
  var TmpResult = "";
                 //alert(9);
  if (Cmt_I_isValidAmPmTime(xcStrTime))
  {                //       alert(91);
    xcStrTime = CmtTrim(xcStrTime);
    var c = xcStrTime.charAt(xcStrTime.length-1);
    var c1 = xcStrTime.charAt(xcStrTime.length-2);
    var c2 = xcStrTime.charAt(xcStrTime.length-3);
    c = c.toUpperCase();
    c1 = c1.toUpperCase();
    if ((c == "A")||(c == "P"))
    {
      TmpResult = xcStrTime.substr(0,xcStrTime.length-1);
      TmpResult = CmtTrim(TmpResult);
      TmpResult = TmpResult+" "+c+"M";
    }
    else
    if ( (c == "M") && (c2 != " ") &&( (c1  == "A")||(c1 == "P") ) )
    {            //                 alert(92);
      TmpResult = xcStrTime.slice(0,xcStrTime.length-2)+" "+c1+c;
//      alert(TmpResult);
    }
      TmpResult = TmpResult.toUpperCase();
  }

  return ( TmpResult )
}

function Cmt_I_isValidAmPmTime(xcStrTime)
{
  return( (Cmt_I_CnvAmPm2Miltary(xcStrTime) != "" ) )
}

function Cmt_I_CnvAmPm2Miltary(xcStrTime)
{
  var TmpResult = "";       //alert('*'+xcStrTime);
  var aGoOn = false;
  var aStrTime = "";
  var aIsHasAm = false;
  var aIsHasPm = false;
  var h = "";
  var m = "";
  var iH = 0;
  var iM = 0;
  var aStrTime1 = "";
  aStrTime = xcStrTime;
  aStrTime = CmtTrim(aStrTime.toUpperCase());


  if ((aStrTime.indexOf(":") >= 0)&&(aStrTime.length >= 3))
  {
    aStrTime1 = aStrTime;
    aIsHasAm = CmtIsHasAm(aStrTime.substr(aStrTime.length-3,3));
    aIsHasPm = CmtIsHasPm(aStrTime.substr(aStrTime.length-3,3));

    if (!aIsHasAm)
      aIsHasAm = CmtIsHasAm(aStrTime.substr(aStrTime.length-4,4));
    if (!aIsHasPm)
      aIsHasPm = CmtIsHasPm(aStrTime.substr(aStrTime.length-4,4));

    aStrTime1 = aStrTime.split(":");
    h = aStrTime1[0];
    m = aStrTime1[1];
    m = m.substr(0,2);

    if( Cmt_I_ChkValidInt(h) && Cmt_I_ChkValidInt(m) )
    {
      iH = Cmt_StrToIntDef(h);
      iM = Cmt_StrToIntDef(m);

      if ( (iH > 0 )&&(iH <= 12) )
      {
        if ( (aIsHasAm) || (aIsHasPm) )
        {
          if ( (iH > 12)||(iH == 0 ) )
           {aGoOn = false}
         else
           {aGoOn = true}
        }
        else
        {
          if ( (iH > 12)||(iH == 0 ) )
           {aGoOn = true}
          else
           {aGoOn = false}
        }

        if (aGoOn)
          if ( (iM < 0 ) || (iM >59) )
            aGoOn = false;

        if (aGoOn)
         if ((iH != 12)&&(aIsHasPm))
          {iH = iH + 12}
         else
         {
          if ((iH == 12)&&(aIsHasAm))
            iH = 0
        }

        if (aGoOn)
         TmpResult = CmtNumToString(iH)+":"+m;
      }
    }
  }
//   alert(TmpResult);
  return(TmpResult);
}

function Cmt_I_isValidMiltaryTime(strTime) {
	// Checks if time is in HH:MM:SS format.
	// The seconds are optional.

        strTime = CmtTrim(strTime);

        var timePat = /^(\d{1,2}):(\d{2})(:(\d{2}))?$/;
	var matchArray = strTime.match(timePat);
	if (matchArray == null) {
		return false;
	}

	var hour = matchArray[1];
	var minute = matchArray[2];
	var second = matchArray[4];
                                //alert(hour);alert(minute);alert(second);
	if (second=="") { second = null; }

	if (hour < 0  || hour > 23) {
		return false;
	}

	if (minute<0 || minute > 59) {
		return false;
	}
	if (second != null && (second < 0 || second > 59)) {
		return false;
	}
	return true;
}

function Cmt_I_CnvMiltary2AmPm(xcStrTime)
{
  var TmpResult = "";
  var aGoOn = false;
  var aStrTime = "";
  var aAmPmSufx = "";
  var aZeroPrfx = "";
  aStrTime = xcStrTime;

  aStrTime = CmtTrim(aStrTime.toUpperCase());

  if (Cmt_I_isValidMiltaryTime(xcStrTime))
    if ((aStrTime.indexOf(":") >= 0)&&(aStrTime.length >= 3))
    {
      var aStrTime1 = aStrTime;
      var aIsHasAm = CmtIsHasAm(aStrTime.substr(aStrTime.length-3,3));
      var aIsHasPm = CmtIsHasPm(aStrTime.substr(aStrTime.length-3,3));

      if (!aIsHasAm)
        aIsHasAm = CmtIsHasAm(aStrTime.substr(aStrTime.length-4,4));
      if (!aIsHasPm)
        aIsHasPm = CmtIsHasPm(aStrTime.substr(aStrTime.length-4,4));

      aStrTime1 = aStrTime.split(":");
      var h = aStrTime1[0];
      var m = aStrTime1[1];
      m = m.substr(0,2);

      if( Cmt_I_ChkValidInt(h) && Cmt_I_ChkValidInt(m) )
      {
        var iH = Cmt_StrToIntDef(h);
        var iM = Cmt_StrToIntDef(m);


//alert("CmtDebug11 CmtCmt_I_CnvMiltary2AmPm"+" "+iH +" "+iM );

// JS TIME 0 - 23

          if (iH == 0)
          {
            iH = iH + 12;
            aAmPmSufx = "AM" ;
//            alert("CmtDebug1 CmtCmt_I_CnvMiltary2AmPm"+" "+iH +" "+iM+" "+ aAmPmSufx );
          }
          else if (iH < 12)
          {
            aAmPmSufx = "AM";
//            alert("CmtDebug2 CmtCmt_I_CnvMiltary2AmPm"+" "+iH +" "+iM+" "+ aAmPmSufx );
          }
          else if (iH > 12)
          {
            iH = iH - 12;
            aAmPmSufx = "PM";
//            alert("CmtDebug3 CmtCmt_I_CnvMiltary2AmPm"+" "+iH +" "+iM+" "+ aAmPmSufx );
          }
          else if (iH == 12)
          {
            aAmPmSufx = "PM";
//            alert("CmtDebug31 CmtCmt_I_CnvMiltary2AmPm"+" "+iH +" "+iM+" "+ aAmPmSufx );
          }


//alert("CmtDebug4 CmtCmt_I_CnvMiltary2AmPm"+" "+iH +" "+iM+" "+ aAmPmSufx );

          if (iH < 10)
            aZeroPrfx = "0";

//alert("CmtDebug5 CmtCmt_I_CnvMiltary2AmPm"+" "+iH +" "+iM+" "+ aAmPmSufx );

          TmpResult = aZeroPrfx+CmtNumToString(iH)+":"+m+" "+aAmPmSufx;

      }
    }

//alert("CmtDebug Cmt22"+" "+ TmpResult +" "+ aAmPmSufx);

  return(TmpResult);
}

function Cmt_I_isValidDate(d,convert) {

	//var strDatestyle = "US"; //United States date style
	//var strDatestyle = "EU";  //European date style
        var strDatestyle = CmtFormatDateName;
        var strTemp = "";
	var strDate = "";
	var strDateArray;
	var strDay = "";
	var strMonth = "";
	var strYear = "";
	var intDay = 0;
	var intMonth = 0;
	var intYear = 0;
	var booFound = false;
	var strSeparatorArray = new Array("-"," ","/",".");
//        var strSeparatorArray = new Array(CmtDateSep);
	var intElementNr = 0;
	var err = 0;
	var strMonthArray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
	strDate = CmtTrim(d);

	if (strDate.length < 1) {
		return false;
	}
//	if (strDate.toLowerCase()=="today" || strDate.toLowerCase()=="now"){return true;}

	for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
		if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
			strDateArray = strDate.split(strSeparatorArray[intElementNr]);
			if (strDateArray.length != 3)
			{
				err = 1;
				return false;
			}
			else
			{
				strDay = strDateArray[0];
				strMonth = strDateArray[1];
				strYear = strDateArray[2];
			}
			booFound = true;
		}
	}

	if (booFound == false) {
		if (strDate.length>5) {
			strDay = strDate.substr(0, 2);
			strMonth = strDate.substr(2, 2);
			strYear = strDate.substr(4);
		}
		else
			return false;
	}

	// verify year part	2 or 4 digits
	if (strYear.length != 2 && strYear.length != 4) {return false;}
	if (isNaN(strYear)){return false;}
	// US style (swap month and day)
	if (strDatestyle == "US") {
		strTemp = strDay;
		strDay = strMonth;
		strMonth = strTemp;
	}

	// verify 1 or 2 digit integer day
	if (strDay.length<1 || strDay.length>2) {return false;}
	if (isNaN(strDay)){return false;}

	// month may be digits of characters, hence following check
	intMonth = parseInt(strMonth, 10);
	if (isNaN(intMonth)) {
		for (i = 0;i<12;i++) {
			if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
				intMonth = i+1;
				strMonth = strMonthArray[i];
				i = 12;
			}
		}
		if (isNaN(intMonth)) {
			err = 3;
			return false;
		}
	}

	intDay=parseInt(strDay,10);
	intYear = parseInt(strYear, 10);

	if (intMonth>12 || intMonth<1) {          
		err = 5;
		return false;
	}

	// day in month check
	if (intDay < 1 || intDay > 31){return false;}

	if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intDay > 30)) {
		return false;
	}

	if (intMonth == 2) {
		if (Cmt_I_LeapYear(intYear)) {
			if (intDay > 29) {return false;}
		}
		else
		{
			if (intDay > 28) {return false;}
		}
	}
             
	if (!convert)
		return true;
	else
	{         
		if (intYear<=99){intYear=intYear+2000;}
//		return intDay+"/"+intMonth+"/"+intYear;
               return intDay+CmtDateSep+intMonth+CmtDateSep+intYear;
	}
}

// check a composite date/time field
// assume date is everything up to first space
// and time is everything after first space

function Cmt_I_isValidDateTime(strDateTime)
{

    	var dt = CmtTrimDateTime(strDateTime);
        var intMatch;
	var intDateOnly = false;
//	if (strDateTime.toLowerCase()=="today" || strDateTime.toLowerCase()=="now"){return true;}
	intMatch=dt.indexOf(":");
	if (intMatch < 0)
	{
		intDateOnly = true;
		intMatch=dt.length;
                return false;//david 13.11.2005
	}
	else
	{
		intMatch=dt.indexOf(" ");
	}
	if (intMatch < 0) {return false;}

	// check date
	if (!Cmt_I_isValidDate(dt.substr(0,intMatch),false)){return false;}

	// check time
	if (!intDateOnly) {
		if (!Cmt_I_isValidTime(dt.substr(intMatch+1,dt.length-intMatch))){return false;}
	}
	return true;
}


function Cmt_I_LeapYear(intYear) {
	if (intYear % 100 == 0) {
		if (intYear % 400 == 0) { return true; }
	}
	else {
		if ((intYear % 4) == 0) { return true; }
	}
	return false;
}

function Cmt_I_isDateTimeEarlierOrEqual(start,end,xcCanBeEqual)
{
   var TmpResult = false;

   if ( (start == end)&&(xcCanBeEqual) )
   {
     TmpResult = true
   }
   else
   {
     // convert dates to dd/mm/yyyy

     var start1 = start;
     var end1   = end;

     var startparts= start1.split(" ");
     var endparts= end1.split(" ");

     var aStartDate = startparts[0];
     var aStartTime = startparts[1];
     var aEndDate   = endparts[0];
     var aEndTime   = endparts[1];

     if (CmtIsAmPmTime())
     {
       aStartTime = aStartTime +" "+ startparts[2];
       aEndTime =   aEndTime   +" "+ endparts[2];
     }

     if ( !Cmt_I_isDateEarlierOrEqual(aStartDate,aEndDate,true) )//same date but not same time ignore xcCanBeEqual so that go to  time chk
       { TmpResult = false;}
     else if (aStartDate == aEndDate)
     {
        TmpResult = Cmt_I_isTimeEarlierOrEqual(aStartTime,aEndTime,xcCanBeEqual);
     }
     else
       { TmpResult = true;}
   }
   return(TmpResult);
}

function Cmt_I_isDateEarlierOrEqual(start,end,xcCanBeEqual)
{

   if ( (start == end)&&(xcCanBeEqual) )
   {
     return true;
   }
   else
   {
	// convert dates to dd/mm/yyyy
	var myStart = Cmt_I_isValidDate(start,true);
	var myEnd = Cmt_I_isValidDate(end,true);

	if (myStart=="" || myEnd=="") return false;

//	var startparts= myStart.split("/");
//	var endparts=myEnd.split("/");
  	var startparts= myStart.split(CmtDateSep);
  	var endparts=myEnd.split(CmtDateSep);

//        alert(Date.UTC(startparts[2],startparts[1],startparts[0]));
//        alert(Date.UTC(endparts[2],endparts[1],endparts[0]));
  var d1 = new Date(Cmt_StrToIntDef(startparts[2],0),Cmt_StrToIntDef(startparts[1],0)-1,Cmt_StrToIntDef(startparts[0],0));
  var d2 = new Date(Cmt_StrToIntDef(endparts[2],0)  ,Cmt_StrToIntDef(endparts[1],0)-1  ,Cmt_StrToIntDef(endparts[0],0));

	//if (Date.UTC(startparts[2],startparts[1],startparts[0]) < Date.UTC(endparts[2],endparts[1],endparts[0]))
  if (d1 < d2)
		return true;
	else
		return false;
   }
}

function Cmt_I_isTimeEarlierOrEqual(start,end,xcCanBeEqual)
{
   if ( (start == end)&&(xcCanBeEqual) )
   {
     return true;
   }
   else
   {
	// convert times to UTC dates

       if (CmtIsAmPmTime())
       {
         start = Cmt_I_CnvAmPm2Miltary(start);
         end = Cmt_I_CnvAmPm2Miltary(end);
       }

	if (start=="" || end=="") return false;

	var startparts= start.split(":");
	var endparts=end.split(":");

	if (Date.UTC(2000,1,1,startparts[0],startparts[1]) < Date.UTC(2000,1,1,endparts[0],endparts[1]))
		return true;
	else
		return false;
   }
}

//alert("CmtDebug  Cmt"+" "+ +" "+ );
//alert("CmtDebug  Cmt"+" "+ TmpResult +" "+ );

function CheckEmail(xcEml,xcNtfy)
{
  var TmpResult = false;

  if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(xcEml))
    TmpResult=true
   else
   {
     if (xcNtfy)
       alert("Please input a valid email address!")
     TmpResult=false
   }
   return (TmpResult)
}

function CmtAddColonBf(xcStr)
{
  var aGoOn = false;
  var aVal = "";
  var TmpResult = "";

  if (xcStr != "")
  {
    if (xcStr.length == 4)
    { aGoOn = true;}
    else
    if ( (xcStr.length > 4) && (xcStr.length <= 7) && (CmtIsAmPmTime()) )
    {
      aVal = CmtTrim(xcStr.slice(4,xcStr.length));
      aVal = aVal.toUpperCase(); //alert(aVal);
      if  ( (aVal == 'A') || (aVal == 'AM') || (aVal == 'P') || (aVal == 'PM'))
      { aGoOn = true;
      //  alert(aGoOn);
      }
    }

    if (aGoOn)
      if ( (xcStr.length >= 4) && ( xcStr.indexOf(":") == -1 ) )
        if ( Cmt_I_ChkValidInt(xcStr.charAt(0)) &&
             Cmt_I_ChkValidInt(xcStr.charAt(1)) &&
             Cmt_I_ChkValidInt(xcStr.charAt(2)) &&
             Cmt_I_ChkValidInt(xcStr.charAt(3))   )
             {
              TmpResult = xcStr.slice(0,2)+":"+xcStr.slice(2,xcStr.length);
              //alert(TmpResult);
             }

  }
  return(TmpResult);
}

function CmtCmpltMin(xcStr)
{
   var TmpResult = "";
   var aVal = "";
   var aClnInx = -1;
   var aAMPNInx = -1;
   var aAMPNVal = "";
   xcStr = xcStr.toUpperCase();

   for(var i = 0; i < xcStr.length; i++)
   {
     if (xcStr.charAt(i) != " ")
     {
       if (( (xcStr.charAt(i) != "A")&&(xcStr.charAt(i) != "P")&&(xcStr.charAt(i) != "M") ) || (!CmtIsAmPmTime()))
         aVal = aVal + xcStr.charAt(i);
       if ( (aClnInx == -1)  && (xcStr.charAt(i) == ":")) aClnInx = i;
       if ( (aAMPNVal == "") &&  (xcStr.charAt(i) == "A")||(xcStr.charAt(i) == "P") ) aAMPNVal = xcStr.charAt(i);
       if ( (aAMPNVal.length == 1)&&(aAMPNInx == -1))  aAMPNInx  = i;
       if ( (aAMPNVal != "") &&  (xcStr.charAt(i) == "M") && (aAMPNInx  == i-1)){aAMPNVal = aAMPNVal + xcStr.charAt(i)};
//alert( aAMPNInx );alert( i );alert( aAMPNVal ); alert( ( (aAMPNVal != "") &&  (xcStr.charAt(i) == "M") && (aAMPNInx  == i-1)) );
     }
   }

   aVal = CmtTrim(aVal);
   
   if ( aClnInx == -1)
   {
      if (aVal <= 23)
       TmpResult = CmtTrim(aVal + ":" + "00" + ' '+ aAMPNVal);
   }
   else
   {
      aTime = aVal.split(":");
      aH  = aTime[0];
      aT = aTime[1];
//      alert(aVal);
//      alert(aTime);
//      alert(aH);
//      alert(aT);
      if (aT == "")
        TmpResult = CmtTrim(aH + ":" + "00" + ' '+ aAMPNVal)
   }

  return(TmpResult);
}

function CmtAutoCpltTimeEdtfNeedBf(xcStr)
{
  var TmpResult = "";
  var aVal = "";

  aVal = CmtAddColonBf(xcStr);
  if (aVal == "")
    aVal = CmtCmpltMin(xcStr);

  if (aVal != "")
  {TmpResult = aVal}
  else
  {TmpResult = xcStr}

  return(TmpResult);
}

function CmtAutoCpltTimeEdtfNeed(xcEdt)
{
  var aStrTime = xcEdt.value;


 if ( (aStrTime != "")&& (aStrTime != xcEdt.value) )
   {xcEdt.value = aStrTime}
}

function CmtGenGetShortMonthName(xM)
{
  var TmpResult = "";

  if (xM >= 0 && xM <= 11)
   TmpResult = CMT_GEN_MONTH_NAMES_SHORT[xM];

  return(TmpResult);
}

function CmtCtrlGenUsrFldCtrlChange(xThis)
{
//  CmtFixAmPmEditIfNeed(xThis)
}

function CmtCtrlGenLnkRecIdCtrlChange(xId)
{
//document.getElementById("cmbevteditselectrecid" + xId).parentNode.hasClass("active")
//alert(95);  //HIDDEN_cmthidecmbevteditselectrecid
   var aId = "cmb"+CmtGenGetRecType()+"editselectrecid";
   document.getElementById(C_CMT_GEN_EX_HIDDEN_FULL + aId).value = xId;
   $("#" + aId + " .active").removeClass("active");
   $("#" + aId +   xId).parent('li').addClass("active");
   document.getElementById("Spn"+aId).innerHTML = document.getElementById(aId+xId).innerHTML;
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function CmtSetEdtFrmGuiOnLoadLnkRecidEx( xRecType )
{


  if (CmtIsElmExists("CmbGenLnkRecId"))
    if (CmtIsElmExists("CmbGenLnkRecIdX"))
      if (!CmtIsElmExists("cmb" + xRecType + "editselectrecid"))
        document.getElementById("CmbGenLnkRecId").id = document.getElementById("CmbGenLnkRecId").id + "X";

  ShowHideLinkRecidIncDec();
  CmtSetEdtFrmGuiOnLoadGen();  
}

function CmtSetEdtFrmGuiOnLoadLnkRecid()
{
  CmtSetEdtFrmGuiOnLoadLnkRecidEx( CmtGenGetRecType() )
}

function CmtSetEdtFrmGuiOnLoadGenEx(xRecType, xPrfx)
{
  CmtShowElmByIdCnd(xPrfx + xRecType + "edit", (CmtGetInnerHTMLById(xPrfx + xRecType + "edit") != "") );
}


function CmtSetEdtFrmGuiOnLoadGen()
{
  CmtSetEdtFrmGuiOnLoadGenByGenRecType(CmtGenGetRecType());
}

function CmtSetLblOfCrdInstOfCmb(xId)
{
//  if ( !CmtIsElmExists(xId) )
//  {
//    CmtAddClassById("CmtEdtCrdIdCtrl", "CmtDisplayNone");
//    CmtRemoveClassById("CmtEdtCrdIdtxt", "CmtDisplayNone");
//    document.getElementById().innerHTML = document.getElementById("CmtEdtCrdIdCtrl").innerHTML;
//  }
  CmtSetLblOfFldInstOfCmb(xId,"CmtEdtCrdIdCtrl","CmtEdtCrdIdtxt")
}

function SetLblTextifNoCtrl(xId)
{
  if ( ( !CmtIsElmExists(xId) ) && ( CmtIsElmExists(xId+'Txt') ) ) 
  {
    CmtSetInnr2Innr(xId+'Edt',xId+'Txt');
    CmtAddClassById(xId+'Edt', "CmtDisplayNone");
    CmtRemoveClassById(xId+'Txt', "CmtDisplayNone");
  }
}

function CmtHideGuiCtrlSctOnPriv()
{
  CmtHideGuiCtrlSctOnPrivByRecType(CmtGenGetRecType())
}

function CmtHideGuiCtrlSctOnPrivByRecType(xRecType)
{ 
  var aErrMsg = document.getElementById("cmtprivmsg"+xRecType+"edit");
  var aGuiSct = document.getElementById("cmt"+xRecType+"EdtbleGuiSct");
  
  if ( (aGuiSct != null) && (aErrMsg != null) )
  {
    if (!CmtHasClassByObj(aErrMsg,"CmtDisplayNone"))
      CmtAddClassObj(aGuiSct, "CmtDisplayNone")   
  }
}


function CmtCnvHtmTxtEdit(xTxt)
{
  //return ( decodeURIComponent(CmtCnvHtmTxt("GenTodoHideDiv", xTxt)) );
 // return ( decodeURIComponent( xTxt ) );
  return ( CmtCnvHtmTxt("GenEditHideDiv", xTxt) );
}

function CmtSetEdtFrmGuiOnLoadGenByGenRecType(xcRecType)
{
  CmtSetEdtFrmGuiOnLoadGenEx(xcRecType, "cmtlblerrmsg" );
  CmtSetEdtFrmGuiOnLoadGenEx(xcRecType, "cmtprivmsg" );  
}

function CmtChkValidRqrEdtVal(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_EDIT_RQR,xcIsNotify4EmptyVal));
}

function CmtChkValidRqrMemoVal(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_MEMO_RQR,xcIsNotify4EmptyVal));
}

function CmtChkValidRqrCmbVal(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_CMB_RQR,xcIsNotify4EmptyVal));
}

function Cmt_I_isValidEdtRqr(xcVal)
{
  var TmpResult = false;
  
  if (CmtTrim(xcVal) != "")
    TmpResult = true;

  return(TmpResult);
}
  
function Cmt_I_isValidMemoRqr(xcVal)
{
  var TmpResult = false;
  
  if (CmtTrim(xcVal) != "")
    TmpResult = true;

  return(TmpResult);
}

function Cmt_I_isValidCmbRqr(xcVal)
{
  var TmpResult = false;
  
  if (Cmt_I_ChkValidInt(CmtNumToString(xcVal)))
    TmpResult = (xcVal > 0);

  return(TmpResult);
}

function Cmt_I_isValidIntRqr(xcVal)
{
  var TmpResult = false;
  
  if (Cmt_I_ChkValidInt(CmtNumToString(xcVal)))
    TmpResult = (xcVal != 0);

  return(TmpResult);
}

function Cmt_I_isValidDateRqr(xcVal)
{
  var TmpResult = false;
  
  if (CmtTrim(xcVal) != "")
    TmpResult = true;

  return(TmpResult);
}

function Cmt_I_isValidTimeRqr(xcVal)
{
  var TmpResult = false;
  
  if (CmtTrim(xcVal) != "")
    TmpResult = true;

  return(TmpResult);
}
             
function ChkEmtyValByKindRqr(xcKind, xcVal)
{
  var TmpResult = false;

  //xcVal = CmtTrim(xcVal);

   switch(xcKind)
  {
    case C_BY_EDIT_RQR:
             TmpResult = Cmt_I_isValidEdtRqr(xcVal);
             break;
    case C_BY_MEMO_RQR:
             TmpResult = Cmt_I_isValidMemoRqr(xcVal);
             break;
    case C_BY_CMB_RQR :
             TmpResult = Cmt_I_isValidCmbRqr(xcVal);
             break;
    case C_BY_INT_RQR :
             TmpResult = Cmt_I_isValidIntRqr(xcVal);
             break;
    case C_BY_DATE_RQR :
             TmpResult = Cmt_I_isValidDateRqr(xcVal);
             break;
    case C_BY_TIME_RQR :
             TmpResult = Cmt_I_isValidTimeRqr(xcVal);
             break;
  }

//alert(888+"ChkEmtyValByKindRqr "+TmpResult+" "+xcKind+" "+"ByKind");
  return (TmpResult);
}

function CmtChkValidIntegerValRqr(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_INT_RQR,xcIsNotify4EmptyVal));
}

function CmtChkValidDateValRqr(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_DATE_RQR,xcIsNotify4EmptyVal));
}

function CmtChkValidTimeValRqr(xcVal,xcFldName,xcRequireVal,xcIsNotify4EmptyVal)
{
  return (CmtMainChkValidation(xcVal,xcFldName,xcRequireVal,C_BY_TIME_RQR,xcIsNotify4EmptyVal));
}