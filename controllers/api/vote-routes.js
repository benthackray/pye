const router = require('express').Router();
const { User, Pie, Vote } = require('../../models');

//CREATE new Vote
router.post('/', async (req, res) => {
    try {
        const dbUserData = await Vote.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profile_img: req.body.profile_img
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//UPDATE 
router.put('/username', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
        }, {
            where: { id: req.session.userId }
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;