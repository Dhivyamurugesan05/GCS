<?php
include "db.php";

/* Insert only when button clicked */
if (isset($_POST['insert'])) {
    $stmt = $conn->prepare(
        "INSERT INTO customers
        (company_name, unit, gst, phone1, phone2, addr1, addr2, addr3, addr4, company_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );

    $stmt->bind_param(
        "ssssssssss",
        $_POST['company_name'],
        $_POST['unit'],
        $_POST['gst'],
        $_POST['phone1'],
        $_POST['phone2'],
        $_POST['addr1'],
        $_POST['addr2'],
        $_POST['addr3'],
        $_POST['addr4'],
        $_POST['company_id']
    );

    $stmt->execute();
}

/* Fetch data (initially empty) */
$result = $conn->query("SELECT * FROM customers");
?>

<!DOCTYPE html>
<html>
<body>

<h2>Customer Entry</h2>

<form method="post">
    <input name="company_name" placeholder="Company Name" required><br>
    <input name="unit" placeholder="Unit"><br>
    <input name="gst" placeholder="GST"><br>
    <input name="phone1" placeholder="Phone 1"><br>
    <input name="phone2" placeholder="Phone 2"><br>
    <input name="addr1" placeholder="Address 1"><br>
    <input name="addr2" placeholder="Address 2"><br>
    <input name="addr3" placeholder="Address 3"><br>
    <input name="addr4" placeholder="Address 4"><br>
    <input name="company_id" placeholder="Company ID"><br><br>

    <button type="submit" name="insert">INSERT</button>
</form>

<hr>

<table border="1">
<tr>
    <th>ID</th>
    <th>Company</th>
    <th>Unit</th>
    <th>GST</th>
    <th>Phone1</th>
    <th>Phone2</th>
    <th>Addr1</th>
    <th>Addr2</th>
    <th>Addr3</th>
    <th>Addr4</th>
    <th>Company ID</th>
</tr>

<?php while ($row = $result->fetch_assoc()) { ?>
<tr>
    <td><?= $row['id'] ?></td>
    <td><?= $row['company_name'] ?></td>
    <td><?= $row['unit'] ?></td>
    <td><?= $row['gst'] ?></td>
    <td><?= $row['phone1'] ?></td>
    <td><?= $row['phone2'] ?></td>
    <td><?= $row['addr1'] ?></td>
    <td><?= $row['addr2'] ?></td>
    <td><?= $row['addr3'] ?></td>
    <td><?= $row['addr4'] ?></td>
    <td><?= $row['company_id'] ?></td>
</tr>
<?php } ?>

</table>

</body>
</html>
