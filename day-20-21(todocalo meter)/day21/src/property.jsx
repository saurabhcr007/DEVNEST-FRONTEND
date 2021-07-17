import Box from "./App";

const List = (props) => {
    return (
      <div className="soochee">
        <div className="lists">
          {props.cards.map((items, index) => (
            <Box
              name={items.name}
              calo={items.val}
              i={index}
              del={props.del}
              key={index}
              change={props.change}
              edit={items.edit}
              update={props.update}
            />
          ))}
        </div>
      </div>
    );
  };

  export default List;