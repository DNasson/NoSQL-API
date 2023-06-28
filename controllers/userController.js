const { User, Tuser } = require("../models");

const friendCount = async () => {
  const numberOfFriends = await User.aggregate().count("friendCount");
  return numberOfFriends;
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
      const user = await User.findOne({ _id: params.id }).select("-__v");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json({
        user,
        grade: await grade(req.params.userId),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create user
  async createUser({ body }, res) {
    try {
      const user = await User.create(body);
      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // update user by id
  async updateUser({ params, body }, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: params.id }, body, {
        new: true,
      });
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete user
  async deleteUser({ params }, res) {
    try {
      const user = await User.findOneAndDelete({ _id: params.id });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      const friend = await User.findOneAndUpdate(
        { friends: params.id },
        { $pull: { friends: params.id } },
        { new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: "No friend with that ID" });
      }
      res.json({ message: "User and friend deleted" });
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async addFriend({ params }, res) {
    console.log("You are adding a friend");
    console.log(req.body);

    try {
      const user = await User.findOneAndUpdate(
        { _id: params.id },
        { $push: { friends: params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeFriend({ params }, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: params.id },
        { $pull: { friends: params.friendId } },
        { new: true }
      );

      if (!user) {
        return res
            .status(404)
            .json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
