import Sequelize from "sequelize";
import mongoose from "mongoose";

import Product from "../app/models/Products";
import User from "../app/models/User";
import Category from "../app/models/Category";

import configDatabase from '../config/database'


const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize('postgresql://postgres:UlyJOMwwEcoqqwIVvuFiKvNIYBfxXtfy@viaduct.proxy.rlwy.net:37421/railway')
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) => model.associate && model.associate(this.connection.models)
            )
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:bRNPOMEBdckIMeBEsbplljdsoVOKWvzJ@monorail.proxy.rlwy.net:30821',
            
        )
    }
}

export default new Database()