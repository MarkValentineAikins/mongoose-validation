const User = require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    const token = jwt.sign({id: user._id, email: user.email}, 
        '99d21426f1054ddb0552541b9afea076fbfd7dd9029dc67e7c185b89fe7cebf9',
        {
            expiresIn: '1h'
        }
        );
    
        return  {
            token,
    
            user,
        };
    
}


//register user with
exports.register = async (req, res) =>{
    const {email, password} = req.body

    //check if email exist

   // if(!email || !password) {
    const emailExists = await User.findOne({email});
    if(emailExists) {
        return res.status(400).json({error: "Email already exist"});
    
}

const hashedpassword = await bcrypt.hash(password, 12);

// creating user  
    const user = await User.create({...req.body, password: hashedpassword});

    const token = generateToken(user);


    res.status(200).json({user});

    
};

exports.login = async (req, res) => {
    const {email, password} = req.body;

    let user = await User.findOne({email});
    if(!user) {
        return res.status(400).json({error: "Invalid credentials"});
    }
const isMatch = await bcrypt.compare(password, user.password);
if(!isMatch){
    return res.status(400).json({mgs: "invalid credentials"});
}

const token = generateToken(user);

res.status(200).json({user});

};

