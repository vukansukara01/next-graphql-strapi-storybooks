export type Maybe<T> = T | null;

const graphqlDataParser =(data?: any): any => {
    console.log(data);
    return data?.post?.data?.attributes?.reduce((acc: any, attributes: any) => {
        console.log(attributes);
        console.log(acc);
        if (attributes) return [...acc, attributes];
        return acc;
    }, {});
};
export default graphqlDataParser;

// import { Maybe } from "../types/graphql.models";
// type Connection<T> = Maybe<{ edges?: Maybe<Array<Maybe<{ node?: Maybe<T> }>>> }>;
// const connectionToNodes = <T>(connection?: Connection<T>): T[] => {
//     return (
//         connection?.edges?.reduce((acc, edge) => {
//             if (edge?.node) return [...acc, edge.node];
//             return acc;
//         }, [] as T[]) || []
//     );
// };
// export default connectionToNodes;
