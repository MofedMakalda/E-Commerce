import mongoose, {Schema, Document} from "mongoose";

//Here I have created the variable that I'm going to use in my code below
export interface IUser extends Document {
firstName: String,
lastName: string,
email: String,
userName: string,
password: string,
}

// here I have created the Schema and how will it be created in the mongodb database
const userSchema = new Schema<IUser>({
 firstName:{type: String, required:true},   
 lastName:{type: String, required:true},   
 email:{type: String, required:true},   
 password:{type: String, required:true},   
})

//here I have created the model that will be holding the schema and through it i will be able to find insert delete and etc from the database.
const userModel = mongoose.model<IUser>('User', userSchema);
export default userModel;