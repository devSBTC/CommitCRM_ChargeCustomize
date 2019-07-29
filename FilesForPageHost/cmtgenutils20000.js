
// === UTILS ===

var C_GEN_CMT_PRFX = "Cmt";

var C_CMT_TRUE = "Y";
var C_CMT_FALSE = "N";
var C_CMT_NORMAL_SAVE  = "CmtNormalSave";

var C_FORM_KIND_FULL_ITEM = "full";
var C_FORM_KIND_SUMMERY   = "smry";
var C_FORM_KIND_EDIT      = "edit";
var C_FORM_KIND_LIST      = "list";
var C_FORM_KIND_SELECT    = "slct";
var C_FORM_KIND_UPLOAD    = "upld";
var C_FORM_KIND_PAGE      = "page";
var C_FORM_KIND_VIEW_ITEM = "view";
var C_FORM_KIND_PRVW_TAB  = "prvw";
var C_FORM_KIND_TODO_TAB  = "todo";

var C_CMT_REC_ID_LEN    = 20;
var C_CMT_REC_TYPE_LEN  =  3;

var C_ASSETS_RECTYPE      = "AST";
var C_CRD_RECTYPE         = "CRD";
var C_CNT_RECTYPE         = "CNT";
var C_KBARTICLES_RECTYPE  = "KBA";
var C_OPP_RECTYPE         = "OPP";
var C_SLP_RECTYPE         = "SLP";
var C_TODO_RECTYPE        = "TDE";
var C_TODO_LIST_RECTYPE   = "TDL";
var C_TICKETS_RECTYPE     = "TKT";
var C_WRK_RECTYPE         = "WRK";
var C_SR_NT_RECTYPE       = "SRNT";
var C_SR_NP_RECTYPE       = "SRNP";
var C_SR_NT_TMPL_RECTYPE  = "SNT";
var C_NTB_RECTYPE         = "NTB";
var C_EVT_RECTYPE         = "EVT";
var C_PSW_RECTYPE         = "PSW";
var C_HOB_RECTYPE         = "HOB";

var C_SLP_F_RECTYPE       = C_SLP_RECTYPE + "F";
var C_SLP_X_RECTYPE       = C_SLP_RECTYPE + "X";
var C_SLP_P_RECTYPE       = C_SLP_RECTYPE + "P";

var C_TRUE                    = "true";
var C_FALSE                   = "false";
var C_CMT_GEN_FIC_FLD_VAL     = "|^!@#%$*CmtFictVal*$%#@!^|";
var C_CMT_GEN_EMPTY_FLD_VAL   = "|^!@#%$*CmtEmptyVal*$%#@!^|";
var C_LBL_TXT_ID_SFX          = "Txt";
var C_IMG_ID_SFX              = "Img";
var CmtGenOnBeforeUnloadFired = false;

var C_DB_ENG_DLM = "|";
var C_DB_ENG_SEP = "^";

var C_CTRL_EDIT_SFX  = "EDIT";
var C_CTRL_MEMO_SFX  = "MEMO";
var C_CTRL_COMBO_SFX = "COMBO";

var C_CMT_FLD_REC_ID = "RecId";
var C_CMT_FLD_CODE   = "Code";
var C_CMT_FLD_NAME   = "Name";

var C_CMT_HIDDEN_PRFX = "cmthide";
var C_CMT_GEN_BLACK_TRNG = "/files/cmtimgblacktr.gif";

var C_CMT_GEN_OP_INS         = "ins";
var C_CMT_GEN_OP_UPD         = "upd";
var C_CMT_GEN_OP_DEL         = "del";
var C_CMT_GEN_OP_DONE        = "done";
var C_CMT_GEN_OP_VIEW        = "view";
var C_CMT_GEN_OP_CANCEL      = "Cancel";
var C_CMT_GEN_OP_Bld_BY_TMPL = "bldbytmpl";

//var C_CMT_GEN_GRD_FIRST_ROW_BG_COLOR  = "#eeeeee";
//var C_CMT_GEN_GRD_SECOND_ROW_BG_COLOR = "#dddddd";
var C_CMT_GEN_GRD_FIRST_ROW_BG_COLOR  = "#f9f9f9";
var C_CMT_GEN_GRD_SECOND_ROW_BG_COLOR = "";

var C_CMT_GEN_SPC_ANC_ID   = '**SPC-ANC**';
var C_CMT_SPC_KIND_BY_ID   = C_CMT_GEN_SPC_ANC_ID + '**ID**';
var C_CMT_SPC_KIND_BY_SCRL = C_CMT_GEN_SPC_ANC_ID + '**SCRL**';

var C_CMT_FIRST_BLACK_ROW = 'CmtFirstBlackRow';

var C_CMT_CLASS_CHOSEN_SINGLE   = 'chosen-select';
var C_CMT_CLASS_CHOSEN_SINGLE_1 = 'chosen-select-no-single';
var C_CMT_CLASS_SELECT_2        = 'js-example-basic-single';

var C_CMT_GEN_EX_HIDDEN = "HIDDEN_";
var C_CMT_GEN_EX_HIDDEN_FULL = C_CMT_GEN_EX_HIDDEN + "cmthide";
var C_CMT_GEN_EX_HIDDEN_EDT = "edtdata" ;
var C_CMT_GEN_EX_HIDDEN_EDT_FULL = C_CMT_GEN_EX_HIDDEN_FULL + C_CMT_GEN_EX_HIDDEN_EDT;

var C_CRD_SELECT       = "CRD-CMB-SELECT";
var C_CRD_ENT_KIND_GEN = 1;
var C_CRD_ENT_KIND_EMP = 4;
var C_CRD_ENT_KIND_SUB = 5;

var CMT_STATUS_ACTIVE = "A";
var CMT_STATUS_NOT_ACTIVE = "N";

var C_GEN_GUI_CLASS = "form-control";

var C_ADD_IF_NOT_EX = 1;

var C_GEN_CMT_SRV_PRFX = "CmtSrv";
var C_GEN_CMT_GRD_CALL = "*CmtCstmGrdCall*";

var C_CMT_DT_KIND_NONE   = 0;
var C_CMT_DT_KIND_MINUTE = 1;
var C_CMT_DT_KIND_HOUR   = 2;
var C_CMT_DT_KIND_DAY    = 3;
var C_CMT_DT_KIND_WEEK   = 4;
var C_CMT_DT_KIND_MONTH  = 5;
var C_CMT_DT_KIND_YEAR   = 6;

function CmtTrim(sString)
{
  while ((sString.substring(0,1) == ' ')||(sString.substring(0,1) == String.fromCharCode(10) )||(sString.substring(0,1) == String.fromCharCode(13))||(sString.substring(0,1) == String.fromCharCode(9)))
  {
    sString = sString.substring(1, sString.length);
  }
  while ((sString.substring(sString.length-1, sString.length) == ' ')||(sString.substring(sString.length-1, sString.length) == String.fromCharCode(13))||(sString.substring(sString.length-1, sString.length) == String.fromCharCode(10))||(sString.substring(sString.length-1, sString.length) == String.fromCharCode(9)))
  {
    sString = sString.substring(0,sString.length-1);
  }
return sString;
}

function CmtIsBlank(s)
{                 // alert(s);
    for(var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if ((c != ' ') && (c != '\n')&& (c != '\r') && (c != '\t')) return false;
    }
    return true;
}

function CmtStringOfChar(xcCh,xcCount)
{
  var TmpResult = "";

  for (var x=0; x<xcCount; x++)
  {
    TmpResult = TmpResult + xcCh;
  }

  return ( TmpResult );
}

function CmtIsCustUser()
{
  return (CmtHiddenFld2Bool("cmthidegeniscustuser"))
}

function CmtRenWinName()
{
  var diff=new Date();
 // alert("X1 "+window.name);
 // if (window.name == "CmtNewWindow")
    window.name = "CmtX"+ window.name + diff.getTime();
//  alert("X2 "+window.name);
}

function CmtIsMakePrivLimtCurUserOnly()
{
  return (CmtGetHidenFldObj("cmthidegenprivcuruseronly").value == "true")
}

function ShowHide(divId)
{
  var id = document.getElementById(divId);
  if (id.style.display == "none")
  {
    eval("id.style.display = 'block';");
  }
  else
  {
    eval("id.style.display = 'none';");
  }
}

function CmtGetHidenFldStr(xcName)
{
  var TmpResult = "";

  if (CmtGetHidenFldObj(xcName) != null )
    TmpResult = CmtGetHidenFldObj(xcName).value;

  return(TmpResult);
}

function CmtFindElem(objname)
{
  var TmpResult = null;
  var i=0;
  var j=0;
  for (i=0; i < document.forms.length; i++)
  {
    for (j=0; j < document.forms[i].elements.length; j++)
    {               //alert(document.forms[i].elements[j].name);
      if (objname == document.forms[i].elements[j].name)
      {return document.forms[i].elements[j];}
    }
  }
  return(TmpResult);  
}

function CmtGetHidenFldObj(xcName)
{
  return( CmtFindElem(xcName) );
}

function CmtHiddenFld2Bool(xcName)
{
  var  TmpResult = "";

  TmpResult = CmtGetHidenFldStr(xcName);

  TmpResult = TmpResult.toUpperCase();

  return(TmpResult == "TRUE");
}

function CmtHiddenFld2Bool_YN(xcName)
{
  var  TmpResult = "";

  TmpResult = CmtGetHidenFldStr(xcName);

  TmpResult = TmpResult.toUpperCase();

  return(TmpResult == C_CMT_TRUE);
}


function CmtIsInsertMode()
{
  return (CmtHiddenFld2Bool("cmthidegenisinsertmode"))
}

function CmtGetCoinSign()
{
  return(CmtGetHidenFldObj("cmthidegencoinsign").value)
}

function CmtCanEditByPriv()
{
  return (CmtHiddenFld2Bool("cmthidegencaneditbypriv"))
}

function CmtCanEditByApp()
{
  return (CmtHiddenFld2Bool("cmthidegencaneditbyapp"))
}

function CmtPrint()
{
  window.print()
}

function CmtIsAmPmTime()
{
  return(CmtIsAmPmTimePref == "Y")
}

function CmtAddComboItemIfNotEmpty(xcCbx,xcStr)
{
  var TmpResult = false;

  if ( CmtTrim(xcStr) != "" )
  {
    TmpResult = true;
    CmtAddComboItem(xcCbx,xcStr);
  }

  return(TmpResult);
}

function CmtAddComboItem(xcCbx,xcVal)
{
  var opt = new Option(xcVal);
  xcCbx.options[xcCbx.length] = opt;
}

function CmtThirdPartyCmbAddItem(xcCbx,xcVal)
{
  CmtThirdPartyCmbAddItemEx(xcCbx,"",xcVal,"",true,true)
}

function CmtThirdPartyCmbAddItemEx(xcCbx, xcKey, xcVal, xcTtl, xcSetDef, xUpd)
{
  var aTtl = "";
  var aKey = "";
  if (xcKey != "")
    aKey = "value="+'"'+xcKey+'"';
 
 if (xcTtl != "")
   aTtl = CmtGetAsHtmlHint(xcTtl+xcVal)

  $("#"+xcCbx.id).append("<option "+ aKey +" "+aTtl+">" + xcVal + "</option>");

  if (xcSetDef)
    $("#"+xcCbx.id).val(xcKey);

//$("#cmtedtdatafldslpitemid_flditmclccodename").val(key); // if you want it to be automatically selected
  if (xUpd)
  {
    if (CmtHasClassById(xcCbx.id, C_CMT_CLASS_CHOSEN_SINGLE) || (CmtHasClassById(xcCbx.id, C_CMT_CLASS_CHOSEN_SINGLE_1)))
      $("#"+xcCbx.id).trigger("chosen:updated")
    else
    if (CmtHasClassById(xcCbx.id, C_CMT_CLASS_SELECT_2))
      $("#"+xcCbx.id).trigger("change.select2");
    //console.log("CmtThirdPartyCmbAddItemEx-"+" "+xcKey+" "+xcVal);
  }
}

function CmtExtractRecType(xcRecId)
{
  var TmpResult = "";

  if (xcRecId.length == C_CMT_REC_ID_LEN)
  {
    for(var i = 0; i < C_CMT_REC_TYPE_LEN; i++)
    {
      TmpResult = TmpResult + xcRecId.charAt(i)
    }
    TmpResult = TmpResult.toUpperCase();
  }

  return(TmpResult);
}

function CmtIsUserAdmin()
{
  return (CmtHiddenFld2Bool("cmthidegenisuseradmin"))
}

function CmtContWithErr()
{
  return (CmtHiddenFld2Bool("cmthidegencontwitherr"))
}

function CmtConvertBooleanToString(xcValue)
{
  var TmpResult = false;


   if (xcValue)
   {
     TmpResult = C_TRUE
   }
   else
   {
     TmpResult = C_FALSE
   }

  return(TmpResult);
}


function CmtGetWasOnServerCount()
{
  return (CmtGetHidenFldStr("cmthidegenreturnfromhtmlcount"))
}

function CmtSetHidenFldStrVal(xcName,xcVal)
{
  if (CmtGetHidenFldObj(xcName) != null )
    CmtGetHidenFldObj(xcName).value = xcVal;
}

function setSelRange(inputEl, selstart, selEnd) { 
//http://www.webmasterworld.com/forum91/4527.htm
 if (inputEl.setSelectionRange) { 
  inputEl.focus();
  inputEl.setSelectionRange(selstart, selEnd); 
 } else if (inputEl.createTextRange) { 
  var range = inputEl.createTextRange(); 
  range.collapse(true); 
  range.moveEnd('character', selEnd); 
  range.moveStart('character', selstart); 
  range.select();
 } 
}

function CmtIsLimitAccountByUser()
{
  return (CmtHiddenFld2Bool("cmthidegenislimitaccountbyuser"))
}

function CmtGenGetRecType()
{                          
  return (CmtGetHidenFldStr("cmthidegenrectype"))
}


//function GetAdjustByKind(xcCmtGetAdjustType,xcBillTotal,xcAjustAnount,xcClcamount)
//{
//  var TmpResult = 0;
//
//  switch(xcCmtGetAdjustType)
//  {
//    case C_CMT_QTL_ADJUST_P :
//             TmpResult = ((parseFloat(xcBillTotal) * parseFloat(xcAjustAnount))/100);;
//             break;
//    case C_CMT_QTL_ADJUST_A :
//             TmpResult = xcAjustAnount;
//             break;
//  }
//
//  return (TmpResult);
//}

function cmbgenCmbMenuChange()
{
//  alert(document.forms[0].cmbgenCmbMenu.options[document.forms[0].cmbgenCmbMenu.selectedIndex].value);
//  alert(document.forms[0].cmbgenCmbMenu.options[document.forms[0].cmbgenCmbMenu.selectedIndex].text);
//  getSubmitForm().cmthidetabmenuitem.value = '***CmbMnu***' + document.forms[0].cmbgenCmbMenu.selectedIndex;
  getSubmitForm().cmthidetabmenuitem.value = '***CmbMnu***' + document.forms[0].cmbgenCmbMenu.options[document.forms[0].cmbgenCmbMenu.selectedIndex].value;
  SubmitClickConfirm('lnkcmttabmenu','', true,'');
}

function ShowHideByOp(divId,xcOp)
{
  var id = document.getElementById(divId);

  if (id != null)
    if (xcOp == "none")
    {
      eval("id.style.display = 'none';");
    }
    else
    {
      eval("id.style.display = 'block';");
    }
}

function CmtIsMobileMode()
{
//  return (CmtHiddenFld2Bool("cmthidegenismobilemode"))
//  return ( window.width <= 767 )
  return ( window.innerWidth <= 767 )

}

function CmtGetFullUrlPath(xWithFDir)
{
  var TmpResult = "";

  if (G_CMT_ISS_URL == "")
    TmpResult = CmtGetSAFullUrlPath()
  else
    TmpResult = CmtGetIISFullUrlPath();

  if (xWithFDir)
    TmpResult = TmpResult + G_CMT_FILES_DIR;

//  alert(TmpResult);
//  alert(window.location.href);

  return ( TmpResult );
}

function CmtGetIISFullUrlPath()
{
  var TmpResult = "";

  TmpResult = window.location.href;
  TmpResult = TmpResult.slice(0,TmpResult.lastIndexOf('/'));
  TmpResult = TmpResult.slice(0,TmpResult.lastIndexOf('/'));

  return ( TmpResult );
}

function CmtGetSAFullUrlPath()
{
  var TmpResult = "";

  var aInx = -1;
  var TmpResult = "";
  aInx = window.location.href.indexOf(window.location.port);
  if (aInx != -1)
    TmpResult = window.location.href.substring(0,aInx)+window.location.port
  else
    TmpResult = "";

  return ( TmpResult );
}

function CmtGetStrUntilSep(xcStr, xcSep)
{
  var TmpResult = "";

  var aInx = -1;
  var TmpResult = "";

  aInx = CmtIndexOf(xcStr, xcSep);
  if (aInx != -1)
    TmpResult = xcStr.substring(0,aInx);

  return ( TmpResult );
}

function CmtGetStrFromSep(xcStr, xcSep)
{
  var TmpResult = "";
  var aInx = -1;

  aInx = CmtIndexOf(xcStr, xcSep);
  if (aInx != -1)
    TmpResult = xcStr.substring(aInx+xcSep.length,xcStr.length);

  return ( TmpResult );
}

function CmtGetElemByPrfx(xcPrfx, xcSep)
{
  var i=0;
  var j=0;
  var TmpResult = "";

  for (i=0; i < document.forms.length; i++)
  {
    for (j=0; j < document.forms[i].elements.length; j++)
    { //alert(document.forms[i].elements[j].id+" "+document.forms[i].elements[j].name);
      if (document.forms[i].elements[j].name.indexOf(xcPrfx) == 0)
      {
        if (TmpResult != "")
          TmpResult = TmpResult + xcSep;
        TmpResult = TmpResult + document.forms[i].elements[j].name;
      }
    }
  }
  return ( TmpResult );
}

function CmtGetElemByPrfxChkBx(xcPrfx, xcSep, xcStatus)
{
  var i=0;
  var j=0;
  var TmpResult = "";

  for (i=0; i < document.forms.length; i++)
  {
    for (j=0; j < document.forms[i].elements.length; j++)
    { 
      if (document.forms[i].elements[j].name.indexOf(xcPrfx) == 0)
        if (document.forms[i].elements[j].type == "checkbox")
          if (document.forms[i].elements[j].checked == xcStatus)
          {
            if (TmpResult != "")
              TmpResult = TmpResult + xcSep;
            TmpResult = TmpResult + document.forms[i].elements[j].value;
          }
    }
  }
  return ( TmpResult );
}

function CmtSetChkBxbyPrfx(xcPrfx, xcStatus)
{
  var i=0;
  var j=0;
  var TmpResult = "";

  for (i=0; i < document.forms.length; i++)
  {
    for (j=0; j < document.forms[i].elements.length; j++)
    {
      if (document.forms[i].elements[j].name.indexOf(xcPrfx) == 0)
        if (document.forms[i].elements[j].type == "checkbox")
        {
          document.forms[i].elements[j].checked = xcStatus
        }
    }
  }
  return ( TmpResult );
}

function CmtSetChkBxbyPrfxAndVal(xcPrfx, xcVal, xcStatus)
{
  var i=0;
  var j=0;
  var TmpResult = "";

  for (i=0; i < document.forms.length; i++)
  {
    for (j=0; j < document.forms[i].elements.length; j++)
    {
      if (document.forms[i].elements[j].name.indexOf(xcPrfx) == 0)
        if (document.forms[i].elements[j].type == "checkbox")
          if (document.forms[i].elements[j].value == xcVal)
          {
            document.forms[i].elements[j].checked = xcStatus
          }
    }
  }
  return ( TmpResult );
}

function GetHrefElm(xcId)
{
  var TmpResult = null;
  
  var els = document.getElementsByTagName("a");
  for (var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      if (el.id === xcId) {
          //alert(el.id+" "+el.innerHTML);
          return (el)
      }
  }

  return(TmpResult);
}

//indexOf not sup in IE8
function include(arr, obj) {
  var TmpResult = false;

    for(var i=0; i<arr.length; i++) {
        if (arr[i] == obj) return true;
    }

  return(TmpResult);
}
function CmtSetUrl()
{
//                 alert(window.location.href);
}

function x_CmtSetUrl()
{
      
var C_PRM = ["CmtUsrMobPrm","CmtUsrNamePrm","CmtUsrPWPrm","cmtAction","cmtRecId"];
var aVal = "";
var aGoOn = false;

//window.location = CmtGetStrUntilSep(window.location.href, "?")
//                 alert(window.location.href);
  if (CmtGetStrFromSep(window.location.href, "?") != "")
  {

    var aPrm = "";
    var s = window.location.search.substring(1).split('&');
            
    for (var i = 0; i < s.length; ++i)
    {
      if (s[i].indexOf("=") > -1)
      {
        if (!aGoOn)
          aGoOn = true;
          
        var parts = s[i].split('=');
        aPrm = parts[0]+"="+parts[1];

        if (! include(C_PRM, parts[0]))
        {
          if (aVal != "")
            aVal = aVal + "&";

          aVal = aVal + aPrm;
        }
      }
    }

    if (aGoOn)
    {
      aVal = CmtTrim(aVal);
      if (aVal == "")
        aVal = "8";

      if (CmtCanMakeByBrw())
      {
        history.pushState(null, null,  aVal);
        history.replaceState(null, null,  aVal);
        //history.pushState(null, null, location.href);
      }
    }
  }
  else if (CmtCanMakeByBrw())
  {       //  alert(location.href);
    //history.replaceState(null, null,  location.href);
    history.pushState(null, null,  aVal);
    history.replaceState(null, null,  aVal);
    history.pushState(null, null,  location.href);
    history.replaceState(null, null,  location.href);
    //history.go(1);
  }
}

function CmtGetRandStr(xcLen)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < xcLen; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function CmtTextHeight(xcName)
{

  var TmpResult = 0;

  var oPlaceName = document.getElementById(xcName);
  if (oPlaceName)
    TmpResult = oPlaceName.clientHeight + 1;

  return ( TmpResult );


}

function CmtHdnFldAsUrlPrm(xcName)
{
  var TmpResult = "";

  if (CmtGetHidenFldObj(xcName) != null)
    TmpResult = xcName +"="+ encodeURIComponent(CmtGetHidenFldObj(xcName).value);

  return ( TmpResult );
}

function CmtSetUrlPrmToElm(xcId,xcExpPrfx)
{
    var aCanDc = false;
    var aVal = "";
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];

       if ((tmp[0] != "")&&(tmp[1] != ""))
         if (document.getElementById(tmp[0]) != null)
         {
           //document.getElementById(tmp[0]).value = decodeURIComponent(tmp[1]);
           aCanDc = (tmp[0].indexOf(xcExpPrfx) == -1);
           //alert(aCanDc);alert(tmp[0].indexOf(xcExpPrfx));alert(tmp[0]);
           aVal = tmp[1];

           if (aCanDc)
           { aVal = CmtDecodeURIComponent(xcId,aVal) }
           else
            {aVal = decodeURIComponent(aVal)}

           document.getElementById(tmp[0]).value = aVal;
           if (document.getElementById(tmp[0]).type != "hidden")
             document.getElementById(tmp[0]).innerHTML = document.getElementById(tmp[0]).value;
//           alert(document.getElementById(tmp[0]).type);
//           alert(tmp[0]);
//           alert(tmp[1]);
//           alert(document.getElementById(tmp[0]).value);
//           alert(decodeURIComponent(tmp[1]));
//           alert(decodeURI(tmp[1]));
//           alert(unescape(tmp[1]));
         }
    }
}

function CmtGetInternetExplorerVersionOld()
// http://msdn.microsoft.com/en-us/library/ms537509%28v=vs.85%29.aspx
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  //alert(rv);
  return rv;
}

function CmtGetInternetExplorerVersion()
{
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  else if (navigator.appName == 'Netscape')
  {
    var ua = navigator.userAgent;
    var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
  }
  return rv;
}

function CmtCanMakeByBrw()
{
  var TmpResult = false;

  var ver = CmtGetInternetExplorerVersion();

  if (ver == -1)
  {
    TmpResult = true;
  }
  else if (ver >= 10.0)
  {
    TmpResult = true;;
  }

  return ( TmpResult );

}

function CmtDecodeURIComponent(xcId,xcData)
{
  var TmpResult = '';

  if (document.getElementById(xcId) != null)
  {
     document.getElementById(xcId).innerHTML = decodeURIComponent(xcData);
     TmpResult = document.getElementById(xcId).innerHTML;
    // alert(TmpResult);
  }

  return ( TmpResult );

}

function CmtDecodeURIComponentX(xcId,xcData)
{
  var TmpResult = '';//CCRM-1262

  if (document.getElementById(xcId) != null)
  {
     document.getElementById(xcId).innerHTML = decodeURIComponent(encodeURIComponent(xcData));
     TmpResult = document.getElementById(xcId).innerHTML;
    // alert(TmpResult);
  }

  return ( TmpResult );

}

function CmtCreateLnk(xPrnt,xId,xTxt,xUrl)
{
  var newlink = document.createElement("a");
  newlink.innerHTML = xTxt;
//  newlink.setAttribute("title", xTxt);
  newlink.setAttribute("href", xUrl);
  newlink.setAttribute("id", xId, 0);
  xPrnt.appendChild(newlink);
  //document.getElementById(xId).disabled = false;
}

function CmtCreateLnkClick(xPrnt,xId,xTxt,xClick, xSetCursor,xCls)
{
   var newlink = document.createElement("a");
   newlink.innerHTML = xTxt;
  //newlink.setAttribute("title", xTxt);
//  newlink.setAttribute("href", "#");
//  newlink.href = "#";
//  newlink.onclick = CmtClsGenUpdSecBtnClick(this);
  if (CmtCanMakeByBrw())
    newlink.setAttribute("onclick", xClick);
//  newlink.onclick = xClick;
  newlink.setAttribute("id", xId, 0);
  xPrnt.appendChild(newlink);

  if (xId != "")
    if (xSetCursor)
      CmtAddClassById(xId, "CmtGenLnkAtt");  
    //CmtSetLnkCursor(newlink);
  
  if ((xId != "")&&(xCls != ""))
     CmtAddClassById(xId, xCls);  
     
  return(newlink)
}

function CmtSetMseCrsObj(xObj)
{
  CmtAddClassObj(xObj, "CmtGenLnkAtt");  
}

function CmtCreateTxtBoxInput(xPrnt,xId,xTxt, xCls){
var input = document.createElement('input');
  input.type = 'text';
  input.value = xTxt;
  if (CmtCanMakeByBrw())
//   input.setAttribute("onclick", xClick);
//  newlink.onclick = xClick;
  input.setAttribute("id", xId, 0);
  xPrnt.appendChild(input);
  
  if ((xId != "")&&(xCls != ""))
     CmtAddClassById(xId, xCls);  
  
  return(input)
}

function CmtCreateButtonInput(xPrnt,xId,xTxt,xClick,xCls){
var input = document.createElement('input');
  input.type = 'button';
  input.value = xTxt;
 // if (CmtCanMakeByBrw())
   input.setAttribute("onclick", xClick);
//  newlink.onclick = xClick;
  input.setAttribute("id", xId, 0);
  xPrnt.appendChild(input);
  
  if ((xId != "")&&(xCls != ""))
     CmtAddClassById(xId, xCls);
     
  return(input)
}

function CmtStrReverse(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--){
    o = o + s.charAt(i);//alert(s.charAt[i]);alert(i);
    }
  return o;
}

function CmtShowHideElmById(xId,xStatus)
{
  CmtShowHideElmByObj(document.getElementById(xId),xStatus);
}

function CmtShowHideElmByObj(xObj,xStatus)
{
   if (xObj != null)
     if (xStatus)
       xObj.style.visibility="visible"
     else
       xObj.style.visibility="hidden";
}

function CmtShowHideDsplElmById(xId,xStatus)
{
  CmtShowHideDsplElmByObj(document.getElementById(xId),xStatus);
}

function CmtShowHideDsplElmByObj(xObj,xStatus)
{
   if (xObj != null)
     if (xStatus)
       xObj.style.display="inline"
     else
       xObj.style.display="none";
}

function CmtCreateChkBxInput(xPrnt,xId,xTxt,xVal,xClick,xSetHtmlFor, xCheked){
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  //checkbox.name = "name";
//  if (xVal != "")
    checkbox.value = xVal;
  //checkbox.id = xId;
  checkbox.setAttribute("id", xId, 0);
  //checkbox.checked = xCheked;

  if (xCheked)
    checkbox.setAttribute("checked", xCheked, 0);

  var label = document.createElement("label");
  //label.id = xId + "Txt";

  if (xSetHtmlFor)
    label.htmlFor = xId;

  label.appendChild(document.createTextNode(xTxt));
  label.innerHTML = xTxt;

  label.setAttribute("id", xId + C_LBL_TXT_ID_SFX, 0);

  checkbox.setAttribute("onclick", xClick);

  xPrnt.appendChild(checkbox);
  xPrnt.appendChild(label);
  return(checkbox);
}

function CmdAddImgToLnk(xLnk, xImgPath)
{
  if (xLnk != null)
  {
    var t = document.createElement("IMG");
    t.setAttribute("src",xImgPath);
    if (xLnk.id != "")
      t.setAttribute("id",xLnk.id+C_IMG_ID_SFX);
    xLnk.appendChild(t);
  }
}

function CmtArrayMove(xArr, xFromIndex, xtoIndex)
{
  if (
       (xFromIndex != xtoIndex) &&
       (xFromIndex >= 0 && xFromIndex <= xArr.length-1) &&
       (xtoIndex >= 0 && xtoIndex <= xArr.length-1)
     )
     {
       var element = xArr[xFromIndex]
       xArr.splice(xFromIndex, 1);
       xArr.splice(xtoIndex, 0, element);
     }
}

function CmtFocusEdtTxtToEnd(xThis, xCanSlctAll)
{
  xThis.focus();
  var val = xThis.value; //store the value of the element
  xThis.value = ''; //clear the value of the element
  xThis.value = val; //set that value back.
  if (xCanSlctAll)
    xThis.select();
}

function CmtCnvHtmTxt11(xStr)
{
  return (CmtCnvHtmTxtIntr(xStr,1));
}

function CmtCnvHtmTxt22(xStr)
{
  return (CmtCnvHtmTxtIntr(xStr,2));
}

function CmtCnvHtmTxtIntr(xStr,xToH)
{
//  var aGFromArr = [ "&gt;" , "&lt;" , "&amp;" ];
//  var aGToArr   = [ ">"    , "<"    , "&"     ];
  var x = "";
  if (xToH == 1)
  {
    var aFromArr = [ "&gt;" , "&lt;" , "&amp;" ];
    var aToArr   = [ ">"    , "<"    , "&"     ];
  }
  else
  if (xToH == 2)    
  {
    var aFromArr = [ "&"   , ">"    , "<"   , " "     ];
    var aToArr   = ["&amp;", "&gt;" , "&lt;", "&nbsp;"] ;
  }
  if (xToH == 3)    
  {
    var aFromArr = [">"    , "<"   , " "     ];
    var aToArr   = ["&gt;" , "&lt;", "&nbsp;"] ;
  }
  if (xToH == 4)    
  {
    var aFromArr = [" "     ];
    var aToArr   = ["&nbsp;"] ;
  }

  for(var i = 0; i < aFromArr.length; i++)
    while (xStr.indexOf(aFromArr[i]) != -1 )
      xStr = xStr.replace(aFromArr[i] ,aToArr[i] );


//  str = str.replace("&gt;"     ,">" );
//  str = str.replace("&lt;"     ,"<" );
//  str = str.replace("&amp;"    ,"&" );
//  str = str.replace("&quot;" ,""" );
//  str = str.replace("&#039;" ,"'" );
  return (xStr);
}

function CmtCnvHtmTxt(xHId,xTxt)
{
   var TmpResult = '';

  document.getElementById(xHId).innerHTML = xTxt;
  TmpResult = CmtCnvHtmTxt11(document.getElementById(xHId).innerHTML);
  CmtShowHideElmById(xHId, false);//REQUIRED TO HIDE IT AGAIN !!!!

  return ( TmpResult );
}

function CmtCnvTxtHtm(xHId,xTxt)
{
   var TmpResult = '';

//  document.getElementById(xHId).innerHTML = xTxt;
//  TmpResult = CmtCnvHtmTxt22(document.getElementById(xHId).innerHTML);
  TmpResult = CmtCnvHtmTxt22(xTxt);
  //CmtShowHideElmById(xHId, false);//REQUIRED TO HIDE IT AGAIN !!!!

  return ( TmpResult );
}

function CmtSetLnkCursor(xLnk)
{
  xLnk.style.cursor = "pointer";
  xLnk.style.textDecoration="underline";
}

function CmtSetEdtOnIns(xEdt)
{
  xEdt.style.color = "#808080";
}

function CmtClearEdtIns(xEdt)
{
  xEdt.style.color = "#000000";
}

function CmtGetGenNstSpc(xPrnt, xCount, xPrfxId)
{
  var x = null;

  x = document.createElement("label");

  for(var i = 0; i < xCount; i++)
    x.innerHTML = x.innerHTML + document.getElementById("GenTodoSpcHideDiv").innerHTML;

  if (xPrfxId != "")
    x.setAttribute("id", xPrfxId, 0);

  xPrnt.appendChild(x);

//        x = document.createElement("label");x.innerHTML = document.getElementById("GenTodoSpcHideDiv").innerHTML;xPrnt.appendChild(x);
//      x = document.createElement("label");x.innerHTML = document.getElementById("GenTodoSpcHideDiv").innerHTML;xPrnt.appendChild(x);
//      x = document.createElement("label");x.innerHTML = document.getElementById("GenTodoSpcHideDiv").innerHTML;xPrnt.appendChild(x);
//      x = document.createElement("label");x.innerHTML = document.getElementById("GenTodoSpcHideDiv").innerHTML;xPrnt.appendChild(x);

//  return("");
//  return(
//          document.getElementById("GenTodoSpcHideDiv").innerHTML +
//          document.getElementById("GenTodoSpcHideDiv").innerHTML +
//          document.getElementById("GenTodoSpcHideDiv").innerHTML +
//          document.getElementById("GenTodoSpcHideDiv").innerHTML +
//          document.getElementById("GenTodoSpcHideDiv").innerHTML +
//          document.getElementById("GenTodoSpcHideDiv").innerHTML
//        )
}

function CmtCreateTxtLbl(xPrnt,xId,xTxt, xCls)
{
  var label = document.createElement("label");
  label.appendChild(document.createTextNode(xTxt));
  label.innerHTML = xTxt;
  if (xId != "")
    label.setAttribute("id", xId, 0);
  xPrnt.appendChild(label);
  
  if ((xId != "")&&(xCls != ""))
     CmtAddClassById(xId, xCls);   
  
  return(label)
}

function CmtJump2Anc55(h)
{
  var top = document.getElementById(h).offsetTop; //Getting Y of target element
  window.scrollTo(0, top);                        //Go there.
}

function CmtJump2Anc(h){
    var url = location.href;               //Save down the URL without hash.
    location.href = "#"+h;                 //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}

function CmtGenConfirmExitNull()
{

}

function CmtGenConfirmExit(e,xCond,xMsg)
{
  var message = "";
// If we haven't been passed the event get the window.event
  if ((!CmtGenOnBeforeUnloadFired)&& (xCond))
  {
    CmtGenOnBeforeUnloadFired = true;
    message = xMsg;
    // For IE6-8 and Firefox prior to version 4
    if (e)
    {
      e = e || window.event;
      e.returnValue = message;
    }
    // For Chrome, Safari, IE8+ and Opera 12+
    window.setTimeout("CmtGenResetBeforeUnloadFired()", 10);
    window.onbeforeunload = CmtGENOnB4UnLoadx;
    return (message);
  }

//
//
}

function CmtCanRtrnValOnB4UnLoad()
{
  var TmpResult = false;

  if (CmtIsFireFox())
    TmpResult = true;

//  if (CmtCanMakeByBrw())

  return ( TmpResult );
}

function CmtGENOnB4UnLoadx(e) {
  CmtGenResetBeforeUnloadFired();
 var message = "";

 if (CmtCanRtrnValOnB4UnLoad())
   return (message);
}

function CmtGenResetBeforeUnloadFired() {
  CmtGenOnBeforeUnloadFired = false;
  window.onbeforeunload = CmtGENOnB4UnLoad;
}


function CmtCreateHiddenFld(xFrm,xId,xTxt)
{
  var input = document.createElement("input");
  input.setAttribute("type", "hidden")
  input.setAttribute("name", xId);
  input.setAttribute("id", xId, 0);
  input.setAttribute("value", xTxt);
//  document.getElementById(xFrmId).appendChild(input);
  xFrm.appendChild(input);
//  document.body.appendChild(input);
//var para = document.getElementById("hidden");
// para.appendChild(input);
  return(input)
}

function CmtCreateMemoCtrl(xPrnt, xId, xCls)
{
  var input = document.createElement("textarea");
  input.setAttribute("id", xId, 0);
  
  xPrnt.appendChild(input);

  if ((xId != "")&&(xCls != ""))
     CmtAddClassById(xId, xCls);  
  
  return(input)
}

function CmtCreateComboCtrl(xPrnt,xId)
{
  var input = document.createElement("select");
  input.setAttribute("id", xId, 0);
  xPrnt.appendChild(input);
 return(input)
}


function CmtSetComboInxByVal(xCmb,xVal,xAddifNotEx)
{
   var TmpResult = false;
   var i = 0;

  while( (i < xCmb.length) && (!TmpResult) )
  {
     if (xCmb.options[i].value == xVal)
     {
        xCmb.selectedIndex = i;
        TmpResult = true;
     }

     i = i + 1;
  }

  if ((xAddifNotEx)&&(!TmpResult))
  {
    CmtAddComboItem(xCmb,xVal);
    xCmb.selectedIndex = xCmb.length -1;
  }
}

function CmtConcatDbEngFld(xVal)
{
  return(C_DB_ENG_DLM + xVal + C_DB_ENG_DLM)
}

function CmtGenPopupOnMouseOver(xThis)
{
  xThis.className = "CmtGenHighlightRow"
//http://webdesign.about.com/od/colorcharts/l/blsystemcolors.htm
}

function CmtGenPopupOnMouseOut(xThis)
{
  xThis.className = "CmtGenNormalRow"
}

function CmtGenSetRowColor(xRow, xRowIndex)
{
  if (xRowIndex % 2 == 0)
    xRow.style.background = C_CMT_GEN_GRD_FIRST_ROW_BG_COLOR
  else
    xRow.style.background = C_CMT_GEN_GRD_SECOND_ROW_BG_COLOR;
}

function CmtSameText(xTxt1, xTxt2)
{
  return( xTxt1.toUpperCase() == xTxt2.toUpperCase() )
}

function CmtGenJmptToEncIfNeed()
{
  var aVal = "";
  var aName = "";

  if (document.getElementById("HIDDEN_cmthidegenjump2anchor") != null)
  {
    aVal = document.getElementById("HIDDEN_cmthidegenjump2anchor").value;
    if (CmtIndexOf(aVal,C_CMT_GEN_SPC_ANC_ID)== -1)
      CmtJump2Anc(aVal)
    else
    if (CmtIndexOf(aVal,C_CMT_SPC_KIND_BY_ID) != -1)
    {
      aName = CmtGetStrUntilSep(aVal, C_CMT_SPC_KIND_BY_ID);
      aVal = CmtGetStrFromSep(aVal, C_CMT_SPC_KIND_BY_ID);
      if (aName.toUpperCase() == C_TODO_RECTYPE)
        CmtTdlGenSetAnc();
    }
    else
    if (CmtIndexOf(aVal,C_CMT_SPC_KIND_BY_SCRL) != -1)
    {
      aVal = CmtGetStrFromSep(aVal, C_CMT_SPC_KIND_BY_SCRL);
      aName = CmtGetStrUntilSep(aVal, ',');
      aVal = CmtGetStrFromSep(aVal, ',');
      window.scrollTo(aName,aVal)
    }
  }
}

function CmtGenGetItmFromArrByFld(xcArr, xcFld1, xVal1, xcFld2, xVal2)
{
   var TmpResult = null;
   var i = 0;
   var aGoOn = false;

   while( (i < xcArr.length) && (TmpResult == null) )
  {
     aGoOn = false;
     if (xcArr[i][xcFld1] == xVal1)
     {
        if (xcFld2 == "")
          aGoOn = true
        else
        if (xcArr[i][xcFld2] == xVal2)
          aGoOn = true;

        if (aGoOn)
          TmpResult = xcArr[i];
     }
     i = i + 1;
  }
  return ( TmpResult );
}

function CmtGenGetItmFromArrByRecId(xcArr, xRecId)
{
  return ( CmtGenGetItmFromArrByFld(xcArr, C_CMT_FLD_REC_ID, xRecId, "", "") );
}
                          
function CmtThirdPartyCmbSetSlectedKeyHdn(xId,xKey)
{
  var aObj= document.getElementById(xKey);
  if (aObj != null)
    CmtThirdPartyCmbSetSlectedKey(xId, aObj.value)

}

function CmtThirdPartyCmbSetSlectedKey(xId,xKey)
{
  var aObj= document.getElementById(xId);

  if (aObj != null)
  {
    if (xKey == "")
    {
      //console.log("CmtThirdPartyCmbSetSlectedKey-Null"+" **"+ document.getElementById(xId).selectedIndex+" "+xId+" "+xKey);
      CmtThirdPartyCmbSetSlectedInx(xId,-1)
    }
    else
    {
      //console.log("CmtThirdPartyCmbSetSlectedKey-NOT-Null"+" **"+ document.getElementById(xId).selectedIndex+" "+xId+" "+xKey);
      $("#"+aObj.id).val(xKey); // if you want it to be automatically selected
      CmtThirdPartyCmbTrgUpd(aObj.id);
    }
  }
}

function CmtThirdPartyCmbSetSlectedInx(xId,xInx)
{
  CmtSetSlectedInxThirdPartyCmbEx(xId,xInx,true)
}

function CmtSetSlectedInxThirdPartyCmbEx(xId,xInx,xUpd)
{
  CmtThirdPartyCmbPropEx(xId,xInx,xUpd,"selectedIndex")
}

function CmtSetDsblThirdPartyCmbEx(xId,xInx,xUpd)
{
  CmtThirdPartyCmbPropEx(xId,xInx,xUpd,"disabled")
}

function CmtThirdPartyCmbPropEx(xId,xInx,xUpd,xPrp)
{
  var aObj= document.getElementById(xId);

  if (aObj != null)
  {

    //console.log("CmtThirdPartyCmbPropEx"+" **" +xPrp+"**"+document.getElementById(xId).selectedIndex+" "+xId+" "+xInx);

    $("#"+aObj.id).prop(xPrp,xInx);

    if (xUpd)
      CmtThirdPartyCmbTrgUpd(aObj.id);
  }
}

function CmtThirdPartyCmbSetSlectedKeyEx(xId,xKey,xUpd)
{
  var aObj= document.getElementById(xId);

  if (aObj != null)
  {  //console.log("CmtThirdPartyCmbSetSlectedKeyEx"+" **" +document.getElementById(xId).selectedIndex+" "+xId+" "+xKey);
     $("#"+aObj.id).val(xKey); // if you want it to be automatically selected

    if (xUpd)
     CmtThirdPartyCmbTrgUpd(aObj.id);
  }
}

function CmtThirdPartyCmbTrgUpd(xId)
{
  var aObj= document.getElementById(xId);
  if (aObj != null)
    if (CmtHasClassById(aObj.id, C_CMT_CLASS_CHOSEN_SINGLE))
      $("#"+aObj.id).trigger("chosen:updated")
    else
    if (CmtHasClassById(aObj.id, C_CMT_CLASS_SELECT_2))
      $("#"+aObj.id).trigger('change.select2');
}
        
function CmtThirdPartyCmbSetWith(xId)
{
  var aObj= document.getElementById(xId);

  var aObj1 = document.getElementById(xId+"_chosen");
  if (aObj != null)
    if (aObj1 != null)
    aObj1.style.width = aObj.style.width;
}

function CmtSetInnerHTMLByIdEx(xFrom, xTo, xAdd)
{
  var aFromObj = document.getElementById(xFrom);
  var aToObj   = document.getElementById(xTo);

  if ((aFromObj != null) && (aToObj != null))
    aToObj.innerHTML = aFromObj.innerHTML + xAdd;
}

function CmtSetInnerHTMLById(xFrom, xTo)
{
  CmtSetInnerHTMLByIdEx(xFrom, xTo, "")
}

function CmtSetVal2InnerHTMLById(xId, xVal)
{
  var aId = document.getElementById(xId);

  if (aId != null)
    aId.innerHTML = xVal;
}

function CmtGetInnerHTMLValById(xId, xVal)
{
  var TmpResult = "";
  var aId = document.getElementById(xId);

  if (aId != null)
    TmpResult = aId.innerHTML;
    
  return(TmpResult);    
}

function CmtGetInnerHTMLById(xId)
{
  var TmpResult = "";
  var aId = document.getElementById(xId);

  if (aId != null)
    TmpResult = aId.innerHTML;

  return(TmpResult);
}

function CmtSetValById(xId, xVal)
{
  var aId = document.getElementById(xId);

  if (aId != null)
    aId.value= xVal;
}

function CmtGetValById(xId)
{
  var TmpResult = "";
  var aId = document.getElementById(xId);

  if (aId != null)
    TmpResult = aId.value;

  return(TmpResult);
}

function Cmt_StrToIntDef(xcVal,xcDefVal)
{
  var TmpResult = 0;

  xcVal = CmtTrim(xcVal);

   if (!Cmt_I_ChkValidInt(xcVal))
    {TmpResult = xcDefVal}
  else
    {TmpResult = parseInt(xcVal,10)}

  return(TmpResult);
}


function Cmt_I_ChkValidInt(xcVal)
{
  var i;

  if (CmtTrim(xcVal) == "")return false;

  for (i = 0; i < xcVal.length; i++)
  {
      var c = xcVal.charAt(i);
      if (((c < "0") || (c > "9"))) return false;
  }
  return true;
}

function CmtSetVal2DisabledById(xId, xVal)
{
  var aId = document.getElementById(xId);

  if (aId != null)
    aId.disabled = xVal;
}

function CmtCallToSrvEx(xcSbmtName,xcHideFldName,xcCtrlName)
{
 // getSubmitForm().cmthidegentktview.value = C_GEN_CMT_SRV_PRFX+xcCtrlName; ;
  CmtSetValById("HIDDEN_"+xcHideFldName,C_GEN_CMT_SRV_PRFX+xcCtrlName );
 SubmitClickConfirm(xcSbmtName,"", true,"");
}

function CmtGetTabName(xRecType)
{
  var TmpResult = "";
  
//    TmpResult = C_FORM_KIND_PRVW_TAB
  if ((xRecType.indexOf(C_FORM_KIND_PRVW_TAB) == -1)&&(xRecType.indexOf(C_FORM_KIND_TODO_TAB) == -1))
    TmpResult = C_FORM_KIND_PAGE;
    
  TmpResult = 'z'+xRecType.toLowerCase()+TmpResult;
  
  return(TmpResult);
}

function CmtShowTabById(xRecType)
{
  CmtGenShowTabById('myTab', CmtGetTabName(xRecType))
}

function CmtGenShowTabById(xTab,xRecType)
{
  $('#'+ xTab +' a[href="#'+xRecType+'"]').tab('show')
}

function CmtSetBtnDefClass(xId)
{
  $("#" + xId).addClass('btn');
  $("#" + xId).addClass('btn-default');
}

function CmtSetTblDefClass(xId)
{
  $("#" + xId).addClass('table');
  $("#" + xId).addClass('CmtTblNoLines');
}

function CmtHasClassByObj(xObj, xCls)
{
  var aSpan = false;

  if (xObj != null)
    aSpan = CmtHasClassById(xObj.id, xCls)
  
  return(aSpan)
}

function CmtHasClassById(xId, xCls)
{
  var aSpan = false;

  if (($("#" + xId).hasClass(xCls))) 
    aSpan = true;
  
  return(aSpan)
}

function CmtAddClassObj(xObj, xCls)
{
  if ( xObj != null )
    if ( xObj.id != "" )
      CmtAddClassById(xObj.id, xCls)
}

function CmtAddClassById(xId, xCls)
{
  if (!($("#" + xId).hasClass(xCls)))
    $("#" + xId).addClass(xCls);
//$("#CmtTde_TDE6S6Y4FATB4Y1P7RIT_CmtGenRowTblInner" ).addClass(xCls);
}

function CmtToggleClassObj(xObj, xCls)
{
  if ( xObj != null )
    if ( xObj.id != "" )
      CmttoggleClassById(xObj.id, xCls)
}

function CmtToggleClassById(xId, xCls)
{
  if (!($("#" + xId).hasClass(xCls)))
    $("#" + xId).toggleClass(xCls);
//$("#CmtTde_TDE6S6Y4FATB4Y1P7RIT_CmtGenRowTblInner" ).toggleClass(xCls);
}

function CmtRemoveClassObj(xObj, xCls)
{
  if ( xObj != null )
    if ( xObj.id != "" )
      CmtRemoveClassById(xObj.id, xCls)
}

function CmtRemoveClassById(xId, xCls)
{
  $("#" + xId).removeClass(xCls);
//$("#CmtTde_TDE6S6Y4FATB4Y1P7RIT_CmtGenRowTblInner" ).addClass(xCls);
}

function CmtIsElmExists(xId)
{
  return(document.getElementById(xId) != null);
}

function CmtHideRwGrpByDscTd(xcTr, xcTd)
{
  CmtHideElmByIdCnd(xcTr, (CmtGetInnerHTMLById(xcTd) == "") )
}

function CmtHideElmByIdCnd(xcTr, xcCnd)
{
   if (xcCnd)
     CmtAddClassById(xcTr, "CmtDisplayNone")
}

function CmtShowElmByIdCnd(xcTr, xcCnd)
{
   if (xcCnd)
     CmtRemoveClassById(xcTr, "CmtDisplayNone")
}
function ShowHideLinkRecidIncDec()
{

  CmtShowHideElmById("fldgenLINKrecid_FLDGENCLCLNKRECIDMEMOIncDec1", (CmtExtractRecType(document.getElementById("HIDDEN_cmthidegenlinkrecid").value) == C_TICKETS_RECTYPE) )
  CmtShowHideElmById("fldgenLINKrecid_FLDGENCLCLNKRECIDMEMOIncDec2", (CmtExtractRecType(document.getElementById("HIDDEN_cmthidegenlinkrecid").value) == C_TICKETS_RECTYPE) )
}

function CmtAfErrSec(xId)
{
  var aObj = null;
  aObj = document.getElementById(xId);

  if (aObj != null)
    if (aObj.style.display == 'block')
      CmtSetVal2InnerHTMLById(xId+"LNK", C_CMT_HIDE_ERR_DTL)
    else
      CmtSetVal2InnerHTMLById(xId+"LNK", C_CMT_SHOW_ERR_DTL)
}

function CmtSetLblOfFldInstOfCmb(xId,xCtrlId,xLbltxtId)
{
  if ( ( !CmtIsElmExists(xId) ) && ( CmtIsElmExists(xCtrlId) ) && ( CmtIsElmExists(xLbltxtId) ) )
  {
    CmtAddClassById(xCtrlId, "CmtDisplayNone");
    CmtRemoveClassById(xLbltxtId, "CmtDisplayNone");
    document.getElementById(xLbltxtId).innerHTML = document.getElementById(xCtrlId).innerHTML;
  }
}

function CmtAddClsByCnd(xId, xCls, xcCnd)
{
   if (xcCnd)
     CmtAddClassById(xId, xCls)
}

function CmtRmvClsByCnd(xId, xCls, xcCnd)
{
   if (xcCnd)
     CmtRemoveClassById(xId, xCls)
}

function CmtHideIfEmpty(xId)
{
  CmtHideElmByIdCnd(xId, (CmtGetInnerHTMLById(xId) == "") )
}

function CmtRmvClsfEmpty(xId, xCls)
{
  CmtRmvClsByCnd(xId, xCls, (CmtGetInnerHTMLById(xId) == "") )
}

function CmtSetTitle(xId, xTtl)
{
  var aId = document.getElementById(xId);

  if (aId != null)
    $("#"+aId.id).attr('data-original-title' ,xTtl);

  //$("#"+aId.id).
}

function CmtSetInnr2Innr(xSrc, xDst)
{
  var aSrc = document.getElementById(xSrc);
  var aDst = document.getElementById(xDst);

  if ( (aSrc != null) && (aDst != null) )
  {
    aDst.innerHTML = aSrc.innerHTML;
  }
}

function CmtSetFocusThrdPrtyCmb(xId)
{
  if (CmtIsElmExists(xId))
    if (CmtHasClassById(xId, C_CMT_CLASS_CHOSEN_SINGLE))
    {
      $("#"+xId).trigger('chosen:activate');   
      CmtJumptoIdEx(xId);
    }
    else
    if (CmtHasClassById(xId, C_CMT_CLASS_SELECT_2))
      $("#"+xId).select2('focus')
    else
      $("#"+xId).focus();
}

function CmtGenSetFocusOnLoad(xId)
{
  if (CmtHasClassById(xId, C_CMT_CLASS_SELECT_2))
    setTimeout(function(){CmtSetFocusThrdPrtyCmb(xId)},200)//CCRM-3141
  else
    CmtSetFocusThrdPrtyCmb(xId)
}

function CmtJumptoIdEx(xId)
{
   if (CmtIsElmExists(xId))
   {
     $('html, body').animate({
        scrollTop: ($("#"+xId).offset().top - 60)
    }, 0);
   }
}

function CmtIsFireFox()
{
  return(navigator.userAgent.indexOf("Firefox") > -1)
}

function CmtIsChrome()
{
  return(navigator.userAgent.indexOf("Chrome") > -1)
}
function CmtIsMSIE()
{
  return(CmtGetInternetExplorerVersion() != -1);
}

function CmtTDLOnB4UnLoadIfNeed(e)
{
  var TmpResult = ""; 
  
  if (!CmtIsCustUser())
    TmpResult = CmtTDLOnB4UnLoad(e)
  else  
    return(CmtGenConfirmExitNull());

  return(TmpResult);
}

function CmtCreateDiv(xPrnt,xId,xCls)
{
  var aDiv = document.createElement('div');

  aDiv.setAttribute("id", xId, 0);
  xPrnt.appendChild(aDiv);
  
  if ((xId != "")&&(xCls != ""))
     CmtAddClassById(xId, xCls);  
  
  return(aDiv)
}

function CmtCreateSpan(xPrnt,xId,xCls)
{
  var aSpan = document.createElement('Span');

  aSpan.setAttribute("id", xId, 0);
  xPrnt.appendChild(aSpan);
  
  if ((xId != "")&&(xCls != ""))
     CmtAddClassById(xId, xCls);  
  
  return(aSpan)
}

function CmtAddZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function SetHrAsAmPm(i) 
{
  
    if (i > 12) 
      i = i - 12
    else
    if (i == 0)
      i = 12;
      
    return i;
}

function GetAmPmStr(h)
{
  var TmpResult = "";
  
  if (h < 12)
    TmpResult = "AM"
  else  
    TmpResult = "PM";
  
  return(TmpResult)  
}

function GetTimeStrByJsTime(xTime)
{
  var TmpResult = "";

  var h  = xTime.getHours();
  var mi = xTime.getMinutes();
  
  if (CmtIsAmPmTime())
  {
    TmpResult = CmtAddZero(SetHrAsAmPm(h)) + ":" + CmtAddZero(mi) + " " + GetAmPmStr(h) 
  }
  else
  {
    TmpResult = CmtAddZero(h) + ":" + CmtAddZero(mi)
  }
  
  return(TmpResult)
}

function CmtAddMinutesTimeStr(xTime, minutes) {
  var TmpResult = "";
  
  if (xTime.indexOf(":") >= 0)
  {
    xTime = Cmt_I_CnvAmPm2MiltaryIfNeed(xTime);
    var aFrom = CmtGetStrUntilSep(xTime,":");
    var aTo   = CmtGetStrFromSep(xTime,":");
    var d = new Date(2015,1,1,aFrom, aTo);
    var d1  = CmtAddMinutes(d, minutes);
    TmpResult = GetTimeStrByJsTime(d1)
  }  

  return(TmpResult);
}

function CmtAddMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function Cmt_I_CnvAmPm2MiltaryIfNeed(xTime)
{
  var TmpResult = "";

  if (CmtIsAmPmTime())
    TmpResult = Cmt_I_CnvAmPm2Miltary(xTime)
  else
    TmpResult = xTime;

  return(TmpResult);
}   

function CmtGetTimeAsMin(xTime)
{
  var TmpResult = 0;

  //xTime = Cmt_I_CnvAmPm2MiltaryIfNeed(xTime);
  var aFrom = CmtGetStrUntilSep(xTime,":");
  var aTo   = CmtGetStrFromSep(xTime,":");
  var d = new Date(2015,1,1,aFrom, aTo);
    
  var h  = (d.getHours());
  var mi = (d.getMinutes());
  
  TmpResult = (h * 60) + mi;

  return(TmpResult);
}

function CmvMinToTimeStr(xMin)
{
  var TmpResult = "";
  
 // var aMin = Cmt_StrToIntDef(xMin,0) ;
  var aMin = xMin; 
  var h = Math.floor(aMin / 60); 
  var m = aMin - (h * 60);
  
  if (aMin > 0)
  {
    TmpResult = CmtAddZero(h) +":"+ CmtAddZero(m)
  }
  
  return(TmpResult); 
}

function CmvHoursToMin(xHrs)
{
  var TmpResult = 0;
  
  TmpResult = xHrs * 60;
  
  return(TmpResult); 
}

function saashidenavbarcollapseifopen (collapsedivname) {
var collapseobj = document.getElementById(collapsedivname); 
 if (collapseobj!=null) 
   if ( $(collapseobj).hasClass('in')  ) {
     $(collapseobj).collapse('hide');
  }
}

function CmtGenChnageDatePcr(xId)
{
  // alert(xId + "CmtGenChnageDatePcr");
}

function CmtGenChnageTimePcr(xId)
{
  // alert(xId + "CmtGenChnageTimePcr");

  if (xId == "cmtedtdatafldslpstarttime")
    CmtCtrlFLDSLPSTARTTIMEChange(document.getElementById(xId ))

  if (xId == "cmtedtdatafldslpendtime") 
    CmtCtrlFLDSLPENDTIMEChange(document.getElementById(xId ))
}

function ChangePathbySrvKind(xPath)
{
  var TmpResult = "";
  
  TmpResult = xPath;
  
  if (G_CMT_ISS_URL != "")
    TmpResult = ".." + TmpResult;
  
  return(TmpResult); 
}
    
function CmtGetCmbValChk(xId,xInx)
{
  var TmpResult = "";
  var aCmb = document.getElementById(xId);
  
  if (aCmb != null)
    if ((xInx <= aCmb.options.length -1)&&(xInx >= 0))
      TmpResult = aCmb.options[xInx].value;
  
  return(TmpResult);
}

function CmtOnCmbKeyExist(xKind,xId)
{
  if (xKind == C_ADD_IF_NOT_EX)
    CmtAddVal2CmbIfNeedGV(xId);
  
  //$('.chosen-search input[type="text"]').length
  //$('.chosen-search input[type="text"]')[0].parentNode.parentNode.parentNode.id - > "cmtedtdatafldtktkind_chosen"
  //xid                                                                                cmtedtdatafldtktcategory_chosen 
  //C_ADD_IF_NOT_EX
//  alert(xId);
  //alert($('.chosen-search input[type="text"]').val());
  //alert(99);

 //         alert(this.result_select(evt));
}

function CmtGenDelFromArrByRecId(xArr,xVal)
{
  return ( CmtGenDelFromArrByFld(xArr,C_CMT_FLD_TDE_RECID,xVal) );
}

function CmtGenDelFromArrByFld(xArr,xFld,xVal)
{
   var TmpResult = false;
   var i = xArr.length-1;

   while( (i <= xArr.length) && (!TmpResult) && (i >= 0) )
  {
     if (xArr[i][xFld] == xVal)
     {
        xArr.splice(i,1);
        TmpResult = true;
     }
     i = i - 1;
  }
  return ( TmpResult );
}

function CmtGetHdnFldsCountByPrfxAndVal(xcPrfx, xcStatus)
{
  var i=0;
  var j=0;
  var TmpResult = 0;

  for (i=0; i < document.forms.length; i++)
  {
    for (j=0; j < document.forms[i].elements.length; j++)
    { 
      if (document.forms[i].elements[j].name.indexOf(xcPrfx) == 0)
        if (document.forms[i].elements[j].type == "hidden")
          if (document.forms[i].elements[j].value == xcStatus)
          {
            TmpResult = TmpResult + 1;
          }
    }
  }
  return ( TmpResult );
}

function CmtGetStrUntilSepToArr(xcStr, xcSep, xcArr)
{
  var TmpResult = "";

  var aInx = -1;
  var TmpResult = xcStr;
  var aVal = "";
  
  while (TmpResult != '')
  {
    aVal = CmtGetStrUntilSep(TmpResult, xcSep);
    if (aVal != "")
      TmpResult = TmpResult.substring(aVal.length+1)
    else if (TmpResult != "")
    {
      aVal = TmpResult;    
      TmpResult = "";    
    }
      
    if (aVal != "")      
      xcArr.push(aVal);      
  }
// xcArr.push(11);xcArr.push(22);xcArr.push(322);
//  aInx = xcStr.indexOf(xcSep);
//  if (aInx != -1)
//    TmpResult = xcStr.substring(0,aInx);
//  return ( TmpResult );
}

function CmtGetChkBxCountByPrfxAndVal(xcPrfx, xcStatus)
{
  var i=0;
  var j=0;
  var TmpResult = 0;

  for (i=0; i < document.forms.length; i++)
  {
    for (j=0; j < document.forms[i].elements.length; j++)
    { 
      if (document.forms[i].elements[j].name.indexOf(xcPrfx) == 0)
        if (document.forms[i].elements[j].type == "checkbox")
          if (document.forms[i].elements[j].checked == xcStatus)
          {
            TmpResult = TmpResult + 1;
          }
    }
  }
  return ( TmpResult );
}

function CmtGetMainRecId()
{
  return ( CmtGetHidenFldStr("cmthidegenmainrecid") );
}

function CmtExtractMainRecIdRecType()
{
  return ( CmtExtractRecType( CmtGetMainRecId() ));
}

function CmtGetParentNodeId(xcId)
{
  var TmpResult = "";  
  var aObj = null;
  
  aObj = document.getElementById(xcId);
  if (aObj != null)
    TmpResult = aObj.parentNode.id;

  return ( TmpResult );
}


function CmtSetDrp_LI_ByHref(xPrntId,xId)
{
   $("#" + xPrntId + " .active").removeClass("active");
   $("#" + xId).parent('li').addClass("active");
}

function CmtGenGetInxFromArrByFld(xcArr, xcFld1, xVal1, xcFld2, xVal2)
{
   var TmpResult = -1;
   var i = 0;
   var aGoOn = false;

   while( (i < xcArr.length) && (TmpResult == -1) )
  {
     aGoOn = false;
     if (xcArr[i][xcFld1] == xVal1)
     {
        if (xcFld2 == "")
          aGoOn = true
        else
        if (xcArr[i][xcFld2] == xVal2)
          aGoOn = true;

        if (aGoOn)
          TmpResult = i;
     }
     i = i + 1;
  }
  return ( TmpResult );
}

function CmtGenGetInxFromArrByRecId(xcArr, xRecId)
{
  return ( CmtGenGetInxFromArrByFld(xcArr, C_CMT_FLD_REC_ID, xRecId, "", "") );
}

function CmtSetItmInxOfThirdPartCmbEx(xcId,xcInx)
{
  $("#"+xcId).prop("selectedIndex", xcInx);
  $("#"+xcId).trigger("chosen:updated");   
}

function CmtVldInxOfArr(xcArr, xInx)
{
  var TmpResult = false;
  
  if ((xInx >= 0)&&(xInx <= xcArr.length-1))
    TmpResult = true;

  return ( TmpResult );  
}

function CmtSetPrdefTktLbl(xcId,xcCls)
{
  var TmpResult = false;
  var aObj = null;
  var aPrnt = null;  
  var aPrnt = document.getElementById("CmtDrpDnBtn" + xcId);
  
  if (aPrnt != null)
  {
    aObj = CmtCreateSpan(aPrnt,"CmtDrpDnBtn" + xcId + "MemoDesc",xcCls);
    CmtSetVal2InnerHTMLById(aObj.id,C_CMT_GEN_ADD_P_DF_TXT );
  }
  
  TmpResult = (aObj != null);

  return ( TmpResult );  
}

function CmtExtractIdFromSelector(xcId)
{
  return ( xcId.substr(1,xcId.length) );    
}

function CmtGetStrUntilSepLp(xcStr, xcSep, xcCount)
{
  var TmpResult = '';
  var aInx = 1;
  var aPos = 1;  
  
  TmpResult = xcStr;
  while (aInx <= xcCount)
  {
    aPos = xcStr.indexOf(xcSep);
    if (aPos == -1)
    {
      if (aInx == xcCount)       
        TmpResult = xcStr;
    }
    else  
    {
      if (aInx == xcCount) 
        TmpResult = xcStr.substring(0,aPos)
      else
        xcStr = xcStr.substring(aPos+1,xcStr.length)      
    }
    aInx = aInx + 1;
  }

  return ( TmpResult );  
}

function CmtGenCallToSrvExASyncEx(xcName,xHdnFldName,xcCtrlName,xcCanSetHiddenFlds,xAdd)
{
//  CMT_G_SAVE_MODE = true;
  //HIDDEN_cmthidegenasynctktlis
  //xcName = 'cmthidegenasynctktlistAsyncEvnt';
  var aObj = document.getElementById(xHdnFldName);
  aObj.value = C_GEN_CMT_SRV_PRFX+xcCtrlName+",";
  executeAjaxEvent("&"+aObj.name+"XXXAsyncPrm="+ encodeURIComponent(aObj.value)+xAdd , null,xcName,false, null, true);
  return true;
}

function CmtGenCallToSrvExASyncDf(xcCtrlName,xcCanSetHiddenFlds,xAdd)
{
  var aRecType = CmtGenGetRecType();
  var aFrmKind = document.getElementById("HIDDEN_cmthidegenformkind").value;
  //var aHideName = 'HIDDEN_cmthidegenasync'+aRecType+aFrmKind; 
  //var aObj = document.getElementById(xHdnFldName);
 // aObj.value = 
  //lnkgrdtktlist
  //cmthidegenasynctktlist
  //CmtGenCallToSrvExASyncEx('cmthidegenasync'+aRecType+aFrmKind+'AsyncEvnt',aHideName,xcCtrlName,xcCanSetHiddenFlds,xAdd)
  CmtGenCallToSrvExASyncDfEx(xcCtrlName,xcCanSetHiddenFlds,xAdd,aRecType,aFrmKind);
}

function CmtGenCallToSrvExASyncDfEx(xcCtrlName,xcCanSetHiddenFlds,xAdd,xRecType,xFormKind)
{
  //var aRecType = CmtGenGetRecType();
  //var aFrmKind = document.getElementById("HIDDEN_cmthidegenformkind").value;
  var aRecType = xRecType;
  var aFrmKind = xFormKind;
  var aHideName = 'HIDDEN_cmthidegenasync'+aRecType+aFrmKind; 
  //var aObj = document.getElementById(xHdnFldName);
 // aObj.value = 
  //lnkgrdtktlist
  //cmthidegenasynctktlist
  CmtGenCallToSrvExASyncEx('cmthidegenasync'+aRecType+aFrmKind+'AsyncEvnt',aHideName,xcCtrlName,xcCanSetHiddenFlds,xAdd)
}

function SetValToArrtById(xId,xAtrId,xVal)
{
  var TmpResult = false;

  aObj = document.getElementById(xId);
  if (aObj != null)
  {
    TmpResult = true;
    aObj.setAttribute(xAtrId,xVal);
  }
  
  return ( TmpResult );  
}

function GetValFromAtrrtById(xId,xAtrId)
{
  var TmpResult = "";

  aObj = document.getElementById(xId);
  if (aObj != null)
  {
    TmpResult = aObj.getAttribute(xAtrId);
  }
  
  return ( TmpResult );  
}

function GetCurEmpRecId()
{
  var TmpResult = "";
  
  TmpResult = CmtGetValById("HIDDEN_cmthidegenemprecid");
 
  return ( TmpResult );  
}

function CmtAlertAndFocus(xcId,xcMsg)
{
  document.getElementById(xcId).focus();
  alert(xcMsg);
}

function CmtConfirmAndFocus(xcId,xcMsg)
{
  var TmpResult = false;
  
  document.getElementById(xcId).focus();
  TmpResult = confirm(xcMsg);

 
  return ( TmpResult );  
}


function CmtGetCountofLi(xcId)
{
  var TmpResult = 0;
  
  TmpResult = $("#" + xcId + " li").length;
 
  return ( TmpResult );  
}

function CmtIsVldArrInx(xcArr, xcInx)
{
  var TmpResult = 0;
  
  TmpResult = ( (xcInx >= 0) && (xcInx <= xcArr.length-1) );
 
  return ( TmpResult );  
}

function CmtCallToSrvByGrd(xVal)
{
  //getSubmitForm().cmthidecellinfo.value='9:3';  
  getSubmitForm().cmthidecellinfo.value = xVal;
  SubmitClickConfirm('lnkgrd'+CmtGenGetRecType()+document.getElementById("HIDDEN_cmthidegenformkind").value,'', true,'');
}

function CmpMainRecType(xVal)
{
  var TmpResult = false;
  var aRectype = CmtGenGetRecType();

  TmpResult = (aRectype.toUpperCase() == xVal.toUpperCase());
 
  return ( TmpResult );   
}

function CmtIndexOf(xMain, xVal)
{
  var TmpResult = -1;
 
//    var str = "The rain in SPAIN stays mainly in the plain",
//        test = "ain",
//        re = new RegExp(test, 'gi'),
//        n = str.match(re);

//  re = new RegExp(xVal, 'gi');
//  var n = xMain.match(re);
//  TmpResult = (n != "");
  xMain = xMain.toLowerCase();
  xVal = xVal.toLowerCase();
  TmpResult = xMain.indexOf(xVal);
  
  return ( TmpResult );   
}

function GetGenScrlInd4Anchr()
{
  var TmpResult = "";

  TmpResult = C_CMT_SPC_KIND_BY_SCRL+''+$(window).scrollLeft()+','+$(window).scrollTop();
  
  return ( TmpResult );  
 
}

function CmtGetAsHtmlHint(xStr)
{
  var TmpResult = "";

  TmpResult = 'title='+'"'+xStr+'"'
  
  return ( TmpResult );  
 
}

function CalcDateTimeByKind(xcKind, xcAmnt)
{
  var TmpResult = new Date();

  switch(xcKind)
  {
    case C_CMT_DT_KIND_MINUTE : TmpResult.setMinutes(TmpResult.getMinutes   () +     xcAmnt); break;
    case C_CMT_DT_KIND_HOUR   : TmpResult.setHours    (TmpResult.getHours   () +     xcAmnt); break; 
    case C_CMT_DT_KIND_DAY    : TmpResult.setDate     (TmpResult.getDate    () +     xcAmnt); break; 
    case C_CMT_DT_KIND_WEEK   : TmpResult.setDate     (TmpResult.getDate    () + 7 * xcAmnt); break; 
    case C_CMT_DT_KIND_MONTH  : TmpResult.setMonth    (TmpResult.getMonth   () +     xcAmnt); break; 
    case C_CMT_DT_KIND_YEAR   : TmpResult.setFullYear (TmpResult.getFullYear() +     xcAmnt); break; 
  }

  TmpResult.setSeconds(0);
  TmpResult.setMilliseconds(0);  

  return(TmpResult);
}