const router = require('express').Router();
const { User, Pie, Vote } = require('../../models');

//CREATE a new Pie
router.post('/', async (req, res) => {
    try {
        const pieData = await Pie.create({
            name: req.body.name,
            category: req.body.category,
            labels: req.body.labels,
            data: req.body.data,
            user_id: req.body.user_id || req.session.userId,
        });

        res.status(200).json(pieData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}); 

//delete
router.delete('/', async (req, res) => {
    try {
        const pieData = await Pie.destroy({
            where: {id: req.body.pie_id}
        });

        res.status(200).json(pieData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;