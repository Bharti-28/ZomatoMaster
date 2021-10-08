//libraries
import express from "express";

//database model
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route                 /
Desp                  Get all the foods based on paricular restaurant
params                _id
Access                Public
Method                GET
*/

Router.get("/:_id", async(req,res) => {
    try {
    const {_id} = req.params;
    const foods =  await FoodModel.find({ restaurant: _id });

    return res.json({ foods });
    } catch(error) {
    return res.status(500).json({error: error.message});
    }
});

/*
Route                 /r
Desp                  Get all the foods based on paricular restaurant
params                category
Access                Public
Method                GET
*/

Router.get("/r/:category", async(req,res) => {
    try {
      const {category} = req.params;
      const foods = await FoodModel.find({
          category: {$regex: category, $options: "i"}});

      return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})

export default Router;
 