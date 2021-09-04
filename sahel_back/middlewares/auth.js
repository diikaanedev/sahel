const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  //get the token from the header if present
  let token = req.headers["x-access-token"] || req.headers["authorization"] || '';
  //if no token found, return response (without going to the next middelware)
  token = token.replace('Bearer ','');
  
  

  if (!token) return  res.json({
      message: 'No Token',
      statusCode : 400 , 
      status : 'NOT OK'
    });

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded;
    
    next();
  } catch (ex) {
    res.json({
        message: 'unauthorized authentication required',
        statusCode : 401 , 
        status : 'NOT OK'
      });
  }
};