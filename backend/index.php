

<?php 
include "db.php"; 

$msg = "";

/* ================= CUSTOMER SAVE ================= */
if(isset($_POST['save_customer'])){
$sql = "INSERT INTO customers
(company_name,unit,gst,phone1,phone2,addr1,addr2,addr3,addr4,company_id)
VALUES(
'{$_POST['company_name']}',
'{$_POST['unit']}',
'{$_POST['gst']}',
'{$_POST['phone1']}',
'{$_POST['phone2']}',
'{$_POST['addr1']}',
'{$_POST['addr2']}',
'{$_POST['addr3']}',
'{$_POST['addr4']}',
'{$_POST['company_id']}')";

if($conn->query($sql)){
$msg="Customer Saved Successfully";
header("Location: ".$_SERVER['PHP_SELF']);
exit;
}else{
$msg="Error Saving Customer : ".$conn->error;
}
}

/* ================= QUOTATION SAVE ================= */
if(isset($_POST['save_quotation'])){
$sql = "INSERT INTO quotations
(company_name, quotation_no, quotation_ref, calibration_location, q_mode,
item_name, quantity, rate, gst, remarks, bank_details)
VALUES(
'{$_POST['q_company_name']}',
'{$_POST['quotation_no']}',
'{$_POST['quotation_ref']}',
'{$_POST['calibration_location']}',
'{$_POST['q_mode']}',
'{$_POST['item_name']}',
'{$_POST['quantity']}',
'{$_POST['rate']}',
'{$_POST['q_gst']}',
'{$_POST['remarks']}',
'{$_POST['bank_details']}'
)";

if($conn->query($sql)){
$msg="Quotation Saved Successfully";
header("Location: ".$_SERVER['PHP_SELF']);
exit;
}else{
$msg="Error Saving Quotation : ".$conn->error;
}
}



/* ================= PO SAVE ================= */
if(isset($_POST['save_po'])){
$sql = "INSERT INTO purchase_orders
(po_number, po_date, order_type, supplier_name,
supplier_company, address, phone, gst)
VALUES(
'{$_POST['po_number']}',
'{$_POST['po_date']}',
'{$_POST['order_type']}',
'{$_POST['supplier_name']}',
'{$_POST['supplier_company']}',
'{$_POST['po_address']}',
'{$_POST['po_phone']}',
'{$_POST['po_gst']}'
)";

if($conn->query($sql)){
$msg="Purchase Order Saved Successfully";
header("Location: ".$_SERVER['PHP_SELF']);
exit;
}else{
$msg="Error Saving PO : ".$conn->error;
}
}

/* ================= FETCH ================= */
$customers  = $conn->query("SELECT * FROM customers ORDER BY id DESC");
$quotations = $conn->query("SELECT * FROM quotations ORDER BY id DESC");
$pos        = $conn->query("SELECT * FROM purchase_orders ORDER BY id DESC");
?>

<!DOCTYPE html>
<html>
<head>
<title>Gayathiri Calibration Services Pvt Ltd</title>

<style>
/* Your original full CSS unchanged */
body{
margin:0;
font-family:"Times New Roman";
background:linear-gradient(rgba(0,0,50,.92),rgba(0,0,90,.96)),url("giff1.gif");
background-size:cover;
color:white;
}
.top-header{
background:linear-gradient(90deg,#020a3a,#0b1a6b,#020a3a);
padding:25px;
text-align:center;
position:relative;
}
.company-title{font-size:36px;font-weight:bold;}
.sub-caption{font-size:22px;margin-top:5px;}
.datetime-box{position:absolute;right:20px;top:15px;font-size:16px;font-weight:bold;text-align:right;}
.top-menu{display:flex;background:#020a3a;padding-left:20px;}
.menu-group{position:relative;padding:15px 30px;font-weight:bold;cursor:pointer;}
.menu-group:hover{background:#0b1a6b;}
.submenu{display:none;position:absolute;background:#020a3a;top:50px;left:0;min-width:200px;}
.menu-group:hover .submenu{display:block;}
.submenu div{padding:12px;cursor:pointer;}
.submenu div:hover{background:#0b1a6b;}
.content{padding:40px;max-width:1100px;margin:auto;}
.msg{font-weight:bold;margin-bottom:20px;color:#4da3ff;}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:35px 50px;}
.form-group{display:flex;flex-direction:column;}
label{font-size:18px;font-weight:bold;margin-bottom:8px;}
input,select{
background:transparent;
border:none;
border-bottom:2px solid rgba(255,255,255,.7);
padding:10px 5px;
font-size:17px;
color:white;
outline:none;
}
input:focus,select:focus{border-bottom:2px solid #4da3ff;}
button{
margin-top:35px;
padding:12px 35px;
background:linear-gradient(90deg,#1a2bb8,#4da3ff);
border:none;
border-radius:8px;
font-size:18px;
font-weight:bold;
color:white;
cursor:pointer;
}
table{width:100%;border-collapse:collapse;margin-top:20px;}
th,td{padding:12px;border:1px solid rgba(255,255,255,.3);}
th{background:#0b1a6b;}
.tab{display:none;}
.tab.active{display:block;}
</style>
</head>

<body>

<div class="top-header">
<div class="company-title">Gayathiri Calibration Services Pvt Ltd</div>
<div class="sub-caption">Customer Management System</div>
<div class="datetime-box" id="datetime"></div>
</div>

<div class="top-menu">
<div class="menu-group">Customer ▸
<div class="submenu">
<div onclick="openTab('customer_entry')">Customer Entry</div>
<div onclick="openTab('customer_view')">Customer View</div>
</div></div>

<div class="menu-group">Quotation ▸
<div class="submenu">
<div onclick="openTab('quotation_entry')">Quotation Entry</div>
<div onclick="openTab('quotation_view')">Quotation View</div>
</div></div>

<div class="menu-group">Purchase Order ▸
<div class="submenu">
<div onclick="openTab('po_entry')">PO Entry</div>
<div onclick="openTab('po_view')">PO View</div>
</div></div>
</div>

<div class="content">

<?php if($msg!=""){ ?>
<div class="msg"><?php echo $msg; ?></div>
<?php } ?>

<form method="post">

<!-- CUSTOMER ENTRY -->
<div id="customer_entry" class="tab active">
<div class="form-grid">
<div class="form-group"><label>Company Name</label><input name="company_name" required></div>
<div class="form-group"><label>Unit</label><input name="unit"></div>
<div class="form-group"><label>GST</label><input name="gst"></div>
<div class="form-group"><label>Company ID</label><input name="company_id"></div>
<div class="form-group"><label>Phone 1</label><input name="phone1"></div>
<div class="form-group"><label>Phone 2</label><input name="phone2"></div>
<div class="form-group"><label>Address 1</label><input name="addr1"></div>
<div class="form-group"><label>Address 2</label><input name="addr2"></div>
<div class="form-group"><label>Address 3</label><input name="addr3"></div>
<div class="form-group"><label>Address 4</label><input name="addr4"></div>
</div>
<button name="save_customer">Save Customer</button>
</div>

<!-- CUSTOMER VIEW -->
<div id="customer_view" class="tab">
<table>
<tr><th>ID</th><th>Company</th><th>GST</th><th>Phone</th><th>Company ID</th></tr>
<?php while($row=$customers->fetch_assoc()){ ?>
<tr>
<td><?php echo $row['id']; ?></td>
<td><?php echo $row['company_name']; ?></td>
<td><?php echo $row['gst']; ?></td>
<td><?php echo $row['phone1']; ?></td>
<td><?php echo $row['company_id']; ?></td>
</tr>
<?php } ?>
</table>
</div>

<!-- QUOTATION ENTRY -->
<div id="quotation_entry" class="tab">
<div class="form-grid">
<div class="form-group"><label>Company Name</label><input name="q_company_name"></div>
<div class="form-group"><label>Quotation No</label><input name="quotation_no"></div>
<div class="form-group"><label>Quotation Ref</label><input name="quotation_ref"></div>
<div class="form-group"><label>Calibration Location</label><input name="calibration_location"></div>
<div class="form-group"><label>Mode</label>
<select name="q_mode">
<option value="Onsite">Onsite</option>
<option value="Lab">Lab</option>
</select></div>
<div class="form-group"><label>Item Name</label><input name="item_name"></div>
<div class="form-group"><label>Quantity</label><input name="quantity"></div>
<div class="form-group"><label>Rate</label><input name="rate"></div>
<div class="form-group"><label>GST</label><input name="q_gst"></div>
<div class="form-group"><label>Remarks</label><input name="remarks"></div>
<div class="form-group"><label>Bank Details</label><input name="bank_details"></div>
</div>
<button name="save_quotation">Save Quotation</button>
</div>

<!-- QUOTATION VIEW -->
<div id="quotation_view" class="tab">
<table>
<tr>
<th>ID</th><th>Company</th><th>Quotation No</th><th>Reference</th>
<th>Location</th><th>Mode</th><th>Item</th>
<th>Qty</th><th>Rate</th><th>GST</th><th>Remarks</th><th>Bank</th>
</tr>
<?php if($quotations && $quotations->num_rows>0){
while($row=$quotations->fetch_assoc()){ ?>
<tr>
<td><?php echo $row['id']; ?></td>
<td><?php echo $row['company_name']; ?></td>
<td><?php echo $row['quotation_no']; ?></td>
<td><?php echo $row['quotation_ref']; ?></td>
<td><?php echo $row['calibration_location']; ?></td>
<td><?php echo $row['q_mode']; ?></td>
<td><?php echo $row['item_name']; ?></td>
<td><?php echo $row['quantity']; ?></td>
<td><?php echo $row['rate']; ?></td>
<td><?php echo $row['gst']; ?></td>
<td><?php echo $row['remarks']; ?></td>
<td><?php echo $row['bank_details']; ?></td>
</tr>
<?php }} ?>
</table>
</div>

<!-- PO ENTRY -->
<div id="po_entry" class="tab">
<div class="form-grid">
<div class="form-group"><label>PO Number</label><input name="po_number"></div>
<div class="form-group"><label>PO Date</label><input type="date" name="po_date"></div>
<div class="form-group"><label>Order Type</label>
<select name="order_type">
<option>Calibration</option>
<option>Service</option>
<option>Supply</option>
</select></div>
<div class="form-group"><label>Supplier Name</label><input name="supplier_name"></div>
<div class="form-group"><label>Supplier Company</label><input name="supplier_company"></div>
<div class="form-group"><label>Address</label><input name="po_address"></div>
<div class="form-group"><label>Phone</label><input name="po_phone"></div>
<div class="form-group"><label>GST</label><input name="po_gst"></div>
</div>
<button name="save_po">Save Purchase Order</button>
</div>

<!-- PO VIEW -->
<div id="po_view" class="tab">
<table>
<tr>
<th>ID</th><th>PO Number</th><th>Date</th>
<th>Supplier</th><th>Company</th><th>Phone</th><th>GST</th>
</tr>
<?php while($row=$pos->fetch_assoc()){ ?>
<tr>
<td><?php echo $row['id']; ?></td>
<td><?php echo $row['po_number']; ?></td>
<td><?php echo $row['po_date']; ?></td>
<td><?php echo $row['supplier_name']; ?></td>
<td><?php echo $row['supplier_company']; ?></td>
<td><?php echo $row['phone']; ?></td>
<td><?php echo $row['gst']; ?></td>
</tr>
<?php } ?>
</table>
</div>

</form>
</div>

<script>
function openTab(id){
document.querySelectorAll(".tab").forEach(tab=>tab.classList.remove("active"));
document.getElementById(id).classList.add("active");
}
function updateDateTime(){
var now=new Date();
document.getElementById("datetime").innerHTML=
now.toLocaleDateString("en-GB")+"<br>"+now.toLocaleTimeString();
}
setInterval(updateDateTime,1000);
updateDateTime();
</script>

</body>
</html>
