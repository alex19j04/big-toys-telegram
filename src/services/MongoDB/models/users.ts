import { Schema } from 'mongoose'

const UsersSchema: Schema = new Schema({
  userId: Number,
  username: String,
  registrationDate: String,
  countOfPurchases: Number,
  referralFriends: Array,
  bonusBalance: Number,
  historyOfPurchases: Array
})

export { UsersSchema }