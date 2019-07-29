var C_FICT_MMB_INX = -1000;

function CmtgenChkCanSetHideFld(xcObj,xCtrl)
{
  var TmpResult = true;
  var aRepItm = null;
  
  if ( (xcObj != null) && (xCtrl != null) )
    if (xCtrl.type.toLowerCase() == "select-one")
    {
      aRepItm =  CmtGenGetItmFromArrByFld(G_CMB_DIC_ID_ARR, C_CMT_FLD_REC_ID, xCtrl.id , "Inx", xCtrl.selectedIndex);
      if (aRepItm != null)
      {
        TmpResult = false;
        //alert(aRepItm);
        xcObj.value = ConcatCmbInxAndVal(aRepItm.Inx, aRepItm.Val);
      }
    }

  return(TmpResult);
}

function ConcatCmbInxAndVal(xcInx,xcVal)
{
  return(xcInx+ '|' +xcVal);   
}

function CmtIsGetDbErr(xcRecType)
{
  var aObj = null;
  var TmpResult = false;

  aObj = document.getElementById("cmtlblerrmsg"+xcRecType.toLowerCase()+"edit");
  if (aObj != null)
    TmpResult = (CmtTrim(aObj.innerHTML) != "");
    
  return(TmpResult);
}

function CmtBtnMblFldsClick(xThis)
{
  $(".GenHidnCtrl150418Gen").toggleClass("GenHidnCtrl150418");
  var aVal = CmtGetInnerHTMLById("customop_cmttglusrflds");

  if (aVal == C_SHOW_FEWER_FLDS_MBL)
    aVal = C_SHOW_MORE_FLDS_MBL
  else
    aVal = C_SHOW_FEWER_FLDS_MBL;

  CmtSetVal2InnerHTMLById("customop_cmttglusrflds", aVal);
}