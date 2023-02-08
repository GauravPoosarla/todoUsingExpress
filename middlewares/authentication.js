const axios = require('axios');

exports.authenticateUser = async (req, res, next) => {
  const token = req.header('token');
  try{
    const result = await axios.post('http://localhost:8000/validate', {}, {
      headers: {
        token
      }
    });
    if(!result) {
      throw new Error('Invalid Credentials');
    }
    
    next();
  }
  catch(err) {
    res.status(401).send({error: err.message});
  }
}