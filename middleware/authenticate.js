export default (req , res , next) => {
  const userID =  req.header('user_id')
  console.log(userID)
  if(userID !== "1"){
    return res.sendStatus(403)
  }else {
    return next()
  }
}