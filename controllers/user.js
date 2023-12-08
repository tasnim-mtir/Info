import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;
import db from "../config/Database.js";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createUser from "../models/user.js"

const User = createUser(db,DataTypes);

const key = "74b15e3c7e4ff240879ba82a7f4e084069742e973c3e37e0e02589c53efc7ec4eccc1a238062bf9fc1b89a2a850863d012930e3d12d0fee6e2cce6537e909f10";

export const register = async(req, res) => {
    const { firstName,lastName,email,password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const eid = uuidv4();
    try {
    await User.create({
    firstName: firstName,
    lastName:lastName,
    email: email,
    password: hashPassword,
    encrypted_id: eid,
    });
    res.json({msg: "Register successful"});
    } catch (error) {
    console.log(error);
    return res.status(404).json({msg: "l'utilisateur existe déjà"});
    }
    };
    
    export const login = async(req, res) => {
        try {
            const user = await User.findAll({
                where:{
                    email: req.body.email
                }
            });
           
            const match = await bcrypt.compare(req.body.password, user[0].password);
            console.log(match)
            if(!match) return res.status(400).json({msg: "Mot de passe invalide"});
            const userId = user[0].encrypted_id;
            const id = user[0].id;
            const email = user[0].email;
            const token = jwt.sign({userId,email,id},key, {
                expiresIn: "7d"
            });
    
            // Verify the token
            jwt.verify(token, key, (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({ msg: 'Token invalide' });
                } else {
                    console.log(decodedToken);
                    res.json({token, msg: "hello"}); 
                }
            });
        } catch (error) {
            res.status(404).json({msg:"Donnée invalide"}); 
    
        }
    } 
    
    export const getOneUser = async (req, res) => {

        try {    let encrypted_id = req.params.encrypted_id
        let user = await User.findOne({ where: { encrypted_id: encrypted_id }})
        console.log(user)
        res.status(200).json({user})
        }catch (error){
        
        res.status(500).json({msg:"Donnée invalide",error})}
        };