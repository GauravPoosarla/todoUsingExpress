const axios = require('axios');

exports.authenticateUser = async (req, res, next) => {
  const token = req.get('token');
  if (token) {
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
  else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
}