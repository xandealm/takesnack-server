const { GraphQLInt, GraphQLNonNull } = require("graphql");
const ProductCategoryController = require("../../controllers/ProductCategoryController");
const { GQLInput_Condition, GQLInput_OrderBy } = require("../types");
const { GQLObject_ProductCategory, GQLObject_ProductCategoryPage } = require("./types");

const GQLQueries_ProductCategory = {
    productCategories: {
        type: GQLObject_ProductCategoryPage,
        args: {
            page: { type: GraphQLInt },
            limit: { type: GraphQLInt },
            where: { type: GQLInput_Condition },
            orderBy: { type: GQLInput_OrderBy }
        },
        resolve: (_, args) => {
            return ProductCategoryController.getAllProductCategories(args);
        }
    },
    productCategory: {
        type: GQLObject_ProductCategory,
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: (_, { id }) => {
            return ProductCategoryController.getProductCategory(id);
        }
    }
}

module.exports = GQLQueries_ProductCategory;