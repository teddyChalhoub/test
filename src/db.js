import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://teddy92:teddy123456@itworkx.6iufq.mongodb.net/ITWorkX-DB?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("connected to database");
  } catch (err) {
      console.log(err.message);
  }
};

module.exports = DBConnection;
