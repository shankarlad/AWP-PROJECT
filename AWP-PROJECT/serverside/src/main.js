
const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

let dbAdd = require("./modules/addData");
let dbUpdate = require("./modules/updatePassword");
let dbRead = require("./modules/loginData");
let dbProfile = require("./modules/profileData");

/********************************** USING POST METHOD ADD DATA************************************************** */

app.post("/register", async (req, res) => {
    try {
        const input = req.body;
        await dbAdd.addData(input);

        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});


/*****************************************Reset Password**************************************************** */
app.post("/resetpassword", async (req, res) => {
    try {
        const input = req.body;
        await dbUpdate.updatePassword(input);

        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });

    }
});

/*****************************************Login************************************************************** */
app.post("/login", async (req, res) => {
    try {
        const input = req.body;
        await dbRead.loginData(input);
        res.json({ opr: true });
    } catch (err) {
        console.log(err.message);
        res.json({ opr: false });
    }
});
/****************************************Profile Data********************************************************* */
app.get("/profile", async (req, res) => {
    try {
        const result = await dbProfile.profileData();
        res.json({ result });
    } catch (err) {
        console.log(err.message);
        res.json({ opr: false });
    }
});
/*****************************************Server************************************************************* */
app.listen(3000);
