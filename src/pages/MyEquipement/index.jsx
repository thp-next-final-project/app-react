import { useEffect, useReducer } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useFetch } from '../../hooks/useFetch';

const getItemStyle = (draggableStyle) => ({
  ...draggableStyle
});

const reducer = (previousState , payload) => {
  const { type, value } = payload;
  const result = [...previousState];
  switch (type) {
    case "add":
      result.splice(value.index, 0, value.data);
      return [...result]
    case "remove":
      return [...previousState.filter(val => val.id !== value.id)]
    case "fill":
      return [...value]
    case "reorder":
      const [ previousIndex, newIndex ] = value;
      const [removed] = result.splice(previousIndex, 1);
      result.splice(newIndex, 0, removed);
      return [...result]
    default:
      return previousState;
  }
}

const  MyEquipement = () => {
  
  const [myEquipement, setMyEquipement] = useReducer(reducer, [])  ;
  const [allEquipement, setAllEquipement] = useReducer(reducer, [])  ;

  const {get, patch, destroy, responseData:dataUserEquipement, error:errorUser} = useFetch(true);
  const {get:getall, responseData:dataAllEquipement, error:errorAll} = useFetch(true);

  useEffect(() => {
    get('/my_equipements') 
    getall('/equipements')  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=> {
    if (dataUserEquipement && !errorUser) {
      setMyEquipement({type: "fill", value: dataUserEquipement});
    }
  }, [dataUserEquipement, errorUser])

  useEffect(()=> {
    if (dataAllEquipement && !errorAll) {
      setAllEquipement({type: "fill", value: dataAllEquipement});
    }
  }, [dataAllEquipement, errorAll])


  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const { index:indexSource, droppableId:sourceId} = source;
    const { index:indexDestination, droppableId:destinationId} = destination;
  
    if (sourceId === destinationId) {
      if ( sourceId === "my-equipement") {
        setMyEquipement({type: "reorder", value: [indexSource, indexDestination]})  
      } else if ( sourceId === "all-equipement") {
        setAllEquipement({type: "reorder", value: [indexSource, indexDestination]})
      }
      return
    } 
    if (destinationId === "my-equipement") {
      const data = allEquipement[indexSource];
      setMyEquipement({type: "add", value: {index: indexDestination, data} });
      setAllEquipement({type: "remove", value: data });
      patch(`/my_equipements/${data.id}`)
    } else if (destinationId === "all-equipement") {
      const data = myEquipement[indexSource];
      setAllEquipement({type: "add", value: {index: indexDestination, data} });
      setMyEquipement({type: "remove", value: data });
      destroy(`/my_equipements/${data.id}`)
    }
  }

  return (
    <div>
      <div className="dnd-equipements">
        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <h2>Mon équipement</h2>
            <Droppable droppableId="my-equipement">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  className={`equipements-list ${snapshot.isDraggingOver? "on-drag" : ""}`}
                  {...provided.droppableProps}
                >
                  {myEquipement.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`equipement-item-container`}
                          style={getItemStyle(provided.draggableProps.style)}
                        >
                          <div className="equipement-item">
                            <p> {item.name} {item.weight === 0? "" : item.weight} </p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            </div>
            <div>
            <h2>Tout les équipement pour nos exercices</h2>
            <Droppable droppableId={"all-equipement"}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  className={`equipements-list ${snapshot.isDraggingOver? "on-drag" : ""}`}
                  {...provided.droppableProps}
                >
                  {allEquipement.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`equipement-item-container`}
                          style={getItemStyle(provided.draggableProps.style)}
                        >
                          <div className="equipement-item">
                           <p> {item.name} {item.weight === 0? "" : item.weight} </p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            </div>
        </DragDropContext>
      </div>
    </div>
  );
}
export default MyEquipement;