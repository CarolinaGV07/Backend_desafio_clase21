import { userService } from "../services/index.js";

export const userPremium = async (req, res) => {
  try {
    const id = req.params.uid;
    const user = await userService.userPremium(id);
    return res.render("profile", user);
  } catch (error) {
    req.logger.fatal("Error al cambiar a usuario premium");
    res.status(500).json({ error: error.message });
  }
};
