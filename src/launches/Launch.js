import mongoose from 'mongoose'

const Launch = new mongoose.Schema({
  title: {
    type: String
  },
  link: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  scheduled: {
    type: Boolean
  },
  origin: {
    type: String
  }
})
export default mongoose.model('Launch', Launch)
