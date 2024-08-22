export const useTodoListCardState = () => {
  const handleOnCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
  };
  return { handleOnCheck };
};
