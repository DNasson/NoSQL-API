const { User, Thought } = require('../models');

const friendCount = async (userId) => {
    const numberofFriends = await User.aggregate()
       .count('friendCount');
       return numberofFriends[0].friendCount;
};

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // get one user by id
    async getUserById({ params }, res) {
        try {
            const user = await User.findOne({ _id: params.id });
            res.json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    // create user
    async createUser({ body }, res) {
        try {
            const user = await User.create(body);
            res.json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    // update user by id
    async updateUser({ params, body }, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: params.id },
                body,
                { new: true }
            );
            res.json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    // delete user
    async deleteUser({ params }, res) {
        try {
            const user = await User.findOneAndDelete({ _id: params.id });
            res.json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    }
};
