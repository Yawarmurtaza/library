import usePublishersEntityManager from "../EntityManagers/usePublishersEntityManager";

export default function usePublishersController() {

    const { pubsData, pubsDataError, AddPubEntity } = usePublishersEntityManager();

    function AddNewPublisher(name) {
        return AddPubEntity(name);
    }

    return { pubsData, pubsDataError, AddPubEntity };
}