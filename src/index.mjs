import express from "express";

const app = express();

const mockusers = [
  { id: 1, username: "Alex", displayname: "Alex" },
  { id: 2, username: "Anoop", displayname: "Anoop" },
];

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
app.get("/api/users", (req, res) => {
  // res.status(200).json({ message: "Fetching API users" });
  res.send(mockusers);
});

app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = mockusers.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  res.send(user);
});

app.get("/api/products", (req, res) => {
  // res.status(200).json({ message: "Fetching API users" });
  res.send([
    { id: 1, productname: "Copper", Price: 10.99 },
    { id: 2, productname: "Silver", Price: 20.99 },
    { id: 3, productname: "Gold", Price: 30.99 },
    { id: 4, productname: "Platinum", Price: 40.99 },
    { id: 5, productname: "Diamond", Price: 175.99 },
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
