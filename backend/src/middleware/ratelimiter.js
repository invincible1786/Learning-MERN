const rateLimiter = async(req,res,next){
    try {
        // limiting per user
        const {success} = await rateLimiter.limit("my-rate-limit");
        if(!success) return res.status(429).json({message: "Too many requests"})

        next();
    } catch (error) {
        console.log("Rate limit error");
        next(error);
    }

    
}

export default rateLimiter;