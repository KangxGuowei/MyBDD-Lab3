var data = {
  user: [
    { userid: 1, username: "John",  email: "john@example.com", role:"member", password:"abc123"},
    { userid: 2, username: "Mary",  email: "mary@example.com", role:"admin", password:"abz1234"} 
  ],

  category: [
    { catid: 1, name: "Sofa", description: "Sofa suitable for every home"},
    { catid: 2, name: "Lighting", description: "Lighting equipment"}
  ],

  furniture: [
   {fid:1, name:"Brown Leather Sofa", description:"Posh and stylish sofa", quantity:20, price:450, image:"sofa1.jpg",catid:1},
   {fid:2, name:"Study Table Lamp", description:"Bright light for studying", quantity:30, price:120, image:"lamp1.jpg",catid:2}
  ],
};

module.exports = data;