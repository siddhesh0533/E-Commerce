import jwr from 'jsonwebtoken';

const authUser = async(req, res, next) => {
  const {token} = req.headers;

  if (!token) {
    return res.json({ success:'false', message: 'Not Authorized Login Again' }); 
  }else{
    try {
        const token_decode = jwr.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: 'false', message: error.message });
    }
  }
}

export default authUser;