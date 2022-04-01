const express = require("express");

const app = express();
app.use(express.json());

const iceCreams = [
  {
    id: 0,
    name: "Stripey Madness",
  },
  {
    id: 1,
    name: "Cherry Blast",
  },
  {
    id: 2,
    name: "Cookie Tower of Power",
  },
  {
    id: 3,
    name: "Inverted Stoplight",
  },
  {
    id: 4,
    name: "Roswell Crash",
  },
  {
    id: 5,
    name: "Arctic Rainbow",
  },
  {
    id: 6,
    name: "Chocolate Hat",
  },
  {
    id: 7,
    name: "Strawberry Jerry",
  },
  {
    id: 8,
    name: "Mint Stack",
  },
  {
    id: 9,
    name: "Cookie on a Stick",
  },
  {
    id: 10,
    name: "Snowman Godfather",
  },
  {
    id: 11,
    name: "Choco Mirror Ball",
  },
  {
    id: 12,
    name: "Hearty Treat",
  },
  {
    id: 13,
    name: "Strawberry Valentine",
  },
  {
    id: 14,
    name: "Stick 'o Lime",
  },
  {
    id: 15,
    name: "Catastrophe",
  },
  {
    id: 16,
    name: "Purple People Eater",
  },
  {
    id: 17,
    name: "Strawberry Pine Tree",
  },
  {
    id: 18,
    name: "It Blue My Mind",
  },
  {
    id: 19,
    name: "Pistachio Satellite",
  },
  {
    id: 20,
    name: "I Come in Peace",
  },
  {
    id: 21,
    name: "Castle in the Sky",
  },
  {
    id: 22,
    name: "Young Faithful",
  },
  {
    id: 23,
    name: "Old Faithful",
  },
  {
    id: 24,
    name: "Raspberry Pi",
  },
  {
    id: 25,
    name: "Powerball",
  },
  {
    id: 26,
    name: "Shaken and Whipped",
  },
  {
    id: 27,
    name: "Sundae Everyday",
  },
  {
    id: 28,
    name: "Toxic Sludge",
  },
];

let menuData = [
  {
    id: 1,
    iceCream: {
      id: 1,
      name: "Cherry Blast",
    },
    inStock: true,
    quantity: 20,
    price: 1.51,
    description:
      "Blast your taste buds into fruity space with this vanilla and cherry bomb",
  },
  {
    id: 2,
    iceCream: {
      id: 15,
      name: "Catastrophe",
    },
    inStock: true,
    quantity: 30,
    price: 1.64,
    description: "A feline strawberry cranium, what could possibly go wrong?",
  },
  {
    id: 3,
    iceCream: {
      id: 10,
      name: "Snowman Godfather",
    },
    inStock: true,
    quantity: 30,
    price: 1.5,
    description: "You'll lose your head over this inverted whisky-vanilla cone",
  },
  {
    id: 4,
    iceCream: {
      id: 4,
      name: "Roswell Crash",
    },
    inStock: true,
    quantity: 10,
    price: 1.82,
    description: "A zing of lime straight from Area 51",
  },
  {
    id: 5,
    iceCream: {
      id: 27,
      name: "Sundae Everyday",
    },
    inStock: false,
    quantity: 0,
    price: 2.98,
    description: "Hazelnut and vanilla, chocolate and cherries",
  },
  {
    id: 6,
    iceCream: {
      id: 21,
      name: "Castle in the Sky",
    },
    inStock: true,
    quantity: 50,
    price: 2.19,
    description: "A floating stronghold of vanilla, chocolate and pistachio",
  },
  {
    id: 7,
    iceCream: {
      id: 24,
      name: "Raspberry Pi",
    },
    inStock: true,
    quantity: 20,
    price: 1.29,
    description: "Chocolate electricity on a motherboard of raspberry",
  },
];

app.get("/menu", (req, res) => {
  res.send(menuData);
});

app.get("/menu/:id", (req, res) => {
  const item = menuData.find((item) => item.id === parseInt(req.params.id));
  if (item) res.send(item);
  else {
    res.status(400);
    res.send("Menu item does not exit");
  }
});

app.post("/menu", (req, res) => {
  const { iceCream, ...rest } = req.body;
  newMenuItem = {
    id: menuData.reduce((prev, cur) => (cur.id > prev ? cur.id : prev), 0) + 1,
    iceCream: {
      ...iceCreams.find((item) => item.id === parseInt(iceCream.id)),
    },
    ...rest,
  };
  menuData.push(newMenuItem);
  res.send();
});

//  iceCreams stock list
app.get("/menu/stocks/iceCream", (req, res) => {
  let iceStockList = iceCreams.filter(
    (iceCream) =>
      !menuData.find((menuItem) => menuItem.iceCream.id === iceCream.id)
  );
  // console.log(iceStockList)

  res.send(iceStockList);
});

app.get("/menu/stocks/iceCream/:id", (req, res) => {
  const iceCreamDetail = iceCreams
    .filter(
      (iceCream) =>
        !menuData.find((menuItem) => menuItem.iceCream.id === iceCream.id)
    )
    .find((iceCream) => iceCream.id === parseInt(req.params.id));
  res.send(iceCreamDetail);
});

app.put("/menu/:id", (req, res) => {
  const intId = parseInt(req.params.id, 10);
  // console.log(intId)
  const { iceCream, ...rest } = req.body;
  // console.log(req.body)
  const updateItem = {
    id: intId,
    iceCream: {
      ...iceCreams.find((item) => item.id === parseInt(iceCream.id)),
    },
    ...rest,
  };
  // console.log(updateItem)
  menuData = menuData.map((menuItem) => {
    if (menuItem.id === intId) return updateItem;
    return menuItem;
  });
  res.send();
});

app.delete("/menu/:id", (req, res) => {
  menuData = menuData.filter((item) => item.id !== parseInt(req.params.id));
  res.status(204);
  res.send();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
