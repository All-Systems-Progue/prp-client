import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { rem, Text } from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { useAppSelector } from "@redux/hooks";
import { selectReviewsForExport } from "@reviews/reviewSlice";
import { IconGripVertical } from "@tabler/icons-react";
import cx from "clsx";

import classes from "./DragAndDrop.module.css";

export const DragAndDrop = () => {
  const selectedReviews = useAppSelector(selectReviewsForExport);
  const [state, handlers] = useListState(selectedReviews);

  const items = state.map((review, index) => (
    <Draggable key={review._id} index={index} draggableId={review._id!}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </div>
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            {review._id}
          </div>
          <div>
            <Text fz="xl" fw={600}>
              {review.entityType}
            </Text>
            <Text fz="lg">{review.category}</Text>
            <Text c="dimmed" fz="sm">
              {review.subCategory}
            </Text>
            <Text c="dimmed" size="sm">
              {review.content}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => handlers.reorder({ from: source.index, to: destination?.index || 0 })}
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
