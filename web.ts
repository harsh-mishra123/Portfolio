$query = "SELECT * FROM users WHERE email = '$email' AND password = '$pass'";
$result = mysqli_query($conn, $query);


// GET /balance?userId=123
app.get("/balance", async (req, res) => {
  const userId = req.query.userId;

  const user = await db.query(
    "SELECT balance FROM accounts WHERE user_id = ?",
    [userId]
  );

  res.json({ balance: user[0].balance });
});
