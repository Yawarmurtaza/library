import usePublishersEntityManager from "../EntityManagers/usePublishersEntityManager";

export default function usePublishersController() {

    const { pubsData, pubsDataError, AddPubEntity } = usePublishersEntityManager();

    function AddNewPublisher(name) {
        return AddPubEntity(name);
    }
    console.log("publisher Controller");
    return { pubsData, pubsDataError, AddNewPublisher };
}