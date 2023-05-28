
// const List = require('../model/userModel');
// const slug = require('slugify');
// const express = require('express');
// const router = express.Router();
// const _ = require("lodash");

// const app = express();

// //GET REQUEST
// app.get("/", function(req,res){

//     Item.find(function(err, founditems){
//        // mongoose.connection.close();
//        if(founditems.length === 0){
//          Item.insertMany(defaultItems, function(err){
//            if(err){
//                console.log(err);
//              }else{
//                  console.log("Successfully saved all defaultItems into todolistDB");
//              }
//          });
//          res.redirect("/");
//        }
//        else{
//          res.render("index", {listTitle: "Today", newListItems: founditems});
//        }
//      });
//    //ejs then js i.e listTile, day
//    });
   
//    //POST REQUEST
//    app.post("/",function(req,res){
   
//      const itemName = req.body.itemName;
//      const listName = req.body.list;
   
//      const item = new Item ({
//          name: itemName
//      });
   
//    if(listName === "Today"){
//      item.save();
//      res.redirect("/");
//    }else{
//        List.findOne({name:listName}, function(err, foundList){
//          foundList.items.push(item);
//          foundList.save();
//          res.redirect("/" +listName);
//        });
//    }
//    });
   
//    //to delete the items
//    app.post("/delete", function(req,res){
//      const checkedItemId = req.body.checkbox;
//      const listName = req.body.listName;
   
//      if(listName === "Today"){
//        Item.findByIdAndRemove(checkedItemId,function(err){
//          if(!err){
//            console.log("SUccessfully deleted the item");
//            res.redirect("/");
//          }
//        });
//      }
//      else{
//        List.findOneAndUpdate({name: listName},{$pull: {items: {_id: checkedItemId}}}, function(err,foundList){
//          if(!err){
//            res.redirect("/" +listName);
//          }
//        });
//      }
   
//    });
   
//    //routing parameter
//    app.get("/:customListName",function(req,res){
//      const customListName = _.capitalize(req.params.customListName);
   
//      List.findOne({name:customListName}, function(err,foundList){
//        if(!err){
//          if(!foundList){
//            //create new list if name isn't in DB
//            const list = new List ({
//              name: customListName,
//              items: defaultItems
//            });
//            list.save();
//            res.redirect("/" +customListName);
//          }
//          else{
//            //existing new lists
//            res.render("index", {listTitle: foundList.name, newListItems: foundList.items});
//          }
//        }
//      });
//    });


// // module.exports = router;