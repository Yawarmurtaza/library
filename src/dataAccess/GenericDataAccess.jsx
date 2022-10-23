import { useEffect, useState } from "react";

export default function GenericDataAccess(seedData, delayTimeoutInMilliSeconds = 500) {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        // async function GetData() {
        //     await new Promise((resolve) => setTimeout(resolve, delayTimeoutInMilliSeconds)); // mimic delay
        //     try {
        //         setData(seedData); // set data
        //     } catch (ex) {
        //         setError(ex); // set error
        //     }
        // }
        // GetData();

        try {
            setData(seedData);
        }
        catch (ex) {
            setError(ex);
        }

    }, [seedData, delayTimeoutInMilliSeconds]); // empty array is called 'dependency array'. Passing an empty dependency array will not cause useEffect to call getData again.
    // when its not defined i.e. not passed in anything, it will execute getData everytime the owning component renders.
    // in our case, it will call setNotesData(NotesDataFromFile) which will override AddNewNote.


    // function Add(entity) {
    //     setData((existingData) => {
    //         return [...existingData, entity];
    //     });
    // }

    function Add(newObject) {
        async function addData() {
          await new Promise((resolve) => setTimeout(resolve, delayTimeoutInMilliSeconds)); // to simulate time delay while adding the data to the data source.
          setData((existingData) => {
            return [...existingData, newObject];
          });
        }
        addData();
      }

    function Update(id, entityToUpdate) {
        setData(currentData => {
            const existingEntity = currentData.find(entity => entity.id === id);
            if(existingEntity){
                // given id of entity exists... lets update
                // loop through the properties of the entity that we want to update
                // update each property's value with the one given in the parameter 'entityToUpdate'
                for(const [key, val] of Object.entries(entityToUpdate)){
                    // [key, val] is the on we want to update 
                    // currentEntity is the entity in the data source.                    
                    existingEntity[key] = val === undefined ? existingEntity[key] : val; // update each property with new value in entityToUpdate object.
                }
                return currentData.map(entity => entity.id === id ? existingEntity : entity);
            }
        });

    }

    function Delete(id) {
        setData(data.filter(entity => entity.id !== id));
    }


    return { data, error, Add, Update, Delete };
}