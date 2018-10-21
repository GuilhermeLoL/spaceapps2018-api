import Launch from '../Launch'
export default (req, res) => {
  Launch.findById(req.params.id).select('-__v')
    .then(launch => res.status(200).json({ status: true, data: launch }))
    .catch(err => res.send(500).json({ status: false, data: {} }))
}
