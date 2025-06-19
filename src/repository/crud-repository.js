const { ValidationError, AppError } = require("../utils/index");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const response = this.model.create(data);
      return response;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new ValidationError(error);
      }
      throw new AppError(
        "Something went wrong",
        "Something went wrong in the repository layer"
      );
    }
  }

  async destroy(modelId) {
    try {
      await this.model.destroy({
        where: { id: modelId },
      });
      return true;
    } catch (error) {
      console.error("Something went wrong in the repository");
      throw { error };
    }
  }

  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("Something went wrong in the repository");
      throw { error };
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("Something went wrong in the repository");
      throw { error };
    }
  }

  async update(modelId, data) {
    try {
      const record = await this.model.findByPk(modelId);
      if (!record) {
        throw new NotFoundError(`${this.model.name} with ID ${modelId} not found`);
      }
      const updatedRecord = await record.update({name : data.name});
      return updatedRecord; 
    } catch (error) {
      console.error(`Failed updating ${this.model.name} ${modelId}:`, error);
      throw error; 
    }
  }
}

module.exports = CrudRepository;
