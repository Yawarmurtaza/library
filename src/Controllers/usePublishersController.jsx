import usePublishersEntityManager from "../EntityManagers/usePublishersEntityManager";

export default function usePublishersController() {

    const { pubsData, pubsDataError, AddPubEntity } = usePublishersEntityManager();

    function AddNewPublisher(name) {
        const publisherExists = pubsData.find(p => p.name === name);
        
        if (publisherExists === undefined) { 
            return AddPubEntity(name); 
        }
                
        return publisherExists.id;
    }

    return { pubsData, pubsDataError, AddNewPublisher };
}