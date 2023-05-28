// const app = require('./app');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');


// //uncaught exception
// process.on('uncaughtException', err=>{
//     console.log('uncaught exception');
//     console.log(err.name, err.message);
//     process.exit(1);
// });


// //load config file
// dotenv.config({path: './config.env'});

// //connect to mongoose
// const DB=process.env.DATABASE;

// mongoose.connect(DB,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('DB connection successful'));

// //use config port || 6500
// const port=process.env.PORT || 6500;
// const server = app.listen(port, ()=>{
//     console.log(`App started on port ${port}`);
// });

// //unhandled promise rejection, mongoose err if  not connected to internet
// process.on('unhandledRejection', err =>{
//     console.log(err.name, err.message);
//     console.log('unhandled rejection ...');
//     server.close(()=>{
//         process.exit(1); //0 success, 1 uncaught exception
//     });
// });

// process.on('SIGTERM', () =>{
//     console.log('SIGTERM received shutting down gracefully');
//     server.close(() =>{
//         console.log('process terminated');
//     })
// });