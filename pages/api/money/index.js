import dbConnect from "../../../utils/dbConnect";
import Money from "../../../models/Money";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const moneys = await Money.find({});
        res.status(200).json({ success: true, data: moneys });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const money = await Money.create(req.body);
        res.status(201).json({ success: true, data: money });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
