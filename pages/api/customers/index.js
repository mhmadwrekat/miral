import dbConnect from "../../../utils/dbConnect";
import Customer from "../../../models/Customer";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const customers = await Customer.find({});
        res.status(200).json({ success: true, data: customers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const customer = await Customer.create(req.body);
        res.status(201).json({ success: true, data: customer });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
