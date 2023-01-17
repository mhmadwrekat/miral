import dbConnect from "../../../utils/dbConnect";
import Customer from "../../../models/Customer";
dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const customer = await Customer.findById(id);
        if (!customer) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: customer });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const customer = await Customer.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!customer) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: customer });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deleteCustomer = await Customer.deleteOne({ _id: id });
        if (!deleteCustomer) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
