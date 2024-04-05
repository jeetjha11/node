const jwt=require('jsonwebtoken');

const AuthenticatedUser =(req,res,next) => {
    console.log(req.headers.authorization);
    const token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).json({message:'Invalid Token'})
        }
        req.user=decoded;
        console.log("data",decoded);
        next();
    })
}

module.exports=AuthenticatedUser;
