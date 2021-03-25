import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useFetch } from '../../hooks/useFetch';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  margin: "2rem",
  padding: grid,
  width: 250
});

const  MyEquipement = () => {
  const [myEquipement, setMyEquipement] = useState([]);
  const [allEquipement, setAllEquipement] = useState([]);
  const [state, setState] = useState([myEquipement, allEquipement]);
  

  const {get, patch, destroy, responseData:dataUserEquipement, error:errorUser} = useFetch(true);
  const {get:getall, responseData:dataAllEquipement, error:errorAll} = useFetch(true);

  useEffect(() => {
    if (myEquipement.length === 0) {
      get('/my_equipements')
    }
    if (allEquipement?.length !== dataAllEquipement?.length) {
      getall('/equipements')
    }
    const diffAddedEquipement = state[0].filter(item1 => 
      !myEquipement.some(item2 => (item2.id === item1.id)))
    if (diffAddedEquipement.length === 1) {
      console.log("add", diffAddedEquipement);
      patch(`/my_equipements/${diffAddedEquipement[0].id}`);
      diffAddedEquipement.pop()
    }
    const diffRemoveEquipement = state[1].filter(item1 => 
      !allEquipement.some(item2 => (item2.id === item1.id)))
    if (diffRemoveEquipement.length === 1) {
      console.log("remove",diffRemoveEquipement);
      destroy(`/my_equipements/${diffRemoveEquipement[0].id}`);
      diffRemoveEquipement.pop()
    }

   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(()=> {
    if (dataUserEquipement && !errorUser) {
      setMyEquipement(dataUserEquipement);
      setState([dataUserEquipement, allEquipement]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUserEquipement])

  useEffect(()=> {
    if (dataAllEquipement && !errorAll) {
      setAllEquipement(dataAllEquipement);
      setState([myEquipement, dataAllEquipement]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAllEquipement])

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

  return (
    <div>
      <div style={{ display: "flex"}}>
        <DragDropContext onDragEnd={onDragEnd}>
        <h2>Mon équipement</h2>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {el.map((item, index) => (
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
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around"
                            }}
                          >
                           <p> {item.name} {item.weight} </p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        <h2>Tout les équipement pour nos exercices</h2>
        </DragDropContext>
      </div>
    </div>
  );
}
export default MyEquipement;