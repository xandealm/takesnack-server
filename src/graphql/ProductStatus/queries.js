const { GraphQLInt, GraphQLNonNull } = require("graphql");
const ProductStatusController = require("../../controllers/ProductStatusController");
const { GQLInput_Condition, GQLInput_OrderBy } = require("../types");
const { GQLObject_ProductStatus, GQLObject_ProductStatusPage } = require("./types");

const GQLQueries_ProductStatus = {
    customerStatuses: {
        type: GQLObject_ProductStatusPage,
        args: {
            page: { type: GraphQLInt },
            limit: { type: GraphQLInt },
            where: { type: GQLInput_Condition },
            orderBy: { type: GQLInput_OrderBy }
        },
        resolve: (_, args, { token }) => {
            return ProductStatusController.getAllProductStatuses(token, args);
        }
    },
    customerStatus: {
        type: GQLObject_ProductStatus,
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: (_, { id }, { token }) => {
            return ProductStatusController.getProductStatus(token, id);
        }
    }
}

module.exports = GQLQueries_ProductStatus;
