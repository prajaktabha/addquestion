const db = require("../models");
const questions = db.question;

const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
// exports.create = (req, res) => {
//    // Validate request
//    if (!req.body.quizid) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

  // Create a Tutorial
  // const que = {
  //   questions: req.body.questions,
  //   option1: req.body.option1,
  //   option2: req.body.option2,
  //   option3: req.body.option3,
  //   option4: req.body.option4,
  //   answer: req.body.answer,
  //   quizid: req.body.quizid,
  //   typeid: req.body.typeid
  // };

  // Save Tutorial in the database
  // questions.create(que)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the Tutorial."
  //     });
  //   });
// };







// //insert
// exports.insert=(req,res)=>{
//   db.sequelize.query("insert into questions values (default,?,?,?,?,?,?,(select id from quizes where quizname=?),(select id from types where type=?))",
//   {replacements: [req.body.id,req.body.questions,req.body.option1,req.body.option2,req.body.option3,req.body.option4,req.body.answer,req.body.quizname,req.body.type],type: db.sequelize.QueryTypes.INSERT}).then(data=>{
//     res.send(data);
//   });
// }


// exports.findAll = (req, res) => {
//     const quizid = req.query.quizid;
//     var condition = quizid ? { quizid: { [Op.like]: `%${quizid}%` } } : null;
  
//     questions.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
//   };



//Join 
exports.getBy = (req,res)=>{
  db.sequelize.query("select q.id,c.category,q.quizname from quizes q,categories c where c.id =q.id and q.categoryid=?", 
  {replacements: [ req.body.categoryid],type: db.sequelize.QueryTypes.SELECT }).then(data=>{
     res.send(data);
    // console.log(data);
   })
  }

  //Insert Data
  exports.insert=(req,res)=>{
      console.log(req.body,"vfdjkvn");
      
    db.sequelize.query("insert into categories(category) values (?)",
    {replacements: [ req.body.category],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
        res.send(data);
      });
  }

//   exports.update=(req,res)=>{
//   console.log(req.body,"vfdjkvn");
//   db.sequelize.query("update categories set categoryName=? where categoryId=?",
//   {replacements: [req.body.categoryName,req.params.categoryId],type: db.sequelize.QueryTypes.UPDATE }).then(data=>{
//       res.send(data);
//      // console.log(data);
//     });
// }

// exports.delete=(req,res)=>{
//     console.log(req.body,"vfdjkvn");
//     db.sequelize.query("delete from categories where categoryId=? and categoryName=?",
//     {replacements: [req.params.categoryId,req.params.categoryName],type: db.sequelize.QueryTypes.DELETE }).then(data=>{
//         res.send(data);
//        // console.log(data);
//       });
//   }

  exports.addQuestion = (req,res)=>{
    db.sequelize.query("insert into questions(id,questions,option1,option2,option3,option4,answer,quizId,categoryId,typeId) values (?,?,?,?,?,?,?,(select id from quizes where quizname=?),(select id from categories where category=?),(select id from types where type=?))",
    {replacements: [req.body.id,req.body.questions,req.body.option1,
        req.body.option2,req.body.option3,req.body.option4,
        req.body.answer,req.body.quizname,req.body.category,req.body.type],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }


  exports.getQuizName = (req,res)=>{
    db.sequelize.query("select * from quizes",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }


  exports.getCategoryName = (req,res)=>{
    db.sequelize.query("select * from categories",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }

  exports.getTypeName = (req,res)=>{
    db.sequelize.query("select * from types",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }






