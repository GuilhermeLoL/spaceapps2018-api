import Launch from '../Launch'
export default (req, res) => {
  Launch.find({}).select('-__v')
    .then(launches => res.status(200).json({ status: true, data: launches }))
    .catch(err => res.status(500).json({ status: false, data: [] }))
}
