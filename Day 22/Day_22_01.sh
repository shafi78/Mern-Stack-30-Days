# show databases
test> show dbs

admin   40.00 KiB
config  72.00 KiB
local   72.00 KiB



# create and use college db

test> use college
switched to db college

college> show dbs (Not showing because it is temporary when it is empty)
admin   40.00 KiB
config  96.00 KiB
local   72.00 KiB


# BSON Data (Binary JSON)

# Collections :

Document : Mongo stores data in the form of documents

Collection : MongoDB stores documents in collections



# show collections (show tables)

college> show collections



# inserting values (single value)

college> db.student.insertOne({name:"shafi",age:19,marks:88})

# mongo shell

{
  acknowledged: true,
  insertedId: ObjectId("651f6917cbde75be30544232")
}



# show table values (similar to select * from student)

college> db.student.find()
[
  {
    _id: ObjectId("651f6917cbde75be30544232"),
    name: 'shafi',
    age: 19,
    marks: 88
  }
]



# inserting values (multiple values)

college> db.student.insertMany([{name:'sameer',marks:'64',city:'malapur'},{name:'yusuf',marks:95,city:'dharwad'}])

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("651f6b2dcbde75be30544234"),
    '1': ObjectId("651f6b2dcbde75be30544235")
  }
}



# Viewing all values from student collection

college> db.student.find()
[
  {
    _id: ObjectId("651f6917cbde75be30544232"),
    name: 'shafi',
    age: 19,
    marks: 88
  },
  {
    _id: ObjectId("651f6993cbde75be30544233"),
    name: 'sameer',
    age: 22,
    marks: 85
  },
  {
    _id: ObjectId("651f6b2dcbde75be30544234"),
    name: 'sameer',
    marks: '64',
    city: 'malapur'
  },
  {
    _id: ObjectId("651f6b2dcbde75be30544235"),
    name: 'yusuf',
    marks: 95,
    city: 'dharwad'
  }
]



# Find in DB

college> db.student.find({name:"shafi"})
[
  {
    _id: ObjectId("651f6917cbde75be30544232"),
    name: 'shafi',
    age: 19,
    marks: 88
  }
]


college> db.student.findOne({name:"sameer"})
{
  _id: ObjectId("651f6993cbde75be30544233"),
  name: 'sameer',
  age: 22,
  marks: 85
}


college> db.student.find({name:"yusuf",marks:95})
[
  {
    _id: ObjectId("651f6b2dcbde75be30544235"),
    name: 'yusuf',
    marks: 95,
    city: 'dharwad'
  }
]



# Query Operators

# Q 1. Find students where marks > 85

college> db.student.find({marks: {$gt: 85}})
[
  {
    _id: ObjectId("651f6917cbde75be30544232"),
    name: 'shafi',
    age: 19,
    marks: 88
  },
  {
    _id: ObjectId("651f6b2dcbde75be30544235"),
    name: 'yusuf',
    marks: 95,
    city: 'dharwad'
  }
]


# Q 2: Find students where marks >= 85

college> db.student.find({marks: {$gte: 85}})
[
  {
    _id: ObjectId("651f6917cbde75be30544232"),
    name: 'shafi',
    age: 19,
    marks: 88
  },
  {
    _id: ObjectId("651f6993cbde75be30544233"),
    name: 'sameer',
    age: 22,
    marks: 85
  },
  {
    _id: ObjectId("651f6b2dcbde75be30544235"),
    name: 'yusuf',
    marks: 95,
    city: 'dharwad'
  }
]


# Q 3. Find students who live in dharwad or malapur

college> db.student.find({city: {$in: ['dharwad','malapur']}})
[
  {
    _id: ObjectId("651f6b2dcbde75be30544234"),
    name: 'sameer',
    marks: '64',
    city: 'malapur'
  },
  {
    _id: ObjectId("651f6b2dcbde75be30544235"),
    name: 'yusuf',
    marks: 95,
    city: 'dharwad'
  }
]


# Q 4. Find students who scored > 85 or live in Dharwad

college> db.student.find({$or: [{marks: {$gt: 85}} , {city: 'dharwad'}]})
[
  {
    _id: ObjectId("651f6917cbde75be30544232"),
    name: 'shafi',
    age: 19,
    marks: 88
  },
  {
    _id: ObjectId("651f6b2dcbde75be30544235"),
    name: 'yusuf',
    marks: 95,
    city: 'dharwad'
  }
]



# Update in db (one)

college> db.student.updateOne({name:"sameer"},{$set:{marks:99}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}


# update in db (many)

college> db.student.updateMany({city:"dharwad"},{$set:{city: 'Dharwad'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}


# replace one (whole document will be replaced)

college> db.student.replaceOne({name:"sameer"},{name:"sam",city: 'Banglore',marks: 90})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}



# Nesting

college> db.student.insertOne({name:"saif",performance:{marks:70,grade:"A"}})
{
  acknowledged: true,
  insertedId: ObjectId("651f75c4cbde75be30544236")
}


college> db.student.find({"performance.marks":70})
[
  {
    _id: ObjectId("651f75c4cbde75be30544236"),
    name: 'saif',
    performance: { marks: 70, grade: 'A' }
  }
]



# Delete record (one)

college> db.student.deleteOne({city: "delhi"})
{ acknowledged: true, deletedCount: 1 }


# Delete record (many)

college> db.student.deleteMany({marks: {$lt:95}})
{ acknowledged: true, deletedCount: 2 }



# Drop Database

college> db.dropDatabase()
{ ok: 1, dropped: 'college' }