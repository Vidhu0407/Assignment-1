use Library

db.Books.insertMany([
{
Title: "Title1",
Author: "Author1",
Stock: 120,
Price: 450,
Receiver: "Receiver1",
Return_Status: true
},
{
Title: "Title2",
Author: "Author2",
Stock: 90,
Price: 250,
Receiver: "Receiver2",
Return_Status: false
}
])

// Query 1
db.Books.find({ Price: { $gt: 300 } })

// Query 2
db.Books.updateMany(
{ Stock: { $gt: 100 } },
{ $inc: { Price: -100 } }
)

// Query 3
db.Books.find({
Return_Status: true,
Price: { $gt: 500 }
})

// Query 4
db.Books.updateMany(
{ Stock: { $gt: 100 } },
{ $set: { Discount: 50 } }
)
