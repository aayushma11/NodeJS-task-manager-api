// const mongodb = require('mongodb')
// const MongoCLient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const id = new ObjectID()
//console.log(id);

MongoClient.connect(connectionURl, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
       return console.log('Unable to connect to database');
    }
   const db = client.db(databaseName)
// *********************************************************** INSERT QUERY ***************************************************************
//    db.collection('users').findOne({_id: new ObjectID("60509b8b37f5182d2d356c5c")}, (error, user) => {
//        if (error){s
//            return console.log('Unable to fetch');
//        }
//        console.log(user);
//    })
//    db.collection('users').find({age:24}).toArray((error,users) => {
//        console.log(users);
//    })
//    db.collection('users').find({age:24}).count((error,count) => {
//     console.log(count);
// })
//    db.collection('users').insertOne({
//        _id: id,
//        name: 'Universe',
//        age: 27
//    }, (error, result) => {
//        if(error) {
//           return console.log('Unable to insert user');
//        }
//        console.log(result.ops);
//    })

//    db.collection('users').insertMany([
//     {
//         name: 'Grishma',
//         age: 22
//     },
//     {
//          name: 'Aashutosh',
//          age: 16
//     }
//    ], (error, result) => {
//         if(error) {
//             return console.log('Unable to insert users');
//         }
//         console.log(result.ops);
//     })

// *********************************************************** FIND QUERY ***************************************************************

// db.collection('tasks').findOne({_id: new ObjectID("60509ce105428f2d38fc08a3")}, (error, task) => {
//     if(error) {
//         return console.log("Unable to fetch");
//     }

//     console.log(task);

// })
// db.collection('tasks').find({completed: false}).toArray((error,data) => {
//     if (error){
//         return console.log('Unable to fetch data');
//     }
//     console.log(data);
// })

// *********************************************************** UPDATE QUERY ***************************************************************

    //  db.collection('users').updateOne({
    //     _id: new ObjectID("605087fd2450ab2c535c27b6")
    //     }, {
    //         // $set : {
    //         //     name: 'Lucky'
    //         // }
    //         $inc : {
    //             age: 1
    //         }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

// ------------------------ Update Many

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set : {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })
    // db.collection('users').deleteMany({
    //     age: 16
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        description: 'Update'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})
