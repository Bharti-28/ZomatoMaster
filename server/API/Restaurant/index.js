import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();

/*
Route                 /
Desp                  Get all Restaurants details
params                None
Access                Public
Method                GET
*/

Router.get("/", async(req,res) => {
    try{
      const {city} = req.query
      const restaurants = await RestaurantModel.find({city});
      return res.json({restaurants});
    } catch(error) {
      return res.status(500).json({error: error.message})
    }
});

/*
Route                 /
Desp                  Get particular Restaurants details on id
params                _id
Access                Public
Method                GET
*/

Router.get("/:_id", async(req,res) => {
  try {
      const { _id } = req.params;
      const restaurants = await RestaurantModel.findOne(_id);

      if(!restaurant)
      return res.status(404).json({error: "Restaurant not found"});

      return res.json({restaurants});
  } catch(error) {
       return res.status(500).json({ error: error.message });
  }
});

/*
Route                 /search
Desp                  Get Restaurants details on search
params                None
Body                  searchString
Access                Public
Method                GET
*/

Router.get("/search", async(req,res) => {
  try {
    const {searchString} = req.body;

    const restaurants = await RestaurantModel.find({
      name: {$regex: searchString, $options: "i"},
    });
    return res.json({restaurants});
  } catch (error) {
    return res.status(500).json({error: error.message});
  } 
})

export default Router;