const router = require('express').Router();
const { User, Pie, Vote } = require('../../models');

//CREATE new Vote
router.post('/', async (req, res) => {
    try {
        const oldVote = await Vote.findOne({
            where: {
                user_id: req.session.userId,
                pie_id: req.body.pie_id
            }
        });

        let currentVote;

        if (!oldVote) {
            currentVote = await Vote.create({
                choice_new: req.body.choice,
                choice_old: req.body.choice,
                user_id: req.session.userId,
                pie_id: req.body.pie_id,
            });

        } else {
            currentVote = await Vote.update({
                choice_new: req.body.choice,
                choice_old: oldVote.choice_new,
                user_id: req.session.userId,
                pie_id: req.body.pie_id,
            }, {
                where: {
                    user_id: req.session.userId,
                    pie_id: req.body.pie_id
                }
            });
        }

        const pieData = await Pie.findByPk(req.body.pie_id, {
            include: [
                {
                    model: User
                }
            ],
        });
        const updatedData = pieData.get({ plain: true });
        dataArray = JSON.parse(updatedData.data);
        if (!oldVote) {
            dataArray[req.body.choice]++;
        } else {
            dataArray[oldVote.choice_new]--;
            dataArray[req.body.choice]++;
        }
        const postData = await Pie.update({
            data: JSON.stringify(dataArray)
        },{
            where: {
                id: req.body.pie_id
            }
        });

        res.status(200).json({postData, currentVote});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;