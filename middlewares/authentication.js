const axios = require('axios');

exports.authenticateUser = async (req, res, next) => {
  const token = req.get('Authorisation'); // get headers
  if (token) {
    const result = await axios.post('http://localhost:8000/validate', { token });
    if(!result) {
      throw new Error('Invalid Credentials');
    }
    
    next();
  }
  else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
}
