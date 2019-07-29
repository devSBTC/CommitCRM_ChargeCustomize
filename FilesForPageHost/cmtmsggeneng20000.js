// GEN MSG ENG
var C_CMT_MSG_REQUIRE_FILED  = "This is a require field";
var C_CMT_FIELD_NOT_HAS_VAL  = "has no value.";
var C_CMT_MSG_FIELD          = "Field";
var C_CMT_MSG_IS_CONTINUE    = "Continue?";
var C_CMT_MSG_FIELD_IS_EMPTY = "Mandatory field";
var C_CMT_ILLEGAL_VAL        = "Illegal value";
var C_CMT_LEGAL              = "legal";
var C_CMT_VIEW_ONLY_PRIV_MSG = "You Have No Permission to Edit this Record";
var C_CMT_SHOW_ERR_DTL       = "Show Details";
var C_CMT_HIDE_ERR_DTL       = "Hide Details";
var rs_NOT_PERMIT_FOR_USER   = "You do not have permission to perform this operation. Contact your system administrator";
var C_COMBO_FIRST_ITEM       = "--- Select Value ---";
var C_COMBO_GEN_S2_ITEM_HINT = 'Hit the Space or Enter keys in order to start searching.\r\n\r\n';

var C_CMT_MSG_TKT_CLOSE_TICKET   = "Note: Ticket closing date and time were registered with no status change. Do you want to change status to 'Completed'?";

var C_CMT_MSG_SLP_COPY_HOUR      = "This is a unit-based charge (not hours based) and therefore the value cannot be copied."

var C_CMT_GEN_NOT_PERMIT_FOR_USER = "You do not have permission to perform this operation. Contact your system administrator";
var C_CMT_PLS_MIN_HINT            = "Click to Show/Hide Details";
var C_CMT_FND_ACTIVE_IND          =  'Search (Active!)';
var C_CMT_FND_IND                 =  'Search';
//TKT
var C_TKT_MSG_CmpleteTktmsg_Prfx = "The following was discovered when attempting to close this ticket:";
var C_TKT_MSG_NotExistChargesForTicket = "No charges were entered for this ticket.";
var C_TKT_MSG_ExistFutureEventsOrTasksForTicket = "There are still activities listed in the Pending tab of this ticket.";
var C_TKT_MSG_TktChangetoPrvStatus = "The changes made to this Ticket will be saved, however the current ticket Status will not be changed.";
var C_TKT_MSG_TktChangetoPrvStatus_CONT = "Do you wish to continue closing the ticket?";
var C_TKT_MSG_TktChangetoPrvStatus_Alrt = "Note: Selecting Cancel will save the changes to the ticket, however the current ticket Status will not be changed";
var C_TKT_FLDTKTREGIONCODE = "Account's region code";

var rs_Ticket_with_linked_billed_charges = 'This Ticket cannot be moved to another Account because it has Charges that have already been billed or invoiced.';
var rs_Ticket_created_from_Quote = 'This Ticket cannot be moved to another Account because it was created from a Quote.';
var rs_Ticket_with_linked_Quotes = 'This Ticket cannot be moved to another Account because it has Quotes linked to it.';
var rsSelectAnotherAccount = 'The newly selected Account is the same as the current one. Please select another Account and try again.';

//Const
var C_GEN_NAME              = "Name";
var C_GEN_STATUS            = "Status";
var C_DESC_FIELD            = "Description";
var C_TKT_SOLUTION_FIELD    = "Resolution";
var C_DATE_FIELD            = "Date";
var C_TKT_OPEN_DATE_FIELD   = "Open Date";
var C_TKT_CLOSE_DATE_FIELD  = "Close Date";
var C_BCT_FLD               = "Contract";
var C_GEN_START_TIME_FIELD  = "Start Time";
var C_GEN_END_TIME_FIELD    = "End Time";
var C_SLP_AMOUNT_FIELD      = "Amount";
var C_SLP_PRICE_FIELD       = "Rate";
var C_ITM_FLD               = "Item";
var C_CARD_FLD              = "Account";
var C_TKT_FLD               = "Ticket";
var C_QTL_AMOUNT_FIELD      = "Amount";

//BCT
var C_BCT_HOURS_BANK         = "hours";
var C_BCT_MONEY_BANK         = "money";
var C_BCT_TKT_BANK           = "tickets";

//SLP
var C_SLP_BILLABLE_KIND      ="Mark as billed";
var C_SLP_NO_CHARGE_KIND     ="Mark as unbilled";
var C_SLP_IS_MODIFY_3RD_INV  = "This charge is linked to an invoice. Continue?";
var C_SLP_CPC_ITM_IS_HOUR    = "For Contract-Price Charge, select a fixed-price item. Hourly-based items cannot be selected.";
var C_SLP_Q_FR_TO_TIME_LNK_NAME = "Quick Time Entry";
var C_SLP_TheItemNotAllowed_Continue = '*The selected Item is not allowed for use with the selected contract. Continue?';
var C_SLP_TheItemNotAllowed_Error = '*The selected Item is not allowed for use with the selected contract. Please select another Item or Contract for the Charge.';
var C_SLP_HOURS_AMNT = "Hours Amount";

//QTL
var C_QTL_CPC_ITM_IS_HOUR    = "Only Unit based Items can be selected for a Quote line. Try again.";

//AST
var C_AST_EXPIRATION_DATE    = "The Asset warranty/license date has expired, Continue?";
var C_AST_TYPE               = "Asset Type";
var C_AST_APLY_CF_NT_4_AST =  "The newly selected Asset type is configured with a dedicated set of configuration templates.\n\nAdd configuration entries? (Existing data is preserved and remains intact).";


//CRD
var C_CRD_FIELDS_NAME_MISSINGS = "No account name entered.";
var C_CRD_FULL_NAME = "File As";
var C_GRD_ACTN_NOT_SUP_EMP = 'This action is not supported for employees';

// ITM
 var C_ITM_CODE  = "Item Code";
 var C_ITM_NAME  = "Name";
 var C_ITM_PRICE = "Price";

 var C_ITM_MSG_DUPLICATE_TAXCODE = "Same tax code was selected twice for this item. Change item parameters and try again.";

//OPP
var C_OPP_AMOUNT            = "Amount";
var C_OPP_PROBABILITY       = "Probability";
var C_OPP_CLOSE_BY          = "Close By";
var C_OPP_MSG_CLOSE_OPEN    = "Closing date cannot be before opening date.";
var C_OPP_MSG_OPEN_CLOSE_BY = "Predicted closing date cannot be earlier than opening date.";

//KBA
var C_KBA_TITLE = "Title";
var C_FTS_MIN_LEN = "Text is too short. Enter at least 2 characters for your search";
var C_FTS_NOISE_WORD = "NOISE WORD";

//DOC
var C_DOC_DESC = 'Subject';

//UPL
var C_UPL_UPL_WAIT = 'Please wait while file is being uploaded.';

//QTE
var C_QTE_FREE_EML_FLD           = "Email";
var C_QTE_FREE_NAME_FLD          = "Name";
var C_QTE_FREE_SIGN_FLD          = "Signature";
var C_QTE_CHANGE_ACC_STS_2_OPEN  = "This Quote was accepted by the customer. Continuing will clear the customer acceptance. Continue?";

//Timer
var C_TMR_RST_TMR = "Reset timer?";
var C_TMR_CLOSE_TMR = "Continue closing timer before charging time?";

//Todo - TDL + TDE
var CMT_GEN_MONTH_NAMES_SHORT   = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var CMT_GEN_TODO_EDIT_LNK_VAL   = "Edit";
var CMT_GEN_TODO_OR             = "or";
var CMT_GEN_TODO_CANCEL_CAPTION = "Cancel";

//GLS                    
var C_GLS_MIN_LEN = "Minimum text length for search is 2 characters.";
var C_GLS_NO_SBJ_SEL = "Select at least one subject to search in.";

//PSW
var C_NO_PS_PR = 'Invalid Passphrase';
var C_PSW_BLOCKED = 'Temporarily passwords cannot be fetched. Please try again in a few minutes.';
var C_PSW_Confirm_Pass_Failed = 'Password and confirm password must be identical.';

//2FA
var C_NO_2FA_CODE     = "Enter the 2-factor authentication code and try again.";
var C_2FA_CODE_INVLD  = "Invalid code or code has expired.";

var C_CMT_TDL_INS_BTN_CAPTION        = "Add a To-do List";
var C_CMT_TDL_INS_TDL_EDT_DEF_VAL    = "<Enter the list title here>";
var C_CMT_TDL_INS_TDL_BTN_CAPTION    = "OK (Start adding To-dos)";
var C_CMT_TDL_INS_TDL_CANCEL_CAPTION = "Cancel";
var C_CMT_TDL_DEL_TDL_MSG            = "Delete To-do List together with all its To-dos (if any)?";
var C_CMT_TDL_UPD_BTN_CAPTION        = "Save Changes";

var C_CMT_TDE_ADD_A_TDE               = "Add a To-do";
var C_CMT_TDE_COMPLETED               = "Done";
var C_CMT_TDE_ADD_NEW_EDT_BOX         = "Enter To-do details here";
var C_CMT_TDE_HIDE_CMPLE              = "Hide done To-dos";
var C_CMT_TDE_CMPLT_BY                = "Done by";
var C_CMT_TDE_ON                      = "on";
var C_CMT_TDE_INS_UPD_BTN_CAPTION     = "OK";
var C_CMT_TODO_ERR_SAVE               = "An error occurred while attempting to save To-dos.";
var C_CMT_TODO_CHARGE                 = "Charge";
var C_CMT_TODO_CHARGE_MOB             = "Chrg.";
var C_CMT_TDE_UN_CHARGED              = "uncharged";
var C_CMT_TDE_CHARGE_ALL              = "Charge All";
var C_CMT_TDE_ALREADY_CHARGED_MSG     = "To-do was charged by another user and therefore it cannot be charged again";
var C_CMT_TDE_ALREADY_DONE            = "To-do was done by another user and therefore its description cannot be modified";
var C_CMT_TDE_ALREADY_UNDONE          = "To-do was undone by another user";
var C_CMT_GEN_TODO_SAVE_B4_CRG_MSG    = "Please save the current changes and only then proceed with charging.";
var C_CMT_GEN_TODO_EXIST_UNDONE_4_TKT = "There are still open To-Dos for this Ticket. Continue closing it?";
var C_CMT_GEN_TODO_NEW_FROM_TMPL      = "";
var C_CMT_GEN_TODO_PLEASE_WAIT        = "Please Wait...";
var C_CMT_GEN_TDE_INS_BTN_CAPTION     = "Add this To-do";
var C_CMT_GEN_TDE_INS_CANCEL_CAPTION  = "Cancel (Stop adding To-dos)";
var C_CMT_GEN_TDT_NO_TMPL             = "< No Saved Templates were Found >";
var C_CMT_GEN_TODO_SAVE_MOB           = "Save";
var C_CMT_GEN_TODO_CANCEL_MOB         = "Cancel";

var C_CMT_GEN_SAVE_BTN_CAPTION   = "Save";
var C_CMT_GEN_CANCEL_BTN_CAPTION = "Cancel";
var C_CMT_GEN_DELETE_BTN_CAPTION = "Delete";
var C_CMT_GEN_EDIT_LNK_CAPTION   = "Edit";

var C_CMT_GEN_NO_EMP_SEL = "Select at least one Employee.";

var C_CMT_GEN_SR_NT_DPPL_DESC = "The following template entries were not loaded because they already exist in this section:";
var C_CMT_GEN_ADD_P_DF_TXT = "Insert predefined text";

var  C_CMT_SRNT_ADD_SEC = "Add Section";
var  C_CMT_SRNT_CRD = "Structured Note";
var  C_CMT_SRNT_AST = "Configuration Note";
var  C_CMT_SRNT_ADD_SEC_AST = C_CMT_SRNT_ADD_SEC + " " + C_CMT_SRNT_AST;
var  C_CMT_SRNT_ADD_SEC_CRD = C_CMT_SRNT_ADD_SEC + " " + C_CMT_SRNT_CRD;

var C_CMT_GEN_CONT_DEL = "Continue deleting";
var C_CMT_DEL_LINE = 'Delete record?';

var C_DSGN_NO_REP_WAS_SEL = 'Please select the form template to sign and try again.';
var C_DSGN_NO_SIGN_WAS_SET = 'Please sign and try again.';
var C_DSGN_FRM_GNR_SUC     = "Please wait while the report is being generated and downloaded."+"<BR><BR>"+"Download will start automatically.";

var C_E_MSG_MAIL_DONT_SEND_MESSAGE_NO_RECEIVERS = 'Error Message not sent.'+'\n'+'Selecting destination employees enables sending message.';
var C_W_MSG_MAIL_MESSAGE_NO_SUBJECT_CONTINUE_YN = 'Continue sending without Subject Line?';
var C_W_MSG_MAIL_MESSAGE_NO_TEXT_CONTINUE_YN    = 'Continue sending message without content?';

var C_RPX_SHOW_RPCPNT = 'Show Recipients';
var C_RPX_HIDE_RPCPNT = 'Hide Recipients';
//place Holder Combo
var PLC_HLDR_CRD = 'Select Account...';
var PLC_HLDR_ITM = 'Select Item...';
var PLC_HLDR_AST = 'Select Asset...';

var C_SHOW_MORE_FLDS_MBL  = 'Show more fields';
var C_SHOW_FEWER_FLDS_MBL = 'Show fewer fields';
var C_GEN_DATE_IN_PAST    = 'Enter future date in this field.';

function GetFldHasNoValMsg(xcStr)
{
return (C_CMT_MSG_FIELD+" "+xcStr+" "+C_CMT_FIELD_NOT_HAS_VAL+" "+C_CMT_MSG_IS_CONTINUE) ;
}

function GetFldMustHasValMsg(xcStr)
{
//return (C_CMT_MSG_FIELD+" "+xcStr+" "+C_CMT_MSG_FIELD_IS_EMPTY) ;
return (C_CMT_MSG_FIELD_IS_EMPTY+" "+xcStr) ;
}
function GetIlLegalMsg(xcFldName,xcKind)
{
return (C_CMT_ILLEGAL_VAL) ;
}

function GetMsgRange(xcFldName1,xcFldName2)
{
return (" The "+xcFldName2+" field must be greater than "+xcFldName1) ;
}

function GetBctMsgWillExccedMnyBnk(xcTotal,xcUsed)
{
  TmpResult = "";

  if (!CmtIsSlpQInsEdtMode())  
    TmpResult =  "Saving will result in over use of"+
                  " ("+ xcUsed+ ") "+"of the original contract's block of money"+" ("+xcTotal+") " +
                  "Continue? " 
  else                
    TmpResult =  "Saving will cause a block-of-money contract overage. Continue?";

  return(TmpResult);  
}

function GetBctMsgWillExcced(xcTotal,xcUsed,xcKind,xcUnt)
{
  TmpResult = "";
        
  if (xcKind == C_BCT_MONEY_BANK)
  {
    xcTotal =  xcUnt+xcTotal;
    xcUsed  =  xcUnt+xcUsed;
  }
  else
  {
    xcTotal =  xcTotal+' '+xcUnt;
    xcUsed  =  xcUsed+' '+xcUnt;
  }
                        
  if (xcKind == C_BCT_MONEY_BANK)
  {
    TmpResult =  GetBctMsgWillExccedMnyBnk(xcTotal,xcUsed)
  }
  else if (xcKind == C_BCT_HOURS_BANK)
  {TmpResult =  "Saving will result in over use of"+
                " ("+ xcUsed+ ") "+"the original contract's block of time"+"("+xcTotal+") " +
                "Continue? "  ;}

  else if (xcKind == C_BCT_TKT_BANK)
  {TmpResult =  "This block of tickets contract"+" ("+xcTotal+") " +
                "has already been over used by"+" ("+xcUsed+") " +
                "Continue?" ;}

  return(TmpResult);
}

function GetTktFullUsed(xcTotal)
{
  return("The contract Block of Tickets ("+xcTotal+" ticket/s) is fully used. Continue?");
}


